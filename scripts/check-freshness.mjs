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
//
// ---------------------------------------------------------------------------
// 第二道检查：人工维护的羊毛登记表（src/content/offers.ts）
//
// 上面那道哨兵盯的是机器同步的两份文件，盯不到人工维护的 offers.ts ——
// 2026-10-21 之后整整 24 天没人动过目录，线上挂着过时的免费额度
// （Claude Max 20x 早已改成 Claude Ultra、Inception 的免费赠额在关停倒计时、
// OpenCode Zen 的免费模型名单换了两轮血），没有任何告警。这就是这道检查
// 存在的原因：每条在架条目的 lastVerified 都得有人真的去官方页核过一遍，
// 超过 30 天没复核就报红。
//
// 判红的两类情况：
//   stale  — 在架条目的 lastVerified 超过 30 天没推进（该去重新核了）
//   broken — 在架条目根本没有 lastVerified（登记表的硬伤，不该出现）
//
// 不检查的：archived 条目（归档区是历史轨迹）、已过 expiry 的条目
// （按日期自然退休，不需要再核）。
//
// 注意这道检查**不会拦发布**：freshness 是独立工作流，deploy 只挂在
// CI / 三个 Sync 工作流上（见 .github/workflows/deploy.yml），所以目录
// 发臭只会在这里报警，不会挡住站点更新。处置方式是重跑核实、刷新
// lastVerified，而不是改 CI。

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

// --- offers.ts（人工维护的羊毛登记表） -------------------------------------

/** A live offer must be re-verified within this window. */
export const OFFER_STALE_AFTER_MS = 30 * 24 * 3_600_000;

const OFFERS_FILE = new URL("../src/content/offers.ts", import.meta.url);

/** Parse the per-entry facts we need out of the TS registry without importing
    it (the file imports the Astro-side schema, which is not loadable here).
    Entry blocks are delimited by the two-space-indented closing brace; the
    entry-level fields always sit at four spaces (nested zh/en fields are
    deeper), so the indentation is what tells an entry's own fields apart. */
export function extractOfferVerifications(source) {
  const out = [];
  for (const block of source.split(/\n {2}\},\n/)) {
    const id = block.match(/^ {4}id: "([^"]+)"/m)?.[1];
    if (!id) continue;
    out.push({
      id,
      archived: /^ {4}archived: true/m.test(block),
      expiry: block.match(/^ {4}expiry: "([^"]+)"/m)?.[1] ?? null,
      lastVerified: block.match(/^ {4}lastVerified: "([^"]+)"/m)?.[1] ?? null,
    });
  }
  return out;
}

/** Same expiry semantics as the site (src/lib/offers.ts): an offer is expired
    once its expiry date is before today (UTC), not before this instant. */
function isExpired(expiry, nowMs) {
  if (!expiry) return false;
  const today = Math.floor(nowMs / 86_400_000) * 86_400_000;
  const target = Date.parse(`${expiry}T00:00:00Z`);
  return Number.isFinite(target) && target < today;
}

/** ok = every live offer was re-verified recently; stale = some live offer has
    not been re-checked in too long; broken = a live offer carries no
    lastVerified at all. */
export function judgeOfferStaleness(offers, nowMs, staleAfterMs = OFFER_STALE_AFTER_MS) {
  const stale = [];
  const broken = [];
  for (const offer of offers) {
    if (offer.archived) continue;
    if (isExpired(offer.expiry, nowMs)) continue;
    if (!offer.lastVerified) {
      broken.push(offer.id);
      continue;
    }
    const ageMs = nowMs - Date.parse(`${offer.lastVerified}T00:00:00Z`);
    if (Number.isNaN(ageMs)) {
      broken.push(offer.id);
      continue;
    }
    if (ageMs > staleAfterMs) stale.push({ id: offer.id, ageMs });
  }
  const level = broken.length > 0 ? "broken" : stale.length > 0 ? "stale" : "ok";
  return { level, stale, broken };
}

async function checkOffers(nowMs) {
  const offers = extractOfferVerifications(await readFile(OFFERS_FILE, "utf8"));
  const verdict = judgeOfferStaleness(offers, nowMs);
  if (verdict.level === "ok") {
    console.log(`Fresh offers: ${offers.length} entries, every live one re-verified within 30d.`);
    return false;
  }
  if (verdict.level === "stale") {
    for (const { id, ageMs } of verdict.stale) {
      console.error(`Stale offer: ${id} last verified ${Math.round(ageMs / 86_400_000)}d ago (>30d).`);
    }
  } else {
    for (const id of verdict.broken) {
      console.error(`Broken offer: ${id} has no lastVerified.`);
    }
  }
  return true;
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
  if (await checkOffers(nowMs)) {
    failed = true;
    console.error("羊毛登记表发臭了：去官方页重新核实，把 lastVerified 刷到今天。");
  }
  if (failed) {
    console.error("同步链路疑似停摆：看 Actions 里 Sync 工作流最近的失败日志，处置手册见本文件头注释。");
    process.exitCode = 1;
  }
}

main();
