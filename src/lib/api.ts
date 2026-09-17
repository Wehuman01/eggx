import type { Offer } from "./schema";

export const API_VERSION = "2";

export interface ApiEnvelope<T> {
  schemaVersion: string;
  data: T;
}

export function jsonResponse<T>(
  body: T,
  status = 200,
  headers: Record<string, string> = {}
): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      "Content-Type": "application/json",
      "X-API-Version": API_VERSION,
      "Cache-Control": "public, max-age=300, stale-while-revalidate=60",
      ...headers,
    },
  });
}

export function activeOnly(offers: readonly Offer[]): Offer[] {
  return offers.filter((o) => !o.archived);
}

function localized(o: Offer, field: "limits" | "caveat") {
  return {
    zh: o.zh[field] ?? null,
    en: o.en[field] ?? null,
  };
}

export function serializeOffer(o: Offer) {
  return {
    id: o.id,
    provider: o.provider,
    kind: o.kind,
    access: o.access,
    verified: o.verified,
    archived: o.archived ?? false,
    name: { zh: o.zh.name, en: o.en.name },
    description: { zh: o.zh.description, en: o.en.description },
    limits: localized(o, "limits"),
    caveat: localized(o, "caveat"),
    url: o.url ?? null,
    source: o.source ?? null,
    actionUrl: o.actionUrl ?? null,
    expiresAt: o.expiry ?? null,
    lastVerified: o.lastVerified ?? null,
  };
}

export function toSlug(name: string): string {
  return name.toLowerCase().replace(/\s+/g, "-");
}
