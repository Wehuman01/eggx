# 运维参考：命令、CI/部署链路、故障排查

## 命令清单（仓库根目录）

| 命令 | 用途 |
| --- | --- |
| `npm run dev` | 本地开发服务器，实时预览 |
| `npm run check` | astro check 类型检查（含 offers.ts schema 校验） |
| `npm test` | vitest 全量测试 |
| `npm run build` | 构建到 `dist/`（验证产物用；线上由 CI 构建） |
| `npm run sync:resets` | 从 AIHOT 同步 Codex 重置记录到 `src/content/resets.ts`，无需凭证 |
| `npm run sync:aweshare` | 拉取 aweshare hub 目录快照到 `src/content/aweshare.ts`，需 `.env.aweshare` |

## CI / 部署链路

单分支 `main`，push 后全自动：

```
push to main
  → ci.yml（install + check + test + build）
  → 成功后 deploy.yml 自动构建并发布 GitHub Pages
  → 几分钟内 eggx.wehuman.top 生效（GitHub Pages + CNAME）
```

- deploy 由 CI 成功触发（`workflow_run` gate），CI 红了不会部署。**线上没更新时第一件事：看 CI 是不是红了。**
- 两条定时 sync（每小时）由 bot 以 `sync:` 前缀自动 commit & push，同样走这条链路自动部署。
- deploy 也会镜像发布到 `https://wehuman01.github.io/eggx/`（路径相同）。

## sync 环境配置

- `sync:resets`：零配置，读 AIHOT 公开接口。
- `sync:aweshare`：读 `.env.aweshare`（git-ignored）。需要的变量：`AWESHARE_CONSUMER_TOKEN`（只读 consumer token，身份 `eggx`）与可选 `AWESHARE_HUB_URL`（默认 `https://aweshare.wehuman.top`）。本地没有 token 就不跑这条——CI 每小时带 secret 自动同步。
- 脚本设计为**一次调用一次请求**，失败会大声报错而不是猜映射。本地跑完只改文件，是否提交由人决定。

## 面向 agent 的接口（改动时的心智模型）

站点同时服务人类和 agent，以下产物全部由 build 从注册表生成，改数据即全量生效：

- `/api/v1/offers.json`、`/api/v1/offers/{id}.json`、`/api/v1/providers/{slug}.json`、`/api/v1/snapshot.json`、`/api/v1/changes.json`
- `/api/v1/codex-resets.json`、`/api/v1/aweshare.json`
- `/llms.txt`、`/openapi.json`、`/feed.xml`
- 消费者技能包 `skills/eggx/`（用户经 `aweskill install wehuman01/eggx --skill eggx` 安装），其 `references/api.md` 描述了以上端点

**改字段名、端点路径或 JSON 结构前**：先看 `src/pages/api/`（生成逻辑）、`tests/api.test.ts` 与 `tests/skill.test.ts`（契约测试），并同步更新 `skills/eggx/references/api.md` 和 `openapi.json.ts`——外部 agent 依赖这些契约，漂移就是故障。

## 常见故障

| 症状 | 处置 |
| --- | --- |
| push 后线上没更新 | 查 GitHub Actions：CI 失败（deploy 被 gate 挡住）还是 deploy 失败；修复后重新 push 或等下一次 sync 触发 |
| `npm run check` 报 offers.ts 校验错误 | 按 `src/lib/schema.ts` 的报错信息修字段，报错自带条目 id 与字段路径 |
| `sync:aweshare` 本地报无 token | 正常——缺 `.env.aweshare`，交给 CI 同步即可 |
| sync 工作流 push 被拒 | bot 自带 rebase 重试（竞态防护）；连续失败才需要人工看 Actions 日志 |
| 想立即重新部署 | deploy workflow 支持 `workflow_dispatch` 手动触发，但优先修复根因再触发 |

## 提交信息约定

- 人工提交：`feat:`（新羊毛）、`fix:`（修正）、`chore:`（杂务）、`perf:`/`refactor:`（性能/重构），说明动内容用中文或英文均可。
- `sync:` 前缀保留给 CI bot 的自动同步提交，人工不要用。
- 一条羊毛一个 commit，方便审计轨迹对齐 `lastVerified`。
