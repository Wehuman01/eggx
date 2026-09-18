# eggx API 参考

Base URL：`https://eggx.wehuman.top`（镜像 `https://wehuman01.github.io/eggx`，路径相同）。
全部端点为静态 JSON 文件：匿名、只读、无需 API Key；`Cache-Control: public, max-age=300`。

## 端点

| 端点 | 返回 |
| --- | --- |
| `GET /api/v1/offers.json` | 全部在架（非归档）羊毛 |
| `GET /api/v1/offers/{id}.json` | 单条羊毛；404 时返回 `{ "error": "Not found" }` |
| `GET /api/v1/providers/{slug}.json` | 按厂商分组的在架羊毛；404 时返回 `{ "error": "Provider not found" }` |
| `GET /api/v1/snapshot.json` | 带版本的全量快照（`schemaVersion` + `generatedAt` + `data`） |
| `GET /api/v1/changes.json` | 在架羊毛，按 `lastVerified` 最新在前排序；增量同步时客户端取 `lastVerified >= since` 的前缀 |
| `GET /api/v1/codex-resets.json` | Codex 重置追踪（Tibo @thsottiaux 宣布的全员重置与重置卡） |

`{slug}` = `provider` 转小写、空格替换为连字符（如 `Z.ai` → `z.ai`）。

## 响应外层

```json
{ "schemaVersion": "2.0", "data": [ /* SerializedOffer[] */ ] }
```

`snapshot.json` 额外带 `generatedAt`（ISO-8601）；`changes.json` 额外带 `since`（静态文件下恒为 `null`，占位字段）。

## SerializedOffer 字段

| 字段 | 类型 | 说明 |
| --- | --- | --- |
| `id` | string | 稳定 ID，用于 `/api/v1/offers/{id}.json` |
| `provider` | string | 厂商名（原文，如 `Z.ai`） |
| `kind` | `"temporary" \| "long-term"` | 临时羊毛 / 长期免费层 |
| `access` | `"public" \| "application"` | 直接领取 / 需申请或认证 |
| `verified` | boolean | `true` = 官方核实；`false` = 社区消息，需二次确认 |
| `archived` | boolean | 恒为 `false`（归档条目不出现在 API） |
| `name` | `{ zh, en }` | 双语名称 |
| `description` | `{ zh, en }` | 双语描述 |
| `limits` | `{ zh, en }` 或 `null` | 限额原文；`null` = 未公布，不得推测为无限 |
| `caveat` | `{ zh, en }` 或 `null` | 注意事项 |
| `url` | string \| null | 官方页面 |
| `source` | string \| null | 核实依据的官方来源链接 |
| `actionUrl` | string \| null | 领取 / 申请入口 |
| `expiresAt` | string \| null | 到期日（日期或 ISO-8601）；`null` = 未公布 |
| `lastVerified` | string \| null | 最后核实日期 |

双语对象的两个键都必有（值可能是 `null`）。除 `name`/`description` 外均可为 `null`。

## `codex-resets.json`

```json
{
  "schemaVersion": "2.0",
  "data": {
    "snapshot": { "checkedAt": "...", "historyFrom": "...", "source": "https://aihot.news/codex-reset", "curator": "AIHOT" },
    "intervalStats": { "count": 18, "min": 2, "median": 5, "max": 27 },
    "events": [ /* ResetEvent[]，最新在前 */ ]
  }
}
```

| 字段 | 说明 |
| --- | --- |
| `snapshot.checkedAt` | 上游策展方（AIHOT）最后一次核验时间，北京时间 |
| `events[].type` | `reset` = 全员重置；`card` = 发重置卡（发卡 ≠ 额度恢复） |
| `events[].status` | `confirmed` = 有确认帖；`announced` = 仅预告 |
| `events[].confirmedAt` | 确认帖时间，≠ 精确执行时间 |
| `events[].occurredOn` | 单独核实过的到账日，可能为 `null` |
| `events[].scheduleFrom/Through` | 原帖预告的时间窗，可能为 `null` |
| `events[].posts[]` | `stage`（`announce`/`confirm`）、`publishedAt`、原推链接 `url`、英文原文 `en` |
| `intervalStats` | 历史全员重置间隔统计（天），`null` = 样本不足 |

机器接口只含事实与英文原帖；中文译文仅出现在网页。数据来源 [AIHOT](https://aihot.news/codex-reset)，非 OpenAI 官方页面。

## 输出建议

- 链接用 `actionUrl ?? url`；来源标注用 `source`。
- 到期提醒：`expiresAt` 距今 ≤ 3 天的临时羊毛要显式提醒。
- 每次回答末尾注明数据来自 eggx 且带 `lastVerified`，避免用户把过期数据当现状。
