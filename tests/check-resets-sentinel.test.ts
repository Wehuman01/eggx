import { describe, it, expect } from "vitest";
import { latestIsoInModule, upstreamSignal, judge } from "../scripts/check-resets-sentinel.mjs";

describe("latestIsoInModule", () => {
  it("picks the newest publishedAt/confirmedAt value", () => {
    const source = [
      `import { validateResets } from "../lib/resets";`,
      `export const resetSnapshot = { "checkedAt": "2026-09-24T07:42:15.000+08:00", "historyFrom": "2026-06-12T00:00:00.000+08:00" };`,
      `[`,
      `  { "id": "a", "confirmedAt": null, "posts": [{ "publishedAt": "2026-09-12T16:09:17.000+08:00" }] },`,
      `  { "id": "b", "confirmedAt": "2026-09-23T02:23:37.000+08:00", "posts": [{ "publishedAt": "2026-09-20T00:48:38.000+08:00" }] },`,
      `]`,
    ].join("\n");
    // 2026-09-23T02:23:37+08:00 === 2026-09-22T18:23:37Z
    expect(latestIsoInModule(source)).toBe("2026-09-22T18:23:37.000Z");
  });

  it("ignores checkedAt and schedule fields, which can postdate real posts", () => {
    const source = `"checkedAt": "2026-09-30T00:00:00.000+08:00", "scheduleFrom": "2026-10-01T00:00:00.000+08:00", "posts": [{ "publishedAt": "2026-09-12T16:09:17.000+08:00" }]`;
    expect(latestIsoInModule(source)).toBe("2026-09-12T08:09:17.000Z");
  });

  it("returns null when no post timestamps exist", () => {
    expect(latestIsoInModule("// empty")).toBeNull();
  });
});

describe("upstreamSignal", () => {
  const aihotPayload = {
    checkedAt: "2026-10-13T01:00:00.000+08:00",
    events: [
      {
        id: "reset-1",
        confirmedAt: "2026-10-11T12:01:09.000+08:00",
        posts: [
          { publishedAt: "2026-10-11T06:16:20.000+08:00" },
          { publishedAt: "2026-10-11T12:01:09.000+08:00" },
        ],
      },
      {
        id: "banked-2",
        confirmedAt: null,
        posts: [{ publishedAt: "2026-10-08T03:19:17.000+08:00" }],
      },
    ],
  };

  it("takes the newest post or confirmation time across all events", () => {
    expect(upstreamSignal(aihotPayload)).toBe("2026-10-11T04:01:09.000Z");
  });

  it("falls back to post times when no event is confirmed", () => {
    expect(upstreamSignal({ events: [{ posts: [{ publishedAt: "2026-10-08T03:19:17.000+08:00" }] }] })).toBe(
      "2026-10-07T19:19:17.000Z",
    );
  });

  it("returns null without any factual signal", () => {
    expect(upstreamSignal({ events: [] })).toBeNull();
    expect(upstreamSignal({})).toBeNull();
    expect(upstreamSignal({ events: [{ posts: [{ publishedAt: "garbage" }] }] })).toBeNull();
  });
});

describe("judge", () => {
  const H = 3_600_000;

  it("is quiet while the merged feed is fresh", () => {
    expect(judge("2026-10-11T04:01:09Z", "2026-10-11T06:00:00Z").level).toBe("ok");
  });

  it("alarms once the second source leads by more than the threshold", () => {
    const verdict = judge("2026-10-08T00:00:00Z", "2026-10-11T00:00:00Z");
    expect(verdict.level).toBe("alarm");
    expect(verdict.lagMs).toBe(72 * H);
  });

  it("never alarms when the second source has nothing to compare", () => {
    expect(judge("2026-10-08T00:00:00Z", null).level).toBe("ok");
  });

  it("skips when the local feed is unreadable or timestamps are broken", () => {
    expect(judge(null, "2026-10-11T00:00:00Z").level).toBe("skip");
    expect(judge("not-a-date", "2026-10-11T00:00:00Z").level).toBe("skip");
  });
});
