import type { Locale } from "./schema";

export type ResetType = "reset" | "card";
export type ResetStatus = "confirmed" | "announced";
export type ResetPostStage = "announce" | "confirm";

export interface ResetPost {
  stage: ResetPostStage;
  /** Post time, Beijing time (UTC+8) ISO string. */
  publishedAt: string;
  /** Link to the original @thsottiaux post on X. */
  url: string;
  /** Chinese rendering (AIHOT translation). */
  zh: string;
  /** Tibo's original English text. */
  en: string;
}

export interface ResetEvent {
  id: string;
  /** "reset" = 全员重置, "card" = 发重置卡. */
  type: ResetType;
  status: ResetStatus;
  /** Affected plan scope, when Tibo stated one. */
  scope?: string | null;
  /** Confirmation post time; not the exact execution time. */
  confirmedAt: string | null;
  /** Separately verified calendar date, when known. */
  occurredOn: string | null;
  /** Original announcement window (schedule), when given. */
  scheduleFrom: string | null;
  scheduleThrough: string | null;
  /** Posts sorted by publishedAt ascending. */
  posts: ResetPost[];
}

export interface ResetSnapshot {
  /** Last successful scan by the upstream curator. */
  checkedAt: string;
  /** Reset history is only tracked from this date onward. */
  historyFrom: string;
  source: string;
  curator: string;
}

const RESET_TYPES: readonly ResetType[] = ["reset", "card"];
const RESET_STATUSES: readonly ResetStatus[] = ["confirmed", "announced"];
const POST_STAGES: readonly ResetPostStage[] = ["announce", "confirm"];

export function validateResetEvent(e: unknown): ResetEvent {
  if (!e || typeof e !== "object") {
    throw new Error("ResetEvent must be an object");
  }
  const obj = e as Record<string, unknown>;
  if (typeof obj.id !== "string" || obj.id.length === 0) {
    throw new Error("ResetEvent.id must be a non-empty string");
  }
  if (!RESET_TYPES.includes(obj.type as ResetType)) {
    throw new Error(`Invalid reset type: ${obj.type}`);
  }
  if (!RESET_STATUSES.includes(obj.status as ResetStatus)) {
    throw new Error(`Invalid reset status: ${obj.status}`);
  }
  for (const field of ["confirmedAt", "occurredOn", "scheduleFrom", "scheduleThrough"] as const) {
    if (obj[field] !== null && typeof obj[field] !== "string") {
      throw new Error(`ResetEvent.${field} must be a string or null`);
    }
  }
  if (!Array.isArray(obj.posts) || obj.posts.length === 0) {
    throw new Error(`ResetEvent.posts must be a non-empty array (${obj.id})`);
  }
  const posts = obj.posts.map((p: unknown) => {
    if (!p || typeof p !== "object") {
      throw new Error("ResetPost must be an object");
    }
    const post = p as Record<string, unknown>;
    if (!POST_STAGES.includes(post.stage as ResetPostStage)) {
      throw new Error(`Invalid post stage: ${post.stage}`);
    }
    for (const field of ["publishedAt", "url", "zh", "en"] as const) {
      if (typeof post[field] !== "string" || (post[field] as string).length === 0) {
        throw new Error(`ResetPost.${field} must be a non-empty string (${obj.id})`);
      }
    }
    return {
      stage: post.stage as ResetPostStage,
      publishedAt: post.publishedAt as string,
      url: post.url as string,
      zh: post.zh as string,
      en: post.en as string,
    };
  });
  for (let i = 1; i < posts.length; i += 1) {
    if (posts[i - 1].publishedAt > posts[i].publishedAt) {
      throw new Error(`ResetEvent.posts must be sorted by publishedAt (${obj.id})`);
    }
  }
  return {
    id: obj.id,
    type: obj.type as ResetType,
    status: obj.status as ResetStatus,
    ...(obj.scope !== undefined && obj.scope !== null ? { scope: obj.scope as string } : { scope: null }),
    confirmedAt: (obj.confirmedAt as string | null) ?? null,
    occurredOn: (obj.occurredOn as string | null) ?? null,
    scheduleFrom: (obj.scheduleFrom as string | null) ?? null,
    scheduleThrough: (obj.scheduleThrough as string | null) ?? null,
    posts,
  };
}

export function validateResets(events: unknown[]): ResetEvent[] {
  if (!Array.isArray(events)) {
    throw new Error("Resets must be an array");
  }
  return events.map(validateResetEvent);
}

/** Best display/sort time: confirmation when present, else the latest post. */
export function eventTime(event: ResetEvent): string {
  return event.confirmedAt ?? event.posts[event.posts.length - 1].publishedAt;
}

/** Scope strings arrive in the curator's wording (Chinese or raw); localize the known ones. */
const SCOPE_EN: Record<string, string> = {
  所有付费订阅: "All paid plans",
  "Plus、Pro、Business": "Plus, Pro, and Business",
  business: "Business",
};

export function scopeText(event: ResetEvent, locale: Locale): string | null {
  if (!event.scope) return null;
  return locale === "en" ? (SCOPE_EN[event.scope] ?? event.scope) : event.scope;
}

export function byTimeDesc(events: readonly ResetEvent[]): ResetEvent[] {
  return [...events].sort((a, b) => eventTime(b).localeCompare(eventTime(a)));
}

export function isConfirmed(event: ResetEvent): boolean {
  return event.status === "confirmed";
}

/**
 * Distinct Beijing dates of confirmed full-account resets, ascending.
 * Same-day rounds collapse into one date: for readers they are the same
 * "quota is back" day, and counting them twice would fake short intervals.
 */
export function confirmedResetDates(events: readonly ResetEvent[]): string[] {
  const dates = new Set<string>();
  for (const event of events) {
    if (event.type === "reset" && isConfirmed(event)) {
      dates.add((event.occurredOn ?? eventTime(event)).slice(0, 10));
    }
  }
  return [...dates].sort();
}

export function intervalsInDays(dates: readonly string[]): number[] {
  const intervals: number[] = [];
  for (let i = 1; i < dates.length; i += 1) {
    const prev = new Date(`${dates[i - 1]}T00:00:00Z`).getTime();
    const curr = new Date(`${dates[i]}T00:00:00Z`).getTime();
    intervals.push(Math.round((curr - prev) / 86_400_000));
  }
  return intervals;
}

export interface IntervalSummary {
  count: number;
  min: number;
  median: number;
  max: number;
}

export function summarizeIntervals(intervals: readonly number[]): IntervalSummary | null {
  if (intervals.length === 0) return null;
  const sorted = [...intervals].sort((a, b) => a - b);
  const mid = Math.floor(sorted.length / 2);
  const median =
    sorted.length % 2 === 1 ? sorted[mid] : Math.round((sorted[mid - 1] + sorted[mid]) / 2);
  return { count: sorted.length, min: sorted[0], median, max: sorted[sorted.length - 1] };
}

/** Whole Beijing-calendar days elapsed since an ISO datetime. */
export function daysSince(iso: string, now = new Date()): number {
  const BJ_OFFSET = 8 * 3_600_000;
  const then = new Date(new Date(iso).getTime() + BJ_OFFSET);
  const today = new Date(now.getTime() + BJ_OFFSET);
  const day = (d: Date) => Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate());
  return Math.round((day(today) - day(then)) / 86_400_000);
}
