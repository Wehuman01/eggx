<div align="center">
  <img src="public/favicon.svg" alt="eggx logo" width="112" />
  <h1>eggx</h1>
  <p><strong>已核实的 AI 编码羊毛</strong></p>
  <p>限时活动 · 长期免费层 · 申请通道 — 每条都带官方来源、限额与核实日期。</p>
  <p>
    <strong>简体中文</strong> ·
    <a href="./README_en.md">English</a>
  </p>
  <p>
    <a href="https://eggx.wehuman.top/"><img src="https://img.shields.io/badge/website-eggx.wehuman.top-4a5d23?style=flat-square" alt="eggx.wehuman.top"></a>
    <img src="https://img.shields.io/badge/license-MIT-22C55E?style=flat-square" alt="License">
    <img src="https://img.shields.io/github/stars/wehuman01/eggx?style=flat-square" alt="GitHub stars">
  </p>
</div>

> 👉 **[eggx.wehuman.top](https://eggx.wehuman.top/)** — 羊毛来去很快。别看会过期的清单，看一直在核实的目录。

## 为什么是 eggx

免费的 AI 编码额度每周都在出现和消失，大多数“免费资源大全”没人复查，慢慢就烂掉了。

eggx 只回答一个问题：**现在有什么可以领的免费 AI 编码额度？** 每条羊毛都是一个小结论，带四样证据：官方来源链接、可信度标签、真实限额、最后核实日期。

## 三种羊毛

| 栏目 | 收什么 | 入口 |
| --- | --- | --- |
| 临时羊毛 | 公开限时活动，按到期时间排序，带倒计时 | [eggx.wehuman.top](https://eggx.wehuman.top/) |
| 长期羊毛 | 持续供应的免费额度与计划，稳定可依赖 | [/long-term](https://eggx.wehuman.top/long-term/) |
| 申请羊毛 | 需申请、认证或人工审核才能领取的 | [/application](https://eggx.wehuman.top/application/) |
| 过期羊毛 | 已下架活动的审计归档 — 犹如砒霜，不建议点开 | [/expired](https://eggx.wehuman.top/expired/) |

## 诚实优先

- **官方核实 / 社区消息** — 每条羊毛都带可信度标签：由官方文档确认的，还是社区报告待二次确认的。第三方来源是很好的线索，收录前我们会另行核实。
- **免费 ≠ 无限** — 未公布的限额就一直写“未公布”，从不推测成“无限”。依赖前请先读每条的限额与获取方式。
- **过期只归档，不删除** — 保留公开的审计轨迹。一条来源失效只代表它曾经的核实记录，绝不代表它仍然可用。

## 人看网站，Agent 走接口

eggx 同时为人类和 Agent 设计：内容双语（中文默认，[`/en/`](https://eggx.wehuman.top/en/) 英文），外加静态、免鉴权的机器接口：

- [`/agent/`](https://eggx.wehuman.top/agent/) — Agent 接入指南（Skill / API / RSS）
- [`/llms.txt`](https://eggx.wehuman.top/llms.txt) — Agent 使用指南
- [`/api/v1/offers.json`](https://eggx.wehuman.top/api/v1/offers.json) — 全部在架羊毛（JSON）
- [`/api/v1/codex-resets.json`](https://eggx.wehuman.top/api/v1/codex-resets.json) — Codex 重置记录（JSON）
- [`/api/v1/aweshare.json`](https://eggx.wehuman.top/api/v1/aweshare.json) — aweshare hub 共享模型可用性（JSON，每小时快照）
- [`/feed.xml`](https://eggx.wehuman.top/feed.xml) — RSS 订阅
- [`/openapi.json`](https://eggx.wehuman.top/openapi.json) — 完整 API 说明

也可以给 Agent 装官方技能包（经 [aweskill](https://github.com/wehuman01/aweskill) 统一管理，一条命令投影到 Claude Code、Codex、Gemini CLI 等）：

```bash
aweskill install wehuman01/eggx --skill eggx
```

## 数据来源与致谢

- **aweshare 模型可用性**（[追踪页](https://eggx.wehuman.top/aweshare/)）— 每小时快照我们运营的 [aweshare](https://github.com/wehuman01/aweshare) 共享 hub：哪些模型可用、支持什么协议、每日共享额度还剩多少。只公开别名/协议/状态/额度；接入凭邀请码。
- **Codex 重置监控**（[追踪页](https://eggx.wehuman.top/codex-reset/)）— 追踪 Tibo（@thsottiaux）在 X 上公开宣布的 Codex 全员重置与重置卡发放。数据由定时任务自动同步自 [AIHOT](https://aihot.news/codex-reset) 的公开接口：时间、类型等事实来自公开推文，每条都链回原始推文；中文引文为 AIHOT 的 AI 翻译，译文著作权归 AIHOT，英文原帖版权归原作者所有。
- 非 OpenAI 官方页面，仅供信息参考；是否重置、何时重置由 OpenAI 决定。

## 参与进来

- 发现新羊毛？通过[提交表单](https://github.com/wehuman01/eggx/issues/new?template=submit.yml)推荐，附上官方来源链接。
- 觉得有用？去 [GitHub 加个星](https://github.com/wehuman01/eggx) ★，让更多人看到。

## License

MIT.
