// aweshare hub 共享模型目录快照（哪些模型现在可用）。
// 本文件由 scripts/sync-aweshare.mjs 自动生成，请勿手改。数据读取自 hub 的
// GET /v1/catalog（只读 consumer token，读取不消耗模型额度），每小时同步一次。
// hub 按线协议逐行登记同一 alias，此处已按 alias 合并（protocols 为该模型支持的协议列表）。
// 只收录公开字段：别名、协议、状态、最近在线、每日额度与并发上限；
// 上游模型来源与实时占用不进仓库。状态与余量是快照时刻的事实，不代表承诺。

import { validateAweshareCatalog, type AweshareSnapshot } from "../lib/aweshare";

export const aweshareSnapshot: AweshareSnapshot = {
  "hubUrl": "https://aweshare.wehuman.top",
  "checkedAt": "2026-09-22T22:07:43.926Z",
  "count": 44
};

export const aweshareOfferings = validateAweshareCatalog(
[
  {
    "producer": "houzhihoujue",
    "alias": "houzhihoujue/qwen3.8-27b",
    "protocols": [
      "openai-chat"
    ],
    "status": "online",
    "hubCheckAt": "2026-09-22T18:14:39.477Z",
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
    "hubCheckAt": "2026-09-17T09:04:06.659Z",
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
    "hubCheckAt": "2026-09-22T08:35:06.512Z",
    "degradedSince": null,
    "maxConcurrencyPerUser": 1,
    "maxConcurrentUsers": 2,
    "dailyTokens": 10000000,
    "usedDailyTokens": 0,
    "shareState": null
  },
  {
    "producer": "hub",
    "alias": "hub/deepseek-v4-flash-weixin",
    "protocols": [
      "openai-chat"
    ],
    "status": "online",
    "hubCheckAt": "2026-09-22T06:43:43.424Z",
    "degradedSince": null,
    "maxConcurrencyPerUser": 2,
    "maxConcurrentUsers": 2,
    "dailyTokens": 30000000,
    "usedDailyTokens": 0,
    "shareState": null
  },
  {
    "producer": "hub",
    "alias": "hub/deepseek-v4-pro",
    "protocols": [
      "anthropic",
      "openai-chat"
    ],
    "status": "online",
    "hubCheckAt": "2026-09-21T16:30:08.569Z",
    "degradedSince": null,
    "maxConcurrencyPerUser": 1,
    "maxConcurrentUsers": 2,
    "dailyTokens": 1000000,
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
    "hubCheckAt": "2026-09-22T08:35:06.512Z",
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
    "hubCheckAt": "2026-09-22T17:10:06.462Z",
    "degradedSince": null,
    "maxConcurrencyPerUser": 1,
    "maxConcurrentUsers": 3,
    "dailyTokens": 20000000,
    "usedDailyTokens": 2644109,
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
    "hubCheckAt": "2026-09-22T17:10:18.116Z",
    "degradedSince": null,
    "maxConcurrencyPerUser": 1,
    "maxConcurrentUsers": 5,
    "dailyTokens": 50000000,
    "usedDailyTokens": 2180345,
    "shareState": null
  },
  {
    "producer": "hub",
    "alias": "hub/kimi-k2.7-code",
    "protocols": [
      "anthropic",
      "openai-chat"
    ],
    "status": "online",
    "hubCheckAt": "2026-09-21T16:29:56.427Z",
    "degradedSince": null,
    "maxConcurrencyPerUser": 1,
    "maxConcurrentUsers": 2,
    "dailyTokens": 1000000,
    "usedDailyTokens": 0,
    "shareState": null
  },
  {
    "producer": "hub",
    "alias": "hub/minimax-m3",
    "protocols": [
      "anthropic",
      "openai-chat"
    ],
    "status": "online",
    "hubCheckAt": "2026-09-21T16:29:56.427Z",
    "degradedSince": null,
    "maxConcurrencyPerUser": 1,
    "maxConcurrentUsers": 2,
    "dailyTokens": 1000000,
    "usedDailyTokens": 0,
    "shareState": null
  },
  {
    "producer": "hub",
    "alias": "hub/seed-evolving",
    "protocols": [
      "anthropic",
      "openai-chat"
    ],
    "status": "online",
    "hubCheckAt": "2026-09-21T16:29:56.427Z",
    "degradedSince": null,
    "maxConcurrencyPerUser": 1,
    "maxConcurrentUsers": 2,
    "dailyTokens": 1000000,
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
    "hubCheckAt": "2026-09-22T08:35:06.512Z",
    "degradedSince": null,
    "maxConcurrencyPerUser": 1,
    "maxConcurrentUsers": 2,
    "dailyTokens": 10000000,
    "usedDailyTokens": 0,
    "shareState": null
  },
  {
    "producer": "hub",
    "alias": "hub/step-3.7-flash-1",
    "protocols": [
      "anthropic",
      "openai-chat"
    ],
    "status": "online",
    "hubCheckAt": "2026-09-22T17:28:41.806Z",
    "degradedSince": null,
    "maxConcurrencyPerUser": 1,
    "maxConcurrentUsers": 3,
    "dailyTokens": 50000000,
    "usedDailyTokens": 3068028,
    "shareState": null
  },
  {
    "producer": "hub",
    "alias": "hub/step-3.7-flash-2",
    "protocols": [
      "anthropic",
      "openai-chat"
    ],
    "status": "online",
    "hubCheckAt": "2026-09-22T18:09:04.061Z",
    "degradedSince": null,
    "maxConcurrencyPerUser": 2,
    "maxConcurrentUsers": 3,
    "dailyTokens": 1000000000,
    "usedDailyTokens": 4085061,
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
    "hubCheckAt": "2026-09-22T17:28:29.769Z",
    "degradedSince": null,
    "maxConcurrencyPerUser": 1,
    "maxConcurrentUsers": 3,
    "dailyTokens": 50000000,
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
    "hubCheckAt": "2026-09-22T18:08:27.452Z",
    "degradedSince": null,
    "maxConcurrencyPerUser": 2,
    "maxConcurrentUsers": 3,
    "dailyTokens": 1000000000,
    "usedDailyTokens": 0,
    "shareState": null
  },
  {
    "producer": "hub",
    "alias": "hub/step-router-v1-1",
    "protocols": [
      "anthropic",
      "openai-chat"
    ],
    "status": "online",
    "hubCheckAt": "2026-09-22T17:28:29.769Z",
    "degradedSince": null,
    "maxConcurrencyPerUser": 1,
    "maxConcurrentUsers": 3,
    "dailyTokens": 50000000,
    "usedDailyTokens": 0,
    "shareState": null
  },
  {
    "producer": "hub",
    "alias": "hub/step-router-v1-2",
    "protocols": [
      "anthropic",
      "openai-chat"
    ],
    "status": "online",
    "hubCheckAt": "2026-09-22T18:08:27.452Z",
    "degradedSince": null,
    "maxConcurrencyPerUser": 2,
    "maxConcurrentUsers": 3,
    "dailyTokens": 1000000000,
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
    "status": "degraded",
    "hubCheckAt": "2026-09-18T09:42:44.560Z",
    "degradedSince": "2026-09-19T08:20:32.609Z",
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
    "status": "degraded",
    "hubCheckAt": "2026-09-18T09:42:50.888Z",
    "degradedSince": "2026-09-19T08:20:32.609Z",
    "maxConcurrencyPerUser": 1,
    "maxConcurrentUsers": 2,
    "dailyTokens": 5000000,
    "usedDailyTokens": 0,
    "shareState": null
  },
  {
    "producer": "jiyu2",
    "alias": "jiyu2/gpt-5.6-luna",
    "protocols": [
      "openai-responses"
    ],
    "status": "degraded",
    "hubCheckAt": "2026-09-17T09:04:53.971Z",
    "degradedSince": "2026-09-22T07:59:45.525Z",
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
    "status": "degraded",
    "hubCheckAt": "2026-09-19T06:31:47.250Z",
    "degradedSince": "2026-09-22T07:59:45.525Z",
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
    "hubCheckAt": "2026-09-17T09:05:01.420Z",
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
    "hubCheckAt": "2026-09-17T06:45:53.683Z",
    "degradedSince": null,
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
    "status": "online",
    "hubCheckAt": "2026-09-03T04:34:38.066Z",
    "degradedSince": null,
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
    "status": "online",
    "hubCheckAt": "2026-09-03T15:42:04.000Z",
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
    "degradedSince": "2026-09-22T21:04:23.705Z",
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
    "degradedSince": "2026-09-22T21:04:23.705Z",
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
    "hubCheckAt": "2026-09-17T09:05:03.359Z",
    "degradedSince": null,
    "maxConcurrencyPerUser": 1,
    "maxConcurrentUsers": 2,
    "dailyTokens": 10000000,
    "usedDailyTokens": 0,
    "shareState": null
  },
  {
    "producer": "peng1",
    "alias": "peng1/coding-glm-5.3-aihubmix",
    "protocols": [
      "openai-chat"
    ],
    "status": "online",
    "hubCheckAt": "2026-09-17T09:05:06.287Z",
    "degradedSince": null,
    "maxConcurrencyPerUser": 1,
    "maxConcurrentUsers": 1,
    "dailyTokens": 1000000,
    "usedDailyTokens": 0,
    "shareState": null
  },
  {
    "producer": "peng1",
    "alias": "peng1/coding-glm-5.3-flash-aihubmix",
    "protocols": [
      "openai-chat"
    ],
    "status": "online",
    "hubCheckAt": "2026-09-17T09:05:07.051Z",
    "degradedSince": null,
    "maxConcurrencyPerUser": 1,
    "maxConcurrentUsers": 1,
    "dailyTokens": 1000000,
    "usedDailyTokens": 0,
    "shareState": null
  },
  {
    "producer": "peng1",
    "alias": "peng1/coding-kimi-k3-aihubmix",
    "protocols": [
      "openai-chat"
    ],
    "status": "online",
    "hubCheckAt": "2026-09-17T09:05:07.507Z",
    "degradedSince": null,
    "maxConcurrencyPerUser": 1,
    "maxConcurrentUsers": 1,
    "dailyTokens": 1000000,
    "usedDailyTokens": 0,
    "shareState": null
  },
  {
    "producer": "peng1",
    "alias": "peng1/coding-minimax-m3-aihubmix",
    "protocols": [
      "openai-chat"
    ],
    "status": "online",
    "hubCheckAt": "2026-09-17T09:05:08.330Z",
    "degradedSince": null,
    "maxConcurrencyPerUser": 1,
    "maxConcurrentUsers": 1,
    "dailyTokens": 1000000,
    "usedDailyTokens": 0,
    "shareState": null
  },
  {
    "producer": "peng1",
    "alias": "peng1/glm-5.2-openrouter",
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
    "alias": "peng1/gpt-5.5-aihubmix",
    "protocols": [
      "openai-chat"
    ],
    "status": "online",
    "hubCheckAt": "2026-09-17T09:05:09.943Z",
    "degradedSince": null,
    "maxConcurrencyPerUser": 1,
    "maxConcurrentUsers": 1,
    "dailyTokens": 1000000,
    "usedDailyTokens": 0,
    "shareState": null
  },
  {
    "producer": "peng1",
    "alias": "peng1/gpt-5.6-luna",
    "protocols": [
      "openai-responses"
    ],
    "status": "online",
    "hubCheckAt": "2026-09-21T17:36:17.509Z",
    "degradedSince": null,
    "maxConcurrencyPerUser": 1,
    "maxConcurrentUsers": 2,
    "dailyTokens": 10000000,
    "usedDailyTokens": 0,
    "shareState": null
  },
  {
    "producer": "peng1",
    "alias": "peng1/gpt-5.6-luna-h",
    "protocols": [
      "openai-responses"
    ],
    "status": "online",
    "hubCheckAt": "2026-09-17T09:05:16.268Z",
    "degradedSince": null,
    "maxConcurrencyPerUser": 1,
    "maxConcurrentUsers": 2,
    "dailyTokens": 10000000,
    "usedDailyTokens": 0,
    "shareState": null
  },
  {
    "producer": "peng1",
    "alias": "peng1/gpt-5.6-terra",
    "protocols": [
      "openai-responses"
    ],
    "status": "online",
    "hubCheckAt": "2026-09-21T17:36:17.509Z",
    "degradedSince": null,
    "maxConcurrencyPerUser": 1,
    "maxConcurrentUsers": 2,
    "dailyTokens": 1000000,
    "usedDailyTokens": 0,
    "shareState": null
  },
  {
    "producer": "peng1",
    "alias": "peng1/gpt-5.6-terra-h",
    "protocols": [
      "openai-responses"
    ],
    "status": "online",
    "hubCheckAt": "2026-09-17T09:05:22.274Z",
    "degradedSince": null,
    "maxConcurrencyPerUser": 1,
    "maxConcurrentUsers": 2,
    "dailyTokens": 1000000,
    "usedDailyTokens": 0,
    "shareState": null
  },
  {
    "producer": "peng1",
    "alias": "peng1/hy3-aihubmix",
    "protocols": [
      "openai-chat"
    ],
    "status": "online",
    "hubCheckAt": "2026-09-17T09:05:22.788Z",
    "degradedSince": null,
    "maxConcurrencyPerUser": 1,
    "maxConcurrentUsers": 1,
    "dailyTokens": 1000000,
    "usedDailyTokens": 0,
    "shareState": null
  },
  {
    "producer": "peng1",
    "alias": "peng1/kimi-for-coding-aihubmix",
    "protocols": [
      "openai-chat"
    ],
    "status": "online",
    "hubCheckAt": "2026-09-17T09:05:23.212Z",
    "degradedSince": null,
    "maxConcurrencyPerUser": 1,
    "maxConcurrentUsers": 1,
    "dailyTokens": 1000000,
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
    "hubCheckAt": "2026-09-17T09:05:46.081Z",
    "degradedSince": null,
    "maxConcurrencyPerUser": 1,
    "maxConcurrentUsers": 1,
    "dailyTokens": 1000000,
    "usedDailyTokens": 0,
    "shareState": null
  },
  {
    "producer": "peng1",
    "alias": "peng1/union-alpha-openrouter",
    "protocols": [
      "openai-chat"
    ],
    "status": "online",
    "hubCheckAt": "2026-09-17T09:05:55.876Z",
    "degradedSince": null,
    "maxConcurrencyPerUser": 1,
    "maxConcurrentUsers": 1,
    "dailyTokens": 10000000,
    "usedDailyTokens": 0,
    "shareState": null
  }
]
);
