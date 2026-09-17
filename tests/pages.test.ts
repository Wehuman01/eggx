import { describe, it, expect } from "vitest";
import { offers } from "../src/content/offers";
import { fileURLToPath } from "node:url";

const __dirname = fileURLToPath(new URL(".", import.meta.url));
const dist = fileURLToPath(new URL("../dist", import.meta.url));

function toSlug(name: string): string {
  return name.toLowerCase().replace(/\s+/g, "-");
}

describe("eggx build output", () => {
  it("generates home page", () => {
    expect(require("fs").existsSync(require("path").join(dist, "index.html"))).toBe(true);
  });

  it("generates daily page", () => {
    expect(require("fs").existsSync(require("path").join(dist, "daily", "index.html"))).toBe(true);
  });

  it("generates expires page", () => {
    expect(require("fs").existsSync(require("path").join(dist, "expires", "index.html"))).toBe(true);
  });

  it("generates provider pages for each unique provider", () => {
    const providers = [...new Set(offers.map((o) => o.provider))];
    for (const provider of providers) {
      const slug = toSlug(provider);
      const file = require("path").join(dist, "providers", slug, "index.html");
      expect(require("fs").existsSync(file)).toBe(true);
    }
  });

  it("generates about page", () => {
    expect(require("fs").existsSync(require("path").join(dist, "about", "index.html"))).toBe(true);
  });
});
