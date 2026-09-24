import { jsonResponse } from "../../../lib/api";
import { byTimeDesc, confirmedResetDates, intervalsInDays, summarizeIntervals } from "../../../lib/resets";
import { allResets, allResetSnapshot, backfillSnapshot } from "../../../content/resets-all";

// This endpoint is machine-readable and publicly redistributed, so it carries facts
// and Tibo's original English quotes only. AIHOT's Chinese translations (live feed)
// and eggx's own backfill translations stay on the web pages, which attribute the
// curators. The backfill segment's provenance is exposed via `data.backfill`.
function toPublicEvent(event: (typeof allResets)[number]) {
  return {
    ...event,
    posts: event.posts.map(({ stage, publishedAt, url, en }) => ({ stage, publishedAt, url, en })),
  };
}

export const GET = () => {
  const summary = summarizeIntervals(intervalsInDays(confirmedResetDates(allResets)));
  return jsonResponse({
    schemaVersion: "2.0",
    data: {
      snapshot: allResetSnapshot,
      backfill: backfillSnapshot,
      intervalStats: summary,
      events: byTimeDesc(allResets).map(toPublicEvent),
    },
  });
};
