import { describe, it, expect } from "vitest";
import {
  validateOffer,
  validateRegistry,
  type Offer,
  type OfferKind,
  type OfferAccess,
} from "../src/lib/schema";
import {
  activeOffers,
  byKind,
  providerLookup,
  expiryOrder,
  daysUntil,
} from "../src/lib/offers";

describe("offer schema", () => {
  it("kind has exactly two values: temporary and long-term", () => {
    const kinds: OfferKind[] = ["temporary", "long-term"];
    expect(kinds).toHaveLength(2);
  });

  it("access has exactly four values", () => {
    const accesses: OfferAccess[] = ["public", "invite", "student", "application"];
    expect(accesses).toHaveLength(4);
  });

  it("validates a well-formed offer with zh/en objects", () => {
    const offer = validateOffer({
      id: "test-1",
      provider: "TestProvider",
      kind: "long-term",
      access: "public",
      verified: true,
      zh: { name: "中文名", description: "中文描述" },
      en: { name: "EN Name", description: "EN desc" },
    });
    expect(offer.id).toBe("test-1");
    expect(offer.kind).toBe("long-term");
    expect(offer.zh.name).toBe("中文名");
  });

  it("rejects invalid kind", () => {
    expect(() =>
      validateOffer({
        id: "test-2",
        provider: "P",
        kind: "bad-kind" as OfferKind,
        access: "public",
        verified: true,
        zh: { name: "N", description: "D" },
        en: { name: "N", description: "D" },
      }),
    ).toThrow();
  });

  it("rejects invalid access", () => {
    expect(() =>
      validateOffer({
        id: "test-3",
        provider: "P",
        kind: "temporary",
        access: "bad-access" as OfferAccess,
        verified: true,
        zh: { name: "N", description: "D" },
        en: { name: "N", description: "D" },
      }),
    ).toThrow();
  });

  it("rejects non-boolean verified", () => {
    expect(() =>
      validateOffer({
        id: "test-4",
        provider: "P",
        kind: "long-term",
        access: "public",
        verified: "yes" as unknown as boolean,
        zh: { name: "N", description: "D" },
        en: { name: "N", description: "D" },
      }),
    ).toThrow();
  });

  it("rejects missing zh or en object", () => {
    expect(() =>
      validateOffer({
        id: "test-5",
        provider: "P",
        kind: "long-term",
        access: "public",
        verified: true,
        zh: { name: "N", description: "D" },
        // no en
      } as unknown as Offer),
    ).toThrow();
    expect(() =>
      validateOffer({
        id: "test-5b",
        provider: "P",
        kind: "long-term",
        access: "public",
        verified: true,
        en: { name: "N", description: "D" },
        // no zh
      } as unknown as Offer),
    ).toThrow();
  });

  it("rejects zh.name as empty string", () => {
    expect(() =>
      validateOffer({
        id: "test-6",
        provider: "P",
        kind: "long-term",
        access: "public",
        verified: true,
        zh: { name: "", description: "D" },
        en: { name: "N", description: "D" },
      }),
    ).toThrow();
  });

  it("validateRegistry rejects non-array", () => {
    expect(() => validateRegistry({} as unknown as Offer[])).toThrow();
  });
});

describe("data guards", () => {
  it("every non-archived offer has http(s) source and actionUrl, and a lastVerified date", async () => {
    const { offers } = await import("../src/content/offers");
    for (const offer of offers) {
      if (offer.archived) continue;
      expect(offer.source ?? "", `${offer.id}: source must be http(s)`).toMatch(
        /^https?:\/\//,
      );
      expect(offer.actionUrl ?? "", `${offer.id}: actionUrl must be http(s)`).toMatch(
        /^https?:\/\//,
      );
      expect(offer.lastVerified ?? "", `${offer.id}: lastVerified must be YYYY-MM-DD`).toMatch(
        /^\d{4}-\d{2}-\d{2}$/,
      );
    }
  });

  it("temporary offers must have an expiry date or a non-empty caveat", async () => {
    const { offers } = await import("../src/content/offers");
    for (const offer of offers) {
      if (offer.kind !== "temporary") continue;
      const hasExpiry =
        typeof offer.expiry === "string" && /^\d{4}-\d{2}-\d{2}$/.test(offer.expiry);
      const hasCaveat =
        typeof offer.zh.caveat === "string" && offer.zh.caveat.length > 0;
      expect(hasExpiry || hasCaveat, `${offer.id} (temporary) needs expiry or caveat`).toBe(
        true,
      );
    }
  });

  it("expiry dates are not in the past", async () => {
    const { offers } = await import("../src/content/offers");
    const today = new Date().toISOString().slice(0, 10);
    for (const offer of offers) {
      if (typeof offer.expiry !== "string") continue;
      expect(offer.expiry >= today, `${offer.id} expiry ${offer.expiry} must not be before ${today}`).toBe(
        true,
      );
    }
  });

  it("zh and en name and description are non-empty strings", async () => {
    const { offers } = await import("../src/content/offers");
    for (const offer of offers) {
      expect(typeof offer.zh.name === "string" && offer.zh.name.length > 0).toBe(true);
      expect(typeof offer.zh.description === "string" && offer.zh.description.length > 0).toBe(
        true,
      );
      expect(typeof offer.en.name === "string" && offer.en.name.length > 0).toBe(true);
      expect(typeof offer.en.description === "string" && offer.en.description.length > 0).toBe(
        true,
      );
    }
  });
});

