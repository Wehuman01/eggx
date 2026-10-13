// Refresh Chinese quotes from AIHOT's public API into src/content/resets-zh.ts.
//
// Role since 2026-10-13: enrichment, not the primary feed. The primary source is
// scripts/sync-codex-resets.mjs (codex-resets.com), whose entries carry only
// Tibo's original English text. AIHOT's value is its AI translation of each post
// (zh) plus a properly classified event model — but it stopped advancing its own
// checkedAt on 2026-10-11 and used to burst-limit eggx's runner into 600s bans
// (two anonymous GETs per pipeline run), so it no longer gates the page.
//
// This script makes exactly one conditional GET per run and never retries on 429:
// a rate-limited or unchanged round simply leaves the translation table as it is,
// and the page falls back to English quotes for entries without a translation.
// Only a changed contract (schema drift, non-JSON, 5xx) fails loudly — that is a
// real bug worth a red workflow, unlike transient throttling.
//
// Rights: the zh quotes are AIHOT's AI translations (© AIHOT, used
// non-commercially with attribution per its public terms); the post ids and en
// texts are facts from public posts. The generated file says this in its header.

import { readFile, writeFile } from "node:fs/promises";
import { pathToFileURL } from "node:url";

const API_URL = "https://aihot.news/api/v1/codex-resets";
const SOURCE_URL = "https://aihot.news/codex-reset";
const CURATOR = "AIHOT";
const CONTENT_FILE = new URL("../src/content/resets-zh.ts", import.meta.url);
const STATE_FILE = new URL("../.resets-sync.json", import.meta.url);
const POST_URL_PATTERN = /^https:\/\/x\.com\/thsottiaux\/status\/\d+$/;

// AIHOT field values → eggx schema. Unknown values must fail loudly, never guess.
const TYPE_MAP = { direct_reset: "reset", reset_credit: "card" };
const STAGE_MAP = {
  "预告": "announce",
  "发卡预告": "announce",
  "确认完成": "confirm",
  "确认发卡": "confirm",
  // 事件定论后的补充澄清帖（如「商业版账户也包含」），不改事件状态。
  "补充说明": "note",
  // AIHOT 2026-10 起对进行中（未确认）事件的帖子统一标「进展」——包括发起
  // 公告本身。这些帖子都不构成确认（确认仍是 确认完成/确认发卡），阶段归属
  // 由事件级 status=announced 表达，故全部映射为 note。
  "进展": "note",
};

const HEADER = `// 中文引文富化表：AIHOT 的 AI 翻译（© AIHOT），按原推 ID 索引。
// 本文件由 scripts/sync-quotes.mjs 每小时刷新，请勿手改。数据来自 AIHOT 公开接口
// https://aihot.news/api/v1/codex-resets （上游每 15 分钟核验一次 Tibo 的公开帖；
// 其自 2026-10-11 06:10 起停更，故本表只可能滞后、不会凭空多出条目）。
// zh 译文著作权归 AIHOT，依其公开使用规则（非商业、署名、允许同步）收录；
// en 为 Tibo 原文，版权归原发帖人。事件结构（类型/阶段/状态）以主源
// scripts/sync-codex-resets.mjs 与冻结段为准，本表只提供中文引文。
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

/** Best display/sort time: confirmation when present, else the latest post.
    Same semantics as eventTime() in src/lib/resets.ts. */
export function eventTime(event) {
  return event.confirmedAt ?? event.posts[event.posts.length - 1].publishedAt;
}

export function buildEvents(payload) {
  if (!Array.isArray(payload.events) || payload.events.length === 0) {
    throw new Error("AIHOT payload: events must be a non-empty array");
  }
  return payload.events
    .map(mapAihotEvent)
    .sort((a, b) => eventTime(b).localeCompare(eventTime(a)));
}

/** Translation table: source post id → zh. Keyed by the tweet id in the post URL
    so the primary feed can look translations up without sharing a schema. */
export function buildZhMap(events) {
  const zh = {};
  for (const event of events) {
    for (const post of event.posts) {
      zh[post.url.split("/status/")[1]] = post.zh;
    }
  }
  return zh;
}

export function renderZhModule({ checkedAt, historyFrom, zh }) {
  return `${HEADER}
import type { ResetSnapshot } from "../lib/resets";

export const resetZhSnapshot: ResetSnapshot = {
  "checkedAt": ${JSON.stringify(checkedAt)},
  "historyFrom": ${JSON.stringify(historyFrom)},
  "source": ${JSON.stringify(SOURCE_URL)},
  "curator": ${JSON.stringify(CURATOR)}
};

export const resetZh: Record<string, string> = ${JSON.stringify(zh, null, 2)};
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
    "user-agent": "eggx-sync/1.0 (+https://eggx.wehuman.top; non-commercial quote sync from AIHOT)",
  };
  if (state.etag) headers["if-none-match"] = state.etag;

  const response = await fetch(API_URL, { headers, signal: AbortSignal.timeout(20_000) });
  if (response.status === 304) {
    console.log(`AIHOT unchanged since last quote sync (checkedAt ${state.checkedAt}).`);
    return;
  }
  if (response.status === 429) {
    // Transient throttling must not gate the page: leave the table as it is.
    // The page falls back to English quotes for entries without a translation.
    const retryAfter = response.headers.get("retry-after") ?? "unknown";
    console.log(`AIHOT rate limited (Retry-After: ${retryAfter}); translations left as they are.`);
    return;
  }
  if (!response.ok) {
    console.error(`AIHOT returned HTTP ${response.status}.`);
    process.exitCode = 1;
    return;
  }

  const payload = await response.json();
  const checkedAt = requireString(payload.checkedAt, "payload.checkedAt");
  const historyFrom = requireString(payload.historyFrom, "payload.historyFrom");
  const events = buildEvents(payload);
  const zhMap = buildZhMap(events);
  const rendered = renderZhModule({ checkedAt, historyFrom, zh: zhMap });

  const current = await readFile(CONTENT_FILE, "utf8").catch(() => "");
  if (rendered === current) {
    console.log(`No translation change (${Object.keys(zhMap).length} posts, checkedAt ${checkedAt}).`);
  } else {
    await writeFile(CONTENT_FILE, rendered);
    console.log(`Wrote src/content/resets-zh.ts: ${Object.keys(zhMap).length} posts, checkedAt ${checkedAt}.`);
  }

  await writeFile(
    STATE_FILE,
    `${JSON.stringify({ etag: response.headers.get("etag"), checkedAt }, null, 2)}\n`,
  );
}

// Only run the sync when executed directly — the module also gets imported
// for its pure helpers (tests), and an import must never fire network requests.
if (import.meta.url === pathToFileURL(process.argv[1] ?? "").href) {
  main();
}
