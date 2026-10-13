import { describe, it, expect } from "vitest";
import {
  beijingIso,
  beijingDate,
  stripTrailingLink,
  mapReset,
  mapScheduled,
  buildLiveEvents,
  buildSnapshot,
  mergeCycles,
  renderModule,
} from "../scripts/sync-codex-resets.mjs";

const CLOSED = {
  id: "2109132167112782291",
  reset_type: "regular",
  announced_at: "2026-10-11T04:01:09.000Z",
  text: "Put the reset in the bag. All propagated. https://t.co/HGxaD3Zdcj",
  source: { type: "x_post", author: "thsottiaux", url: "https://x.com/thsottiaux/status/2109132167112782291" },
};

const NEWLY_CLOSED = {
  id: "2110000000000000001",
  reset_type: "banked",
  announced_at: "2026-10-13T07:00:00.000Z",
  text: "Confirmed landed across all accounts. https://t.co/abc123",
  source: { type: "x_post", author: "thsottiaux", url: "https://x.com/thsottiaux/status/2110000000000000001" },
};

const SCHEDULED = {
  id: "2109812360596865224",
  status: "scheduled",
  reset_type: "regular",
  announced_at: "2026-10-13T01:03:59.000Z",
  scheduled_for: "2026-10-13T07:00:00.000Z",
  text: "Global reset landing by EOD PST time. Enjoy",
  source: { type: "x_post", author: "thsottiaux", url: "https://x.com/thsottiaux/status/2109812360596865224" },
};

describe("beijing conversions", () => {
  it("renders UTC instants in the repo's +08:00 shape", () => {
    expect(beijingIso("2026-10-11T04:01:09.000Z")).toBe("2026-10-11T12:01:09.000+08:00");
  });

  it("derives the Beijing calendar date used as the impatient cycle key", () => {
    // 18:23:37Z is already the next Beijing day.
    expect(beijingDate("2026-09-22T18:23:37.000Z")).toBe("2026-09-23");
  });

  it("fails loudly on unparseable times", () => {
    expect(() => beijingIso("not-a-time")).toThrow(/unparseable time/);
    expect(() => beijingIso(undefined)).toThrow(/non-empty string/);
  });
});

describe("stripTrailingLink", () => {
  it("drops trailing t.co links and nothing else", () => {
    expect(stripTrailingLink("Reset all propagated. Enjoy. https://t.co/GaVJhbptR0")).toBe(
      "Reset all propagated. Enjoy.",
    );
    expect(stripTrailingLink("No link here")).toBe("No link here");
    expect(stripTrailingLink("Mid https://t.co/x sentence end")).toBe("Mid https://t.co/x sentence end");
  });
});

describe("mapReset", () => {
  it("maps a closed reset to a confirmed single-post event with zh left null", () => {
    const event = mapReset(CLOSED);
    expect(event).toEqual({
      id: "2109132167112782291",
      type: "reset",
      status: "confirmed",
      scope: null,
      confirmedAt: null,
      occurredOn: null,
      scheduleFrom: null,
      scheduleThrough: null,
      posts: [
        {
          stage: "confirm",
          publishedAt: "2026-10-11T12:01:09.000+08:00",
          url: "https://x.com/thsottiaux/status/2109132167112782291",
          zh: null,
          en: "Put the reset in the bag. All propagated.",
        },
      ],
    });
  });

  it("maps banked to card", () => {
    expect(mapReset(NEWLY_CLOSED).type).toBe("card");
  });

  it("fails loudly on unknown types and foreign urls instead of guessing", () => {
    expect(() => mapReset({ ...CLOSED, reset_type: "mystery" })).toThrow(/unknown reset_type/);
    expect(() =>
      mapReset({ ...CLOSED, source: { type: "x_post", url: "https://example.com/1" } }),
    ).toThrow(/unexpected source url/);
    expect(() => mapReset({ ...CLOSED, text: "   https://t.co/only" })).toThrow(/empty text/);
  });
});

describe("mapScheduled", () => {
  it("maps the pending announcement to an announced event", () => {
    const event = mapScheduled(SCHEDULED);
    expect(event.status).toBe("announced");
    expect(event.posts[0].stage).toBe("announce");
    expect(event.posts[0].publishedAt).toBe("2026-10-13T09:03:59.000+08:00");
    expect(event.posts[0].en).toBe("Global reset landing by EOD PST time. Enjoy");
  });
});

