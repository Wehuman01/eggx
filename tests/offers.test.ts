import { describe, it, expect } from "vitest";
import { validateOffer, validateRegistry, type Offer, type OfferCategory, type OfferAccess, type OfferEvidence, type OfferStatus } from "../src/lib/schema";
import { activeOffers, providerLookup, expiryOrder } from "../src/lib/offers";

describe("offer schema", () => {
  it("exposes the four category values", () => {
    const categories: OfferCategory[] = ["limited-time", "platform", "application"];
    expect(categories).toHaveLength(3);
  });

  it("exposes the four access values", () => {
    const accesses: OfferAccess[] = ["public", "invite", "student", "application"];
    expect(accesses).toHaveLength(4);
  });

  it("exposes the four evidence values", () => {
    const evidences: OfferEvidence[] = ["official", "community", "unverified"];
    expect(evidences).toHaveLength(3);
  });

  it("exposes the four lifecycle statuses", () => {
    const statuses: OfferStatus[] = ["verified", "provisional", "expiring", "archived"];
    expect(statuses).toHaveLength(4);
  });

  it("validates a well-formed offer", () => {
    const offer = validateOffer({
      id: "test-1",
      name: "Test",
      provider: "TestProvider",
      category: "platform",
      access: "public",
      evidence: "official",
      status: "verified",
      description: "A test offer",
    });
    expect(offer.id).toBe("test-1");
    expect(offer.status).toBe("verified");
    expect(offer.url).toBeUndefined();
  });

  it("rejects invalid category", () => {
    expect(() => validateOffer({
      id: "test-2",
      name: "Test",
      provider: "TestProvider",
      category: "bad-category",
      access: "public",
      evidence: "official",
      status: "verified",
      description: "A test offer",
    })).toThrow();
  });

  it("rejects invalid status", () => {
    expect(() => validateOffer({
      id: "test-3",
      name: "Test",
      provider: "TestProvider",
      category: "platform",
      access: "public",
      evidence: "official",
      status: "bad-status",
      description: "A test offer",
    })).toThrow();
  });

  it("rejects missing required fields", () => {
    expect(() => validateOffer({} as unknown as Offer)).toThrow();
  });
});

describe("registry behavior", () => {
  it("validates an array of offers", () => {
    const registry = validateRegistry([
      {
        id: "r1",
        name: "R1",
        provider: "P1",
        category: "platform",
        access: "public",
        evidence: "official",
        status: "verified",
        description: "Desc",
      }
    ]);
    expect(registry).toHaveLength(1);
    expect(registry[0].id).toBe("r1");
  });

  it("rejects non-array input", () => {
    expect(() => validateRegistry({} as unknown[])).toThrow();
  });

  it("exposes a non-empty offers registry", async () => {
    const { offers } = await import("../src/content/offers");
    expect(Array.isArray(offers)).toBe(true);
    expect(offers.length).toBeGreaterThan(0);
  });
});

describe("offers helpers", () => {
  const mockOffers: Offer[] = [
    {
      id: "a1",
      name: "Active",
      provider: "X",
      category: "platform",
      access: "public",
      evidence: "official",
      status: "verified",
      description: "Active offer",
    },
    {
      id: "a2",
      name: "Archived",
      provider: "Y",
      category: "platform",
      access: "public",
      evidence: "official",
      status: "archived",
      description: "Archived offer",
    },
  ];

  it("activeOffers excludes archived", () => {
    const result = activeOffers(mockOffers);
    expect(result).toHaveLength(1);
    expect(result[0].id).toBe("a1");
  });

  it("providerLookup filters by provider", () => {
    const result = providerLookup(mockOffers, "X");
    expect(result).toHaveLength(1);
    expect(result[0].id).toBe("a1");
  });

  it("providerLookup is case-insensitive", () => {
    const result = providerLookup(mockOffers, "x");
    expect(result).toHaveLength(1);
  });

  it("expiryOrder sorts by expiry ascending, unknowns last", () => {
    const withExpiry: Offer[] = [
      ...mockOffers,
      {
        id: "e1",
        name: "Late",
        provider: "Z",
        category: "limited-time",
        access: "public",
        evidence: "official",
        status: "expiring",
        description: "Late expiry",
        expiry: "2025-12-31",
      },
      {
        id: "e2",
        name: "Early",
        provider: "Z",
        category: "limited-time",
        access: "public",
        evidence: "official",
        status: "expiring",
        description: "Early expiry",
        expiry: "2025-01-01",
      },
    ];
    const result = expiryOrder(withExpiry);
    expect(result[0].id).toBe("e2");
    expect(result[1].id).toBe("e1");
  });

  it("expiryOrder puts missing expiries after known ones", () => {
    const withMixed: Offer[] = [
      {
        id: "m1",
        name: "No expiry",
        provider: "Z",
        category: "platform",
        access: "public",
        evidence: "official",
        status: "verified",
        description: "No expiry",
      },
      {
        id: "m2",
        name: "Has expiry",
        provider: "Z",
        category: "limited-time",
        access: "public",
        evidence: "official",
        status: "expiring",
        description: "Has expiry",
        expiry: "2025-06-01",
      },
    ];
    const result = expiryOrder(withMixed);
    expect(result[0].id).toBe("m2");
    expect(result[1].id).toBe("m1");
  });
});
