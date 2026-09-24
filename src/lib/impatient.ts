// 「等不及了」计数轮次档案的类型、校验与查询。
// 计数本体在第三方服务 abacus 上，key 按最近一次已确认重置的北京日期分轮
// （codex-reset-impatient-<日期>）；一轮结束（出现更新的已确认重置）时，
// scripts/sync-impatient.mjs 把它的最终人数冻结进 src/content/impatient.json。

/** Per-cycle keying starts here; earlier rounds only exist as the legacy
    global key's aggregate (cycle: null in the snapshot). */
export const PER_CYCLE_KEYING_SINCE = "2026-09-23";

export const LEGACY_IMPATIENT_KEY = "codex-reset-impatient";

export interface ImpatientRound {
  /** Abacus counter key. */
  key: string;
  /** Reset-cycle Beijing date (the confirmed event's date); null = the legacy
      pre-keying aggregate that spans many rounds. */
  cycle: string | null;
  /** Final click count at freeze time (404 reads as 0: nobody clicked). */
  final: number;
  /** When the value was frozen, Beijing time ISO string. */
  frozenAt: string;
  /** Optional human context, e.g. what the legacy key aggregates. */
  note?: string;
}

export interface ImpatientSnapshot {
  namespace: string;
  /** Ended rounds, legacy aggregate first, then by cycle ascending. */
  rounds: ImpatientRound[];
}

const ISO_DATETIME = /^\d{4}-\d{2}-\d{2}T/;
const CYCLE_DATE = /^\d{4}-\d{2}-\d{2}$/;

export function cycleKey(cycle: string): string {
  return `codex-reset-impatient-${cycle}`;
}

function validateRound(round: unknown, index: number): ImpatientRound {
  if (!round || typeof round !== "object") {
    throw new Error("ImpatientRound must be an object");
  }
  const obj = round as Record<string, unknown>;
  const where = `rounds[${index}]`;
  if (typeof obj.key !== "string" || obj.key.length === 0) {
    throw new Error(`${where}.key must be a non-empty string`);
  }
  if (obj.cycle !== null && (typeof obj.cycle !== "string" || !CYCLE_DATE.test(obj.cycle))) {
    throw new Error(`${where}.cycle must be a YYYY-MM-DD string or null`);
  }
  // The legacy aggregate is the only round without a cycle, and it must carry
  // the legacy key — per-cycle rounds always name their date.
  if (obj.cycle === null && obj.key !== LEGACY_IMPATIENT_KEY) {
    throw new Error(`${where}: only the legacy key may omit a cycle`);
  }
  if (obj.cycle !== null && obj.key !== cycleKey(obj.cycle)) {
    throw new Error(`${where}.key must match its cycle date`);
  }
  if (typeof obj.final !== "number" || !Number.isInteger(obj.final) || obj.final < 0) {
    throw new Error(`${where}.final must be a non-negative integer`);
  }
  if (typeof obj.frozenAt !== "string" || !ISO_DATETIME.test(obj.frozenAt)) {
    throw new Error(`${where}.frozenAt must be an ISO datetime string`);
  }
  if (obj.note !== undefined && typeof obj.note !== "string") {
    throw new Error(`${where}.note must be a string`);
  }
  return {
    key: obj.key,
    cycle: obj.cycle as string | null,
    final: obj.final,
    frozenAt: obj.frozenAt,
    ...(obj.note !== undefined ? { note: obj.note } : {}),
  };
}

export function validateImpatient(snapshot: unknown): ImpatientSnapshot {
  if (!snapshot || typeof snapshot !== "object") {
    throw new Error("ImpatientSnapshot must be an object");
  }
  const obj = snapshot as Record<string, unknown>;
  if (typeof obj.namespace !== "string" || obj.namespace.length === 0) {
    throw new Error("ImpatientSnapshot.namespace must be a non-empty string");
  }
  if (!Array.isArray(obj.rounds)) {
    throw new Error("ImpatientSnapshot.rounds must be an array");
  }
  const rounds = obj.rounds.map(validateRound);
  const cycles = rounds.filter((r) => r.cycle !== null).map((r) => r.cycle as string);
  if (new Set(cycles).size !== cycles.length) {
    throw new Error("ImpatientSnapshot.rounds has duplicate cycles");
  }
  for (let i = 1; i < rounds.length; i += 1) {
    if ((rounds[i - 1].cycle ?? "") > (rounds[i].cycle ?? "")) {
      throw new Error("ImpatientSnapshot.rounds must be sorted with the legacy round first");
    }
  }
  return { namespace: obj.namespace, rounds };
}

/** The frozen final count of one reset cycle, when it has ended and been frozen. */
export function roundForCycle(
  snapshot: ImpatientSnapshot,
  cycle: string,
): ImpatientRound | null {
  if (cycle < PER_CYCLE_KEYING_SINCE) return null;
  return snapshot.rounds.find((r) => r.cycle === cycle) ?? null;
}

/**
 * The "上一轮" round relative to the given current cycle: the newest frozen
 * round that ended before it. The legacy aggregate counts as a candidate and
 * loses to any dated round. Returns null while the very first round is live.
 */
export function previousRound(
  snapshot: ImpatientSnapshot,
  currentCycle: string,
): ImpatientRound | null {
  let best: ImpatientRound | null = null;
  for (const round of snapshot.rounds) {
    if ((round.cycle ?? "") >= currentCycle) continue;
    if (!best || (round.cycle ?? "") > (best.cycle ?? "")) best = round;
  }
  return best;
}
