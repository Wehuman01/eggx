import type { Offer, OfferKind, OfferAccess } from "./schema";

/** Past its stated end date. Offers without expiry never auto-expire. */
export function isExpired(offer: Offer, now = new Date()): boolean {
  return offer.expiry ? daysUntil(offer.expiry, now) < 0 : false;
}

export function activeOffers(offers: readonly Offer[], now = new Date()): Offer[] {
  return offers.filter((o) => !o.archived && !isExpired(o, now));
}

export function archivedOffers(offers: readonly Offer[], now = new Date()): Offer[] {
  return offers.filter((o) => o.archived || isExpired(o, now));
}

export function byKind(offers: readonly Offer[], kind: OfferKind): Offer[] {
  return offers.filter((o) => o.kind === kind);
}

export function byAccess(offers: readonly Offer[], access: OfferAccess): Offer[] {
  return offers.filter((o) => o.access === access);
}

export function byVerified(offers: readonly Offer[], verified: boolean): Offer[] {
  return offers.filter((o) => o.verified === verified);
}

export function providerLookup(offers: readonly Offer[], provider: string): Offer[] {
  const target = provider.toLowerCase();
  return offers.filter((o) => o.provider.toLowerCase() === target);
}

export function expiryOrder(offers: readonly Offer[]): Offer[] {
  return [...offers].sort((a, b) => {
    if (!a.expiry && !b.expiry) return 0;
    if (!a.expiry) return 1;
    if (!b.expiry) return -1;
    return a.expiry.localeCompare(b.expiry);
  });
}

/** Graveyard order: most recently verified (i.e. most recently found dead) first. */
export function archivalOrder(offers: readonly Offer[]): Offer[] {
  return [...offers].sort((a, b) => {
    const av = a.lastVerified ?? "";
    const bv = b.lastVerified ?? "";
    if (av !== bv) return bv.localeCompare(av);
    return (b.expiry ?? "").localeCompare(a.expiry ?? "");
  });
}

export function daysUntil(date: string, now = new Date()): number {
  const target = new Date(`${date}T00:00:00Z`);
  const today = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate()));
  return Math.round((target.getTime() - today.getTime()) / 86_400_000);
}

export interface ExpiryBadgeLabels {
  expiringToday: string;
  expiredTag: string;
  daysLeftOne: string;
  daysLeftOther: string;
}

/** Build-time countdown label; the client script recomputes the same shape on view. */
export function expiryBadgeLabel(expiry: string, now: Date, labels: ExpiryBadgeLabels): string {
  const n = daysUntil(expiry, now);
  if (n < 0) return labels.expiredTag;
  if (n === 0) return labels.expiringToday;
  return n === 1
    ? labels.daysLeftOne
    : labels.daysLeftOther.replace("{n}", String(n));
}

/** Compact link text (host + truncated path); the href keeps the full URL. */
export function shortUrlText(url: string, max = 36): string {
  try {
    const parsed = new URL(url);
    const path = parsed.pathname.replace(/\/+$/, "");
    const text = `${parsed.host}${path}`;
    return text.length > max ? `${text.slice(0, max - 1)}…` : text;
  } catch {
    return url;
  }
}