describe("offers helpers", () => {
  const mockOffers: Offer[] = [
    {
      id: "a1",
      provider: "X",
      kind: "long-term",
      access: "public",
      verified: true,
      zh: { name: "A1", description: "A1 desc" },
      en: { name: "A1", description: "A1 desc" },
    },
    {
      id: "a2",
      provider: "Y",
      kind: "long-term",
      access: "public",
      verified: true,
      archived: true,
      zh: { name: "A2", description: "A2 desc" },
      en: { name: "A2", description: "A2 desc" },
    },
  ];

  it("activeOffers excludes archived", () => {
    expect(activeOffers(mockOffers)).toHaveLength(1);
    expect(activeOffers(mockOffers)[0].id).toBe("a1");
  });

  it("byKind filters to the requested kind", () => {
    const mixed: Offer[] = [
      ...mockOffers,
      {
        id: "t1",
        provider: "Z",
        kind: "temporary",
        access: "public",
        verified: true,
        zh: { name: "T1", description: "T1 desc" },
        en: { name: "T1", description: "T1 desc" },
        expiry: "2026-12-31",
      },
    ];
    expect(byKind(mixed, "temporary")).toHaveLength(1);
    expect(byKind(mixed, "temporary")[0].id).toBe("t1");
  });

  it("providerLookup is case-insensitive", () => {
    expect(providerLookup(mockOffers, "x")).toHaveLength(1);
    expect(providerLookup(mockOffers, "X")).toHaveLength(1);
    expect(providerLookup(mockOffers, "nonexistent")).toHaveLength(0);
  });

  it("expiryOrder sorts by expiry ascending, unknowns last", () => {
    const withExpiry: Offer[] = [
      {
        id: "late",
        provider: "Z",
        kind: "temporary",
        access: "public",
        verified: true,
        expiry: "2025-12-31",
        zh: { name: "Late", description: "Late" },
        en: { name: "Late", description: "Late" },
      },
      {
        id: "early",
        provider: "Z",
        kind: "temporary",
        access: "public",
        verified: true,
        expiry: "2025-01-01",
        zh: { name: "Early", description: "Early" },
        en: { name: "Early", description: "Early" },
      },
    ];
    const result = expiryOrder(withExpiry);
    expect(result[0].id).toBe("early");
    expect(result[1].id).toBe("late");
  });

  it("expiryOrder puts missing expiries after known ones", () => {
    const mixed: Offer[] = [
      {
        id: "no-expiry",
        provider: "Z",
        kind: "long-term",
        access: "public",
        verified: true,
        zh: { name: "No", description: "No" },
        en: { name: "No", description: "No" },
      },
      {
        id: "has-expiry",
        provider: "Z",
        kind: "temporary",
        access: "public",
        verified: true,
        expiry: "2025-06-01",
        zh: { name: "Has", description: "Has" },
        en: { name: "Has", description: "Has" },
      },
    ];
    const result = expiryOrder(mixed);
    expect(result[0].id).toBe("has-expiry");
    expect(result[1].id).toBe("no-expiry");
  });

  it("daysUntil is 0 today, positive in the future", () => {
    const today = new Date().toISOString().slice(0, 10);
    expect(daysUntil(today)).toBe(0);
    const future = new Date(Date.now() + 86_400_000).toISOString().slice(0, 10);
    expect(daysUntil(future)).toBeGreaterThanOrEqual(1);
  });
});
