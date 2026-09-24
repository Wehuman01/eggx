import { describe, it, expect } from "vitest";
import { eventTime } from "../src/lib/resets";
import { resets, resetSnapshot } from "../src/content/resets";
import { resetsBackfill, backfillSnapshot } from "../src/content/resets-backfill";
import { allResets, allResetSnapshot } from "../src/content/resets-all";

// The backfill segment is frozen history merged into the live AIHOT feed. These
// tests guard the boundary between the two curators: if AIHOT ever reaches
// further back, duplicate posts must be caught here before they hit the page.
describe("resets backfill segment", () => {
  it("validates as non-empty curated history", () => {
    expect(resetsBackfill.length).toBeGreaterThan(0);
    for (const event of resetsBackfill) {
      expect(event.type).toBe("reset");
      expect(event.status).toBe("confirmed");
      for (const post of event.posts) {
        expect(post.url).toMatch(/^https:\/\/x\.com\/thsottiaux\/status\/\d+$/);
        expect(post.zh.length).toBeGreaterThan(0);
        expect(post.en.length).toBeGreaterThan(0);
      }
    }
  });

  it("predates the live feed's tracking window", () => {
    for (const event of resetsBackfill) {
      expect(eventTime(event) < resetSnapshot.historyFrom).toBe(true);
    }
  });

  it("shares no source post with the live feed", () => {
    const liveUrls = new Set(resets.flatMap((e) => e.posts.map((p) => p.url)));
    for (const event of resetsBackfill) {
      for (const post of event.posts) {
        expect(liveUrls.has(post.url), `duplicate post ${post.url}`).toBe(false);
      }
    }
  });

  it("carries its own provenance snapshot", () => {
    expect(backfillSnapshot.source).toBe("https://codex-resets.com");
    expect(backfillSnapshot.curator).toBe("codex-resets.com");
    expect(Number.isNaN(Date.parse(backfillSnapshot.checkedAt))).toBe(false);
    expect(backfillSnapshot.historyFrom).toBe("2025-09-17T00:00:00.000+08:00");
  });
});

describe("merged resets", () => {
  it("contains both segments, sorted newest first", () => {
    expect(allResets).toHaveLength(resets.length + resetsBackfill.length);
    const times = allResets.map(eventTime);
    expect(times).toEqual([...times].sort().reverse());
  });

  it("takes the window start from the backfill and freshness from the live feed", () => {
    expect(allResetSnapshot.historyFrom).toBe(backfillSnapshot.historyFrom);
    expect(allResetSnapshot.checkedAt).toBe(resetSnapshot.checkedAt);
    expect(allResetSnapshot.source).toBe(resetSnapshot.source);
  });
});
