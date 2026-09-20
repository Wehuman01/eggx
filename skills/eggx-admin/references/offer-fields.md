# Offer 字段参考

写或改 `src/content/offers.ts` 前读这份。数据模型定义在 `src/lib/schema.ts`（`validateRegistry` 在 import 时校验，违规直接抛错）。

## 字段逐条语义

| 字段 | 类型 | 规则 |
| --- | --- | --- |
| `id` | string | kebab-case，全局唯一，**发布后永不改**——公开 API `/api/v1/offers/{id}.json` 以它为路径，改了等于删旧条目 + 建新条目，外部 agent 的引用全部断链 |
| `provider` | string | 提供商展示名（如 `Z.ai`、`OpenRouter`）。API 按 provider 生成 `/api/v1/providers/{slug}.json`（slug = 小写、空格转连字符） |
| `kind` | `"temporary" \| "long-term"` | 限时活动 / 长期免费层。判断标准：有明确活动期或随时可能收回的 → temporary；写进官方定价页、常态供应的 → long-term |
| `access` | `"public" \| "application"` | 直接领 / 需申请、认证或人工审核 |
| `verified` | boolean | 官方文档确认 = `true`；社区消息待二次确认 = `false`（站点会打上社区标签） |
| `archived` | boolean? | `true` = 进 `/expired` 归档区。只有"提前死亡"才手动标；到 `expiry` 自然过期的不用标（`activeOffers` 会按日期自动归档） |
| `expiry` | string? (YYYY-MM-DD) | 官方公布的截止日。未公布 = `null`，绝不推测。**注意：日期一到条目自动从在架列表消失，所以填错日期 = 提前下架** |
| `url` | string? | 官方主页/产品页 |
| `source` | string? | **核实依据**：官方文档、公告、推文等原始链接。`verified: true` 时必填 |
| `actionUrl` | string? | 用户领取动作的落地页（注册/领取按钮所在页）。缺省时站点用 `url` |
| `code` | string? | 邀请码/兑换码，有就填 |
| `lastVerified` | string? (YYYY-MM-DD) | 最后核实日期。每次核实、每次修改内容都要更新为当天 |
| `zh` / `en` | LocalizedOffer | 同一事实的两种语言，结构必须对齐（见下） |

`LocalizedOffer`：`name`（名称，带关键型号/限额信息）、`description`（客观描述：是什么、给多少、怎么拿）、`limits?`（限额原文——官方没公布就写"未公布"）、`caveat?`（注意事项与核实轨迹）。

## 中英文案写法

看现存的写法照着写：

- `description` 陈述事实，带具体日期、数字、型号名；不写营销话术，不写"赶紧冲"。
- `limits` 尽量引用官方原文口径（"每天 500 万 tokens"、"先到先得，领完即止"）；未公布就写"未公布"，不推成"无限"。
- `caveat` 记核实轨迹：哪天核的、核到了什么、投稿里哪些说法被排除、官方未声明的事项（如"未公布截止时间，下线以模型选择器实际展示为准"）。
- `en` 是给英文读者看的完整翻译，不是摘要；数字、日期、型号与 `zh` 完全一致。

## 完整示例

新条目（在架、官方核实）：

```ts
{
  id: "cline-desktop-free-models",
  provider: "Cline",
  kind: "temporary",
  access: "public",
  verified: true,
  expiry: null,
  url: "https://cline.bot/",
  source: "https://x.com/cline/status/2099536235350086029",
  actionUrl: "https://cline.bot/",
  lastVerified: "2026-09-20",
  zh: {
    name: "Cline Desktop 桌面端免费模型（DeepSeek-V4.1-Flash、Musespark-1.3）",
    description: "…客观描述：发布日期、包含什么、怎么用…",
    limits: "…官方口径的限额；未公布就写未公布…",
    caveat: "…核实轨迹与排除项…",
  },
  en: {
    name: "Cline Desktop Free Models (DeepSeek-V4.1-Flash, Musespark-1.3)",
    description: "…",
    limits: "…",
    caveat: "…",
  },
}
```

归档条目（提前死亡）：在原条目上加 `archived: true`，`lastVerified` 改为确认死亡的日期，`zh.caveat`/`en.caveat` 开头写明"活动提前下线，YYYY-MM-DD 核实已失效，本条仅作归档"，原记录跟在后面。`expiry` 保留原公布日期不动。

## 常见错误

- `expiry` 填了猜测日期 → 到期自动下架，等于替官方宣布死亡。没公布就 `null`。
- 改了 `zh` 忘改 `en`（或反之）→ 两栏漂移，读者看到不同的事实。
- 手动给已过 `expiry` 的条目标 `archived: true` → 冗余；日期机制已经处理。
- 删除条目 → 永远归档，不删除。删除只发生在条目从未发布过的情况。
- `verified: true` 但 `source` 缺失或指向二手转述 → `verified` 的含义就是"官方渠道确认"。
