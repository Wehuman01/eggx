import type { Offer } from "./schema";

export function activeOffers(offers: readonly Offer[]): Offer[] {
  return offers.filter((o) => o.status !== "archived");
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
