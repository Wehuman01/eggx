import { describe, it, expect } from "vitest";
import fs from "node:fs";
import path from "node:path";
import { offers } from "../src/content/offers";

const dist = path.join(__dirname, "..", "dist");

function toSlug(name: string): string {
  return name.toLowerCase().replace(/\s+/g, "-");
}

describe("eggx build output", () => {
  it("generates home page", () => {
    expect(fs.existsSync(path.join(dist, "index.html"))).toBe(true);
  });

  it("generates daily page", () => {
    expect(fs.existsSync(path.join(dist, "daily", "index.html"))).toBe(true);
  });

  it("generates expires page", () => {
    expect(fs.existsSync(path.join(dist, "expires", "index.html"))).toBe(true);
  });

  it("generates provider pages for each unique provider", () => {
    const providers = [...new Set(offers.map((o) => o.provider))];
    for (const provider of providers) {
      const slug = toSlug(provider);
      const file = path.join(dist, "providers", slug, "index.html");
      expect(fs.existsSync(file), `missing provider page for ${provider} (${slug})`).toBe(true);
    }
  });

  it("generates about page", () => {
    expect(fs.existsSync(path.join(dist, "about", "index.html"))).toBe(true);
  });
});
