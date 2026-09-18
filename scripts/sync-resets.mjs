// Sync Codex reset events from AIHOT's public API into src/content/resets.ts.
//
// Contract with the upstream (aihot.news 公开使用规则): anonymous GET, conditional
// request when we hold an ETag, no retry on 429 — exit non-zero and let the caller
// (CI schedule or a human) come back later. AIHOT rescans every 15 minutes and
// caches for 60 seconds, so any cadence at or above that is polite; this script
// runs once per invocation and never polls.
//
// Rights: facts (times, status, post links) come from public posts; `zh` quotes
// are AIHOT's AI translations (© AIHOT, used non-commercially with attribution);
// `en` quotes are Tibo's original posts. The generated file says this in its header.

import { readFile, writeFile } from "node:fs/promises";

const API_URL = "https://aihot.news/api/v1/codex-resets";
const SOURCE_URL = "https://aihot.news/codex-reset";
const CURATOR = "AIHOT";
const CONTENT_FILE = new URL("../src/content/resets.ts", import.meta.url);
const STATE_FILE = new URL("../.resets-sync.json", import.meta.url);
const POST_URL_PATTERN = /^https:\/\/x\.com\/thsottiaux\/status\/\d+$/;

// AIHOT field values → eggx schema. Unknown values must fail loudly, never guess.
const TYPE_MAP = { direct_reset: "reset", reset_credit: "card" };
const STAGE_MAP = { "预告": "announce", "发卡预告": "announce", "确认完成": "confirm", "确认发卡": "confirm" };

const HEADER = `// Codex 重置记录（Tibo @thsottiaux 公布的全员重置与重置卡发放）。
// 本文件由 scripts/sync-resets.mjs 自动生成，请勿手改。数据来自 AIHOT 公开接口
// https://aihot.news/api/v1/codex-resets （上游每 15 分钟核验一次 Tibo 的公开帖）。
// 时间、状态、推文链接为事实；zh 引文是 AIHOT 的 AI 翻译，译文著作权归 AIHOT，
// 依其公开使用规则（非商业、署名、允许同步）收录；en 为 Tibo 原文，版权归原发帖人。
// confirmedAt 是确认帖时间而非精确执行时间；occurredOn 是单独核实过的日期；时间均为北京时间 UTC+8。
`;

function requireString(value, label) {
  if (typeof value !== "string" || value.length === 0) {
    throw new Error(`AIHOT payload: ${label} must be a non-empty string`);
  }
  return value;
}

export function mapAihotPost(post) {
  const stage = STAGE_MAP[post?.stage];
  if (!stage) {
    throw new Error(`AIHOT payload: unknown post stage ${JSON.stringify(post?.stage)} (post ${post?.id})`);
  }
  return {
    stage,
    publishedAt: requireString(post.publishedAt, "post.publishedAt"),
    url: requireString(post.url, "post.url"),
    zh: requireString(post.text, "post.text"),
    en: requireString(post.originalText, "post.originalText"),
  };
}

export function mapAihotEvent(event) {
  if (!event || typeof event !== "object") {
    throw new Error("AIHOT payload: event must be an object");
  }
  const type = TYPE_MAP[event.type];
  if (!type) {
    throw new Error(`AIHOT payload: unknown event type ${JSON.stringify(event.type)} (${event.id})`);
  }
  if (!Array.isArray(event.posts) || event.posts.length === 0) {
    throw new Error(`AIHOT payload: event ${event.id} has no posts`);
  }
  const posts = event.posts.map(mapAihotPost).sort(
    (a, b) => a.publishedAt.localeCompare(b.publishedAt) || a.url.localeCompare(b.url),
  );
  for (const post of posts) {
    if (!POST_URL_PATTERN.test(post.url)) {
      throw new Error(`AIHOT payload: unexpected post url ${post.url} (${event.id})`);
    }
  }
  return {
    id: requireString(event.id, "event.id"),
    type,
    status: event.status,
    scope: typeof event.scope === "string" && event.scope.length > 0 ? event.scope : null,
    confirmedAt: event.confirmedAt ?? null,
    occurredOn: event.occurredOn ?? null,
    scheduleFrom: event.schedule?.from ?? null,
    scheduleThrough: event.schedule?.through ?? null,
    posts,
  };
}

function eventTime(event) {
  return event.confirmedAt ?? event.posts[event.posts.length - 1].publishedAt;
}

export function buildSnapshot(payload) {
  return {
    checkedAt: requireString(payload.checkedAt, "payload.checkedAt"),
    historyFrom: requireString(payload.historyFrom, "payload.historyFrom"),
    source: SOURCE_URL,
    curator: CURATOR,
  };
}

export function buildEvents(payload) {
  if (!Array.isArray(payload.events) || payload.events.length === 0) {
    throw new Error("AIHOT payload: events must be a non-empty array");
  }
  return payload.events
    .map(mapAihotEvent)
    .sort((a, b) => eventTime(b).localeCompare(eventTime(a)));
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
    // First run (or CI): no cached ETag, do a plain GET.
  }
  const headers = {
    "user-agent": "eggx-sync/1.0 (+https://eggx.wehuman.top; non-commercial sync from AIHOT)",
  };
  if (state.etag) headers["if-none-match"] = state.etag;

  const response = await fetch(API_URL, { headers });
  if (response.status === 304) {
    console.log(`AIHOT unchanged since last sync (checkedAt ${state.checkedAt}).`);
    return;
  }
  if (response.status === 429) {
    const retryAfter = response.headers.get("retry-after") ?? "unknown";
    console.error(`AIHOT rate limited (Retry-After: ${retryAfter}). Run again later.`);
    process.exitCode = 1;
    return;
  }
  if (!response.ok) {
    console.error(`AIHOT returned HTTP ${response.status}.`);
    process.exitCode = 1;
    return;
  }

  const payload = await response.json();
  const snapshot = buildSnapshot(payload);
  const events = buildEvents(payload);
  const rendered = renderModule(snapshot, events);

  const current = await readFile(CONTENT_FILE, "utf8").catch(() => "");
  if (rendered === current) {
    console.log(`No content change (${events.length} events, checkedAt ${snapshot.checkedAt}).`);
  } else {
    await writeFile(CONTENT_FILE, rendered);
    console.log(`Wrote src/content/resets.ts: ${events.length} events, checkedAt ${snapshot.checkedAt}.`);
  }

  await writeFile(
    STATE_FILE,
    `${JSON.stringify({ etag: response.headers.get("etag"), checkedAt: snapshot.checkedAt }, null, 2)}\n`,
  );
}

main();
