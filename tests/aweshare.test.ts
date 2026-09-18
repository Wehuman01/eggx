import { describe, it, expect } from "vitest";
import {
  validateAweshareCatalog,
  groupByProducer,
  remainingTokens,
  countByStatus,
  type AweshareOffering,
} from "../src/lib/aweshare";
import { aweshareOfferings, aweshareSnapshot } from "../src/content/aweshare";

function offering(overrides: Partial<AweshareOffering> = {}): AweshareOffering {
  return {
    producer: "hub",
    alias: "hub/test-model",
    protocols: ["anthropic", "openai-chat"],
    status: "online",
    hubCheckAt: "2026-09-18T00:00:00.000Z",
    degradedSince: null,
    maxConcurrencyPerUser: 1,
    maxConcurrentUsers: 2,
    dailyTokens: 1000,
    usedDailyTokens: 250,
    shareState: null,
    ...overrides,
  };
}

describe("validateAweshareCatalog", () => {
  it("accepts a well-formed catalog and normalizes empty strings to null", () => {
    const [o] = validateAweshareCatalog([
      offering({ hubCheckAt: "" as unknown as string, degradedSince: "" as unknown as string }),
    ]);
    expect(o.hubCheckAt).toBeNull();
    expect(o.degradedSince).toBeNull();
  });

  it("rejects unknown status, unknown protocol label and malformed alias", () => {
    expect(() => validateAweshareCatalog([offering({ status: "sleepy" as AweshareOffering["status"] })])).toThrow(
      /unknown status/,
    );
    expect(() =>
      validateAweshareCatalog([offering({ protocols: ["grpc"] as unknown as AweshareOffering["protocols"] })]),
    ).toThrow(/unknown protocol label/);
    expect(() => validateAweshareCatalog([offering({ alias: "not-a-namespace" })])).toThrow(/malformed alias/);
  });

  it("rejects alias whose namespace does not match the producer, and duplicates", () => {
    expect(() => validateAweshareCatalog([offering({ producer: "other" })])).toThrow(/namespace/);
    expect(() => validateAweshareCatalog([offering(), offering()])).toThrow(/duplicate alias/);
  });
});

describe("groupByProducer", () => {
  it("groups alphabetically with healthiest offerings first inside each producer", () => {
    const groups = groupByProducer([
      offering({ alias: "hub/b-off", status: "offline" }),
      offering({ alias: "hub/a-down", status: "offline" }),
      offering({ alias: "hub/z-online", status: "online" }),
      offering({ producer: "aaa", alias: "aaa/x" }),
    ]);
    expect(groups.map((g) => g.producer)).toEqual(["aaa", "hub"]);
    expect(groups[1]!.offerings.map((o) => o.alias)).toEqual([
      "hub/z-online",
      "hub/a-down",
      "hub/b-off",
    ]);
  });
});

describe("remainingTokens", () => {
  it("subtracts used from daily and reports unlimited as null", () => {
    expect(remainingTokens(offering({ dailyTokens: 1000, usedDailyTokens: 250 }))).toBe(750);
    expect(remainingTokens(offering({ dailyTokens: 0, usedDailyTokens: 0 }))).toBeNull();
    expect(remainingTokens(offering({ dailyTokens: 100, usedDailyTokens: 900 }))).toBe(0);
  });
});

describe("countByStatus", () => {
  it("counts online, degraded and everything else as down", () => {
    const counts = countByStatus([
      offering({ status: "online" }),
      offering({ status: "online" }),
      offering({ status: "degraded" }),
      offering({ status: "offline" }),
      offering({ status: "blocked" }),
    ]);
    expect(counts).toEqual({ total: 5, online: 2, degraded: 1, down: 2 });
  });
});

describe("generated content module", () => {
  it("passes validation and agrees with the snapshot count", () => {
    expect(aweshareOfferings.length).toBeGreaterThan(0);
    expect(aweshareSnapshot.count).toBe(aweshareOfferings.length);
    expect(aweshareSnapshot.hubUrl).toBe("https://aweshare.wehuman.top");
    for (const o of aweshareOfferings) {
      expect(o.protocols.length).toBeGreaterThan(0);
    }
  });
});
