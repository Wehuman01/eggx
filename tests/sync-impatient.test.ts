import { afterEach, describe, it, expect, vi } from "vitest";
import {
  beijingNow,
  cycleKey,
  endedRoundsToFreeze,
  fetchRoundCount,
} from "../scripts/sync-impatient.mjs";

function resetEvent(overrides = {}) {
  return {
    id: "e1",
    type: "reset",
    status: "confirmed",
    scope: null,
    confirmedAt: null,
    occurredOn: null,
    scheduleFrom: null,
    scheduleThrough: null,
    posts: [
      { stage: "announce", publishedAt: "2026-09-20T00:48:38.000+08:00", url: "https://x.com/thsottiaux/status/1", zh: "a", en: "a" },
      { stage: "confirm", publishedAt: "2026-09-23T02:23:37.000+08:00", url: "https://x.com/thsottiaux/status/2", zh: "b", en: "b" },
    ],
    ...overrides,
  };
}

const cycleOf = (date: string, overrides = {}) =>
  resetEvent({ ...overrides, posts: resetEvent().posts.map((p) => ({ ...p, publishedAt: p.publishedAt.replace("2026-09-23", date) })) });

describe("endedRoundsToFreeze", () => {
  it("freezes ended per-cycle rounds, oldest first", () => {
    const events = [cycleOf("2026-09-29"), cycleOf("2026-09-23")];
    expect(endedRoundsToFreeze(events, new Set())).toEqual([
      { cycle: "2026-09-23", key: cycleKey("2026-09-23") },
    ]);
  });

  it("never freezes the newest confirmed cycle — it is still live", () => {
    const events = [cycleOf("2026-09-23")];
    expect(endedRoundsToFreeze(events, new Set())).toEqual([]);
  });

  it("skips known cycles and the pre-keying era", () => {
    const events = [cycleOf("2026-09-29"), cycleOf("2026-09-23"), cycleOf("2026-09-10")];
    expect(endedRoundsToFreeze(events, new Set(["2026-09-23"]))).toEqual([]);
    expect(endedRoundsToFreeze(events, new Set())).toEqual([
      { cycle: "2026-09-23", key: cycleKey("2026-09-23") },
    ]);
  });

  it("ignores announced events entirely — only confirmed ones are rounds", () => {
    const events = [cycleOf("2026-09-29"), resetEvent({ id: "e2", status: "announced" })];
    expect(endedRoundsToFreeze(events, new Set())).toEqual([]);
  });

  it("collapses same-day rounds into one cycle", () => {
    const events = [cycleOf("2026-09-29"), cycleOf("2026-09-23"), cycleOf("2026-09-23", { id: "e2", type: "card" })];
    expect(endedRoundsToFreeze(events, new Set())).toHaveLength(1);
  });

  it("returns nothing when no reset was ever confirmed", () => {
    expect(endedRoundsToFreeze([resetEvent({ id: "e2", status: "announced" })], new Set())).toEqual([]);
  });
});

describe("fetchRoundCount", () => {
  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it("reads a missing key as zero clicks", async () => {
    vi.stubGlobal("fetch", vi.fn(async () => new Response("not found", { status: 404 })));
    await expect(fetchRoundCount("ns", "k")).resolves.toBe(0);
  });

  it("returns the counter value", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn(async () => new Response(JSON.stringify({ value: 12 }), { status: 200 })),
    );
    await expect(fetchRoundCount("ns", "k")).resolves.toBe(12);
  });

  it("fails loudly on outages and malformed payloads", async () => {
    vi.stubGlobal("fetch", vi.fn(async () => new Response("boom", { status: 500 })));
    await expect(fetchRoundCount("ns", "k")).rejects.toThrow(/HTTP 500/);
    vi.stubGlobal(
      "fetch",
      vi.fn(async () => new Response(JSON.stringify({ value: "many" }), { status: 200 })),
    );
    await expect(fetchRoundCount("ns", "k")).rejects.toThrow(/numeric value/);
  });
});

describe("beijingNow", () => {
  it("stamps Beijing time in the repo's +08:00 shape", () => {
    expect(beijingNow()).toMatch(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}\+08:00$/);
  });
});
