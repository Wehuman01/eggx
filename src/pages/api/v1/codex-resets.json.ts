import { jsonResponse } from "../../../lib/api";
import { byTimeDesc, confirmedResetDates, intervalsInDays, summarizeIntervals } from "../../../lib/resets";
import { resets, resetSnapshot } from "../../../content/resets";

export const GET = () => {
  const summary = summarizeIntervals(intervalsInDays(confirmedResetDates(resets)));
  return jsonResponse({
    schemaVersion: "2.0",
    data: {
      snapshot: resetSnapshot,
      intervalStats: summary,
      events: byTimeDesc(resets),
    },
  });
};
