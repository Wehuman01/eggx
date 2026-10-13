// Sync Codex reset events from codex-resets.com's public API into src/content/resets.ts,
// plus the confirmed-cycle list src/content/resets-cycles.json that scripts/sync-impatient.mjs
// freezes "等不及了" round counts from — so that script needs no network of its own.
//
// Why this source became primary: AIHOT's own checkedAt stopped advancing on
// 2026-10-11 06:10 and never recovered, and eggx's hourly sync of it kept getting
// burst-limited (two anonymous GETs per run — sync-resets + sync-impatient —
// tripped its 600s Retry-After ban, which then killed the commit step for the
// whole pipeline). codex-resets.com is key-less, serves a CDN cache
// (Cache-Control: s-maxage=300, max-age=14400) with an ETag, and published no
// numeric quota; hourly conditional polling sits well inside its caching guidance.
// Its terms (https://codex-resets.com/api/docs) are free use with a link-back,
// which the page and the JSON API both carry.
//
// Status semantics — the honest mapping. The API has no per-entry status field.
// It keeps pending announcements in status.scheduled_reset ("awaiting execution
// evidence") separate from the /resets list, so a /resets entry is read as the
// tracker's closed record of a reset that happened → status "confirmed" (its id
// can even be an observed-… id when no announcement post exists). A
// scheduled_reset maps to status "announced" and drops out of the feed once the
// tracker closes it, which flips the same event to confirmed on a later run.
// Times are the post's own time, not the exact execution time — the same caveat
// the AIHOT era carried.

import { readFile, writeFile } from "node:fs/promises";
import { pathToFileURL } from "node:url";

const RESETS_URL = "https://codex-resets.com/api/v1/resets?limit=100";
const STATUS_URL = "https://codex-resets.com/api/v1/status";
const SOURCE_URL = "https://codex-resets.com";
const CURATOR = "codex-resets.com";
const CONTENT_FILE = new URL("../src/content/resets.ts", import.meta.url);
const CYCLES_FILE = new URL("../src/content/resets-cycles.json", import.meta.url);
const STATE_FILE = new URL("../.codex-resets-sync.json", import.meta.url);
const USER_AGENT =
  "eggx-sync/1.0 (+https://eggx.wehuman.top; non-commercial sync from codex-resets.com)";
const POST_URL_PATTERN = /^https:\/\/x\.com\/thsottiaux\/status\/\d+$/;

// Frozen history (resets-backfill.ts + resets-aihot-era.ts) already covers every
// entry announced up to this instant — the newest post in the frozen segments is
// tweet 2109132167112782291 at 2026-10-11T04:01:09Z. Only strictly newer entries
// enter the live segment, so a reset never shows up twice on the page. Bump this
// when a new freeze happens; tests guard the boundary by post URL.
const FROZEN_THROUGH = "2026-10-11T04:01:09.000Z";

// codex-resets.com reset_type → eggx schema. Unknown values must fail loudly, never guess.
const TYPE_MAP = { regular: "reset", banked: "card" };

const HEADER = `// Codex 重置记录 · 实时段（由 scripts/sync-codex-resets.mjs 每小时自动生成，请勿手改）。
// 数据来自 codex-resets.com 公开 API（https://codex-resets.com/api/v1/resets，
// 依其条款免费使用、展示处署名链接，见 https://codex-resets.com/api/docs）。
// 本段只收录 ${FROZEN_THROUGH} 之后的新事件；更早的历史冻结在 resets-backfill.ts
// （2026-06 前，eggx 自译）与 resets-aihot-era.ts（2026-06-12 起，AIHOT 时代段）。
// 口径：/resets 条目为该信源已了结的重置记录 → status=confirmed；scheduled_reset
// 为其待执行公告 → status=announced（信源了结后同一事件在后续同步转为 confirmed）。
// 时间取帖子发布时间，非精确执行时间。en 为 Tibo 原文（已去文末 t.co 短链；
// 上游可能截断长帖，完整内容见原推链接）；zh 留空，由 src/content/resets-all.ts
// 在构建时按帖子 ID 从 resets-zh.ts（AIHOT 的 AI 翻译，© AIHOT）富化，
// 缺失时页面回退显示 en。时间均为北京时间 UTC+8。
`;

function requireString(value, label) {
  if (typeof value !== "string" || value.length === 0) {
    throw new Error(`codex-resets payload: ${label} must be a non-empty string`);
  }
  return value;
}

