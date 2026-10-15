# scripts/local — 本机运维工具（CI 不运行）

这里的工具只在维护者自己的 Mac 上跑，不进 CI、不进站点构建，所以单独放一个目录，
和 `scripts/` 下 CI 用的同步脚本分开。目前只有一个：

| 文件 | 用途 |
| --- | --- |
| `eggx-reset-poller` | 重置事件快路径轮询器（Python 3 标准库，零依赖） |
| `top.wehuman.eggx-reset-poller.plist` | launchd 常驻任务模板（路径按本机写死，换机器要改） |

## 为什么要有轮询器

Codex 重置记录由 GitHub Actions 每小时 cron 同步（`.github/workflows/sync-resets.yml`），
但 GitHub 的定时派发经常延迟几十分钟到十几小时——事件触发（push、workflow_run）不堵，
只堵 cron。结果是上游已经了结的重置，页面要等下一轮不知何时到来的 cron 才追上。

轮询器把"追上上游"改成事件驱动：每 5 分钟观察上游 `codex-resets.com` 公开 API
（两个条件请求，正好落在其 CDN 的 s-maxage=300 缓存周期内），一旦页面会显示的内容
发生变化，立刻 `gh workflow run sync-resets.yml` 派发同步。检测到变化起约 2 分钟
内页面更新（派发 → 同步提交 → Deploy 全走事件触发，实测 23 秒级）。

每小时 cron 保留为兜底：轮询器任何失败（断网、gh 登录过期）都只记日志，不影响数据
正确性，也不影响 cron 兜底。两条路径都指向同一个幂等的同步脚本。

## 防误触发

轮询器不比对整个响应体（上游每次请求都重新生成 `meta.generated_at`，永远在变），
只对同步脚本真正消费的内容做投影签名：`/resets` 列表条目的
`id/announced_at/reset_type/text`，加 `/status` 的待执行公告。签名不变就不派发。
首跑（无历史状态）会派发一次，用来把可能已落后的页面追上。

## 安装

```bash
cp scripts/local/eggx-reset-poller ~/.local/bin/
chmod +x ~/.local/bin/eggx-reset-poller
mkdir -p ~/.local/state/eggx-reset-poller   # launchd 日志目录
cp scripts/local/top.wehuman.eggx-reset-poller.plist ~/Library/LaunchAgents/
launchctl bootstrap gui/$(id -u) ~/Library/LaunchAgents/top.wehuman.eggx-reset-poller.plist
launchctl kickstart -k gui/$(id -u)/top.wehuman.eggx-reset-poller
```

前提：本机已装 [gh CLI](https://cli.github.com/) 并 `gh auth login`（token 需要
`repo` + `workflow` scope）。轮询器不持有自己的凭证，直接复用 gh 的钥匙串登录；
`gh` 的路径在脚本里按常见位置解析，换机器不用改代码。

plist 里的 `/Users/peng` 路径和 Label 是按当前机器写死的，换机器/换用户要相应修改。
`StartInterval` 300（秒）与脚本里的 `POLL_SECONDS` 对应，改一个就要改另一个。

## 日常与排障

```bash
tail ~/.local/state/eggx-reset-poller/poller.log   # 每 5 分钟一行：no change / change detected -> triggered ...
```

- 想确认常驻任务活着：`launchctl list | grep eggx`（退出码应为 0）。
- `trigger failed` + `gh token may have expired`：跑一次 `gh auth login`，之后自动恢复。
- 改动仓库里的脚本后同步到本机：`cp scripts/local/eggx-reset-poller ~/.local/bin/`
  再 `launchctl kickstart -k gui/$(id -u)/top.wehuman.eggx-reset-poller`。

## 休眠注意

launchd 在 Mac 睡眠期间不执行任务，唤醒后补跑一次。维护者的机器 1 分钟无操作即睡，
所以实际语义是"人在用电脑时秒级跟进，睡觉时 cron 兜底"。要人不在也保持快路径，
终端里 `caffeinate -i` 临时阻止睡眠即可（可随时 Ctrl-C 撤销）。

## 卸载

```bash
launchctl bootout gui/$(id -u)/top.wehuman.eggx-reset-poller
rm ~/Library/LaunchAgents/top.wehuman.eggx-reset-poller.plist
rm ~/.local/bin/eggx-reset-poller
rm -rf ~/.local/state/eggx-reset-poller
```
