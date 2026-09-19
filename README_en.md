<div align="center">
  <img src="public/favicon.svg" alt="eggx logo" width="112" />
  <h1>eggx</h1>
  <p><strong>Every generation has its free credits to claim.</strong></p>
  <p>Verified free AI coding deals: limited-time campaigns · long-term free tiers · application tracks — each with an official source, real limits, and a verification date.</p>
  <p>
    <a href="./README.md">简体中文</a> ·
    <strong>English</strong>
  </p>
  <p>
    <a href="https://eggx.wehuman.top/en/"><img src="https://img.shields.io/badge/website-eggx.wehuman.top-4a5d23?style=flat-square" alt="eggx.wehuman.top"></a>
    <img src="https://img.shields.io/badge/license-MIT-22C55E?style=flat-square" alt="License">
    <img src="https://img.shields.io/github/stars/wehuman01/eggx?style=flat-square" alt="GitHub stars">
  </p>
</div>

> 👉 **[eggx.wehuman.top](https://eggx.wehuman.top/en/)** — Free offers come and go weekly. Don't read a list that rots; read a directory that keeps verifying.

## Why eggx

Free AI coding credits appear and vanish every week, and most "free resources" lists rot because nobody re-checks them.

eggx answers one question: **what can I claim for free right now to build with AI?** Every offer is a small claim with four pieces of evidence: an official source URL, a trust label, the real limits, and the date it was last verified.

## Three kinds of offers

| Section | What's in it | Link |
| --- | --- | --- |
| Temporary | Open limited-time campaigns, sorted by expiry, with countdowns | [eggx.wehuman.top](https://eggx.wehuman.top/en/) |
| Long-term | Continuously available free tiers and plans you can rely on | [/en/long-term](https://eggx.wehuman.top/en/long-term/) |
| Application | Benefits that require applying, verification, or manual review | [/en/application](https://eggx.wehuman.top/en/application/) |
| Expired | Audit archive of dead campaigns — like arsenic, not recommended | [/en/expired](https://eggx.wehuman.top/en/expired/) |

## Honesty first

- **Verified vs community** — every offer carries a trust label: confirmed by official docs, or reported by the community and worth a second check. Third-party sources are welcome leads; entries get verified before they're listed.
- **Free ≠ unlimited** — unpublished limits stay "not published"; we never guess them into "unlimited". Read each offer's limits before you depend on it.
- **Expired offers are archived, never deleted** — the audit trail stays public. A dead source proves a past verification, never current availability.

## Humans browse, agents fetch

eggx is built for humans and agents alike: bilingual content (Chinese default, English at [`/en/`](https://eggx.wehuman.top/en/)) plus static, keyless machine endpoints:

- [`/agent/`](https://eggx.wehuman.top/agent/) — agent access guide (Skill / API / RSS)
- [`/llms.txt`](https://eggx.wehuman.top/llms.txt) — guide for agents
- [`/api/v1/offers.json`](https://eggx.wehuman.top/api/v1/offers.json) — all active offers (JSON)
- [`/api/v1/codex-resets.json`](https://eggx.wehuman.top/api/v1/codex-resets.json) — Codex reset log (JSON)
- [`/api/v1/aweshare.json`](https://eggx.wehuman.top/api/v1/aweshare.json) — aweshare hub shared-model availability (JSON, hourly snapshot)
- [`/feed.xml`](https://eggx.wehuman.top/feed.xml) — RSS feed
- [`/openapi.json`](https://eggx.wehuman.top/openapi.json) — full API description

There is also an official skill package for agents (managed via [aweskill](https://github.com/wehuman01/aweskill) — one install, projected into Claude Code, Codex, Gemini CLI, and more):

```bash
aweskill install wehuman01/eggx --skill eggx
```

## Sources & credits

- **aweshare model availability** ([tracking page](https://eggx.wehuman.top/en/aweshare/)) — an hourly snapshot of the [aweshare](https://github.com/wehuman01/aweshare) hub we operate: which shared models are usable, their wire protocols, and remaining shared daily budgets. Public fields only (alias/protocol/status/budget); access is by invite.
- **Codex reset tracker** ([tracking page](https://eggx.wehuman.top/en/codex-reset/)) — tracks Codex full resets and reset cards publicly announced by Tibo (@thsottiaux) on X. Data is synced automatically from the public API of [AIHOT](https://aihot.news/codex-reset): facts such as times and types come from the public posts themselves, every entry links back to the original post, the Chinese quote renderings are AIHOT's AI translations (translation rights remain with AIHOT), and the English originals are credited to their author.
- Not an official OpenAI page; for information only. Whether and when resets happen is entirely OpenAI's call.

## Contribute

- Found a new offer? [Submit it](https://github.com/wehuman01/eggx/issues/new?template=submit.yml) with the official source link.
- Finding it useful? [Star it on GitHub](https://github.com/wehuman01/eggx) ★ so more people see it.

## License

MIT.
