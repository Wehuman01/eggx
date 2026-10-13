// 合并的重置数据：实时段（resets.ts，由 scripts/sync-codex-resets.mjs 每小时
// 重写）+ 两段冻结历史（resets-backfill.ts：2026-06 前，eggx 自译；
// resets-aihot-era.ts：2026-06-12 起，AIHOT 时代段）。冻结数据必须放在独立
// 文件里——塞进 resets.ts 会在下一次同步时被整文件重写抹掉。
//
// 实时段的引文只有英文原文；中文引文在构建时按原推 ID 从 resets-zh.ts
// （AIHOT 的 AI 翻译，© AIHOT，由 scripts/sync-quotes.mjs 每小时刷新）富化，
// 缺失时保持为 null，由页面回退显示英文。冻结段各自携带定稿引文，不查表。
import { resets, resetSnapshot } from "./resets";
import { resetsAihotEra, aihotEraSnapshot } from "./resets-aihot-era";
import { resetsBackfill, backfillSnapshot } from "./resets-backfill";
import { resetZh } from "./resets-zh";
import { byTimeDesc, type ResetEvent, type ResetSnapshot } from "../lib/resets";

/** zh translation for a post URL, keyed by the tweet id; null when the
    translation table has not caught up with this entry yet. */
function zhFor(url: string): string | null {
  return resetZh[url.split("/status/")[1]] ?? null;
}

const liveWithZh: ResetEvent[] = resets.map((event) => ({
  ...event,
  posts: event.posts.map((post) => ({ ...post, zh: post.zh ?? zhFor(post.url) })),
}));

/** 全部已知事件，新到旧：两段冻结历史 + 实时段。 */
export const allResets: ResetEvent[] = byTimeDesc([
  ...resetsBackfill,
  ...resetsAihotEra,
  ...liveWithZh,
]);

/** 合并窗口的展示快照：核验时间与来源取实时源（它仍在更新），
    窗口起点取最早的回填段。各段完整出处见各自文件的 snapshot。 */
export const allResetSnapshot: ResetSnapshot = {
  checkedAt: resetSnapshot.checkedAt,
  historyFrom: backfillSnapshot.historyFrom,
  source: resetSnapshot.source,
  curator: resetSnapshot.curator,
};

export { backfillSnapshot, aihotEraSnapshot };
