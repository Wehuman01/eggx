import type { Locale } from "./schema";

export type CampaignStatus = "active" | "ended";
export type CampaignKind = "promo" | "policy";
/**
 * How trustworthy the published end date is:
 * "exact"    — an exact end moment is announced;
 * "deadline" — the campaign runs through a stated date (ends by end of that Beijing day);
 * "unknown"  — official says "limited time" but no end date is published;
 * "none"     — no end announced; treated as ongoing until the vendor says otherwise.
 */
export type EndPrecision = "exact" | "deadline" | "unknown" | "none";

export interface CampaignEvent {
  id: string;
  vendor: string;
  /** "promo" = 营销/福利活动, "policy" = 计划或计费规则变动. */
  kind: CampaignKind;
  status: CampaignStatus;
  title: Record<Locale, string>;
  detail: Record<Locale, string>;
  startAt: string | null;
  endAt: string | null;
  endPrecision: EndPrecision;
  /** Official announcement URL — the only accepted evidence for an entry. */
  source: string;
  /** Matching entry in the offers catalog, when one exists. */
  offerId: string | null;
  /** Last human verification date, YYYY-MM-DD (Beijing). */
  lastVerified: string;
}

const CAMPAIGN_STATUSES: readonly CampaignStatus[] = ["active", "ended"];
const CAMPAIGN_KINDS: readonly CampaignKind[] = ["promo", "policy"];
const END_PRECISIONS: readonly EndPrecision[] = ["exact", "deadline", "unknown", "none"];

export interface CampaignChannel {
  vendor: string;
  url: string;
}

export interface CampaignSnapshot {
  /** Last human verification pass, Beijing time. */
  checkedAt: string;
  verifiedBy: string;
  method: string;
  /** Official announcement channels being watched, one entry per vendor. */
  channels: CampaignChannel[];
}

function requireText(obj: Record<string, unknown>, field: string, id: string): string {
  const value = obj[field];
  if (typeof value !== "string" || value.length === 0) {
    throw new Error(`CampaignEvent.${field} must be a non-empty string (${id})`);
  }
  return value;
}

export function validateCampaignEvent(e: unknown): CampaignEvent {
  if (!e || typeof e !== "object") {
    throw new Error("CampaignEvent must be an object");
  }
  const obj = e as Record<string, unknown>;
  const id = requireText(obj, "id", String(obj.id ?? "?"));
  if (!CAMPAIGN_STATUSES.includes(obj.status as CampaignStatus)) {
    throw new Error(`Invalid campaign status: ${obj.status}`);
  }
  if (!CAMPAIGN_KINDS.includes(obj.kind as CampaignKind)) {
    throw new Error(`Invalid campaign kind: ${obj.kind}`);
  }
  if (!END_PRECISIONS.includes(obj.endPrecision as EndPrecision)) {
    throw new Error(`Invalid endPrecision: ${obj.endPrecision} (${id})`);
  }
  for (const field of ["startAt", "endAt"] as const) {
    if (obj[field] !== null && typeof obj[field] !== "string") {
      throw new Error(`CampaignEvent.${field} must be a string or null (${id})`);
    }
  }
  const title = obj.title as Record<string, unknown> | undefined;
  const detail = obj.detail as Record<string, unknown> | undefined;
  for (const locale of ["zh", "en"] as const) {
    if (!title || typeof title[locale] !== "string" || (title[locale] as string).length === 0) {
      throw new Error(`CampaignEvent.title.${locale} must be a non-empty string (${id})`);
    }
    if (!detail || typeof detail[locale] !== "string" || (detail[locale] as string).length === 0) {
      throw new Error(`CampaignEvent.detail.${locale} must be a non-empty string (${id})`);
    }
  }
  return {
    id,
    vendor: requireText(obj, "vendor", id),
    kind: obj.kind as CampaignKind,
    status: obj.status as CampaignStatus,
    title: title as Record<Locale, string>,
    detail: detail as Record<Locale, string>,
    startAt: (obj.startAt as string | null) ?? null,
    endAt: (obj.endAt as string | null) ?? null,
    endPrecision: obj.endPrecision as EndPrecision,
    source: requireText(obj, "source", id),
    offerId: typeof obj.offerId === "string" ? obj.offerId : null,
    lastVerified: requireText(obj, "lastVerified", id),
  };
}

export function validateCampaigns(events: unknown[]): CampaignEvent[] {
  if (!Array.isArray(events)) {
    throw new Error("Campaigns must be an array");
  }
  return events.map(validateCampaignEvent);
}

/** Whole Beijing-calendar days from now until an ISO datetime (negative once past). */
export function beijingDaysUntil(iso: string, now = new Date()): number {
  const BJ_OFFSET = 8 * 3_600_000;
  const day = (d: Date) => Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate());
  const target = new Date(new Date(iso).getTime() + BJ_OFFSET);
  const today = new Date(now.getTime() + BJ_OFFSET);
  return Math.round((day(target) - day(today)) / 86_400_000);
}

/**
 * Display order for active campaigns: dated ends first (soonest first),
 * then unknown end dates, then open-ended ones.
 */
export function sortActiveCampaigns(events: readonly CampaignEvent[]): CampaignEvent[] {
  const rank = (e: CampaignEvent) => (e.endPrecision === "none" ? 2 : e.endPrecision === "unknown" ? 1 : 0);
  return [...events].sort((a, b) => {
    const ra = rank(a);
    const rb = rank(b);
    if (ra !== rb) return ra - rb;
    if (ra === 0) return (a.endAt ?? "").localeCompare(b.endAt ?? "");
    return a.vendor.localeCompare(b.vendor);
  });
}
