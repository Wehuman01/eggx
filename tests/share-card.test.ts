import { describe, it, expect } from "vitest";
import { wrapToFit, splitUrlForCard } from "../src/lib/share-card";

describe("wrapToFit", () => {
  const measure = (text: string) => text.length;

  it("wraps on spaces within the width budget", () => {
    expect(wrapToFit(measure, "ab cd ef", 5, 4)).toEqual(["ab cd", "ef"]);
  });

  it("hard-breaks a word longer than the whole line (CJK has no spaces)", () => {
    expect(wrapToFit(measure, "夜间免额度活动", 4, 4)).toEqual(["夜间免额", "度活动"]);
  });

  it("keeps a short single line intact", () => {
    expect(wrapToFit(measure, "hello", 10, 2)).toEqual(["hello"]);
  });

  it("cuts overflow to maxLines with an ellipsis that fits", () => {
    expect(wrapToFit(measure, "abcdefghij", 4, 2)).toEqual(["abcd", "efg…"]);
  });

  it("wraps mixed CJK and latin text without stalling", () => {
    const lines = wrapToFit(measure, "ZCode 夜间免额度活动 plus 新人 5 天试用", 6, 10);
    for (const line of lines) expect(line.length).toBeLessThanOrEqual(6);
  });

  it("respects an injected measure (canvas widths, not char counts)", () => {
    const wide = (text: string) => (/[A-Z]/.test(text) ? text.length * 10 : text.length);
    expect(wrapToFit(wide, "ab C", 10, 4)).toEqual(["ab", "C"]);
  });
});

describe("splitUrlForCard", () => {
  it("splits host and path, keeping the anchor for deep links", () => {
    expect(splitUrlForCard("https://eggx.wehuman.top/#zcode")).toEqual({
      host: "eggx.wehuman.top",
      path: "/#zcode",
    });
  });

  it("collapses a bare host to an empty path", () => {
    expect(splitUrlForCard("https://eggx.wehuman.top/")).toEqual({
      host: "eggx.wehuman.top",
      path: "",
    });
  });

  it("keeps nested paths and query strings", () => {
    expect(splitUrlForCard("https://eggx.wehuman.top/en/long-term/?x=1")).toEqual({
      host: "eggx.wehuman.top",
      path: "/en/long-term/?x=1",
    });
  });

  it("falls back to a single blob for a non-URL", () => {
    expect(splitUrlForCard("not a url")).toEqual({ host: "not a url", path: "" });
  });
});
