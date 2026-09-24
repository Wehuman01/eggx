import { describe, it, expect } from "vitest";
import {
  PER_CYCLE_KEYING_SINCE,
  cycleKey,
  previousRound,
  roundForCycle,
  validateImpatient,
  type ImpatientSnapshot,
} from "../src/lib/impatient";
import { impatientSnapshot } from "../src/content/impatient";

const snapshot = (rounds: unknown): ImpatientSnapshot =>
  validateImpatient({ namespace: "eggx-wehuman", rounds });

const dated = (cycle: string, final = 1) => ({
  key: cycleKey(cycle),
  cycle,
  final,
  frozenAt: "2026-09-24T11:06:40.000+08:00",
});

describe("validateImpatient", () => {
  it("accepts the shipped archive", () => {
    expect(impatientSnapshot.namespace).toBe("eggx-wehuman");
    expect(impatientSnapshot.rounds.length).toBeGreaterThan(0);
    const legacy = impatientSnapshot.rounds[0];
    expect(legacy.cycle).toBeNull();
    expect(legacy.key).toBe("codex-reset-impatient");
    expect(legacy.final).toBeGreaterThan(0);
  });

  it("rejects junk instead of guessing", () => {
    expect(() => validateImpatient(null)).toThrow(/must be an object/);
    expect(() => snapshot([dated("2026-09-23", -1)])).toThrow(/non-negative integer/);
    expect(() => snapshot([dated("2026-09-23"), dated("2026-09-23")])).toThrow(/duplicate cycles/);
    expect(() => snapshot([{ key: "other", cycle: null, final: 0, frozenAt: "x" }])).toThrow(
      /legacy key/,
    );
    expect(() => snapshot([{ key: cycleKey("2026-09-24"), cycle: "2026-09-23", final: 0, frozenAt: "x" }])).toThrow(
      /match its cycle/,
    );
    expect(() => snapshot([{ key: "codex-reset-impatient", cycle: null, final: 0, frozenAt: "yesterday" }])).toThrow(
      /frozenAt/,
    );
  });

  it("requires the legacy aggregate to sort first", () => {
    expect(() =>
      snapshot([dated("2026-09-23"), { key: "codex-reset-impatient", cycle: null, final: 46, frozenAt: "2026-09-24T11:06:40.000+08:00" }]),
    ).toThrow(/sorted/);
  });
});

describe("roundForCycle", () => {
  it("only serves frozen per-cycle rounds", () => {
    const snap = snapshot([dated("2026-09-23", 12)]);
    expect(roundForCycle(snap, "2026-09-23")?.final).toBe(12);
    expect(roundForCycle(snap, "2026-09-30")).toBeNull();
  });

  it("never serves per-cycle data for the pre-keying era", () => {
    expect(PER_CYCLE_KEYING_SINCE).toBe("2026-09-23");
    expect(roundForCycle(snapshot([]), "2026-09-10")).toBeNull();
  });
});

describe("previousRound", () => {
  it("counts the legacy aggregate as the previous round", () => {
    const snap = snapshot([{ key: "codex-reset-impatient", cycle: null, final: 46, frozenAt: "2026-09-24T11:06:40.000+08:00" }]);
    expect(previousRound(snap, "2026-09-23")?.final).toBe(46);
  });

  it("prefers the newest dated round over the legacy aggregate", () => {
    const snap = snapshot([
      { key: "codex-reset-impatient", cycle: null, final: 46, frozenAt: "2026-09-24T11:06:40.000+08:00" },
      dated("2026-09-23", 12),
    ]);
    expect(previousRound(snap, "2026-09-29")?.cycle).toBe("2026-09-23");
    expect(previousRound(snap, "2026-09-23")?.final).toBe(46);
  });

  it("returns null while the first round is still live", () => {
    expect(previousRound(snapshot([]), "2026-09-23")).toBeNull();
  });
});
