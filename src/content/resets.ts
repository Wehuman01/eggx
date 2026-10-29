// Codex 重置记录 · 实时段（由 scripts/sync-codex-resets.mjs 每小时自动生成，请勿手改）。
// 数据来自 codex-resets.com 公开 API（https://codex-resets.com/api/v1/resets，
// 依其条款免费使用、展示处署名链接，见 https://codex-resets.com/api/docs）。
// 本段只收录 2026-10-11T04:01:09.000Z 之后的新事件；更早的历史冻结在 resets-backfill.ts
// （2026-06 前，eggx 自译）与 resets-aihot-era.ts（2026-06-12 起，AIHOT 时代段）。
// 口径：/resets 条目为该信源已了结的重置记录 → status=confirmed；scheduled_reset
// 为其待执行公告 → status=announced（信源了结后同一事件在后续同步转为 confirmed）。
// 时间取帖子发布时间，非精确执行时间。en 为 Tibo 原文（已去文末 t.co 短链；
// 上游可能截断长帖，完整内容见原推链接）；zh 留空，由 src/content/resets-all.ts
// 在构建时按帖子 ID 从 resets-zh.ts（AIHOT 的 AI 翻译，© AIHOT）富化，
// 缺失时页面回退显示 en。时间均为北京时间 UTC+8。

import { validateResets, type ResetSnapshot } from "../lib/resets";

export const resetSnapshot: ResetSnapshot = {
  "checkedAt": "2026-10-30T07:22:25.541+08:00",
  "historyFrom": "2026-10-11T12:01:09.000+08:00",
  "source": "https://codex-resets.com",
  "curator": "codex-resets.com"
};

export const resets = validateResets(
[
  {
    "id": "2115330127886463244",
    "type": "reset",
    "status": "confirmed",
    "scope": null,
    "confirmedAt": null,
    "occurredOn": null,
    "scheduleFrom": null,
    "scheduleThrough": null,
    "posts": [
      {
        "stage": "confirm",
        "publishedAt": "2026-10-28T14:29:38.000+08:00",
        "url": "https://x.com/thsottiaux/status/2115330127886463244",
        "zh": null,
        "en": "And it's done. See you tomorrow for some good news."
      }
    ]
  },
  {
    "id": "observed-2114588174249071102",
    "type": "reset",
    "status": "confirmed",
    "scope": null,
    "confirmedAt": null,
    "occurredOn": null,
    "scheduleFrom": null,
    "scheduleThrough": null,
    "posts": [
      {
        "stage": "confirm",
        "publishedAt": "2026-10-26T15:00:00.000+08:00",
        "url": "https://x.com/thsottiaux/status/2114588174249071102",
        "zh": null,
        "en": "Codex usage limits have been reset. Check your limits."
      }
    ]
  },
  {
    "id": "2114237083652882932",
    "type": "reset",
    "status": "confirmed",
    "scope": null,
    "confirmedAt": null,
    "occurredOn": null,
    "scheduleFrom": null,
    "scheduleThrough": null,
    "posts": [
      {
        "stage": "confirm",
        "publishedAt": "2026-10-25T14:06:16.000+08:00",
        "url": "https://x.com/thsottiaux/status/2114237083652882932",
        "zh": null,
        "en": "It is all propagated. Enjoy some mad codexing tomorrow. Fun week ahead too."
      }
    ]
  },
  {
    "id": "observed-2113492502355562875",
    "type": "reset",
    "status": "confirmed",
    "scope": null,
    "confirmedAt": null,
    "occurredOn": null,
    "scheduleFrom": null,
    "scheduleThrough": null,
    "posts": [
      {
        "stage": "confirm",
        "publishedAt": "2026-10-24T01:00:00.000+08:00",
        "url": "https://x.com/thsottiaux/status/2113492502355562875",
        "zh": null,
        "en": "Codex usage limits have been reset. Check your limits."
      }
    ]
  },
  {
    "id": "observed-2113162413008884099",
    "type": "reset",
    "status": "confirmed",
    "scope": null,
    "confirmedAt": null,
    "occurredOn": null,
    "scheduleFrom": null,
    "scheduleThrough": null,
    "posts": [
      {
        "stage": "confirm",
        "publishedAt": "2026-10-23T01:00:00.000+08:00",
        "url": "https://x.com/thsottiaux/status/2113162413008884099",
        "zh": null,
        "en": "Codex usage limits have been reset. Check your limits."
      }
    ]
  },
  {
    "id": "2112432076767289678",
    "type": "reset",
    "status": "confirmed",
    "scope": null,
    "confirmedAt": null,
    "occurredOn": null,
    "scheduleFrom": null,
    "scheduleThrough": null,
    "posts": [
      {
        "stage": "confirm",
        "publishedAt": "2026-10-20T14:33:48.000+08:00",
        "url": "https://x.com/thsottiaux/status/2112432076767289678",
        "zh": null,
        "en": "Day 15/ Nevermind, we're still cooking... and reset. Enjoy."
      }
    ]
  },
  {
    "id": "2111566005684289735",
    "type": "reset",
    "status": "confirmed",
    "scope": null,
    "confirmedAt": null,
    "occurredOn": null,
    "scheduleFrom": null,
    "scheduleThrough": null,
    "posts": [
      {
        "stage": "confirm",
        "publishedAt": "2026-10-18T05:12:21.000+08:00",
        "url": "https://x.com/thsottiaux/status/2111566005684289735",
        "zh": null,
        "en": "Done"
      }
    ]
  },
  {
    "id": "2110618732666257557",
    "type": "reset",
    "status": "confirmed",
    "scope": null,
    "confirmedAt": null,
    "occurredOn": null,
    "scheduleFrom": null,
    "scheduleThrough": null,
    "posts": [
      {
        "stage": "confirm",
        "publishedAt": "2026-10-15T14:28:13.000+08:00",
        "url": "https://x.com/thsottiaux/status/2110618732666257557",
        "zh": null,
        "en": "Done and dusted"
      }
    ]
  },
  {
    "id": "2109873287853707513",
    "type": "reset",
    "status": "confirmed",
    "scope": null,
    "confirmedAt": null,
    "occurredOn": null,
    "scheduleFrom": null,
    "scheduleThrough": null,
    "posts": [
      {
        "stage": "confirm",
        "publishedAt": "2026-10-13T13:06:06.000+08:00",
        "url": "https://x.com/thsottiaux/status/2109873287853707513",
        "zh": null,
        "en": "What would you like with your side of reset? It's done."
      }
    ]
  }
]
);
