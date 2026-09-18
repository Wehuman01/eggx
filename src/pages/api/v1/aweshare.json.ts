import { jsonResponse } from "../../../lib/api";
import { aweshareOfferings, aweshareSnapshot } from "../../../content/aweshare";

// Public mirror of the hub catalog snapshot: alias, protocols, status, budgets.
// Upstream model identity and live occupancy intentionally stay hub-side
// (see the aweshare page's methodology section).
export const GET = () =>
  jsonResponse({
    schemaVersion: "2.0",
    data: {
      snapshot: aweshareSnapshot,
      offerings: aweshareOfferings,
    },
  });