describe("buildLiveEvents", () => {
  const FROZEN_NEWEST = CLOSED.announced_at; // the cutoff instant, as a closed entry

  it("keeps only entries strictly newer than the frozen cutoff, newest first", () => {
    const events = buildLiveEvents(
      { data: [CLOSED, NEWLY_CLOSED] },
      { data: { scheduled_reset: null } },
    );
    expect(events.map((e: { id: string; status: string }) => e.id)).toEqual(["2110000000000000001"]);
    expect(FROZEN_NEWEST).toBe("2026-10-11T04:01:09.000Z");
  });

  it("adds the pending announcement as an announced event", () => {
    // NEWLY_CLOSED landed 15:00 Beijing, the announcement went out 09:03 — newest first.
    const events = buildLiveEvents({ data: [NEWLY_CLOSED] }, { data: { scheduled_reset: SCHEDULED } });
    expect(events.map((e: { id: string; status: string }) => [e.id, e.status])).toEqual([
      ["2110000000000000001", "confirmed"],
      ["2109812360596865224", "announced"],
    ]);
  });

  it("drops the announcement once the tracker closed that same id", () => {
    const closed = { ...SCHEDULED, status: undefined, announced_at: "2026-10-13T07:30:00.000Z", reset_type: "regular" };
    const events = buildLiveEvents({ data: [closed] }, { data: { scheduled_reset: SCHEDULED } });
    expect(events.map((e: { id: string; status: string }) => [e.id, e.status])).toEqual([["2109812360596865224", "confirmed"]]);
  });

  it("works with no pending announcement at all", () => {
    expect(buildLiveEvents({ data: [CLOSED] }, { data: {} })).toEqual([]);
  });

  it("fails loudly on a broken payload", () => {
    expect(() => buildLiveEvents({ data: "nope" }, { data: {} })).toThrow(/data must be an array/);
    expect(() => buildLiveEvents({ data: [{ id: "x", announced_at: "whenever" }] }, { data: {} })).toThrow(
      /unparseable announced_at/,
    );
  });
});

describe("buildSnapshot", () => {
  it("takes the check time from the payload and the window start from the cutoff", () => {
    const snapshot = buildSnapshot({ meta: { generated_at: "2026-10-13T09:39:00.852Z" } });
    expect(snapshot).toEqual({
      checkedAt: "2026-10-13T17:39:00.852+08:00",
      historyFrom: "2026-10-11T12:01:09.000+08:00",
      source: "https://codex-resets.com",
      curator: "codex-resets.com",
    });
  });

  it("requires the upstream check time", () => {
    expect(() => buildSnapshot({ meta: {} })).toThrow(/generated_at/);
  });
});

describe("mergeCycles", () => {
  it("unions live confirmed dates into the accumulator, sorted", () => {
    const events = buildLiveEvents({ data: [NEWLY_CLOSED] }, { data: { scheduled_reset: SCHEDULED } });
    expect(mergeCycles(["2026-10-08", "2026-10-11"], events)).toEqual([
      "2026-10-08",
      "2026-10-11",
      "2026-10-13",
    ]);
  });

  it("never drops known cycles and ignores announced events", () => {
    expect(mergeCycles(["2025-09-17"], [mapScheduled(SCHEDULED)])).toEqual(["2025-09-17"]);
  });
});

describe("renderModule", () => {
  it("emits the provenance header and the validateResets wrapper", () => {
    const rendered = renderModule(buildSnapshot({ meta: { generated_at: "2026-10-13T09:39:00.852Z" } }), [
      mapReset(NEWLY_CLOSED),
    ]);
    expect(rendered).toMatch(/^\/\/ Codex 重置记录 · 实时段/);
    expect(rendered).toMatch(/依其条款免费使用、展示处署名链接/);
    expect(rendered).toMatch(/import \{ validateResets/);
    expect(rendered).toMatch(/export const resets = validateResets\(/);
    expect(rendered).toContain('"id": "2110000000000000001"');
    expect(rendered).toContain('"zh": null');
  });
});
