import { describe, it, expect } from "vitest";
import { eventTime } from "../src/lib/resets";
import { resets, resetSnapshot } from "../src/content/resets";
import { resetsAihotEra, aihotEraSnapshot } from "../src/content/resets-aihot-era";
import { resetsBackfill, backfillSnapshot } from "../src/content/resets-backfill";
import { allResets, allResetSnapshot } from "../src/content/resets-all";

// The feed is three segments: frozen backfill (codex-resets.com, eggx-translated),
// frozen AIHOT era, and the live codex-resets.com feed. These tests guard the
// boundaries between them: a reset must never appear twice on the page, and every
// segment must carry its own provenance.
describe("resets backfill segment", () => {
  it("validates as non-empty curated history", () => {
    expect(resetsBackfill.length).toBeGreaterThan(0);
    for (const event of resetsBackfill) {
      expect(event.type).toBe("reset");
      expect(event.status).toBe("confirmed");
      for (const post of event.posts) {
        expect(post.url).toMatch(/^https:\/\/x\.com\/thsottiaux\/status\/\d+$/);
        expect(post.zh!.length).toBeGreaterThan(0);
        expect(post.en.length).toBeGreaterThan(0);
      }
    }
  });

  it("predates the AIHOT era's tracking window", () => {
    for (const event of resetsBackfill) {
      expect(eventTime(event) < aihotEraSnapshot.historyFrom).toBe(true);
    }
  });

  it("carries its own provenance snapshot", () => {
    expect(backfillSnapshot.source).toBe("https://codex-resets.com");
    expect(backfillSnapshot.curator).toBe("codex-resets.com");
    expect(Number.isNaN(Date.parse(backfillSnapshot.checkedAt))).toBe(false);
    expect(backfillSnapshot.historyFrom).toBe("2025-09-17T00:00:00.000+08:00");
  });
});

describe("resets AIHOT era segment", () => {
  it("is frozen history between the backfill and the live feed", () => {
    expect(resetsAihotEra.length).toBeGreaterThan(0);
    for (const event of resetsAihotEra) {
      expect(eventTime(event) >= backfillSnapshot.historyFrom).toBe(true);
      for (const post of event.posts) {
        expect(post.zh!.length).toBeGreaterThan(0);
      }
    }
  });

  it("carries its own provenance snapshot", () => {
    expect(aihotEraSnapshot.source).toBe("https://aihot.news/codex-reset");
    expect(aihotEraSnapshot.curator).toBe("AIHOT");
    expect(Number.isNaN(Date.parse(aihotEraSnapshot.checkedAt))).toBe(false);
  });
});

describe("segment boundaries", () => {
  const urlsOf = (events: typeof allResets) =>
    new Set(events.flatMap((e) => e.posts.map((p) => p.url)));

  it("shares no source post between any two segments", () => {
    const segments = [
      ["backfill", urlsOf(resetsBackfill)],
      ["aihotEra", urlsOf(resetsAihotEra)],
      ["live", urlsOf(resets)],
    ] as const;
    for (let i = 0; i < segments.length; i += 1) {
      for (let j = i + 1; j < segments.length; j += 1) {
        for (const url of segments[j][1]) {
          expect(segments[i][1].has(url), `duplicate post ${url} in ${segments[i][0]}/${segments[j][0]}`).toBe(false);
        }
      }
    }
  });

  it("keeps the live feed strictly newer than the frozen segments", () => {
    const frozenNewest = Math.max(
      ...[...resetsBackfill, ...resetsAihotEra].flatMap((e) =>
        e.posts.map((p) => Date.parse(p.publishedAt)),
      ),
    );
    for (const event of resets) {
      expect(Date.parse(event.posts[0].publishedAt)).toBeGreaterThan(frozenNewest);
    }
  });
});

describe("merged resets", () => {
  it("contains all three segments, sorted newest first", () => {
    expect(allResets).toHaveLength(resets.length + resetsAihotEra.length + resetsBackfill.length);
    const times = allResets.map(eventTime);
    expect(times).toEqual([...times].sort().reverse());
  });

  it("takes the window start from the backfill and freshness from the live feed", () => {
    expect(allResetSnapshot.historyFrom).toBe(backfillSnapshot.historyFrom);
    expect(allResetSnapshot.checkedAt).toBe(resetSnapshot.checkedAt);
    expect(allResetSnapshot.source).toBe(resetSnapshot.source);
  });

  it("always leaves at least one language of quote per post", () => {
    for (const event of allResets) {
      for (const post of event.posts) {
        expect(Boolean(post.zh ?? post.en), `no quote for ${post.url}`).toBe(true);
      }
    }
  });
});
