import type { Offer } from "./schema";

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
      "X-API-Version": "1",
      "Cache-Control": "public, max-age=300, stale-while-revalidate=60",
      ...headers,
    },
  });
}

export function activeOnly(offers: readonly Offer[]): Offer[] {
  return offers.filter((o) => o.status !== "archived");
}

export function serializeOffer(o: Offer) {
  return {
    id: o.id,
    name: o.name,
    provider: o.provider,
    category: o.category,
    access: o.access,
    evidence: o.evidence,
    state: o.status,
    description: o.description,
    url: o.url ?? null,
    source: o.source ?? null,
    actionUrl: o.actionUrl ?? null,
    limits: o.limits ?? null,
    expiresAt: o.expiry ?? null,
    caveat: o.caveat ?? null,
    lastVerified: o.lastVerified ?? null,
  };
}

export function toSlug(name: string): string {
  return name.toLowerCase().replace(/\s+/g, "-");
}
