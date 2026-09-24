import { describe, it, expect } from "vitest";
import fs from "node:fs";
import path from "node:path";

const dist = path.join(__dirname, "..", "dist");

describe("eggx build output pages", () => {
  const expectedPages = [
    "index.html",
    path.join("long-term", "index.html"),
    path.join("application", "index.html"),
    path.join("expired", "index.html"),
    path.join("codex-reset", "index.html"),
    path.join("aweshare", "index.html"),
    path.join("about", "index.html"),
    path.join("agent", "index.html"),
    path.join("submit", "index.html"),
    path.join("en", "index.html"),
    path.join("en", "long-term", "index.html"),
    path.join("en", "application", "index.html"),
    path.join("en", "expired", "index.html"),
    path.join("en", "codex-reset", "index.html"),
    path.join("en", "aweshare", "index.html"),
    path.join("en", "about", "index.html"),
    path.join("en", "agent", "index.html"),
    path.join("en", "submit", "index.html"),
  ];

  for (const page of expectedPages) {
    it(`generates ${page}`, () => {
      expect(fs.existsSync(path.join(dist, page)), `missing ${page}`).toBe(true);
    });
  }

  const removedDirs = ["daily", "expires", "providers"];
  for (const dir of removedDirs) {
    it(`does NOT generate stale ${dir}/ directory`, () => {
      expect(fs.existsSync(path.join(dist, dir)), `stale ${dir} should not exist`).toBe(
        false,
      );
    });
  }
});

describe("self-hosted assets and feeds", () => {
  function walk(dir: string): string[] {
    return fs
      .readdirSync(dir, { withFileTypes: true })
      .flatMap((e) =>
        e.isDirectory() ? walk(path.join(dir, e.name)) : [path.join(dir, e.name)],
      );
  }

  it("no generated HTML references Google Fonts", () => {
    // Google Fonts is unreachable from mainland China; the fonts must stay
    // self-hosted (public/fonts.css).
    const offenders = walk(dist)
      .filter((f) => f.endsWith(".html"))
      .filter((f) => fs.readFileSync(f, "utf8").includes("fonts.googleapis.com"));
    expect(offenders).toEqual([]);
  });

  it("ships the self-hosted font files and stylesheet", () => {
    for (const asset of ["fonts.css", "fonts/inter-latin.woff2", "fonts/baloo2-latin.woff2"]) {
      expect(fs.existsSync(path.join(dist, asset)), `missing ${asset}`).toBe(true);
    }
  });

  it("feed.xml uses an absolute channel link and per-item pubDate", () => {
    const xml = fs.readFileSync(path.join(dist, "feed.xml"), "utf8");
    expect(xml).toMatch(/<channel>/);
    expect(xml).toMatch(/<link>https:\/\/[^<]+<\/link>/);
    expect(xml).not.toMatch(/<link>\/feed\.xml<\/link>/);
    expect(xml).toMatch(/<pubDate>.+<\/pubDate>/);
  });
});
