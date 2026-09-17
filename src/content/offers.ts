import { validateRegistry } from "../lib/schema";

export const offers = validateRegistry([
  {
    id: "zcode",
    provider: "Z.ai",
    kind: "temporary",
    access: "application",
    verified: false,
    expiry: "2026-09-20",
    url: "https://z.ai",
    source: "https://docs.z.ai/guides/overview/pricing",
    actionUrl: "https://z.ai",
    lastVerified: "2026-09-17",
    zh: {
      name: "ZCode 限时免费",
      description:
        "社区追踪到的 ZCode 免费活动，窗口为 2026-09-03 至 2026-09-20。官方定价页只标注 GLM flash 系列永久免费，活动详情请在 ZCode 客户端内确认后再依赖。",
      limits: "官方定价页未公布额度，请在 ZCode 客户端活动页确认",
      caveat: "活动窗口来自社区追踪而非官方公告，需在 ZCode 客户端内二次确认。",
    },
    en: {
      name: "ZCode Free Campaign",
      description:
        "Community-tracked ZCode free campaign running 2026-09-03 to 2026-09-20. The official pricing page only lists GLM flash models as permanently free, so confirm the campaign inside the ZCode client before relying on it.",
      limits: "Not published on the official pricing page; confirm in the ZCode client activity tab",
      caveat:
        "Campaign window comes from community tracking, not an official announcement. Requires explicit confirmation in the ZCode client.",
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
        "官方仅说明限时、未公布截止日期。部分免费车道（Big Pickle、MiMo、Ling、Nemotron）可能将提示用于训练；Union Alpha 本身零留存。",
    },
    en: {
      name: "OpenCode Zen Union Alpha Free Lane",
      description:
        "OpenCode Zen's zero-price Union Alpha lane: a stealth frontier multimodal model free for a limited time, with zero-retention privacy. Also free: MiMo-V2.5, Ling 3.0 Flash Fin, Nemotron 3 Ultra / 3.5 Lightning, Big Pickle, Muse Spark 1.3 Contributor.",
      limits: "Free during the limited-time period; per-model caps not published",
      caveat:
        "Official page says limited time with no end date published. Some other free lanes (Big Pickle, MiMo, Ling, Nemotron) may use prompts for training; Union Alpha itself is zero-retention.",
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
        "兼容 OpenAI 与 Anthropic 格式的聚合网关，内置数十个免费模型，包括 gpt-5.5-free、gemini-3.8-flash-free、coding-glm-5.3-free、coding-kimi-k3-free。无需信用卡、无试用期，配额每日重置。",
      limits: "单个免费模型通常 5 请求/分、100–500 请求/日、100 万 token/日；部分模型未公布数字",
      caveat: "GPT 系列走 Azure 且带内容过滤；Gemini 系列为试用级，可能 429。",
    },
    en: {
      name: "AIHubMix Free Models",
      description:
        "OpenAI-compatible and Anthropic-format gateway with dozens of free models, including gpt-5.5-free, gemini-3.8-flash-free, coding-glm-5.3-free, and coding-kimi-k3-free. No credit card, no trial expiry, quotas reset daily.",
      limits:
        "Per free model, typically 5 requests/min, 100–500 requests/day, 1M tokens/day; some models publish no numbers",
      caveat: "GPT rows run on Azure with a content filter; Gemini rows are trial-grade and may 429.",
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
      limits: "并发与每日 token 预算由生产者设定；hub 只接纳少量消费者",
      caveat:
        "仅限邀请，所有提示词经 hub 中转、运营者可见。共享个人订阅 key 可能违反上游条款；自托管开源模型则无此问题。",
    },
    en: {
      name: "aweshare Community Hub",
      description:
        "Community model-sharing hub: producers expose their own backends (Ollama, vLLM, or API accounts) and consumers call them through standard OpenAI/Anthropic/Responses SDKs against one URL.",
      limits: "Producer-defined concurrency and daily token budgets; hub admits a small number of consumers",
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
        "OpenAI 面向开源维护者的资助计划，表彰持续的公开维护工作，为维护者提供免费 Codex 访问。",
      limits: "申请制；资助规模按申请人情况决定",
      caveat: "需要一个持续维护中的开源项目。",
    },
    en: {
      name: "Codex for Open Source",
      description:
        "OpenAI program granting open-source maintainers free Codex access in recognition of public maintenance work.",
      limits: "Application-based; benefit size decided per applicant",
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
        "通过学生认证后获得 12 个月 Codex 访问与 API 额度，首批面向美国和加拿大高校。",
      limits: "据报告为认证学生 12 个月 100 美元额度",
      caveat: "需学生身份认证；首批以美国/加拿大为主。",
    },
    en: {
      name: "Codex for Students",
      description:
        "Verified students get Codex access with API credits for 12 months, aimed at US and Canada schools at launch.",
      limits: "Reported as $100 in credits over 12 months for verified students",
      caveat: "Student verification required; availability has been US/Canada-first.",
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
        "免费开源（GPL）的高性能编辑器。内置 AI（Zeta）为订阅制、不送推理额度；建议搭配上面的免费平台，通过自定义 OpenAI 兼容 provider 接入。",
      limits: "编辑器永久免费；AI 用量取决于你接入的平台",
      caveat: "本身不是免费模型额度的来源。",
    },
    en: {
      name: "Zed",
      description:
        "Free open-source (GPL) high-performance editor. Its built-in AI (Zeta) is subscription-based and grants no free inference credits; pair it with a free platform above via custom OpenAI-compatible providers instead.",
      limits: "Editor free forever; AI usage depends on the provider you connect",
      caveat: "Not a source of free model credits by itself.",
    },
  },
]);
