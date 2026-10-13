// Fallback sentinel: cross-check eggx's merged feed against AIHOT.
//
// Why: since 2026-10-13 the primary sync source is codex-resets.com
// (scripts/sync-codex-resets.mjs, hourly) and AIHOT only enriches Chinese quotes
// (scripts/sync-quotes.mjs). AIHOT remains an independent second tracker of the
// same author (@thsottiaux) with its own event model — it groups posts into
// events and catches card grants that a per-post tracker can miss — so it works
// as a coverage cross-check: when AIHOT sees newer signal than our merged feed by
// more than 48h (resets average ~7 days apart; both trackers index a new post
// within hours, so 48h is far beyond normal lag), this script exits non-zero and
// the workflow fails loudly. It runs after the commit steps, so the data already
// fetched is committed and nothing is lost.
//
// The sentinel must never block the pipeline over its own problems: network
// errors, 429/5xx, or malformed payloads are logged and skipped (exit 0).
// Only the specific condition "the second source sees newer signal than our
// feed" raises the alarm.
//
// Runbook if it fires (also printed in the alarm message):
//   1. Is the primary source itself healthy?
//      curl -s https://codex-resets.com/api/v1/status — generated_at should be now.
//   2. Does the Sync codex resets workflow run green? checkedAt in
//      src/content/resets.ts must advance every hour.
//   3. Primary healthy but AIHOT far ahead: an event the per-post tracker missed
//      (historically: 发卡 events). Add it by hand or extend the live cutoff
//      FROZEN_THROUGH in scripts/sync-codex-resets.mjs and re-sync.

import { readFile } from "node:fs/promises";

const API_URL = "https://aihot.news/api/v1/codex-resets";
const SEGMENT_FILES = [
  new URL("../src/content/resets.ts", import.meta.url),
  new URL("../src/content/resets-aihot-era.ts", import.meta.url),
  new URL("../src/content/resets-backfill.ts", import.meta.url),
];
const ALARM_THRESHOLD_MS = 48 * 3_600_000;

/** Latest post time recorded in a generated segment. The files are
    machine-generated, so timestamps appear as "publishedAt"/"confirmedAt" string
    values; schedule and checkedAt fields are deliberately excluded (they can be
    future/newer than any real post and would mask a stale feed). */
export function latestIsoInModule(source) {
  const times = [...source.matchAll(/"(?:publishedAt|confirmedAt)": "([^"]+)"/g)]
    .map((m) => Date.parse(m[1]))
    .filter((ms) => !Number.isNaN(ms));
  if (times.length === 0) return null;
  return new Date(Math.max(...times)).toISOString();
}

/** Newest factual signal on AIHOT: the latest post or confirmation time across
    all events of its payload. */
export function upstreamSignal(payload) {
  const times = [];
  for (const event of payload?.events ?? []) {
    if (typeof event?.confirmedAt === "string") times.push(event.confirmedAt);
    for (const post of event?.posts ?? []) {
      if (typeof post?.publishedAt === "string") times.push(post.publishedAt);
    }
  }
  const ms = times.map((t) => Date.parse(t)).filter((n) => !Number.isNaN(n));
  if (ms.length === 0) return null;
  return new Date(Math.max(...ms)).toISOString();
}

export function judge(eggxLatestIso, upstreamLatestIso, thresholdMs = ALARM_THRESHOLD_MS) {
  if (!upstreamLatestIso) return { level: "ok", reason: "upstream has no reset signal", lagMs: null };
  if (!eggxLatestIso) return { level: "skip", reason: "no post timestamps found in the feed", lagMs: null };
  const lagMs = Date.parse(upstreamLatestIso) - Date.parse(eggxLatestIso);
  if (Number.isNaN(lagMs)) return { level: "skip", reason: "unparseable timestamp", lagMs };
  if (lagMs > thresholdMs) return { level: "alarm", lagMs };
  return { level: "ok", lagMs };
}

async function main() {
  const eggxLatest = (
    await Promise.all(
      SEGMENT_FILES.map(async (file) => latestIsoInModule(await readFile(file, "utf8"))),
    )
  )
    .filter((iso) => iso !== null)
    .sort()
    .at(-1);

  let response;
  try {
    response = await fetch(API_URL, {
      headers: {
        "user-agent": "eggx-sentinel/1.0 (+https://eggx.wehuman.top; hourly cross-check)",
      },
      signal: AbortSignal.timeout(20_000),
    });
  } catch (err) {
    console.log(`Sentinel skipped: AIHOT unreachable (${err.cause?.code ?? err.message}).`);
    return;
  }
  if (response.status === 429) {
    console.log(`Sentinel skipped: rate limited (Retry-After ${response.headers.get("retry-after") ?? "?"}).`);
    return;
  }
  if (!response.ok) {
    console.log(`Sentinel skipped: AIHOT returned HTTP ${response.status}.`);
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
      `实时主源可能漏事件：AIHOT 的最新信号（${upstreamLatest}）比 eggx 记录（${eggxLatest}）新出 ${fmtLag}（阈值 48h）。`,
    );
    console.error("排查手册见 scripts/check-resets-sentinel.mjs 文件头注释。");
    process.exitCode = 1;
    return;
  }
  console.log(
    `Sentinel ${verdict.level}: eggx latest ${eggxLatest ?? "?"}, AIHOT latest ${upstreamLatest ?? "none"} (lag ${fmtLag}${verdict.reason ? `; ${verdict.reason}` : ""}).`,
  );
}

main();
