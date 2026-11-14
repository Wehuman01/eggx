import { describe, it, expect } from "vitest";
import {
  extractCheckedAt,
  judgeStaleness,
  extractOfferVerifications,
  judgeOfferStaleness,
} from "../scripts/check-freshness.mjs";

describe("extractCheckedAt", () => {
  it("reads the snapshot header of a generated registry", () => {
    const source = [
      `import { validateAweshareCatalog } from "../lib/aweshare";`,
      `export const aweshareSnapshot = { "hubUrl": "https://x", "checkedAt": "2026-10-03T01:11:20.969Z" };`,
    ].join("\n");
    expect(extractCheckedAt(source)).toBe("2026-10-03T01:11:20.969Z");
  });

  it("returns null when the file carries no checkedAt", () => {
    expect(extractCheckedAt("// empty")).toBeNull();
  });
});

describe("judgeStaleness", () => {
  const H = 3_600_000;
  const now = Date.parse("2026-10-03T12:00:00Z");

  it("is quiet while the hourly sync landed recently", () => {
    expect(judgeStaleness("2026-10-03T10:10:37.497+08:00", now).level).toBe("ok");
  });

  it("goes stale once checkedAt is older than the threshold", () => {
    const verdict = judgeStaleness("2026-09-30T00:00:00Z", now);
    expect(verdict.level).toBe("stale");
    expect(verdict.ageMs).toBe(84 * H);
  });

  it("treats a missing or unparseable checkedAt as broken, not quiet", () => {
    expect(judgeStaleness(null, now).level).toBe("broken");
    expect(judgeStaleness("not-a-date", now).level).toBe("broken");
  });
});

describe("extractOfferVerifications", () => {
  it("reads id, archived, expiry and lastVerified per entry", () => {
    const source = [
      `  {`,
      `    id: "live-one",`,
      `    provider: "X",`,
      `    kind: "long-term",`,
      `    access: "public",`,
      `    verified: true,`,
      `    expiry: null,`,
      `    lastVerified: "2026-11-14",`,
      `    zh: { name: "a", description: "b" },`,
      `    en: { name: "a", description: "b" },`,
      `  },`,
      `  {`,
      `    id: "dead-one",`,
      `    provider: "Y",`,
      `    kind: "temporary",`,
      `    access: "public",`,
      `    verified: true,`,
      `    archived: true,`,
      `    expiry: "2026-12-01",`,
      `    lastVerified: "2026-09-01",`,
      `    zh: { name: "a", description: "b" },`,
      `    en: { name: "a", description: "b" },`,
      `  },`,
    ].join("\n");
    expect(extractOfferVerifications(source)).toEqual([
      { id: "live-one", archived: false, expiry: null, lastVerified: "2026-11-14" },
      { id: "dead-one", archived: true, expiry: "2026-12-01", lastVerified: "2026-09-01" },
    ]);
  });
});

describe("judgeOfferStaleness", () => {
  const D = 86_400_000;
  const now = Date.parse("2026-11-14T00:00:00Z");
  const offer = (over: Record<string, unknown> = {}) => ({
    id: "o",
    archived: false,
    expiry: null,
    lastVerified: "2026-11-14",
    ...over,
  });

  it("is quiet when every live offer was re-verified inside the window", () => {
    const verdict = judgeOfferStaleness([offer(), offer({ id: "p", lastVerified: "2026-10-20" })], now);
    expect(verdict.level).toBe("ok");
    expect(verdict.stale).toEqual([]);
  });

  it("goes stale once a live offer has not been re-checked in 30 days", () => {
    const verdict = judgeOfferStaleness([offer({ id: "old", lastVerified: "2026-10-01" })], now);
    expect(verdict.level).toBe("stale");
    expect(verdict.stale.map((s: { id: string }) => s.id)).toEqual(["old"]);
    expect(verdict.stale[0].ageMs).toBe(44 * D);
  });

  it("treats a live offer without lastVerified as broken", () => {
    const verdict = judgeOfferStaleness([offer({ id: "nope", lastVerified: null })], now);
    expect(verdict.level).toBe("broken");
    expect(verdict.broken).toEqual(["nope"]);
  });

  it("ignores archived entries and entries that already expired on their own date", () => {
    const verdict = judgeOfferStaleness(
      [
        offer({ id: "archived", archived: true, lastVerified: "2026-01-01" }),
        offer({ id: "expired", expiry: "2026-10-01", lastVerified: "2026-01-01" }),
      ],
      now,
    );
    expect(verdict.level).toBe("ok");
  });

  it("keeps an offer alive on its expiry date, matching the site", () => {
    const verdict = judgeOfferStaleness(
      [offer({ id: "today", expiry: "2026-11-14", lastVerified: "2026-10-01" })],
      now,
    );
    expect(verdict.stale.map((s: { id: string }) => s.id)).toEqual(["today"]);
  });
});
