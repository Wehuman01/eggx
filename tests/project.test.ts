import { describe, it, expect } from "vitest";

describe("eggx project data module", () => {
  it("exposes a non-empty offers registry", async () => {
    const { offers } = await import("../src/content/offers");
    expect(Array.isArray(offers)).toBe(true);
    expect(offers.length).toBeGreaterThan(0);
  });
});