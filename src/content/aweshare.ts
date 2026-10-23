// aweshare hub 共享模型目录快照（哪些模型现在可用）。
// 本文件由 scripts/sync-aweshare.mjs 自动生成，请勿手改。数据读取自 hub 的
// GET /v1/catalog（只读 consumer token，读取不消耗模型额度），每小时同步一次。
// hub 按线协议逐行登记同一 alias，此处已按 alias 合并（protocols 为该模型支持的协议列表）。
// 只收录公开字段：别名、协议、状态、最近在线、每日额度与并发上限；
// 上游模型来源与实时占用不进仓库。状态与余量是快照时刻的事实，不代表承诺。

import { validateAweshareCatalog, type AweshareSnapshot } from "../lib/aweshare";

export const aweshareSnapshot: AweshareSnapshot = {
  "hubUrl": "https://aweshare.wehuman.top",
  "checkedAt": "2026-10-23T19:11:38.720Z",
  "count": 39
};

export const aweshareOfferings = validateAweshareCatalog(
[
  {
    "producer": "houzhihoujue",
    "alias": "houzhihoujue/qwen3.8-27b",
    "protocols": [
      "openai-chat"
    ],
    "status": "offline",
    "hubCheckAt": "2026-09-24T03:30:31.692Z",
    "degradedSince": null,
    "maxConcurrencyPerUser": 1,
    "maxConcurrentUsers": 3,
    "dailyTokens": 0,
    "usedDailyTokens": 0,
    "shareState": null
  },
  {
    "producer": "hsh2",
    "alias": "hsh2/step-3.7-flash",
    "protocols": [
      "anthropic",
      "openai-chat"
    ],
    "status": "offline",
    "hubCheckAt": null,
    "degradedSince": null,
    "maxConcurrencyPerUser": 1,
    "maxConcurrentUsers": 2,
    "dailyTokens": 1000000000,
    "usedDailyTokens": 0,
    "shareState": null
  },
  {
    "producer": "hub",
    "alias": "hub/agnes-2.5-flash",
    "protocols": [
      "openai-chat"
    ],
    "status": "online",
    "hubCheckAt": "2026-10-22T07:21:40.741Z",
    "degradedSince": null,
    "maxConcurrencyPerUser": 2,
    "maxConcurrentUsers": 2,
    "dailyTokens": 1000000000,
    "usedDailyTokens": 0,
    "shareState": null
  },
  {
    "producer": "hub",
    "alias": "hub/deepseek-v4-flash",
    "protocols": [
      "openai-chat"
    ],
    "status": "online",
    "hubCheckAt": "2026-10-22T07:21:43.169Z",
    "degradedSince": null,
    "maxConcurrencyPerUser": 1,
    "maxConcurrentUsers": 2,
    "dailyTokens": 10000000,
    "usedDailyTokens": 0,
    "shareState": null
  },
  {
    "producer": "hub",
    "alias": "hub/glm-5.2",
    "protocols": [
      "openai-chat"
    ],
    "status": "online",
    "hubCheckAt": "2026-10-21T04:55:58.116Z",
    "degradedSince": null,
    "maxConcurrencyPerUser": 1,
    "maxConcurrentUsers": 2,
    "dailyTokens": 5000000,
    "usedDailyTokens": 0,
    "shareState": null
  },
  {
    "producer": "hub",
    "alias": "hub/glm-5.3",
    "protocols": [
      "anthropic",
      "openai-chat"
    ],
    "status": "online",
    "hubCheckAt": "2026-10-23T06:34:44.776Z",
    "degradedSince": null,
    "maxConcurrencyPerUser": 1,
    "maxConcurrentUsers": 3,
    "dailyTokens": 10000000,
    "usedDailyTokens": 0,
    "shareState": null
  },
  {
    "producer": "hub",
    "alias": "hub/glm-5.3-flash",
    "protocols": [
      "anthropic",
      "openai-chat"
    ],
    "status": "online",
    "hubCheckAt": "2026-10-23T06:35:05.540Z",
    "degradedSince": null,
    "maxConcurrencyPerUser": 1,
    "maxConcurrentUsers": 5,
    "dailyTokens": 20000000,
    "usedDailyTokens": 0,
    "shareState": null
  },
  {
    "producer": "hub",
    "alias": "hub/kimi-for-coding",
    "protocols": [
      "anthropic",
      "openai-chat"
    ],
    "status": "online",
    "hubCheckAt": "2026-10-23T09:25:39.270Z",
    "degradedSince": null,
    "maxConcurrencyPerUser": 1,
    "maxConcurrentUsers": 2,
    "dailyTokens": 5000000,
    "usedDailyTokens": 0,
    "shareState": null
  },
  {
    "producer": "hub",
    "alias": "hub/kimi-k3",
    "protocols": [
      "anthropic",
      "openai-chat"
    ],
    "status": "online",
    "hubCheckAt": "2026-10-23T09:25:39.268Z",
    "degradedSince": null,
    "maxConcurrencyPerUser": 1,
    "maxConcurrentUsers": 2,
    "dailyTokens": 5000000,
    "usedDailyTokens": 0,
    "shareState": null
  },
  {
    "producer": "hub",
    "alias": "hub/sensenova-6.8-flash-lite",
    "protocols": [
      "openai-chat"
    ],
    "status": "online",
    "hubCheckAt": "2026-10-22T07:21:49.380Z",
    "degradedSince": null,
    "maxConcurrencyPerUser": 1,
    "maxConcurrentUsers": 2,
    "dailyTokens": 10000000,
    "usedDailyTokens": 0,
    "shareState": null
  },
  {
    "producer": "hub",
    "alias": "hub/step-5-preview-1",
    "protocols": [
      "anthropic",
      "openai-chat"
    ],
    "status": "online",
    "hubCheckAt": "2026-10-23T09:06:46.720Z",
    "degradedSince": null,
    "maxConcurrencyPerUser": 3,
    "maxConcurrentUsers": 3,
    "dailyTokens": 1000000000,
    "usedDailyTokens": 0,
    "shareState": null
  },
  {
    "producer": "hub",
    "alias": "hub/step-5-preview-2",
    "protocols": [
      "anthropic",
      "openai-chat"
    ],
    "status": "online",
    "hubCheckAt": "2026-10-23T09:06:48.886Z",
    "degradedSince": null,
    "maxConcurrencyPerUser": 1,
    "maxConcurrentUsers": 3,
    "dailyTokens": 10000000,
    "usedDailyTokens": 0,
    "shareState": null
  },
  {
    "producer": "jiyu2",
    "alias": "jiyu2/gpt-5.6-luna",
    "protocols": [
      "openai-responses"
    ],
    "status": "online",
    "hubCheckAt": "2026-10-22T07:22:16.742Z",
    "degradedSince": null,
    "maxConcurrencyPerUser": 1,
    "maxConcurrentUsers": 2,
    "dailyTokens": 10000000,
    "usedDailyTokens": 0,
    "shareState": null
  },
  {
    "producer": "jiyu2",
    "alias": "jiyu2/gpt-5.6-terra",
    "protocols": [
      "openai-responses"
    ],
    "status": "online",
    "hubCheckAt": "2026-10-22T07:22:29.886Z",
    "degradedSince": null,
    "maxConcurrencyPerUser": 1,
    "maxConcurrentUsers": 2,
    "dailyTokens": 1000000,
    "usedDailyTokens": 0,
    "shareState": null
  },
  {
    "producer": "leidell",
    "alias": "leidell/minimax-m2.7",
    "protocols": [
      "openai-chat"
    ],
    "status": "online",
    "hubCheckAt": "2026-10-22T07:22:32.107Z",
    "degradedSince": null,
    "maxConcurrencyPerUser": 2,
    "maxConcurrentUsers": 3,
    "dailyTokens": 1000000,
    "usedDailyTokens": 0,
    "shareState": null
  },
  {
    "producer": "leidell",
    "alias": "leidell/minimax-m3",
    "protocols": [
      "openai-chat"
    ],
    "status": "online",
    "hubCheckAt": "2026-10-22T07:22:33.241Z",
    "degradedSince": null,
    "maxConcurrencyPerUser": 2,
    "maxConcurrentUsers": 3,
    "dailyTokens": 1000000,
    "usedDailyTokens": 0,
    "shareState": null
  },
  {
    "producer": "leidell",
    "alias": "leidell/mimo-v2.5",
    "protocols": [
      "openai-chat"
    ],
    "status": "degraded",
    "hubCheckAt": "2026-09-01T08:35:53.778Z",
    "degradedSince": "2026-10-23T18:00:02.728Z",
    "maxConcurrencyPerUser": 2,
    "maxConcurrentUsers": 3,
    "dailyTokens": 1000000,
    "usedDailyTokens": 0,
    "shareState": null
  },
  {
    "producer": "leidell",
    "alias": "leidell/mimo-v2.5-pro",
    "protocols": [
      "openai-chat"
    ],
    "status": "degraded",
    "hubCheckAt": "2026-09-02T03:22:14.328Z",
    "degradedSince": "2026-10-23T18:00:02.728Z",
    "maxConcurrencyPerUser": 2,
    "maxConcurrentUsers": 3,
    "dailyTokens": 1000000,
    "usedDailyTokens": 0,
    "shareState": null
  },
  {
    "producer": "leidell",
    "alias": "leidell/step-3.7-flash",
    "protocols": [
      "openai-chat"
    ],
    "status": "degraded",
    "hubCheckAt": "2026-09-03T04:34:38.066Z",
    "degradedSince": "2026-10-23T18:00:02.728Z",
    "maxConcurrencyPerUser": 2,
    "maxConcurrentUsers": 3,
    "dailyTokens": 1000000,
    "usedDailyTokens": 0,
    "shareState": null
  },
  {
    "producer": "leidell",
    "alias": "leidell/step-router-v1",
    "protocols": [
      "openai-chat"
    ],
    "status": "degraded",
    "hubCheckAt": "2026-09-03T15:42:04.000Z",
    "degradedSince": "2026-10-23T18:00:02.728Z",
    "maxConcurrencyPerUser": 2,
    "maxConcurrentUsers": 3,
    "dailyTokens": 1000000,
    "usedDailyTokens": 0,
    "shareState": null
  },
  {
    "producer": "mini2",
    "alias": "mini2/qwen3.5-0.8b",
    "protocols": [
      "openai-chat"
    ],
    "status": "online",
    "hubCheckAt": "2026-10-22T07:22:34.113Z",
    "degradedSince": null,
    "maxConcurrencyPerUser": 1,
    "maxConcurrentUsers": 2,
    "dailyTokens": 10000000,
    "usedDailyTokens": 0,
    "shareState": null
  },
  {
    "producer": "peng1",
    "alias": "peng1/cohere-north-mini-code-openrouter",
    "protocols": [
      "openai-chat"
    ],
    "status": "online",
    "hubCheckAt": "2026-10-22T07:22:35.487Z",
    "degradedSince": null,
    "maxConcurrencyPerUser": 1,
    "maxConcurrentUsers": 1,
    "dailyTokens": 1000000,
    "usedDailyTokens": 0,
    "shareState": null
  },
  {
    "producer": "peng1",
    "alias": "peng1/deepseek-v4.1-flash-q",
    "protocols": [
      "openai-chat"
    ],
    "status": "online",
    "hubCheckAt": null,
    "degradedSince": null,
    "maxConcurrencyPerUser": 1,
    "maxConcurrentUsers": 1,
    "dailyTokens": 10000000,
    "usedDailyTokens": 0,
    "shareState": null
  },
  {
    "producer": "peng1",
    "alias": "peng1/deepseek-v4.1-flash-wb",
    "protocols": [
      "openai-chat"
    ],
    "status": "online",
    "hubCheckAt": "2026-10-22T04:20:24.943Z",
    "degradedSince": null,
    "maxConcurrencyPerUser": 1,
    "maxConcurrentUsers": 1,
    "dailyTokens": 5000000,
    "usedDailyTokens": 0,
    "shareState": null
  },
  {
    "producer": "peng1",
    "alias": "peng1/glm-5.3-flash-q",
    "protocols": [
      "openai-chat"
    ],
    "status": "online",
    "hubCheckAt": null,
    "degradedSince": null,
    "maxConcurrencyPerUser": 1,
    "maxConcurrentUsers": 1,
    "dailyTokens": 2000000,
    "usedDailyTokens": 0,
    "shareState": null
  },
  {
    "producer": "peng1",
    "alias": "peng1/gpt-6-luna",
    "protocols": [
      "openai-responses"
    ],
    "status": "online",
    "hubCheckAt": "2026-10-23T07:42:19.931Z",
    "degradedSince": null,
    "maxConcurrencyPerUser": 1,
    "maxConcurrentUsers": 2,
    "dailyTokens": 10000000,
    "usedDailyTokens": 0,
    "shareState": null
  },
  {
    "producer": "peng1",
    "alias": "peng1/gpt-6.1-sol",
    "protocols": [
      "openai-responses"
    ],
    "status": "online",
    "hubCheckAt": "2026-10-23T07:42:27.435Z",
    "degradedSince": null,
    "maxConcurrencyPerUser": 1,
    "maxConcurrentUsers": 2,
    "dailyTokens": 1000000,
    "usedDailyTokens": 0,
    "shareState": null
  },
  {
    "producer": "peng1",
    "alias": "peng1/hy3-wb",
    "protocols": [
      "openai-chat"
    ],
    "status": "online",
    "hubCheckAt": "2026-10-22T07:22:51.535Z",
    "degradedSince": null,
    "maxConcurrencyPerUser": 1,
    "maxConcurrentUsers": 1,
    "dailyTokens": 20000000,
    "usedDailyTokens": 0,
    "shareState": null
  },
  {
    "producer": "peng1",
    "alias": "peng1/hy4-preview-wb",
    "protocols": [
      "openai-chat"
    ],
    "status": "online",
    "hubCheckAt": "2026-10-22T07:22:52.898Z",
    "degradedSince": null,
    "maxConcurrencyPerUser": 1,
    "maxConcurrentUsers": 1,
    "dailyTokens": 1000000,
    "usedDailyTokens": 0,
    "shareState": null
  },
  {
    "producer": "peng1",
    "alias": "peng1/kimi-k2.8-q",
    "protocols": [
      "openai-chat"
    ],
    "status": "online",
    "hubCheckAt": null,
    "degradedSince": null,
    "maxConcurrencyPerUser": 1,
    "maxConcurrentUsers": 1,
    "dailyTokens": 1000000,
    "usedDailyTokens": 0,
    "shareState": null
  },
  {
    "producer": "peng1",
    "alias": "peng1/kimi-k3-q",
    "protocols": [
      "openai-chat"
    ],
    "status": "online",
    "hubCheckAt": null,
    "degradedSince": null,
    "maxConcurrencyPerUser": 1,
    "maxConcurrentUsers": 1,
    "dailyTokens": 1000000,
    "usedDailyTokens": 0,
    "shareState": null
  },
  {
    "producer": "peng1",
    "alias": "peng1/kimi-k3-wb",
    "protocols": [
      "openai-chat"
    ],
    "status": "online",
    "hubCheckAt": "2026-10-22T07:22:58.594Z",
    "degradedSince": null,
    "maxConcurrencyPerUser": 1,
    "maxConcurrentUsers": 1,
    "dailyTokens": 1000000,
    "usedDailyTokens": 0,
    "shareState": null
  },
  {
    "producer": "peng1",
    "alias": "peng1/minimax-m3.1-flash-openrouter",
    "protocols": [
      "openai-chat"
    ],
    "status": "online",
    "hubCheckAt": "2026-10-22T07:23:00.265Z",
    "degradedSince": null,
    "maxConcurrencyPerUser": 1,
    "maxConcurrentUsers": 1,
    "dailyTokens": 1000000,
    "usedDailyTokens": 0,
    "shareState": null
  },
  {
    "producer": "peng1",
    "alias": "peng1/minimax-m3.1-flash-q",
    "protocols": [
      "openai-chat"
    ],
    "status": "online",
    "hubCheckAt": null,
    "degradedSince": null,
    "maxConcurrencyPerUser": 1,
    "maxConcurrentUsers": 1,
    "dailyTokens": 2000000,
    "usedDailyTokens": 0,
    "shareState": null
  },
  {
    "producer": "peng1",
    "alias": "peng1/nemotron-3.5-lightning-openrouter",
    "protocols": [
      "openai-chat"
    ],
    "status": "online",
    "hubCheckAt": "2026-10-22T07:23:05.992Z",
    "degradedSince": null,
    "maxConcurrencyPerUser": 1,
    "maxConcurrentUsers": 1,
    "dailyTokens": 1000000,
    "usedDailyTokens": 0,
    "shareState": null
  },
  {
    "producer": "peng1",
    "alias": "peng1/nvidia-nemotron-3-ultra-public-data-only",
    "protocols": [
      "openai-chat"
    ],
    "status": "online",
    "hubCheckAt": "2026-10-22T07:23:06.966Z",
    "degradedSince": null,
    "maxConcurrencyPerUser": 1,
    "maxConcurrentUsers": 1,
    "dailyTokens": 1000000,
    "usedDailyTokens": 0,
    "shareState": null
  },
  {
    "producer": "peng1",
    "alias": "peng1/qwen3.8-flash-q",
    "protocols": [
      "openai-chat"
    ],
    "status": "online",
    "hubCheckAt": null,
    "degradedSince": null,
    "maxConcurrencyPerUser": 1,
    "maxConcurrentUsers": 1,
    "dailyTokens": 10000000,
    "usedDailyTokens": 0,
    "shareState": null
  },
  {
    "producer": "peng1",
    "alias": "peng1/qwen3.8-max-q",
    "protocols": [
      "openai-chat"
    ],
    "status": "online",
    "hubCheckAt": null,
    "degradedSince": null,
    "maxConcurrencyPerUser": 1,
    "maxConcurrentUsers": 1,
    "dailyTokens": 1000000,
    "usedDailyTokens": 0,
    "shareState": null
  },
  {
    "producer": "peng1",
    "alias": "peng1/step-5-preview-wb",
    "protocols": [
      "openai-chat"
    ],
    "status": "online",
    "hubCheckAt": "2026-10-22T07:23:16.266Z",
    "degradedSince": null,
    "maxConcurrencyPerUser": 1,
    "maxConcurrentUsers": 1,
    "dailyTokens": 5000000,
    "usedDailyTokens": 0,
    "shareState": null
  }
]
);
