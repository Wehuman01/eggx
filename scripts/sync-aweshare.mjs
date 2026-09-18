// Sync the aweshare hub's public catalog (GET /v1/catalog) into src/content/aweshare.ts.
//
// Auth: a read-only consumer token (identity "eggx"). Catalog reads consume no model
// quota — only inference does. The token comes from AWESHARE_CONSUMER_TOKEN (CI secret);
// locally it is read from .env.aweshare (git-ignored). One request per invocation, no
// polling; the hourly schedule is the rate.
//
// Multi-protocol: the hub registers one catalog row per wire protocol, so the same
// alias appears once per protocol it speaks. We merge rows by alias — protocols become
// a list, status is the shared value (disagreeing wires report "degraded" = partially
// usable), the fresnest hubCheckAt wins, caps take the conservative side.
//
// Privacy line: only the fields below land in the repo. Upstream model identity
// (observedModel) and live occupancy (activeUsers/activeRequests) stay hub-side.
// Fail loudly on unknown enum values — never guess a mapping.

import { readFile, writeFile } from "node:fs/promises";

const DEFAULT_HUB = "https://aweshare.wehuman.top";
const ENV_FILE = new URL("../.env.aweshare", import.meta.url);
const CONTENT_FILE = new URL("../src/content/aweshare.ts", import.meta.url);

const STATUSES = new Set(["online", "degraded", "offline", "blocked"]);
const PROTOCOLS = new Set(["openai", "responses", "anthropic"]);
const PROTOCOL_LABELS = { openai: "openai-chat", responses: "openai-responses", anthropic: "anthropic" };
// Canonical display order for the merged protocol list.
const LABEL_ORDER = ["anthropic", "openai-chat", "openai-responses"];
const ALIAS_PATTERN = /^[a-z0-9][a-z0-9-]*\/[a-z0-9][a-z0-9._-]*$/;
const STATUS_RANK = { online: 0, degraded: 1, offline: 2, blocked: 3 };

const HEADER = `// aweshare hub 共享模型目录快照（哪些模型现在可用）。
// 本文件由 scripts/sync-aweshare.mjs 自动生成，请勿手改。数据读取自 hub 的
// GET /v1/catalog（只读 consumer token，读取不消耗模型额度），每小时同步一次。
// hub 按线协议逐行登记同一 alias，此处已按 alias 合并（protocols 为该模型支持的协议列表）。
// 只收录公开字段：别名、协议、状态、最近在线、每日额度与并发上限；
// 上游模型来源与实时占用不进仓库。状态与余量是快照时刻的事实，不代表承诺。
`;

function requireString(value, label) {
  if (typeof value !== "string" || value.length === 0) {
    throw new Error(`aweshare catalog: ${label} must be a non-empty string`);
  }
  return value;
}

function requireCount(value, label) {
  if (typeof value !== "number" || !Number.isFinite(value) || value < 0) {
    throw new Error(`aweshare catalog: ${label} must be a non-negative number`);
  }
  return Math.floor(value);
}

/** One catalog row (single protocol) with its raw shape checked. */
export function mapOfferingRow(row) {
  if (!row || typeof row !== "object") {
    throw new Error("aweshare catalog: offering must be an object");
  }
  const alias = requireString(row.alias, "alias");
  if (!ALIAS_PATTERN.test(alias)) {
    throw new Error(`aweshare catalog: malformed alias ${alias}`);
  }
  const producer = requireString(row.producer, "producer");
  if (alias.split("/")[0] !== producer) {
    throw new Error(`aweshare catalog: alias namespace does not match producer (${alias})`);
  }
  if (!PROTOCOLS.has(row.protocol)) {
    throw new Error(`aweshare catalog: unknown protocol ${JSON.stringify(row.protocol)} (${alias})`);
  }
  if (!STATUSES.has(row.status)) {
    throw new Error(`aweshare catalog: unknown status ${JSON.stringify(row.status)} (${alias})`);
  }
  const shareState = row.shareState ?? null;
  if (shareState !== null && shareState !== "open" && shareState !== "closed") {
    throw new Error(`aweshare catalog: invalid shareState ${JSON.stringify(shareState)} (${alias})`);
  }
  return {
    producer,
    alias,
    protocol: row.protocol,
    protocolLabel: requireString(row.protocolLabel, "protocolLabel"),
    status: row.status,
    hubCheckAt: typeof row.hubCheckAt === "string" && row.hubCheckAt.length > 0 ? row.hubCheckAt : null,
    degradedSince:
      typeof row.degradedSince === "string" && row.degradedSince.length > 0 ? row.degradedSince : null,
    maxConcurrencyPerUser: requireCount(row.maxConcurrencyPerUser, "maxConcurrencyPerUser"),
    maxConcurrentUsers: requireCount(row.maxConcurrentUsers, "maxConcurrentUsers"),
    dailyTokens: requireCount(row.dailyTokens, "dailyTokens"),
    usedDailyTokens: requireCount(row.usedDailyTokens, "usedDailyTokens"),
    shareState,
  };
}

function labelsSorted(labels) {
  return [...labels].sort((a, b) => LABEL_ORDER.indexOf(a) - LABEL_ORDER.indexOf(b));
}

