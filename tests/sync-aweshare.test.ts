import { describe, it, expect } from "vitest";
import { mapOfferingRow, mergeRows, buildCatalog, renderModule } from "../scripts/sync-aweshare.mjs";

function row(overrides = {}) {
  return {
    producer: "hub",
    alias: "hub/glm-5.3",
    protocol: "anthropic",
    protocolLabel: "anthropic",
    status: "online",
    hubCheckAt: "2026-09-17T09:04:20.110Z",
    degradedSince: null,
    maxConcurrencyPerUser: 1,
    maxConcurrentUsers: 3,
    dailyTokens: 20000000,
    usedDailyTokens: 100,
    shareState: null,
    ...overrides,
  };
}

describe("mapOfferingRow", () => {
  it("checks the raw single-protocol shape", () => {
    const mapped = mapOfferingRow(row());
    expect(mapped.protocol).toBe("anthropic");
    expect(mapped.alias).toBe("hub/glm-5.3");
  });

  it("fails loudly on unknown enums and namespace mismatch", () => {
    expect(() => mapOfferingRow(row({ status: "sleepy" }))).toThrow(/unknown status/);
    expect(() => mapOfferingRow(row({ protocol: "grpc" }))).toThrow(/unknown protocol/);
    expect(() => mapOfferingRow(row({ producer: "other" }))).toThrow(/namespace/);
  });
});

describe("mergeRows", () => {
  it("merges per-protocol rows: protocol list, freshest hubCheckAt, shared caps", () => {
    const merged = mergeRows([
      row({ protocol: "anthropic", protocolLabel: "anthropic", hubCheckAt: "2026-09-17T09:04:20.110Z" }),
      row({ protocol: "openai", protocolLabel: "openai-chat", hubCheckAt: "2026-09-17T16:04:05.271Z" }),
    ]);
    expect(merged.protocols).toEqual(["anthropic", "openai-chat"]);
    expect(merged.status).toBe("online");
    expect(merged.hubCheckAt).toBe("2026-09-17T16:04:05.271Z");
    expect(merged.dailyTokens).toBe(20000000);
  });

  it("reports disagreeing wires as degraded and takes the conservative caps", () => {
    const merged = mergeRows([
      row({ status: "online", maxConcurrentUsers: 3, dailyTokens: 20000000 }),
      row({ protocol: "openai", protocolLabel: "openai-chat", status: "offline", maxConcurrentUsers: 2, dailyTokens: 10000000 }),
    ]);
    expect(merged.status).toBe("degraded");
    expect(merged.maxConcurrentUsers).toBe(2);
    expect(merged.dailyTokens).toBe(10000000);
  });

  it("never-seen rows stay null and closed share windows win", () => {
    const merged = mergeRows([
      row({ hubCheckAt: null, shareState: "open" }),
      row({ protocol: "openai", protocolLabel: "openai-chat", hubCheckAt: null, shareState: "closed" }),
    ]);
    expect(merged.hubCheckAt).toBeNull();
    expect(merged.shareState).toBe("closed");
  });
});

describe("buildCatalog", () => {
  it("merges duplicates by alias and sorts producers then health", () => {
    const offerings = buildCatalog({
      object: "catalog",
      offerings: [
        row({ alias: "zzz/m", producer: "zzz", status: "offline", protocolLabel: "openai-chat" }),
        row({ alias: "hub/b", protocolLabel: "openai-chat" }),
        row({ alias: "hub/a" }),
      ],
    });
    expect(offerings.map((o) => o.alias)).toEqual(["hub/a", "hub/b", "zzz/m"]);
    expect(offerings[0]!.protocols).toEqual(["anthropic"]);
  });

  it("rejects unexpected payload shapes", () => {
    expect(() => buildCatalog({ object: "nope" })).toThrow(/payload shape/);
    expect(() => buildCatalog({ object: "catalog", offerings: [] })).toThrow(/empty/);
  });
});

describe("renderModule", () => {
  it("renders a deterministic module with the privacy header", () => {
    const offerings = buildCatalog({ object: "catalog", offerings: [row()] });
    const text = renderModule("https://aweshare.wehuman.top", "2026-09-18T01:59:24.923Z", offerings);
    expect(text).toContain("自动生成");
    expect(text).toContain("上游模型来源与实时占用不进仓库");
    expect(text).toContain('hubUrl": "https://aweshare.wehuman.top"');
    expect(text).toContain("validateAweshareCatalog");
    expect(text).not.toContain("observedModel");
  });
});