/** UTC ISO instant → the repo's Beijing (+08:00) ISO shape. */
export function beijingIso(utcIso) {
  const ms = Date.parse(requireString(utcIso, "time"));
  if (Number.isNaN(ms)) {
    throw new Error(`codex-resets payload: unparseable time ${JSON.stringify(utcIso)}`);
  }
  return new Date(ms + 8 * 3_600_000).toISOString().replace("Z", "+08:00");
}

/** Beijing calendar date (YYYY-MM-DD) of a UTC instant — the impatient cycle key. */
export function beijingDate(utcIso) {
  return beijingIso(utcIso).slice(0, 10);
}

/** Drop trailing t.co short links so a quote never ends in a bare URL. */
export function stripTrailingLink(text) {
  return text.replace(/(?:\s*https?:\/\/t\.co\/\w+)+\s*$/, "").trimEnd();
}

/** One closed reset from /resets → a confirmed single-post event. */
export function mapReset(entry) {
  if (!entry || typeof entry !== "object") {
    throw new Error("codex-resets payload: reset entry must be an object");
  }
  const type = TYPE_MAP[entry.reset_type];
  if (!type) {
    throw new Error(
      `codex-resets payload: unknown reset_type ${JSON.stringify(entry.reset_type)} (${entry.id})`,
    );
  }
  const url = requireString(entry.source?.url, "source.url");
  if (!POST_URL_PATTERN.test(url)) {
    throw new Error(`codex-resets payload: unexpected source url ${url} (${entry.id})`);
  }
  const en = stripTrailingLink(requireString(entry.text, "text"));
  if (en.length === 0) {
    throw new Error(`codex-resets payload: empty text after link strip (${entry.id})`);
  }
  return {
    id: requireString(entry.id, "id"),
    type,
    status: "confirmed",
    scope: null,
    confirmedAt: null,
    occurredOn: null,
    scheduleFrom: null,
    scheduleThrough: null,
    posts: [{ stage: "confirm", publishedAt: beijingIso(entry.announced_at), url, zh: null, en }],
  };
}

/** The pending announcement from /status → an announced single-post event. */
export function mapScheduled(scheduled) {
  if (!scheduled || typeof scheduled !== "object") {
    throw new Error("codex-resets payload: scheduled_reset must be an object when present");
  }
  const type = TYPE_MAP[scheduled.reset_type];
  if (!type) {
    throw new Error(
      `codex-resets payload: unknown reset_type ${JSON.stringify(scheduled.reset_type)} (scheduled)`,
    );
  }
  const url = requireString(scheduled.source?.url, "scheduled source.url");
  if (!POST_URL_PATTERN.test(url)) {
    throw new Error(`codex-resets payload: unexpected scheduled source url ${url}`);
  }
  const en = stripTrailingLink(requireString(scheduled.text, "scheduled text"));
  if (en.length === 0) {
    throw new Error("codex-resets payload: empty scheduled text after link strip");
  }
  return {
    id: requireString(scheduled.id, "scheduled id"),
    type,
    status: "announced",
    scope: null,
    confirmedAt: null,
    occurredOn: null,
    scheduleFrom: null,
    scheduleThrough: null,
    posts: [{ stage: "announce", publishedAt: beijingIso(scheduled.announced_at), url, zh: null, en }],
  };
}

/** Live segment: closed resets newer than the frozen cutoff, newest first, plus
    the pending announcement unless the tracker already closed that same id. */
export function buildLiveEvents(resetsPayload, statusPayload) {
  if (!Array.isArray(resetsPayload?.data)) {
    throw new Error("codex-resets payload: data must be an array");
  }
  const cutoffMs = Date.parse(FROZEN_THROUGH);
  const events = resetsPayload.data
    .filter((entry) => {
      const ms = Date.parse(entry?.announced_at);
      if (Number.isNaN(ms)) {
        throw new Error(`codex-resets payload: unparseable announced_at on entry ${entry?.id}`);
      }
      return ms > cutoffMs;
    })
    .map(mapReset);
  const scheduled = statusPayload?.data?.scheduled_reset;
  if (scheduled && !events.some((event) => event.id === scheduled.id)) {
    events.push(mapScheduled(scheduled));
  }
  return events.sort((a, b) => b.posts[0].publishedAt.localeCompare(a.posts[0].publishedAt));
}

export function buildSnapshot(resetsPayload) {
  return {
    checkedAt: beijingIso(requireString(resetsPayload?.meta?.generated_at, "meta.generated_at")),
    historyFrom: beijingIso(FROZEN_THROUGH),
    source: SOURCE_URL,
    curator: CURATOR,
  };
}

