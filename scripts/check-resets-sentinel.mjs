// Fallback sentinel: cross-check the live AIHOT feed against codex-resets.com.
//
// Why: AIHOT is the primary sync source (scripts/sync-resets.mjs, hourly). If it
// silently stops updating, eggx would serve stale reset data with no visible
// failure. codex-resets.com watches the same author (@thsottiaux) with a free,
// key-less API whose only term is credit-with-a-link — so it works as an
// independent smoke detector. Run once per hour right after the sync+commit
// steps: when AIHOT lags the sentinel source by more than 48h (resets average
// 7 days apart; announce→eggx latency is ~1.25h, so 48h is far beyond normal
// jitter), this script exits non-zero and the workflow fails loudly — the
// data already fetched is committed by then, so nothing is lost.
//
// The sentinel must never block the pipeline over its own problems: network
// errors, 429/5xx, or malformed payloads are logged and skipped (exit 0).
// Only the specific condition "upstream sees newer signal than our feed"
// raises the alarm.
//
// Runbook if it fires (also printed in the alarm message):
//   1. curl -s https://aihot.news/api/v1/codex-resets | head — is checkedAt
//      still advancing? Has the site changed its schema/terms?
//   2. If AIHOT is dead or stale, switch the sync source to codex-resets.com:
//      map reset_type regular→reset / banked→card, announced_at→publishedAt
//      (Beijing time), no stage/scope/occurredOn (leave null). Credit the
//      source with a link per its terms (https://codex-resets.com/api/docs).
//   3. Watch data on codex-resets.com is an AI-classified forecast, not a
//      fact — eggx records announcements only; do not ingest `active_watch`.

import { readFile } from "node:fs/promises";

const STATUS_URL = "https://codex-resets.com/api/v1/status";
const CONTENT_FILE = new URL("../src/content/resets.ts", import.meta.url);
const ALARM_THRESHOLD_MS = 48 * 3_600_000;

/** Latest post time recorded by the live feed. resets.ts is machine-generated,
    so timestamps appear as "publishedAt"/"confirmedAt" string values; schedule
    and checkedAt fields are deliberately excluded (they can be future/newer
    than any real post and would mask a stale feed). */
export function latestIsoInModule(source) {
  const times = [...source.matchAll(/"(?:publishedAt|confirmedAt)": "([^"]+)"/g)]
    .map((m) => Date.parse(m[1]))
    .filter((ms) => !Number.isNaN(ms));
  if (times.length === 0) return null;
  return new Date(Math.max(...times)).toISOString();
}

/** Newest factual signal on codex-resets.com: the latest executed reset, or a
    scheduled (announced, awaiting execution) reset if that is newer. */
export function upstreamSignal(payload) {
  const data = payload?.data ?? {};
  const times = [data.latest_reset?.announced_at, data.scheduled_reset?.announced_at].filter(
    (t) => typeof t === "string" && !Number.isNaN(Date.parse(t)),
  );
  if (times.length === 0) return null;
  return times.sort().at(-1);
}

export function judge(eggxLatestIso, upstreamLatestIso, thresholdMs = ALARM_THRESHOLD_MS) {
  if (!upstreamLatestIso) return { level: "ok", reason: "upstream has no reset signal", lagMs: null };
  if (!eggxLatestIso) return { level: "skip", reason: "no post timestamps found in resets.ts", lagMs: null };
  const lagMs = Date.parse(upstreamLatestIso) - Date.parse(eggxLatestIso);
  if (Number.isNaN(lagMs)) return { level: "skip", reason: "unparseable timestamp", lagMs: null };
  if (lagMs > thresholdMs) return { level: "alarm", lagMs };
  return { level: "ok", lagMs };
}

async function main() {
  const source = await readFile(CONTENT_FILE, "utf8");
  const eggxLatest = latestIsoInModule(source);

  let response;
  try {
    response = await fetch(STATUS_URL, {
      headers: {
        "user-agent": "eggx-sentinel/1.0 (+https://eggx.wehuman.top; hourly cross-check)",
      },
      signal: AbortSignal.timeout(20_000),
    });
  } catch (err) {
    console.log(`Sentinel skipped: codex-resets.com unreachable (${err.cause?.code ?? err.message}).`);
    return;
  }
  if (response.status === 429) {
    console.log(`Sentinel skipped: rate limited (Retry-After ${response.headers.get("retry-after") ?? "?"}).`);
    return;
  }
  if (!response.ok) {
    console.log(`Sentinel skipped: codex-resets.com returned HTTP ${response.status}.`);
    return;
  }
  let payload;
  try {
    payload = await response.json();
  } catch {
    console.log("Sentinel skipped: non-JSON response.");
    return;
  }

  const upstreamLatest = upstreamSignal(payload);
  const verdict = judge(eggxLatest, upstreamLatest);
  const fmtLag = verdict.lagMs === null ? "n/a" : `${Math.round(verdict.lagMs / 3_600_000)}h`;

  if (verdict.level === "alarm") {
    console.error(
      `AIHOT 可能已停更：codex-resets.com 的最新信号（${upstreamLatest}）比 eggx 记录（${eggxLatest}）新出 ${fmtLag}（阈值 48h）。`,
    );
    console.error("排查与切换手册见 scripts/check-resets-sentinel.mjs 文件头注释。");
    process.exitCode = 1;
    return;
  }
  console.log(
    `Sentinel ${verdict.level}: eggx latest ${eggxLatest ?? "?"}, codex-resets.com latest ${upstreamLatest ?? "none"} (lag ${fmtLag}${verdict.reason ? `; ${verdict.reason}` : ""}).`,
  );
}

main();
