import { afterEach, describe, it, expect, vi } from "vitest";
import {
  beijingNow,
  cycleKey,
  endedRoundsToFreeze,
  fetchRoundCount,
} from "../scripts/sync-impatient.mjs";

describe("endedRoundsToFreeze", () => {
  it("freezes ended per-cycle rounds, oldest first", () => {
    expect(endedRoundsToFreeze(["2026-09-23", "2026-09-29"], new Set())).toEqual([
      { cycle: "2026-09-23", key: cycleKey("2026-09-23") },
    ]);
  });

  it("never freezes the newest confirmed cycle — it is still live", () => {
    expect(endedRoundsToFreeze(["2026-09-23"], new Set())).toEqual([]);
  });

  it("skips known cycles and the pre-keying era", () => {
    const cycles = ["2026-09-10", "2026-09-23", "2026-09-29"];
    expect(endedRoundsToFreeze(cycles, new Set(["2026-09-23"]))).toEqual([]);
    expect(endedRoundsToFreeze(cycles, new Set())).toEqual([
      { cycle: "2026-09-23", key: cycleKey("2026-09-23") },
    ]);
  });

  it("takes the newest cycle as current regardless of input order", () => {
    // 10-08 sits in the middle of the input but is still the newest → it is the
    // live round; only 10-07 (older, unfrozen) gets frozen.
    expect(
      endedRoundsToFreeze(["2026-10-03", "2026-10-08", "2026-10-07"], new Set(["2026-10-03"])),
    ).toEqual([{ cycle: "2026-10-07", key: cycleKey("2026-10-07") }]);
  });

  it("returns nothing when no cycle was ever confirmed", () => {
    expect(endedRoundsToFreeze([], new Set())).toEqual([]);
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
