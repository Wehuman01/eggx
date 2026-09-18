// aweshare hub 目录快照：共享模型当前可用性的公开字段子集。
// 完整 catalog（含上游模型来源、实时占用）只对已接入的 consumer 开放；
// 这里存放并可再分发的字段由 scripts/sync-aweshare.mjs 决定，隐私线见页面口径。
// 同一 alias 可说多种线协议，快照按 alias 合并（协议聚合为列表）。

export type AweshareStatus = "online" | "degraded" | "offline" | "blocked";
/** Wire-protocol display labels, in canonical order. */
export type AweshareProtocolLabel = "anthropic" | "openai-chat" | "openai-responses";

export interface AweshareOffering {
  producer: string;
  /** Globally unique `namespace/name`; the namespace equals the producer name. */
  alias: string;
  /** Wire protocols the alias speaks, canonical order. */
  protocols: AweshareProtocolLabel[];
  status: AweshareStatus;
  /** Last hub-side success (real traffic or recovery probe), ISO; null = never seen. */
  hubCheckAt: string | null;
  /** Start of the current degraded streak, ISO; null unless degraded. */
  degradedSince: string | null;
  /** Concurrent requests per consumer. */
  maxConcurrencyPerUser: number;
  /** Distinct concurrent consumers the offering admits. */
  maxConcurrentUsers: number;
  /** Shared daily token budget; 0 = unlimited. */
  dailyTokens: number;
  /** Tokens spent in the current daily window (0 when unlimited). */
  usedDailyTokens: number;
  /** Share-window state, null when the offering is shared around the clock. */
  shareState: "open" | "closed" | null;
}

export interface AweshareSnapshot {
  /** Hub the catalog was read from. */
  hubUrl: string;
  /** Sync run time — the catalog response itself carries no timestamp. */
  checkedAt: string;
  count: number;
}

const STATUSES: readonly AweshareStatus[] = ["online", "degraded", "offline", "blocked"];
const PROTOCOL_LABELS: readonly AweshareProtocolLabel[] = [
  "anthropic",
  "openai-chat",
  "openai-responses",
];

function requireNonEmptyString(value: unknown, field: string): string {
  if (typeof value !== "string" || value.length === 0) {
    throw new Error(`aweshare catalog: ${field} must be a non-empty string`);
  }
  return value;
}

function requireCount(value: unknown, field: string): number {
  if (typeof value !== "number" || !Number.isFinite(value) || value < 0) {
    throw new Error(`aweshare catalog: ${field} must be a non-negative number`);
  }
  return value;
}

export function validateAweshareOffering(o: unknown): AweshareOffering {
  if (!o || typeof o !== "object") {
    throw new Error("aweshare catalog: offering must be an object");
  }
  const obj = o as Record<string, unknown>;
  const alias = requireNonEmptyString(obj.alias, "alias");
  if (!/^[a-z0-9][a-z0-9-]*\/[a-z0-9][a-z0-9._-]*$/.test(alias)) {
    throw new Error(`aweshare catalog: malformed alias ${alias}`);
  }
  const producer = requireNonEmptyString(obj.producer, "producer");
  if (alias.split("/")[0] !== producer) {
    throw new Error(`aweshare catalog: alias namespace does not match producer (${alias})`);
  }
  if (!STATUSES.includes(obj.status as AweshareStatus)) {
    throw new Error(`aweshare catalog: unknown status ${JSON.stringify(obj.status)} (${alias})`);
  }
  if (!Array.isArray(obj.protocols) || obj.protocols.length === 0) {
    throw new Error(`aweshare catalog: protocols must be a non-empty array (${alias})`);
  }
  const protocols = obj.protocols.map((p) => {
    if (!PROTOCOL_LABELS.includes(p as AweshareProtocolLabel)) {
      throw new Error(`aweshare catalog: unknown protocol label ${JSON.stringify(p)} (${alias})`);
    }
    return p as AweshareProtocolLabel;
  });
  if (new Set(protocols).size !== protocols.length) {
    throw new Error(`aweshare catalog: duplicate protocol in ${alias}`);
  }
  if (
    obj.shareState !== null &&
    obj.shareState !== undefined &&
    obj.shareState !== "open" &&
    obj.shareState !== "closed"
  ) {
    throw new Error(`aweshare catalog: invalid shareState ${JSON.stringify(obj.shareState)} (${alias})`);
  }
  return {
    producer,
    alias,
    protocols,
    status: obj.status as AweshareStatus,
    hubCheckAt: typeof obj.hubCheckAt === "string" && obj.hubCheckAt.length > 0 ? obj.hubCheckAt : null,
    degradedSince:
      typeof obj.degradedSince === "string" && obj.degradedSince.length > 0 ? obj.degradedSince : null,
    maxConcurrencyPerUser: Math.floor(requireCount(obj.maxConcurrencyPerUser, "maxConcurrencyPerUser")),
    maxConcurrentUsers: Math.floor(requireCount(obj.maxConcurrentUsers, "maxConcurrentUsers")),
    dailyTokens: Math.floor(requireCount(obj.dailyTokens, "dailyTokens")),
    usedDailyTokens: Math.floor(requireCount(obj.usedDailyTokens, "usedDailyTokens")),
    shareState: (obj.shareState ?? null) as AweshareOffering["shareState"],
  };
}

export function validateAweshareCatalog(offerings: unknown): AweshareOffering[] {
  if (!Array.isArray(offerings) || offerings.length === 0) {
    throw new Error("aweshare catalog: offerings must be a non-empty array");
  }
  const seen = new Set<string>();
  return offerings.map((o) => {
    const offering = validateAweshareOffering(o);
    if (seen.has(offering.alias)) {
      throw new Error(`aweshare catalog: duplicate alias ${offering.alias}`);
    }
    seen.add(offering.alias);
    return offering;
  });
}

/** Display order: healthiest first, alias as tiebreaker. */
const STATUS_RANK: Record<AweshareStatus, number> = {
  online: 0,
  degraded: 1,
  offline: 2,
  blocked: 3,
};

export interface ProducerGroup {
  producer: string;
  offerings: AweshareOffering[];
}

/** Group by producer (producers alphabetical), offerings healthiest-first. */
export function groupByProducer(offerings: readonly AweshareOffering[]): ProducerGroup[] {
  const groups = new Map<string, AweshareOffering[]>();
  for (const o of offerings) {
    const list = groups.get(o.producer) ?? [];
    list.push(o);
    groups.set(o.producer, list);
  }
  return [...groups.entries()]
    .sort((a, b) => a[0].localeCompare(b[0]))
    .map(([producer, list]) => ({
      producer,
      offerings: list.sort(
        (a, b) => STATUS_RANK[a.status] - STATUS_RANK[b.status] || a.alias.localeCompare(b.alias),
      ),
    }));
}

/** Remaining daily budget; null when unlimited. */
export function remainingTokens(o: AweshareOffering): number | null {
  if (o.dailyTokens === 0) return null;
  return Math.max(0, o.dailyTokens - o.usedDailyTokens);
}

export interface StatusCounts {
  total: number;
  online: number;
  degraded: number;
  down: number;
}

export function countByStatus(offerings: readonly AweshareOffering[]): StatusCounts {
  const counts: StatusCounts = { total: offerings.length, online: 0, degraded: 0, down: 0 };
  for (const o of offerings) {
    if (o.status === "online") counts.online += 1;
    else if (o.status === "degraded") counts.degraded += 1;
    else counts.down += 1;
  }
  return counts;
}
