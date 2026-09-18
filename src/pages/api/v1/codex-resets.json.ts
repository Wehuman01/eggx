import { jsonResponse } from "../../../lib/api";
import { byTimeDesc, confirmedResetDates, intervalsInDays, summarizeIntervals } from "../../../lib/resets";
import { resets, resetSnapshot } from "../../../content/resets";

// This endpoint is machine-readable and publicly redistributed, so it carries facts
// and Tibo's original English quotes only. AIHOT's Chinese translations stay on the
// web pages, which are non-commercial and attribute the curator.
function toPublicEvent(event: (typeof resets)[number]) {
  return {
    ...event,
    posts: event.posts.map(({ stage, publishedAt, url, en }) => ({ stage, publishedAt, url, en })),
  };
}

export const GET = () => {
  const summary = summarizeIntervals(intervalsInDays(confirmedResetDates(resets)));
  return jsonResponse({
    schemaVersion: "2.0",
    data: {
      snapshot: resetSnapshot,
      intervalStats: summary,
      events: byTimeDesc(resets).map(toPublicEvent),
    },
  });
};
