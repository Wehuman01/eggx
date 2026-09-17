# eggx skill

eggx 的官方 Agent Skill：让 Claude Code、Codex、Gemini CLI、Cursor 等 agent
能查询 [eggx](https://eggx.wehuman.top/)（已核实的免费 AI 编码羊毛目录）的当前数据 —
通过匿名只读的静态 JSON API，无需 API Key，不凭训练记忆回答。

## 安装（推荐：aweskill 统一管理）

[aweskill](https://github.com/wehuman01/aweskill) 是本地技能包管理器：装一次，投影到所有 agent。

```bash
npm install -g aweskill          # 一次性：安装 aweskill
aweskill install wehuman01/eggx --skill eggx
```

更新：

```bash
aweskill update eggx
```

## 让 Agent 自己装

把下面这段直接发给你的 agent：

```text
请安装 eggx skill：先按 https://github.com/wehuman01/aweskill/blob/main/README.ai.md
安装 aweskill 并初始化，然后执行 aweskill install wehuman01/eggx --skill eggx，
把 eggx 投影到当前 agent。装完告诉我是否需要开启新会话，
再用「现在有什么可以白嫖的 AI 编码额度？」验证。
```

## 手动安装（不用 aweskill）

把本目录（`skills/eggx/`）复制到你 agent 的技能目录，例如：

- `~/.agents/skills/eggx/`（跨 agent 共享目录）
- `~/.claude/skills/eggx/`（Claude Code）
- `~/.codex/skills/eggx/`（Codex）

文件名必须保持 `SKILL.md`。装完开新会话（多数 agent 只在会话启动时扫描技能）。

## 验证

新会话里问一句：

> 现在有什么可以白嫖的 AI 编码额度？

agent 应引用 eggx API 的当前数据回答，并给出官方来源与核实日期。

## 内容

- `SKILL.md` — 技能本体（触发条件、安全边界、工作流、输出模板）
- `references/api.md` — 完整端点与字段参考（按需加载）

License: MIT（见[仓库根 LICENSE](../../LICENSE)）。
