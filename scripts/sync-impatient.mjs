// Freeze ended "等不及了" round counts into src/content/impatient.json.
//
// The live counter sits on abacus (a free third-party service); each reset
// cycle gets its own key — codex-reset-impatient-<Beijing date of the latest
// confirmed reset>, exactly what the codex-reset page embeds at build time.
// When a newer confirmed reset shows up (same AIHOT data sync:resets uses),
// the previous round is over: this script reads its final count from abacus
// and records it, so the history survives independently of the third party.
//
// Runs in CI right after sync:resets and before the site rebuild, so the
// frozen value lands in the same deploy that switches the page to the new
// cycle key. Rounds missing because abacus was down are simply skipped —
// the page shows nothing for them — and picked up on a later run. A 404
// reads as 0: the key only exists once somebody clicks.
//
// Rounds before PER_CYCLE_KEYING_SINCE have no per-cycle key; their clicks
// all landed on the legacy global key and are seeded as one aggregate entry
// (cycle: null), which this script never touches.

import { readFile, writeFile } from "node:fs/promises";
import { pathToFileURL } from "node:url";
import { buildEvents, eventTime } from "./sync-resets.mjs";

const API_URL = "https://aihot.news/api/v1/codex-resets";
const ABACUS_BASE = "https://abacus.jasoncameron.dev";
const CONTENT_FILE = new URL("../src/content/impatient.json", import.meta.url);
// Keep in sync with src/lib/impatient.ts (which the script cannot import).
const PER_CYCLE_KEYING_SINCE = "2026-09-23";

export function cycleKey(cycle) {
  return `codex-reset-impatient-${cycle}`;
}

/** Ended, not-yet-frozen per-cycle rounds: distinct Beijing dates of
    confirmed events that are older than the newest confirmed cycle (that one
    is still live) and young enough to have a per-cycle key. */
export function endedRoundsToFreeze(events, knownCycles) {
  const confirmed = events.filter((event) => event.status === "confirmed");
  if (confirmed.length === 0) return [];
  const currentCycle = eventTime(confirmed[0]).slice(0, 10);
  const cycles = new Set(confirmed.map((event) => eventTime(event).slice(0, 10)));
  return [...cycles]
    .filter((cycle) => cycle >= PER_CYCLE_KEYING_SINCE && cycle < currentCycle && !knownCycles.has(cycle))
    .sort()
    .map((cycle) => ({ cycle, key: cycleKey(cycle) }));
}

export async function fetchRoundCount(namespace, key) {
  const response = await fetch(`${ABACUS_BASE}/get/${namespace}/${key}`);
  if (response.status === 404) return 0;
  if (!response.ok) throw new Error(`abacus HTTP ${response.status}`);
  const data = await response.json();
  if (typeof data?.value !== "number") throw new Error("abacus payload has no numeric value");
  return data.value;
}

/** Beijing-wall-clock timestamp in the same +08:00 shape the repo uses. */
export function beijingNow() {
  return new Date(Date.now() + 8 * 3_600_000).toISOString().replace("Z", "+08:00");
}

async function main() {
  const snapshot = JSON.parse(await readFile(CONTENT_FILE, "utf8"));
  const knownCycles = new Set(snapshot.rounds.map((round) => round.cycle).filter(Boolean));

  // One polite anonymous GET per run — same contract as sync-resets
  // (AIHOT rescans every 15 minutes and caches for 60 seconds).
  const response = await fetch(API_URL, {
    headers: { "user-agent": "eggx-sync/1.0 (+https://eggx.wehuman.top; non-commercial sync from AIHOT)" },
  });
  if (!response.ok) {
    console.error(`AIHOT returned HTTP ${response.status}.`);
    process.exitCode = 1;
    return;
  }
  const events = buildEvents(await response.json());

  const pending = endedRoundsToFreeze(events, knownCycles);
  if (pending.length === 0) {
    console.log("No ended rounds to freeze.");
    return;
  }

  let frozen = 0;
  for (const { cycle, key } of pending) {
    try {
      const final = await fetchRoundCount(snapshot.namespace, key);
      snapshot.rounds.push({ key, cycle, final, frozenAt: beijingNow() });
      frozen += 1;
      console.log(`Froze ${key}: ${final}.`);
    } catch (error) {
      console.warn(`Could not freeze ${key} (${error.message}); leaving it for a later run.`);
    }
  }

  snapshot.rounds.sort((a, b) => (a.cycle ?? "").localeCompare(b.cycle ?? ""));
  const rendered = `${JSON.stringify(snapshot, null, 2)}\n`;
  const current = await readFile(CONTENT_FILE, "utf8").catch(() => "");
  if (rendered === current) {
    console.log("No content change.");
    return;
  }
  await writeFile(CONTENT_FILE, rendered);
  console.log(`Wrote src/content/impatient.json: ${frozen} round(s) frozen.`);
}

// Only run when executed directly; importing this module (tests) must not
// touch the network.
if (import.meta.url === pathToFileURL(process.argv[1] ?? "").href) {
  main();
}