/** Beijing dates of confirmed events, ascending — the accumulator the impatient
    script reads. Union with what the file already holds so frozen-era cycles
    survive even though this script never sees those events. */
export function mergeCycles(knownCycles, events) {
  const cycles = new Set(knownCycles);
  for (const event of events) {
    if (event.status === "confirmed") {
      cycles.add(event.posts[event.posts.length - 1].publishedAt.slice(0, 10));
    }
  }
  return [...cycles].sort();
}

export function renderModule(snapshot, events) {
  return `${HEADER}
import { validateResets, type ResetSnapshot } from "../lib/resets";

export const resetSnapshot: ResetSnapshot = ${JSON.stringify(snapshot, null, 2)};

export const resets = validateResets(
${JSON.stringify(events, null, 2)}
);
`;
}

async function main() {
  let state = {};
  try {
    state = JSON.parse(await readFile(STATE_FILE, "utf8"));
  } catch {
    // First run (or CI, where the state file is gitignored): no cached ETag.
  }
  const headers = { "user-agent": USER_AGENT };
  if (state.etag) headers["if-none-match"] = state.etag;
  const options = { headers, signal: AbortSignal.timeout(20_000) };

  const resetsResponse = await fetch(RESETS_URL, options);
  if (resetsResponse.status === 304) {
    console.log(`codex-resets.com unchanged since last sync (checkedAt ${state.checkedAt}).`);
    return;
  }
  if (resetsResponse.status === 429) {
    // No published quota and no burst ban observed, but stay polite: skip this
    // round rather than hammer. The freshness tripwire (48h on checkedAt) is the
    // alarm for a sync that keeps not happening — hourly red noise is what let
    // the old AIHOT pipeline die unnoticed for 33 runs.
    const retryAfter = resetsResponse.headers.get("retry-after") ?? "unknown";
    console.log(`codex-resets.com rate limited (Retry-After: ${retryAfter}); skipping this round.`);
    return;
  }
  if (!resetsResponse.ok) {
    console.error(`codex-resets.com returned HTTP ${resetsResponse.status}.`);
    process.exitCode = 1;
    return;
  }
  const resetsPayload = await resetsResponse.json();

  const statusResponse = await fetch(STATUS_URL, { headers: { "user-agent": USER_AGENT }, signal: AbortSignal.timeout(20_000) });
  if (!statusResponse.ok) {
    console.error(`codex-resets.com status returned HTTP ${statusResponse.status}.`);
    process.exitCode = 1;
    return;
  }
  const statusPayload = await statusResponse.json();

  const snapshot = buildSnapshot(resetsPayload);
  const events = buildLiveEvents(resetsPayload, statusPayload);
  const rendered = renderModule(snapshot, events);

  const current = await readFile(CONTENT_FILE, "utf8").catch(() => "");
  if (rendered === current) {
    console.log(`No content change (${events.length} live events, checkedAt ${snapshot.checkedAt}).`);
  } else {
    await writeFile(CONTENT_FILE, rendered);
    console.log(`Wrote src/content/resets.ts: ${events.length} live events, checkedAt ${snapshot.checkedAt}.`);
  }

  // The cycles accumulator is only ever grown: live confirmed dates join whatever
  // the file already holds (seeded with the frozen segments' dates).
  let knownCycles = [];
  try {
    knownCycles = JSON.parse(await readFile(CYCLES_FILE, "utf8")).cycles ?? [];
  } catch {
    // First run: the committed seed carries the frozen segments' cycles.
  }
  const cycles = mergeCycles(knownCycles, events);
  const cyclesRendered = `${JSON.stringify({ cycles }, null, 2)}\n`;
  const cyclesCurrent = await readFile(CYCLES_FILE, "utf8").catch(() => "");
  if (cyclesRendered !== cyclesCurrent) {
    await writeFile(CYCLES_FILE, cyclesRendered);
    console.log(`Wrote src/content/resets-cycles.json: ${cycles.length} known cycles.`);
  }

  await writeFile(
    STATE_FILE,
    `${JSON.stringify({ etag: resetsResponse.headers.get("etag"), checkedAt: snapshot.checkedAt }, null, 2)}\n`,
  );
}

// Only run the sync when executed directly — the module also gets imported for
// its pure helpers (tests, docs), and an import must never fire network requests.
if (import.meta.url === pathToFileURL(process.argv[1] ?? "").href) {
  main();
}
