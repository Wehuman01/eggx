// 合并的重置数据：AIHOT 实时同步（resets.ts，由 scripts/sync-resets.mjs 每小时
// 整体重写）+ 一次性回填的更早历史（resets-backfill.ts，冻结）。回填数据必须放在
// 独立文件里——塞进 resets.ts 会在下一次同步时被整文件重写抹掉。
import { resets, resetSnapshot } from "./resets";
import { resetsBackfill, backfillSnapshot } from "./resets-backfill";
import { byTimeDesc, type ResetEvent, type ResetSnapshot } from "../lib/resets";

/** 全部已知事件，新到旧：冻结的回填历史 + AIHOT 实时源。 */
export const allResets: ResetEvent[] = byTimeDesc([...resetsBackfill, ...resets]);

/** 合并窗口的展示快照：核验时间与来源取实时源（它仍在更新），
    窗口起点取回填段最早事件。两段的完整出处分别见各自文件的 snapshot。 */
export const allResetSnapshot: ResetSnapshot = {
  checkedAt: resetSnapshot.checkedAt,
  historyFrom: backfillSnapshot.historyFrom,
  source: resetSnapshot.source,
  curator: resetSnapshot.curator,
};

export { backfillSnapshot };
