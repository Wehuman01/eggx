import { describe, it, expect } from "vitest";
import { mapAihotEvent, buildSnapshot, buildEvents, renderModule } from "../scripts/sync-resets.mjs";

function aihotEvent(overrides = {}) {
  return {
    id: "reset-2098612714704891959-1-1",
    type: "direct_reset",
    status: "confirmed",
    scope: "所有付费订阅",
    confirmedAt: "2026-09-12T16:09:17.000+08:00",
    occurredOn: null,
    schedule: { from: "2026-09-12T15:00:00.000+08:00", through: "2026-09-12T15:00:00.000+08:00" },
    posts: [
      {
        id: "2098685367058612394",
        stage: "确认完成",
        publishedAt: "2026-09-12T16:09:17.000+08:00",
        text: "重置已全部推送完成。好梦。",
        originalText: "Reset all propagated.",
        url: "https://x.com/thsottiaux/status/2098685367058612394",
      },
      {
        id: "2098612714704891959",
        stage: "预告",
        publishedAt: "2026-09-12T11:20:36.000+08:00",
        text: "当然，一次重置也将在今天午夜前落地。",
        originalText: "And of course, a reset is also landing by midnight today.",
        url: "https://x.com/thsottiaux/status/2098612714704891959",
      },
    ],
    ...overrides,
  };
}

describe("mapAihotEvent", () => {
  it("maps types, stages, scope and schedule onto the eggx schema", () => {
    const event = mapAihotEvent(aihotEvent());
    expect(event.type).toBe("reset");
    expect(event.status).toBe("confirmed");
    expect(event.scope).toBe("所有付费订阅");
    expect(event.scheduleFrom).toBe("2026-09-12T15:00:00.000+08:00");
    expect(event.posts.map((p: { stage: string }) => p.stage)).toEqual(["announce", "confirm"]);
    expect(event.posts[1].zh).toBe("重置已全部推送完成。好梦。");
    expect(event.posts[1].en).toBe("Reset all propagated.");
  });

  it("maps reset_credit to card and accepts every documented stage", () => {
    const event = mapAihotEvent(
      aihotEvent({
        id: "banked-2095651088502591861-1-1",
        type: "reset_credit",
        scope: "",
        posts: [
          { id: "1", stage: "发卡预告", publishedAt: "2026-09-04T07:12:09.000+08:00", text: "a", originalText: "a", url: "https://x.com/thsottiaux/status/1" },
          { id: "2", stage: "确认发卡", publishedAt: "2026-09-04T10:00:00.000+08:00", text: "b", originalText: "b", url: "https://x.com/thsottiaux/status/2" },
        ],
      }),
    );
    expect(event.type).toBe("card");
    expect(event.scope).toBeNull();
    expect(event.posts.map((p: { stage: string }) => p.stage)).toEqual(["announce", "confirm"]);
  });

  it("sorts posts ascending even when upstream sends them newest first", () => {
    const event = mapAihotEvent(aihotEvent());
    const times = event.posts.map((p: { publishedAt: string }) => p.publishedAt);
    expect(times).toEqual([...times].sort());
  });

  it("fails loudly on unknown values instead of guessing", () => {
    expect(() => mapAihotEvent(aihotEvent({ type: "mystery" }))).toThrow(/unknown event type/);
    expect(() =>
      mapAihotEvent(aihotEvent({ posts: [{ id: "1", stage: "未知", publishedAt: "x", text: "a", originalText: "b", url: "https://x.com/thsottiaux/status/1" }] })),
    ).toThrow(/unknown post stage/);
    expect(() =>
      mapAihotEvent(aihotEvent({ posts: [{ id: "1", stage: "预告", publishedAt: "x", text: "a", originalText: "b", url: "https://example.com/1" }] })),
    ).toThrow(/unexpected post url/);
    expect(() => mapAihotEvent({ ...aihotEvent(), posts: [] })).toThrow(/no posts/);
  });
});

describe("buildSnapshot and buildEvents", () => {
  it("keeps upstream check times and attaches the AIHOT attribution", () => {
    const payload = { checkedAt: "2026-09-18T09:09:37.303+08:00", historyFrom: "2026-06-12T00:00:00.000+08:00", events: [aihotEvent()] };
    expect(buildSnapshot(payload)).toEqual({
      checkedAt: "2026-09-18T09:09:37.303+08:00",
      historyFrom: "2026-06-12T00:00:00.000+08:00",
      source: "https://aihot.news/codex-reset",
      curator: "AIHOT",
    });
    expect(buildEvents(payload)).toHaveLength(1);
  });

  it("rejects empty payloads", () => {
    expect(() => buildEvents({ events: [] })).toThrow(/non-empty/);
    expect(() => buildSnapshot({ checkedAt: "", historyFrom: "x" })).toThrow(/checkedAt/);
  });
});

describe("renderModule", () => {
  it("emits the attribution header and the validateResets wrapper", () => {
    const snapshot = buildSnapshot({ checkedAt: "2026-09-18T09:09:37.303+08:00", historyFrom: "2026-06-12T00:00:00.000+08:00" });
    const rendered = renderModule(snapshot, [mapAihotEvent(aihotEvent())]);
    expect(rendered).toMatch(/^\/\/ Codex 重置记录/);
    expect(rendered).toMatch(/译文著作权归 AIHOT/);
    expect(rendered).toMatch(/import \{ validateResets/);
    expect(rendered).toMatch(/export const resets = validateResets\(/);
    expect(rendered).toContain('"id": "reset-2098612714704891959-1-1"');
  });
});
