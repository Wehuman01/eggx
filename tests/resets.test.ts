import { describe, it, expect } from "vitest";
import {
  validateResets,
  byTimeDesc,
  confirmedResetDates,
  intervalsInDays,
  summarizeIntervals,
  daysSince,
  eventTime,
} from "../src/lib/resets";
import { resets, resetSnapshot } from "../src/content/resets";

describe("content registry", () => {
  it("validates every curated reset event", () => {
    expect(resets.length).toBeGreaterThan(0);
    for (const event of resets) {
      expect(event.posts.length).toBeGreaterThan(0);
      for (const post of event.posts) {
        expect(post.url).toMatch(/^https:\/\/x\.com\/thsottiaux\/status\/\d+$/);
      }
    }
  });

  it("carries an upstream snapshot with source and check time", () => {
    expect(resetSnapshot.curator.length).toBeGreaterThan(0);
    expect(resetSnapshot.source.startsWith("https://")).toBe(true);
    expect(Number.isNaN(Date.parse(resetSnapshot.checkedAt))).toBe(false);
  });
});

describe("validateResets", () => {
  it("rejects non-array input", () => {
    expect(() => validateResets({} as unknown[])).toThrow();
  });

  it("rejects unsorted posts", () => {
    expect(() =>
      validateResets([
        {
          id: "x",
          type: "reset",
          status: "confirmed",
          confirmedAt: null,
          occurredOn: null,
          scheduleFrom: null,
          scheduleThrough: null,
          posts: [
            {
              stage: "announce",
              publishedAt: "2026-09-02T10:00:00.000+08:00",
              url: "https://x.com/thsottiaux/status/1",
              zh: "a",
              en: "a",
            },
            {
              stage: "confirm",
              publishedAt: "2026-09-01T10:00:00.000+08:00",
              url: "https://x.com/thsottiaux/status/2",
              zh: "b",
              en: "b",
            },
          ],
        },
      ]),
    ).toThrow(/sorted/);
  });
});

describe("eventTime and byTimeDesc", () => {
  it("prefers confirmedAt over the last post", () => {
    const [event] = validateResets([
      {
        id: "x",
        type: "reset",
        status: "confirmed",
        confirmedAt: "2026-09-12T16:09:00.000+08:00",
        occurredOn: null,
        scheduleFrom: null,
        scheduleThrough: null,
        posts: [
          {
            stage: "announce",
            publishedAt: "2026-09-12T11:00:00.000+08:00",
            url: "https://x.com/thsottiaux/status/1",
            zh: "a",
            en: "a",
          },
          {
            stage: "confirm",
            publishedAt: "2026-09-12T16:08:00.000+08:00",
            url: "https://x.com/thsottiaux/status/2",
            zh: "b",
            en: "b",
          },
        ],
      },
    ]);
    expect(eventTime(event)).toBe("2026-09-12T16:09:00.000+08:00");
  });

  it("sorts newest first", () => {
    const events = validateResets([
      { id: "old", type: "reset", status: "announced", confirmedAt: null, occurredOn: null, scheduleFrom: null, scheduleThrough: null, posts: [{ stage: "announce", publishedAt: "2026-06-12T00:00:00.000+08:00", url: "https://x.com/thsottiaux/status/1", zh: "a", en: "a" }] },
      { id: "new", type: "reset", status: "confirmed", confirmedAt: "2026-09-12T16:09:00.000+08:00", occurredOn: null, scheduleFrom: null, scheduleThrough: null, posts: [{ stage: "confirm", publishedAt: "2026-09-12T16:09:00.000+08:00", url: "https://x.com/thsottiaux/status/2", zh: "b", en: "b" }] },
    ]);
    expect(byTimeDesc(events).map((e) => e.id)).toEqual(["new", "old"]);
  });
});

describe("confirmedResetDates and intervals", () => {
  it("dedupes same-day rounds and sorts ascending", () => {
    const dates = confirmedResetDates([
      { id: "a", type: "reset", status: "confirmed", confirmedAt: "2026-07-11T01:59:00.000+08:00", occurredOn: null, scheduleFrom: null, scheduleThrough: null, posts: [{ stage: "confirm", publishedAt: "2026-07-11T01:59:00.000+08:00", url: "https://x.com/thsottiaux/status/1", zh: "a", en: "a" }] },
      { id: "b", type: "reset", status: "confirmed", confirmedAt: "2026-07-11T22:51:00.000+08:00", occurredOn: null, scheduleFrom: null, scheduleThrough: null, posts: [{ stage: "confirm", publishedAt: "2026-07-11T22:51:00.000+08:00", url: "https://x.com/thsottiaux/status/2", zh: "b", en: "b" }] },
      { id: "c", type: "card", status: "confirmed", confirmedAt: "2026-07-12T08:00:00.000+08:00", occurredOn: null, scheduleFrom: null, scheduleThrough: null, posts: [{ stage: "confirm", publishedAt: "2026-07-12T08:00:00.000+08:00", url: "https://x.com/thsottiaux/status/3", zh: "c", en: "c" }] },
      { id: "d", type: "reset", status: "announced", confirmedAt: null, occurredOn: null, scheduleFrom: null, scheduleThrough: null, posts: [{ stage: "announce", publishedAt: "2026-07-13T08:00:00.000+08:00", url: "https://x.com/thsottiaux/status/4", zh: "d", en: "d" }] },
    ]);
    expect(dates).toEqual(["2026-07-11"]);
  });

  it("computes day intervals", () => {
    expect(intervalsInDays(["2026-09-08", "2026-09-12", "2026-09-13"])).toEqual([4, 1]);
  });

  it("summarizes with a proper median", () => {
    expect(summarizeIntervals([9, 1, 5])).toEqual({ count: 3, min: 1, median: 5, max: 9 });
    expect(summarizeIntervals([1, 2, 3, 4])).toEqual({ count: 4, min: 1, median: 3, max: 4 });
    expect(summarizeIntervals([])).toBeNull();
  });
});

describe("daysSince", () => {
  it("counts Beijing calendar days, not UTC days", () => {
    // 2026-09-12T02:00+08:00 is 2026-09-11T18:00Z — Beijing date is the 12th.
    const now = new Date("2026-09-18T00:00:00Z");
    expect(daysSince("2026-09-12T02:00:00.000+08:00", now)).toBe(6);
  });

  it("returns 0 on the same Beijing day", () => {
    expect(daysSince("2026-09-12T16:09:00.000+08:00", new Date("2026-09-12T08:09:00Z"))).toBe(0);
  });
});
