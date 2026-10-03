// Staleness tripwire: are the machine-synced registries actually advancing?
//
// Why: the sync workflows can fail silently for days (2026-09-30 → 10-03 the
// resets sync died 33 runs in a row and nobody noticed until the data looked
// old). The sentinel in sync-resets.yml watches upstream AIHOT, but it runs
// INSIDE the sync workflow — it can't alert when the workflow itself is the
// thing that's dead. This script has no such dependency: it only reads the
// generated registries in the repo and compares their checkedAt to the wall
// clock. Both syncs run hourly, so 48h without a newer checkedAt means the
// pipeline has been broken for two full days — far beyond normal jitter
// (upstream rescans every 15 minutes), well before human eyeballs would
// notice. It never fetches anything and never writes anything.
//
// Runbook if it fires:
//   1. GitHub → Actions：Sync codex resets / Sync aweshare catalog 最近的
//      schedule run 是不是红的？拿失败日志排查（历史案例：commit 步骤的
//      git pull --rebase 被未提交产物卡死）。
//   2. 工作流全绿但 checkedAt 不动 → 上游停更（AIHOT / aweshare hub），
//      分别见 scripts/check-resets-sentinel.mjs 文件头与 sync-aweshare 的
//      处置说明。

import { readFile } from "node:fs/promises";

const REGISTRIES = [
  { file: new URL("../src/content/resets.ts", import.meta.url), label: "resets" },
  { file: new URL("../src/content/aweshare.ts", import.meta.url), label: "aweshare" },
];
const STALE_AFTER_MS = 48 * 3_600_000;

/** Snapshot checkedAt of a generated registry (first match — the snapshot
    header is the only place the field appears in either file). */
export function extractCheckedAt(source) {
  return source.match(/"checkedAt":\s*"([^"]+)"/)?.[1] ?? null;
}

/** ok = fresh enough; stale = older than the threshold; broken = missing or
    unparseable (the generators must always emit checkedAt — anything else is
    a bug worth failing on, not something to quietly skip). */
export function judgeStaleness(iso, nowMs, staleAfterMs = STALE_AFTER_MS) {
  const ageMs = iso === null ? NaN : nowMs - Date.parse(iso);
  if (Number.isNaN(ageMs)) return { level: "broken", ageMs: null };
  if (ageMs > staleAfterMs) return { level: "stale", ageMs };
  return { level: "ok", ageMs };
}

function describeAge(ageMs) {
  return ageMs === null ? "?" : `${Math.round(ageMs / 3_600_000)}h`;
}

async function main() {
  const nowMs = Date.now();
  let failed = false;
  for (const { file, label } of REGISTRIES) {
    const verdict = judgeStaleness(extractCheckedAt(await readFile(file, "utf8")), nowMs);
    if (verdict.level === "ok") {
      console.log(`Fresh ${label}: checkedAt ${describeAge(verdict.ageMs)} old.`);
      continue;
    }
    failed = true;
    if (verdict.level === "stale") {
      console.error(`Stale ${label}: checkedAt ${describeAge(verdict.ageMs)} old (>48h).`);
    } else {
      console.error(`Broken ${label}: no parseable checkedAt in the generated registry.`);
    }
  }
  if (failed) {
    console.error("同步链路疑似停摆：看 Actions 里 Sync 工作流最近的失败日志，处置手册见本文件头注释。");
    process.exitCode = 1;
  }
}

main();
