import { describe, it, expect } from "vitest";
import fs from "node:fs";
import path from "node:path";

const dist = path.join(__dirname, "..", "dist");

function joinDist(...segments: string[]): string {
  return path.join(dist, ...segments);
}

describe("API v1 routes in dist", () => {
  it("generates /api/v1/offers.json plus compat /api/v1/offers/index.json", () => {
    expect(fs.existsSync(joinDist("api", "v1", "offers.json"))).toBe(true);
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

  it("does NOT generate /api/v1/daily (daily concept removed)", () => {
    expect(fs.existsSync(joinDist("api", "v1", "daily"))).toBe(false);
  });

  it("generates /api/v1/snapshot.json", () => {
    expect(fs.existsSync(joinDist("api", "v1", "snapshot.json"))).toBe(true);
  });

  it("generates /api/v1/codex-resets.json with events and gap stats", () => {
    const file = joinDist("api", "v1", "codex-resets.json");
    expect(fs.existsSync(file)).toBe(true);
    const body = JSON.parse(fs.readFileSync(file, "utf8"));
    expect(body).toHaveProperty("schemaVersion", "2.0");
    expect(Array.isArray(body.data.events)).toBe(true);
    expect(body.data.events.length).toBeGreaterThan(0);
    expect(body.data.events[0].posts[0].url).toMatch(/^https:\/\/x\.com\//);
    expect(body.data.snapshot.checkedAt).toBeTruthy();
  });

  it("keeps AIHOT's Chinese translations out of the public codex-resets API", () => {
    const body = JSON.parse(fs.readFileSync(joinDist("api", "v1", "codex-resets.json"), "utf8"));
    for (const event of body.data.events) {
      for (const post of event.posts) {
        expect(post).not.toHaveProperty("zh");
        expect(typeof post.en).toBe("string");
      }
    }
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

  it("snapshot is schema-versioned 2.0 and contains only non-archived offers with new shape", async () => {
    const snapshotPath = joinDist("api", "v1", "snapshot.json");
    expect(fs.existsSync(snapshotPath)).toBe(true);
    const content = fs.readFileSync(snapshotPath, "utf-8");
    const parsed = JSON.parse(content);
    expect(parsed).toHaveProperty("schemaVersion", "2.0");
    expect(parsed).toHaveProperty("data");
    expect(Array.isArray(parsed.data)).toBe(true);
    expect(parsed.data.length).toBeGreaterThan(0);
    for (const item of parsed.data) {
      expect(["temporary", "long-term"]).toContain(item.kind);
      expect(typeof item.verified).toBe("boolean");
      expect(typeof item.name.zh).toBe("string");
      expect(typeof item.name.en).toBe("string");
      expect(item.archived).not.toBe(true);
    }
  });

  it("offers index has source, kind, verified, lastVerified, expiresAt, name.zh", async () => {
    const offersPath = joinDist("api", "v1", "offers.json");
    expect(fs.existsSync(offersPath)).toBe(true);
    const content = fs.readFileSync(offersPath, "utf-8");
    const parsed = JSON.parse(content);
    expect(parsed).toHaveProperty("schemaVersion", "2.0");
    expect(parsed).toHaveProperty("data");
    expect(Array.isArray(parsed.data)).toBe(true);
    expect(parsed.data.length).toBeGreaterThan(0);
    const item = parsed.data[0];
    expect(item).toHaveProperty("source");
    expect(item).toHaveProperty("kind");
    expect(["temporary", "long-term"]).toContain(item.kind);
    expect(typeof item.verified).toBe("boolean");
    expect(item).toHaveProperty("lastVerified");
    expect(item).toHaveProperty("expiresAt");
    expect(typeof item.name.zh).toBe("string");
  });

  it("llms.txt mentions temporary and long-term", async () => {
    const llmsPath = joinDist("llms.txt");
    expect(fs.existsSync(llmsPath)).toBe(true);
    const content = fs.readFileSync(llmsPath, "utf-8");
    expect(content).toMatch(/temporary/);
    expect(content).toMatch(/long-term/);
  });

  it("changes.json sorts by lastVerified desc and keeps since null (static hosting)", () => {
    const changesPath = joinDist("api", "v1", "changes.json");
    expect(fs.existsSync(changesPath)).toBe(true);
    const parsed = JSON.parse(fs.readFileSync(changesPath, "utf-8"));
    expect(parsed).toHaveProperty("schemaVersion", "2.0");
    expect(parsed).toHaveProperty("since", null);
    const dates = parsed.data.map((o: { lastVerified: string | null }) => o.lastVerified ?? "");
    const sorted = [...dates].sort((a: string, b: string) => b.localeCompare(a));
    expect(dates).toEqual(sorted);
  });

  it("every path documented in openapi.json resolves to a dist file", async () => {
    const { offers } = await import("../src/content/offers");
    const spec = JSON.parse(fs.readFileSync(joinDist("openapi.json"), "utf-8"));
    const firstId = offers[0].id;
    const firstSlug = offers[0].provider.toLowerCase().replace(/\s+/g, "-");
    for (const route of Object.keys(spec.paths)) {
      const file = route
        .replace("{id}", firstId)
        .replace("{slug}", firstSlug)
        .replace(/^\//, "");
      expect({
        route,
        resolved: file,
        exists: fs.existsSync(joinDist(...file.split("/"))),
      }).toEqual({ route, resolved: file, exists: true });
    }
  });

  it("every /api/v1 URL in llms.txt resolves to a dist file (>= 5 routes)", async () => {
    const { offers } = await import("../src/content/offers");
    const text = fs.readFileSync(joinDist("llms.txt"), "utf-8");
    const routes = [...text.matchAll(/\/api\/v1\/[^\s]+/g)].map((m) =>
      m[0].replace(/\?.*$/, ""),
    );
    expect(routes.length).toBeGreaterThanOrEqual(5);
    const firstId = offers[0].id;
    const firstSlug = offers[0].provider.toLowerCase().replace(/\s+/g, "-");
    for (const route of routes) {
      const file = route
        .replace(":id", firstId)
        .replace(":slug", firstSlug)
        .replace(/^\//, "");
      expect({
        route,
        resolved: file,
        exists: fs.existsSync(joinDist(...file.split("/"))),
      }).toEqual({ route, resolved: file, exists: true });
    }
  });
});
