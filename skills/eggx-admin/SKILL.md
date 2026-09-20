---
name: eggx-admin
description: "运营管理 eggx 免费AI编码额度目录站（eggx.wehuman.top）：新增/更新/核实/下架羊毛、处理 GitHub issue 投稿、运行 sync 脚本、跑验证门槛并发布上线。用户提到管理 eggx、加一条羊毛、收羊毛、羊毛下架/过期、更新 offers.ts、重新核实某条额度、同步 codex resets 或 aweshare 快照、构建发布 eggx 时使用。中文触发词：eggx 管理、eggx 运营、加羊毛、新羊毛、羊毛过期、羊毛下架、更新羊毛、核实羊毛、发布 eggx。English triggers: manage eggx, add/expire/update an offer, publish eggx."
license: MIT. See https://github.com/wehuman01/eggx/blob/main/LICENSE
metadata:
  author: wehuman01
  version: "1.0.0"
---

# eggx-admin — eggx 目录站运营技能

eggx 只回答一个问题：**现在有什么可以领的免费 AI 编码额度？** 每条羊毛（offer）都带官方来源、可信度标签、限额与核实日期。本技能负责维护这个目录：改数据、跑同步、过验证、发布上线。

## 定位仓库

先 cd 到 eggx 仓库再干活。维护者本机路径：`/Users/peng/Desktop/Project/product/wehuman/others/eggx`（其他机器按 `package.json` 的 `"name": "eggx"` 定位，或 clone `https://github.com/Wehuman01/eggx`）。判定标准：仓库根有 `package.json`、`src/content/offers.ts`、`skills/` 目录。

## 数据地图 — 先分清人和机器各管什么

| 文件 | 谁写 | 说明 |
| --- | --- | --- |
| `src/content/offers.ts` | **人工维护** | 羊毛注册表，本 skill 的主战场。导出时经 `validateRegistry` 校验，字段错误会在 build/test 时直接抛错 |
| `src/content/resets.ts` | 机器同步 | Codex 重置记录，来自 AIHOT 公开接口，**不要手改** |
| `src/content/aweshare.ts` | 机器同步 | aweshare hub 目录快照，**不要手改** |

页面、API（`offers.json` 等）、RSS、llms.txt 全部由 build 从这三个注册表生成——没有单独的“发布内容”步骤，改数据即改站点。

## 工作流

按用户意图走对应流程。动 `offers.ts` 前先读 `references/offer-fields.md`（字段语义、完整示例、中英文案写法）。

### 新增一条羊毛（含 issue 投稿）

1. **先核实来源**：打开来源链接确认活动真实存在。核不动官方页面的 → `verified: false`（社区消息）；核不动又没有像样来源的 → 不收录，向用户说明。
2. 按 `references/offer-fields.md` 的示例写条目：`zh`/`en` 双语必填，`id` 用 kebab-case 且永不改（API 路径 `/api/v1/offers/{id}.json` 依赖它）。
3. 跑验证门槛（见下），过了再提交推送。
4. GitHub issue 投稿（`submit.yml` 模板）转条目时：无论收不收，都在 issue 里回一句核实结论，引用官方链接。

### 重新核实

把 `lastVerified` 更新为今天；来源失效或内容变化的，同步改 `source`、`limits`、`caveat`。`caveat` 里保留核实轨迹（哪天核的、核到了什么、投稿里哪些说法被排除了）。

### 下架 / 归档

- **到了官方公布的截止日**：什么都不用做——`expiry` 过期后自动进 `/expired`。
- **提前死亡（官方提前下线、链接失效）**：条目上标 `archived: true`，在 `caveat` 记录确认死亡的日期与证据，`lastVerified` 同步更新。
- **永不删除条目**。过期区是公开审计轨迹，删了就没了。

### 同步快照

- `npm run sync:resets` — 无需任何凭证，从 AIHOT 拉取。
- `npm run sync:aweshare` — 需要 `.env.aweshare`（git-ignored，含 `AWESHARE_CONSUMER_TOKEN`）；没有 token 就跳过本地同步，CI 每小时会带 secret 自动跑。
- 本地跑脚本只改文件，不提交；CI 里由 bot 自动 commit & push（`sync:` 前缀是它的专用前缀，人工提交不要用）。

### 发布上线

单分支工作流，`main` 即线上：

1. 验证门槛全绿（见下）。
2. conventional commit 提交：`feat:` 新羊毛、`fix:` 修正、`chore:` 杂务、`perf:`/`refactor:` 等。信息用中文或英文均可，说清楚动了什么。
3. push 到 `main` → CI（check + test + build）→ 成功后 deploy workflow 自动发 GitHub Pages，几分钟内 `eggx.wehuman.top` 生效。
4. 不要为了发布去手动触发 deploy workflow——CI 绿了它自己会跑。

## 验证门槛（每次改动后、提交前）

```bash
npm run check   # astro check，含 offers.ts 的 schema 校验
npm test        # vitest 全量，含 API/页面/skill 一致性测试
```

两道都过才算完成。拿不准页面效果时再跑 `npm run dev` 本地看，或 `npm run build` 验证产物。

## 硬性规则

- **不猜限额**：官方没公布就写“未公布”，绝不推成“无限”。
- **不编截止日**：`expiry`/`expiresAt` 没公布就留 `null`。
- **凭记忆写额度是错的**：新增或核实都必须打开来源链接确认，训练记忆里的额度信息一律不可信。
- **双语同步**：`zh` 和 `en` 是同一事实的两种表述，不是两份内容；改了一边必须改另一边。
- **API 是契约**：`schemaVersion`、字段名、端点路径被外部 agent 依赖（另有面向消费者的 `skills/eggx` skill），改字段前先看 `src/pages/api/` 和 `tests/api.test.ts`。

## References

- `references/offer-fields.md` — Offer 字段逐条语义、完整示例条目、中英文案写法。写/改 `offers.ts` 前必读。
- `references/ops.md` — 命令清单、CI/部署链路、sync 环境配置、常见故障排查。按需读取。
