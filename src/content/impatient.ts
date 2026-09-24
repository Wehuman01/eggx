// 「等不及了」计数轮次档案（机器维护，请勿手改）：每轮结束（出现更新的
// 已确认重置）时由 scripts/sync-impatient.mjs 把该轮最终人数冻结进
// impatient.json；本文件只是带校验的读取层。计数本体在第三方服务 abacus 上，
// 这里冻结的数字才是持久档案——abacus 丢了数据历史也在。
import raw from "./impatient.json";
import { validateImpatient, type ImpatientSnapshot } from "../lib/impatient";

export const impatientSnapshot: ImpatientSnapshot = validateImpatient(raw);
