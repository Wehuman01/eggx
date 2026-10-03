import { describe, it, expect } from "vitest";
import { extractCheckedAt, judgeStaleness } from "../scripts/check-freshness.mjs";

describe("extractCheckedAt", () => {
  it("reads the snapshot header of a generated registry", () => {
    const source = [
      `import { validateAweshareCatalog } from "../lib/aweshare";`,
      `export const aweshareSnapshot = { "hubUrl": "https://x", "checkedAt": "2026-10-03T01:11:20.969Z" };`,
    ].join("\n");
    expect(extractCheckedAt(source)).toBe("2026-10-03T01:11:20.969Z");
  });

  it("returns null when the file carries no checkedAt", () => {
    expect(extractCheckedAt("// empty")).toBeNull();
  });
});

describe("judgeStaleness", () => {
  const H = 3_600_000;
  const now = Date.parse("2026-10-03T12:00:00Z");

  it("is quiet while the hourly sync landed recently", () => {
    expect(judgeStaleness("2026-10-03T10:10:37.497+08:00", now).level).toBe("ok");
  });

  it("goes stale once checkedAt is older than the threshold", () => {
    const verdict = judgeStaleness("2026-09-30T00:00:00Z", now);
    expect(verdict.level).toBe("stale");
    expect(verdict.ageMs).toBe(84 * H);
  });

  it("treats a missing or unparseable checkedAt as broken, not quiet", () => {
    expect(judgeStaleness(null, now).level).toBe("broken");
    expect(judgeStaleness("not-a-date", now).level).toBe("broken");
  });
});
