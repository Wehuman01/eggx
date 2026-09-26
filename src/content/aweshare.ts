// aweshare hub 共享模型目录快照（哪些模型现在可用）。
// 本文件由 scripts/sync-aweshare.mjs 自动生成，请勿手改。数据读取自 hub 的
// GET /v1/catalog（只读 consumer token，读取不消耗模型额度），每小时同步一次。
// hub 按线协议逐行登记同一 alias，此处已按 alias 合并（protocols 为该模型支持的协议列表）。
// 只收录公开字段：别名、协议、状态、最近在线、每日额度与并发上限；
// 上游模型来源与实时占用不进仓库。状态与余量是快照时刻的事实，不代表承诺。

import { validateAweshareCatalog, type AweshareSnapshot } from "../lib/aweshare";

export const aweshareSnapshot: AweshareSnapshot = {
  "hubUrl": "https://aweshare.wehuman.top",
  "checkedAt": "2026-09-26T01:32:11.027Z",
  "count": 46
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
    "hubCheckAt": "2026-09-23T01:39:54.420Z",
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
    "hubCheckAt": "2026-09-23T01:40:27.972Z",
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
    "hubCheckAt": "2026-09-24T16:43:49.200Z",
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
    "hubCheckAt": "2026-09-24T09:09:06.067Z",
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
    "hubCheckAt": "2026-09-23T01:40:27.972Z",
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
    "hubCheckAt": "2026-09-24T15:45:34.572Z",
    "degradedSince": null,
    "maxConcurrencyPerUser": 1,
    "maxConcurrentUsers": 3,
    "dailyTokens": 20000000,
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
    "hubCheckAt": "2026-09-24T15:45:15.836Z",
    "degradedSince": null,
    "maxConcurrencyPerUser": 1,
    "maxConcurrentUsers": 5,
    "dailyTokens": 50000000,
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
    "hubCheckAt": "2026-09-24T09:33:14.644Z",
    "degradedSince": null,
    "maxConcurrencyPerUser": 1,
    "maxConcurrentUsers": 2,
    "dailyTokens": 5000000,
    "usedDailyTokens": 0,
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
    "hubCheckAt": "2026-09-24T09:09:06.067Z",
    "degradedSince": null,
    "maxConcurrencyPerUser": 1,
    "maxConcurrentUsers": 2,
    "dailyTokens": 1000000,
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
    "hubCheckAt": "2026-09-24T09:33:37.946Z",
    "degradedSince": null,
    "maxConcurrencyPerUser": 1,
    "maxConcurrentUsers": 2,
    "dailyTokens": 5000000,
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
    "hubCheckAt": "2026-09-24T09:09:06.067Z",
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
    "hubCheckAt": "2026-09-24T09:09:06.067Z",
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
    "hubCheckAt": "2026-09-23T01:40:27.973Z",
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
    "hubCheckAt": "2026-09-24T03:29:13.238Z",
    "degradedSince": null,
    "maxConcurrencyPerUser": 1,
    "maxConcurrentUsers": 3,
    "dailyTokens": 50000000,
    "usedDailyTokens": 0,
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
    "hubCheckAt": "2026-09-24T15:59:16.617Z",
    "degradedSince": null,
    "maxConcurrencyPerUser": 2,
    "maxConcurrentUsers": 3,
    "dailyTokens": 1000000000,
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
    "hubCheckAt": "2026-09-24T03:28:40.363Z",
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
    "hubCheckAt": "2026-09-24T15:59:04.629Z",
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
    "hubCheckAt": "2026-09-24T03:28:40.363Z",
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
    "hubCheckAt": "2026-09-24T15:59:04.629Z",
    "degradedSince": null,
    "maxConcurrencyPerUser": 2,
    "maxConcurrentUsers": 3,
    "dailyTokens": 1000000000,
    "usedDailyTokens": 0,
    "shareState": null
  },
  {
    "producer": "jiyu2",
    "alias": "jiyu2/gpt-5.6-luna",
    "protocols": [
      "openai-responses"
    ],
    "status": "offline",
    "hubCheckAt": "2026-09-17T09:04:53.971Z",
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
    "status": "offline",
    "hubCheckAt": "2026-09-19T06:31:47.250Z",
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
    "hubCheckAt": "2026-09-23T01:40:45.654Z",
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
    "hubCheckAt": "2026-09-23T01:40:47.563Z",
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
    "degradedSince": "2026-09-26T00:36:56.935Z",
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
    "degradedSince": "2026-09-26T00:36:56.935Z",
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
    "hubCheckAt": "2026-09-23T01:40:51.224Z",
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
    "hubCheckAt": "2026-09-23T01:41:41.825Z",
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
    "alias": "peng1/gpt-5.6-terra",
    "protocols": [
      "openai-responses"
    ],
    "status": "online",
    "hubCheckAt": "2026-09-23T01:42:08.286Z",
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
    "hubCheckAt": "2026-09-23T01:42:13.168Z",
    "degradedSince": null,
    "maxConcurrencyPerUser": 1,
    "maxConcurrentUsers": 2,
    "dailyTokens": 1000000,
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
    "hubCheckAt": null,
    "degradedSince": null,
    "maxConcurrencyPerUser": 1,
    "maxConcurrentUsers": 2,
    "dailyTokens": 10000000,
    "usedDailyTokens": 0,
    "shareState": null
  },
  {
    "producer": "peng1",
    "alias": "peng1/gpt-6-luna-h",
    "protocols": [
      "openai-responses"
    ],
    "status": "online",
    "hubCheckAt": "2026-09-24T02:50:52.079Z",
    "degradedSince": null,
    "maxConcurrencyPerUser": 1,
    "maxConcurrentUsers": 2,
    "dailyTokens": 10000000,
    "usedDailyTokens": 0,
    "shareState": null
  },
  {
    "producer": "peng1",
    "alias": "peng1/gpt-6-sol",
    "protocols": [
      "openai-responses"
    ],
    "status": "online",
    "hubCheckAt": null,
    "degradedSince": null,
    "maxConcurrencyPerUser": 1,
    "maxConcurrentUsers": 2,
    "dailyTokens": 1000000,
    "usedDailyTokens": 0,
    "shareState": null
  },
  {
    "producer": "peng1",
    "alias": "peng1/gpt-6-sol-h",
    "protocols": [
      "openai-responses"
    ],
    "status": "online",
    "hubCheckAt": null,
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