/** Merge the per-protocol rows of one alias into a single offering. */
export function mergeRows(rows) {
  const statuses = new Set(rows.map((r) => r.status));
  // Wires disagreeing means partially usable — exactly what "degraded" claims.
  const status = statuses.size === 1 ? rows[0].status : "degraded";
  const hubCheckAts = rows.map((r) => r.hubCheckAt).filter((t) => t !== null);
  const degradedSince = rows.map((r) => r.degradedSince).filter((t) => t !== null);
  const shareStates = new Set(rows.map((r) => r.shareState));
  return {
    producer: rows[0].producer,
    alias: rows[0].alias,
    protocols: labelsSorted(new Set(rows.map((r) => r.protocolLabel))),
    status,
    hubCheckAt: hubCheckAts.length > 0 ? hubCheckAts.sort().at(-1) : null,
    degradedSince: degradedSince.length > 0 ? degradedSince.sort()[0] : null,
    // Caps are declared per registration; when wires disagree, publish the
    // conservative side so the page never promises more than any wire allows.
    maxConcurrencyPerUser: Math.min(...rows.map((r) => r.maxConcurrencyPerUser)),
    maxConcurrentUsers: Math.min(...rows.map((r) => r.maxConcurrentUsers)),
    dailyTokens: Math.min(...rows.map((r) => r.dailyTokens)),
    usedDailyTokens: Math.max(...rows.map((r) => r.usedDailyTokens)),
    shareState: shareStates.has("closed") ? "closed" : shareStates.has("open") ? "open" : null,
  };
}

export function buildCatalog(payload) {
  if (!payload || payload.object !== "catalog" || !Array.isArray(payload.offerings)) {
    throw new Error("aweshare catalog: unexpected payload shape (expected { object: 'catalog', offerings: [...] })");
  }
  if (payload.offerings.length === 0) {
    throw new Error("aweshare catalog: offerings is empty");
  }
  const rowsByAlias = new Map();
  for (const row of payload.offerings.map(mapOfferingRow)) {
    const rows = rowsByAlias.get(row.alias) ?? [];
    rows.push(row);
    rowsByAlias.set(row.alias, rows);
  }
  const offerings = [...rowsByAlias.values()].map(mergeRows);
  // Producers alphabetical; within a producer healthiest first, alias as tiebreaker —
  // deterministic output keeps the hourly diff readable.
  offerings.sort(
    (a, b) =>
      a.producer.localeCompare(b.producer) ||
      STATUS_RANK[a.status] - STATUS_RANK[b.status] ||
      a.alias.localeCompare(b.alias),
  );
  return offerings;
}

export function renderModule(hubUrl, checkedAt, offerings) {
  const snapshot = { hubUrl, checkedAt, count: offerings.length };
  return `${HEADER}
import { validateAweshareCatalog, type AweshareSnapshot } from "../lib/aweshare";

export const aweshareSnapshot: AweshareSnapshot = ${JSON.stringify(snapshot, null, 2)};

export const aweshareOfferings = validateAweshareCatalog(
${JSON.stringify(offerings, null, 2)}
);
`;
}

/** Local DX: fall back to .env.aweshare (git-ignored) when the env var is absent. */
async function resolveToken() {
  if (process.env.AWESHARE_CONSUMER_TOKEN) return process.env.AWESHARE_CONSUMER_TOKEN;
  try {
    const text = await readFile(ENV_FILE, "utf8");
    const match = text.match(/^AWESHARE_CONSUMER_TOKEN=(\S+)\s*$/m);
    if (match) return match[1];
  } catch {
    // No .env.aweshare — fall through to the error below.
  }
  throw new Error(
    "AWESHARE_CONSUMER_TOKEN is not set (env var, or AWESHARE_CONSUMER_TOKEN= in .env.aweshare; CI uses the repository secret).",
  );
}

async function main() {
  const hubUrl = process.env.AWESHARE_HUB_URL ?? DEFAULT_HUB;
  const token = await resolveToken();

  const response = await fetch(`${hubUrl}/v1/catalog`, {
    headers: {
      authorization: `Bearer ${token}`,
      "user-agent": "eggx-sync/1.0 (+https://eggx.wehuman.top; hourly catalog snapshot)",
    },
  });
  if (response.status === 401 || response.status === 403) {
    console.error(`aweshare hub rejected the token (HTTP ${response.status}). Check/rotate AWESHARE_CONSUMER_TOKEN.`);
    process.exitCode = 1;
    return;
  }
  if (response.status === 429) {
    const retryAfter = response.headers.get("retry-after") ?? "unknown";
    console.error(`aweshare hub rate limited (Retry-After: ${retryAfter}). Run again later.`);
    process.exitCode = 1;
    return;
  }
  if (!response.ok) {
    console.error(`aweshare hub returned HTTP ${response.status}.`);
    process.exitCode = 1;
    return;
  }

  const offerings = buildCatalog(await response.json());
  const checkedAt = new Date().toISOString();
  const rendered = renderModule(hubUrl, checkedAt, offerings);

  const current = await readFile(CONTENT_FILE, "utf8").catch(() => "");
  if (rendered === current) {
    console.log(`No content change (${offerings.length} offerings, checkedAt ${checkedAt}).`);
  } else {
    await writeFile(CONTENT_FILE, rendered);
    console.log(`Wrote src/content/aweshare.ts: ${offerings.length} offerings, checkedAt ${checkedAt}.`);
  }
}

main();
