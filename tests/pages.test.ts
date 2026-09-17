import { describe, it, expect } from "vitest";
import fs from "node:fs";
import path from "node:path";

const dist = path.join(__dirname, "..", "dist");

describe("eggx build output pages", () => {
  const expectedPages = [
    "index.html",
    path.join("long-term", "index.html"),
    path.join("about", "index.html"),
    path.join("en", "index.html"),
    path.join("en", "long-term", "index.html"),
    path.join("en", "about", "index.html"),
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
