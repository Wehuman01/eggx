import { validateRegistry } from "../lib/schema";

export const offers = validateRegistry([
  {
    id: "zcode",
    provider: "Z.ai",
    kind: "temporary",
    access: "application",
    verified: true,
    expiry: "2026-09-20",
    url: "https://zcode.z.ai/en",
    source: "https://docs.z.ai/devpack/notice/event-glm-5.3-flash",
    actionUrl: "https://zcode.z.ai/en",
    lastVerified: "2026-09-17",
    zh: {
      name: "ZCode 夜间免额度活动 + 新人 5 天试用",
      description:
        "GLM Coding Plan 官方 GLM-5.3-Flash 用量活动（2026-09-03 至 2026-09-20）：每天 23:00 至次日 09:00（新加坡时间 UTC+8），付费计划用户经 ZCode 使用 GLM-5.3-Flash 零额度消耗、不限量；经其他受支持 Agent 使用则额度翻倍。另：ZCode 新用户开箱即享 5 天免费试用，每天 500 万 tokens（GLM-5.3 300 万 + GLM-5-turbo 200 万）。",
      limits:
        "夜间窗口经 ZCode 用 GLM-5.3-Flash 不限量（需 ZCode ≥ 3.10，且 5 小时/周额度未耗尽）；新用户试用每天 5M tokens，仅前 5 天有效",
      caveat:
        "时段为新加坡时间（UTC+8），周末节假日同样适用；仅限 GLM-5.3-Flash，GLM-5.3 照常扣额度；活动 2026-09-20 截止，需付费 Coding Plan。",
    },
    en: {
      name: "ZCode Nightly Free Campaign + 5-Day New-User Trial",
      description:
        "Official GLM Coding Plan GLM-5.3-Flash usage campaign (Sep 3–20, 2026): daily 23:00–09:00 the next day (Singapore time, UTC+8), paid-plan users get unlimited zero-quota GLM-5.3-Flash via ZCode, and doubled quota via other supported agents. Plus: first-time ZCode users get a 5-day free trial with 5M tokens per day (3M GLM-5.3 + 2M GLM-5-turbo), ready out of the box.",
      limits:
        "Nightly GLM-5.3-Flash via ZCode is unlimited (needs ZCode ≥ 3.10 and non-exhausted 5-hour/weekly quota); the new-user trial grants 5M tokens/day for the first 5 days only",
      caveat:
        "Window is Singapore time (UTC+8), weekends and holidays included; GLM-5.3-Flash only — GLM-5.3 still burns quota; campaign ends 2026-09-20 and requires a paid Coding Plan.",
    },
  },
  {
    id: "opencode-zen-union-alpha",
    provider: "OpenCode",
    kind: "temporary",
    access: "public",
    verified: true,
    expiry: null,
    url: "https://opencode.ai/docs/zen",
    source: "https://opencode.ai/docs/zen",
    actionUrl: "https://opencode.ai/auth",
    lastVerified: "2026-09-17",
    zh: {
      name: "OpenCode Zen Union Alpha 免费车道",
      description:
        "OpenCode Zen 的零价格 Union Alpha 车道：限时免费的前沿多模态模型，零数据留存。同时免费的还有 MiMo-V2.5、Ling 3.0 Flash Fin、Nemotron 3 Ultra / 3.5 Lightning、Big Pickle、Muse Spark 1.3 Contributor。",
      limits: "限时免费期内可用；各模型配额未公布",
      caveat:
        "官方仅说明限时、未公布截止日期。除 Union Alpha 零留存外，Big Pickle、MiMo、Ling、Nemotron 免费期数据可能用于改进模型；Muse Spark Contributor 的提示词与补全会用于训练 Meta 模型。",
    },
    en: {
      name: "OpenCode Zen Union Alpha Free Lane",
      description:
        "OpenCode Zen's zero-price Union Alpha lane: a stealth frontier multimodal model free for a limited time, with zero-retention privacy. Also free: MiMo-V2.5, Ling 3.0 Flash Fin, Nemotron 3 Ultra / 3.5 Lightning, Big Pickle, Muse Spark 1.3 Contributor.",
      limits: "Free during the limited-time period; per-model caps not published",
      caveat:
        "Official page says limited time with no end date published. Beyond zero-retention Union Alpha, Big Pickle, MiMo, Ling, and Nemotron may use free-period data to improve the model; Muse Spark Contributor's prompts and completions train future Meta models.",
    },
  },
  {
    id: "aihubmix",
    provider: "AIHubMix",
    kind: "long-term",
    access: "public",
    verified: true,
    url: "https://aihubmix.com",
    source: "https://docs.aihubmix.com/en/blogs/free-ai-models",
    actionUrl: "https://aihubmix.com/token",
    lastVerified: "2026-09-17",
    zh: {
      name: "AIHubMix 免费模型",
      description:
        "兼容 OpenAI 与 Anthropic 格式的聚合网关，内置 27+ 个免费模型，包括 gpt-5.5-free、gpt-image-2-free、gemini-3-flash-preview-free、coding-glm-5.1-free、kimi-for-coding-free、xiaomi-mimo-v2.5-free。无需信用卡、无试用期，配额每日重置。",
      limits:
        "新用户注册即得每个免费模型 10 次调用，充值解锁更多；付费用户另获 10 次调用与 100 万 token。按模型设 RPM 与每日 token 上限，具体见各模型页",
      caveat: "GPT 免费版托管于 Azure；各模型限额不同，以模型页为准。",
    },
    en: {
      name: "AIHubMix Free Models",
      description:
        "OpenAI-compatible and Anthropic-format gateway with 27+ free models, including gpt-5.5-free, gpt-image-2-free, gemini-3-flash-preview-free, coding-glm-5.1-free, kimi-for-coding-free, and xiaomi-mimo-v2.5-free. No credit card, no trial expiry, quotas reset daily.",
      limits:
        "New users get 10 free calls per free model, top up to unlock more; paying users receive 10 more calls plus a million-token top-up. Per-model RPM and daily token caps are published on each model page",
      caveat: "Free GPT rows are hosted on Azure; caps vary per model.",
    },
  },
  {
    id: "openrouter",
    provider: "OpenRouter",
    kind: "long-term",
    access: "public",
    verified: true,
    url: "https://openrouter.ai",
    source: "https://openrouter.ai/docs/limits",
    actionUrl: "https://openrouter.ai",
    lastVerified: "2026-09-17",
    zh: {
      name: "OpenRouter 免费层",
      description:
        "支持匿名访问的模型网关，约 20 个 :free 模型轮换供应，另有 stealth/union-alpha 等零价格车道。一把钥匙调用数百个模型，兼容任何 OpenAI 格式工具。",
      limits:
        ":free 模型 20 请求/分；未充值 50 请求/日，累计充值 10 美元后 1000 请求/日（账户级、所有免费模型共享）",
      caveat: "每日配额在账户下所有 :free 模型间共享；stealth/union-alpha 定价为 0 但上限未公布。",
    },
    en: {
      name: "OpenRouter Free Tier",
      description:
        "Anonymous-access model gateway with a rotating set of :free models (about 20 today) plus zero-price non-free lanes such as stealth/union-alpha. One key, hundreds of models, works with any OpenAI-compatible tool.",
      limits:
        ":free models: 20 requests/min; 50 requests/day without top-up, 1000/day after 10 lifetime credits (account-wide, shared across all free models)",
      caveat:
        "Daily cap is shared across every :free model on the account; stealth/union-alpha is priced 0 without the :free cap but its ceiling is unpublished.",
    },
  },
  {
    id: "aweshare",
    provider: "aweshare",
    kind: "long-term",
    access: "invite",
    verified: true,
    url: "https://aweshare.wehuman.top",
    source: "https://github.com/wehuman01/aweshare/blob/main/docs/community-hub/README_cn.md",
    actionUrl: "https://github.com/wehuman01/aweshare/blob/main/docs/community-hub/README_cn.md",
    lastVerified: "2026-09-17",
    zh: {
      name: "aweshare 社区 Hub",
      description:
        "社区模型共享枢纽：生产者暴露自己的后端（Ollama、vLLM 或 API 账号），消费者通过标准 OpenAI/Anthropic/Responses SDK 对接一个 URL 即可调用。",
      limits: "并发与每日 token 预算由生产者设定；hub 全局消费者名额当前 10 个，生产者不设限",
      caveat:
        "仅限邀请，所有提示词经 hub 中转、运营者可见。共享个人订阅 key 可能违反上游条款；自托管开源模型则无此问题。",
    },
    en: {
      name: "aweshare Community Hub",
      description:
        "Community model-sharing hub: producers expose their own backends (Ollama, vLLM, or API accounts) and consumers call them through standard OpenAI/Anthropic/Responses SDKs against one URL.",
      limits: "Producer-defined concurrency and daily token budgets; hub-wide consumer cap currently 10, producers unlimited",
      caveat:
        "Invite-only, and all prompts transit the hub where the operator can see them. Sharing personal subscription keys may violate upstream terms; self-hosted open models are clean.",
    },
  },
  {
    id: "openai-codex-oss",
    provider: "OpenAI",
    kind: "long-term",
    access: "application",
    verified: true,
    source: "https://openai.com/form/codex-for-oss/",
    actionUrl: "https://openai.com/form/codex-for-oss/",
    lastVerified: "2026-09-17",
    zh: {
      name: "Codex 开源维护者计划",
      description:
        "OpenAI 面向开源维护者的资助计划：入选者获 6 个月 ChatGPT Pro（含 Codex）、用于项目维护与自动化等工作流的 API 额度，以及条件性的 Codex Security 访问。",
      limits: "申请制、滚动评审；可自荐或提名他人",
      caveat: "需要一个活跃维护中的开源项目。",
    },
    en: {
      name: "Codex for Open Source",
      description:
        "OpenAI program for open-source maintainers: selected maintainers receive 6 months of ChatGPT Pro (which includes Codex), API credits for review/automation/release workflows, and conditional access to Codex Security.",
      limits: "Application-based, reviewed on a rolling basis; self-apply or nominate another maintainer",
      caveat: "Requires an actively maintained open-source project.",
    },
  },
  {
    id: "codex-students",
    provider: "OpenAI",
    kind: "long-term",
    access: "student",
    verified: true,
    source: "https://developers.openai.com/community/students",
    actionUrl: "https://developers.openai.com/community/students",
    lastVerified: "2026-09-17",
    zh: {
      name: "Codex 学生计划",
      description:
        "美国/加拿大高校在读学生通过认证后，获得 100 美元 ChatGPT 额度（2,500 credits，价值约 100 美元）用于 Codex，授予后 12 个月内有效。",
      limits: "认证学生一次性 100 美元额度，12 个月内用完；需 ChatGPT 账号（Free/Go/Plus/Pro）",
      caveat: "是 ChatGPT 额度而非 API 额度；目前仅限美加高校在读且居住在美加的学生。",
    },
    en: {
      name: "Codex for Students",
      description:
        "Verified university students in the US and Canada get $100 in ChatGPT credits (2,500 credits) for use in Codex, expiring 12 months after the grant date.",
      limits: "One-time $100 grant per verified student, usable for 12 months; requires a ChatGPT account (Free/Go/Plus/Pro)",
      caveat: "These are ChatGPT credits, not API credits; currently limited to students enrolled in and residing in the US/Canada.",
    },
  },
  {
    id: "stepfun-builder",
    provider: "StepFun",
    kind: "long-term",
    access: "application",
    verified: true,
    url: "https://platform.stepfun.com",
    source: "https://platform.stepfun.com/builder-program",
    actionUrl: "https://platform.stepfun.com/builder-program",
    lastVerified: "2026-09-17",
    zh: {
      name: "StepFun Builder 计划",
      description:
        "季度开发者计划：两分钟填表即可获得模型 API、Step Plan、AI Studio 与开发额度，另有工作坊和社区。教育认证通道支持学信材料。",
      limits: "申请制；按季度滚动；优秀项目可升级至 Startup Program",
      caveat: "接受个人申请，不需要商业计划书。",
    },
    en: {
      name: "StepFun Builder Program",
      description:
        "Quarterly builder program: a two-minute form gets you model API access, Step Plan, AI Studio, and development quota, plus workshops and community. A separate education-verification channel accepts Xuexin materials.",
      limits: "Application-based; quarterly cycles; projects can graduate to the Startup Program",
      caveat: "Individuals welcome; no business plan required.",
    },
  },
  {
    id: "github-student",
    provider: "GitHub",
    kind: "long-term",
    access: "student",
    verified: true,
    url: "https://education.github.com",
    source: "https://education.github.com/pack",
    actionUrl: "https://education.github.com/pack",
    lastVerified: "2026-09-17",
    zh: {
      name: "GitHub 学生开发者包",
      description:
        "学生包捆绑 GitHub Pro、Copilot 访问和大量合作伙伴工具，面向通过认证的学生。",
      limits: "学生身份持续有效期间可续期",
      caveat: "需要学校邮箱或学籍认证。",
    },
    en: {
      name: "GitHub Student Developer Pack",
      description:
        "The student pack bundles GitHub Pro, Copilot access, and a large catalog of partner tools for verified students.",
      limits: "Renewed while student status stays verified",
      caveat: "Requires school-issued email or enrollment verification.",
    },
  },
  {
    id: "zed",
    provider: "Zed Industries",
    kind: "long-term",
    access: "public",
    verified: true,
    url: "https://zed.dev",
    source: "https://github.com/zed-industries/zed",
    actionUrl: "https://zed.dev/download",
    lastVerified: "2026-09-17",
    zh: {
      name: "Zed",
      description:
        "免费开源的高性能编辑器（主体 GPL-3.0，部分组件 Apache-2.0）。内置 AI（Zeta）为订阅制、不送推理额度；建议搭配上面的免费平台，通过自定义 OpenAI 兼容 provider 接入。",
      limits: "编辑器永久免费；AI 用量取决于你接入的平台",
      caveat: "本身不是免费模型额度的来源。",
    },
    en: {
      name: "Zed",
      description:
        "Free open-source high-performance editor (primarily GPL-3.0, with Apache-2.0 components). Its built-in AI (Zeta) is subscription-based and grants no free inference credits; pair it with a free platform above via custom OpenAI-compatible providers instead.",
      limits: "Editor free forever; AI usage depends on the provider you connect",
      caveat: "Not a source of free model credits by itself.",
    },
  },
]);
