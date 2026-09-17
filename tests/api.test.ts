import { describe, it, expect } from "vitest";
import fs from "node:fs";
import path from "node:path";

const dist = path.join(__dirname, "..", "dist");

function joinDist(...segments: string[]): string {
  return path.join(dist, ...segments);
}

describe("API v1 routes exist in dist", () => {
  it("generates /api/v1/offers/index.json", () => {
    expect(fs.existsSync(joinDist("api", "v1", "offers", "index.json"))).toBe(true);
  });

  it("generates /api/v1/offers/[id].json for each offer", async () => {
    const { offers } = await import("../src/content/offers");
    for (const offer of offers) {
      const file = joinDist("api", "v1", "offers", `${offer.id}.json`);
      expect(fs.existsSync(file)).toBe(true);
    }
  });

  it("generates /api/v1/providers/[slug].json for each provider", async () => {
    const { offers } = await import("../src/content/offers");
    const providers = [...new Set(offers.map((o) => o.provider))];
    for (const provider of providers) {
      const slug = provider.toLowerCase().replace(/\s+/g, "-");
      const file = joinDist("api", "v1", "providers", `${slug}.json`);
      expect(fs.existsSync(file)).toBe(true);
    }
  });

  it("generates /api/v1/daily/latest.json", () => {
    expect(fs.existsSync(joinDist("api", "v1", "daily", "latest.json"))).toBe(true);
  });

  it("generates /api/v1/snapshot.json", () => {
    expect(fs.existsSync(joinDist("api", "v1", "snapshot.json"))).toBe(true);
  });

  it("generates /api/v1/changes.json", () => {
    expect(fs.existsSync(joinDist("api", "v1", "changes.json"))).toBe(true);
  });

  it("generates /feed.xml", () => {
    expect(fs.existsSync(joinDist("feed.xml"))).toBe(true);
  });

  it("generates /llms.txt", () => {
    expect(fs.existsSync(joinDist("llms.txt"))).toBe(true);
  });

  it("generates /openapi.json", () => {
    expect(fs.existsSync(joinDist("openapi.json"))).toBe(true);
  });

  it("snapshot is schema-versioned and includes only non-archived offers", async () => {
    const snapshotPath = joinDist("api", "v1", "snapshot.json");
    expect(fs.existsSync(snapshotPath)).toBe(true);
    const content = fs.readFileSync(snapshotPath, "utf-8");
    const parsed = JSON.parse(content);
    expect(parsed).toHaveProperty("schemaVersion");
    expect(typeof parsed.schemaVersion).toBe("string");
    expect(parsed).toHaveProperty("data");
    expect(Array.isArray(parsed.data)).toBe(true);
    for (const item of parsed.data) {
      expect(item).not.toHaveProperty("status");
      expect(item).toHaveProperty("state");
      expect(item.state).not.toBe("archived");
    }
  });

  it("offers include source, state, evidence, lastVerified, expiresAt", async () => {
    const offersPath = joinDist("api", "v1", "offers", "index.json");
    expect(fs.existsSync(offersPath)).toBe(true);
    const content = fs.readFileSync(offersPath, "utf-8");
    const parsed = JSON.parse(content);
    expect(parsed).toHaveProperty("schemaVersion");
    expect(parsed).toHaveProperty("data");
    expect(Array.isArray(parsed.data)).toBe(true);
    expect(parsed.data.length).toBeGreaterThan(0);
    const item = parsed.data[0];
    expect(item).toHaveProperty("source");
    expect(item).toHaveProperty("state");
    expect(item).toHaveProperty("evidence");
    expect(item).toHaveProperty("lastVerified");
    expect(item).toHaveProperty("expiresAt");
  });

  it("provider endpoint resolves known slug", async () => {
    const { offers } = await import("../src/content/offers");
    const knownProvider = offers[0].provider;
    const slug = knownProvider.toLowerCase().replace(/\s+/g, "-");
    const providerPath = joinDist("api", "v1", "providers", `${slug}.json`);
    expect(fs.existsSync(providerPath)).toBe(true);
    const content = fs.readFileSync(providerPath, "utf-8");
    const parsed = JSON.parse(content);
    expect(parsed).toHaveProperty("data");
    expect(Array.isArray(parsed.data)).toBe(true);
  });

  it("llms.txt mentions verification rules", async () => {
    const llmsPath = joinDist("llms.txt");
    expect(fs.existsSync(llmsPath)).toBe(true);
    const content = fs.readFileSync(llmsPath, "utf-8");
    expect(content.toLowerCase()).toMatch(/verif/);
  });

  it("every path documented in openapi.json resolves to a dist file", async () => {
    const { offers } = await import("../src/content/offers");
    const spec = JSON.parse(fs.readFileSync(joinDist("openapi.json"), "utf-8"));
    const firstId = offers[0].id;
    const firstSlug = offers[0].provider.toLowerCase().replace(/\s+/g, "-");
    for (const route of Object.keys(spec.paths)) {
      let file = route
        .replace("{id}", firstId)
        .replace("{slug}", firstSlug)
        .replace(/^\//, "");
      if (file === "api/v1/offers") {
        file = "api/v1/offers/index.json";
      }
      expect({
        route,
        resolved: file,
        exists: fs.existsSync(joinDist(...file.split("/"))),
      }).toEqual({ route, resolved: file, exists: true });
    }
  });

  it("every /api/v1 URL in llms.txt resolves to a dist file", async () => {
    const { offers } = await import("../src/content/offers");
    const text = fs.readFileSync(joinDist("llms.txt"), "utf-8");
    const routes = [...text.matchAll(/\/api\/v1\/[^\s]+/g)].map((m) =>
      m[0].replace(/\?.*$/, ""),
    );
    expect(routes.length).toBeGreaterThanOrEqual(6);
    const firstId = offers[0].id;
    const firstSlug = offers[0].provider.toLowerCase().replace(/\s+/g, "-");
    for (const route of routes) {
      let file = route
        .replace(":id", firstId)
        .replace(":slug", firstSlug)
        .replace(/^\//, "");
      if (file === "api/v1/offers") {
        file = "api/v1/offers/index.json";
      }
      expect({
        route,
        resolved: file,
        exists: fs.existsSync(joinDist(...file.split("/"))),
      }).toEqual({ route, resolved: file, exists: true });
    }
  });
});
