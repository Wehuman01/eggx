import { validateRegistry } from "../lib/schema";

export const offers = validateRegistry([
  {
    id: "zcode",
    provider: "Z.ai",
    kind: "temporary",
    access: "public",
    verified: true,
    expiry: "2026-09-20",
    url: "https://zcode.z.ai/en",
    source: "https://docs.z.ai/devpack/notice/event-glm-5.3-flash",
    actionUrl: "https://zcode.z.ai/en",
    lastVerified: "2026-09-18",
    zh: {
      name: "ZCode 夜间免额度活动 + 新人 5 天试用",
      description:
        "GLM Coding Plan 官方 GLM-5.3-Flash 夜间活动（2026-09-03 至 2026-09-20）：每天 23:00 至次日 09:00（北京时间 UTC+8），付费计划用户经 ZCode 使用 GLM-5.3-Flash 零额度消耗、不限量；经其他受支持 Agent 使用则额度翻倍。无需申请，装上 ZCode 即享。新用户另送 5 天免费试用，每天 500 万 tokens（GLM-5.3 300 万 + GLM-5-turbo 200 万）。",
      limits:
        "夜间窗口经 ZCode 用 GLM-5.3-Flash 不限量（需 ZCode ≥ 3.10，且 5 小时/周额度未耗尽）；新用户试用每天 5M tokens，仅前 5 天有效",
      caveat:
        "周末节假日同样适用；仅限 GLM-5.3-Flash，GLM-5.3 照常扣额度；活动 2026-09-20 截止，需付费 Coding Plan。",
    },
    en: {
      name: "ZCode Nightly Free Campaign + 5-Day New-User Trial",
      description:
        "Official GLM Coding Plan GLM-5.3-Flash usage campaign (Sep 3–20, 2026): daily 23:00–09:00 the next day (Beijing time, UTC+8), paid-plan users get unlimited zero-quota GLM-5.3-Flash via ZCode, and doubled quota via other supported agents. No application needed — install ZCode and go. First-time ZCode users also get a 5-day free trial with 5M tokens per day (3M GLM-5.3 + 2M GLM-5-turbo).",
      limits:
        "Nightly GLM-5.3-Flash via ZCode is unlimited (needs ZCode ≥ 3.10 and non-exhausted 5-hour/weekly quota); the new-user trial grants 5M tokens/day for the first 5 days only",
      caveat:
        "Weekends and holidays included; GLM-5.3-Flash only — GLM-5.3 still burns quota; campaign ends 2026-09-20 and requires a paid Coding Plan.",
    },
  },
  {
    id: "zcode-weekend-plan",
    provider: "Z.ai",
    kind: "temporary",
    access: "public",
    verified: true,
    expiry: null,
    url: "https://zcode.z.ai/cn",
    source: "https://zcode.z.ai/cn/changelog",
    actionUrl: "https://zcode.z.ai/cn",
    lastVerified: "2026-09-18",
    zh: {
      name: "ZCode 周末计划：免费领体验额度",
      description:
        "每周五 15:00 起（北京时间）在 ZCode 客户端活动卡片领取，20:00 生效、周一 09:00 过期；所有登录用户（新用户、老用户、订阅用户）均可领，每账号每轮限领一次，订阅用户原有权益不受影响。官方更新日志确认了 Weekend Plan 免费领取功能（3.10.1）；额度为社区一致报告的 3 亿 GLM-5.3-Flash Token，仅限 ZCode 内使用，具体以客户端活动卡片为准。",
      limits:
        "3 亿 GLM-5.3-Flash 体验额度（社区报告数）；仅限 ZCode 内使用，需 ZCode ≥ 3.10.1；周五 20:00 生效、周一 09:00 过期，未用完自动失效，不可延期、不可折现",
      caveat:
        "官方文档未公布具体额度数字；高峰期可能限流，付费用户优先保障；活动按每周轮换进行，结束时间未公布。",
    },
    en: {
      name: "ZCode Weekend Plan: free trial quota",
      description:
        "Claims open every Friday 15:00 Beijing time from the activity card in the ZCode client; active 20:00 Friday until Monday 09:00. All signed-in users (new, existing, and Coding Plan subscribers) can claim once per round; subscriber benefits are unaffected. The official changelog confirms the Weekend Plan free claim (3.10.1); the quota is consistently reported by the community as 300M GLM-5.3-Flash tokens, usable in ZCode only — check the in-client card for the exact figure.",
      limits:
        "300M GLM-5.3-Flash trial tokens (community-reported); ZCode use only, requires ZCode ≥ 3.10.1; active Friday 20:00 until Monday 09:00, unused tokens expire, no extension or cash-out",
      caveat:
        "The exact token amount is not published in official docs; rate limits may apply at peak times with priority for paid users; runs as weekly rounds with no announced end date.",
    },
  },
  {
    id: "glm-coding-trial-card",
    provider: "Z.ai",
    kind: "temporary",
    access: "public",
    verified: true,
    expiry: null,
    url: "https://bigmodel.cn/activity/trial-card/D1FDY1XXYQ",
    source: "https://bigmodel.cn/activity/trial-card/D1FDY1XXYQ",
    actionUrl: "https://bigmodel.cn/activity/trial-card/D1FDY1XXYQ",
    lastVerified: "2026-09-19",
    zh: {
      name: "GLM Coding Plan 7 天体验卡",
      description:
        "智谱官方邀请体验活动：通过邀请链接领取 GLM Coding Plan 7 天 AI 编程体验卡，支持 GLM-5.3 与 GLM-5.3-Flash 双模型，无需订阅即可在受支持的 Agent 里试用。",
      limits:
        "该邀请含 3 张体验卡，先到先得，领完即止；每张 7 天有效，支持 GLM-5.3 与 GLM-5.3-Flash",
      caveat:
        "邀请制分享链接，数量有限；体验卡的领取规则与适用范围以 bigmodel.cn 活动页为准。",
    },
    en: {
      name: "GLM Coding Plan 7-Day Trial Card",
      description:
        "Official Zhipu invite campaign: claim a 7-day GLM Coding Plan trial card via the invite link, with support for both GLM-5.3 and GLM-5.3-Flash — no subscription needed to try them in supported agents.",
      limits:
        "This invite carries 3 trial cards, first come first served; each card lasts 7 days and covers GLM-5.3 and GLM-5.3-Flash",
      caveat:
        "Invite-based link with limited cards; claim rules and eligibility follow the bigmodel.cn activity page.",
    },
  },
  {
    id: "opencode-zen-union-alpha",
    provider: "OpenCode",
    kind: "temporary",
    access: "public",
    verified: true,
    archived: true,
    expiry: "2026-09-24",
    url: "https://opencode.ai/docs/zen",
    source: "https://opencode.ai/docs/zen",
    actionUrl: "https://opencode.ai/auth",
    lastVerified: "2026-09-18",
    zh: {
      name: "OpenCode Zen Union Alpha 免费车道",
      description:
        "OpenCode Zen 的零价格 Union Alpha 车道：匿名前沿多模态模型限时免费（一周活动，原定 9 月 24 日截止）、零数据留存。同车免费的还有 MiMo-V2.5、Ling 3.0 Flash Fin、Nemotron 3 Ultra / 3.5 Lightning、Big Pickle、Muse Spark 1.3 Contributor。",
      limits: "限时免费期内可用；各模型配额未公布",
      caveat:
        "活动提前下线，2026-09-18 核实已失效，本条仅作归档。原记录：除 Union Alpha 零留存外，Big Pickle、MiMo、Ling、Nemotron 免费期数据可能用于改进模型；Muse Spark Contributor 的提示词与补全会用于训练 Meta 模型。",
    },
    en: {
      name: "OpenCode Zen Union Alpha Free Lane",
      description:
        "OpenCode Zen's zero-price Union Alpha lane: a stealth frontier multimodal model free for a limited time (one-week run, originally through Sep 24) with zero-retention privacy. Also free: MiMo-V2.5, Ling 3.0 Flash Fin, Nemotron 3 Ultra / 3.5 Lightning, Big Pickle, Muse Spark 1.3 Contributor.",
      limits: "Free during the limited-time period; per-model caps not published",
      caveat:
        "The campaign ended early and was confirmed dead on 2026-09-18; this entry is archived. Original record: beyond zero-retention Union Alpha, Big Pickle, MiMo, Ling, and Nemotron may use free-period data to improve the model; Muse Spark Contributor's prompts and completions train future Meta models.",
    },
  },
  {
    id: "qoder-qwen38-flash-free",
    provider: "Qoder",
    kind: "temporary",
    access: "public",
    verified: false,
    expiry: "2026-09-30",
    url: "https://qoder.cn",
    source: "https://qoder.cn",
    actionUrl: "https://qoder.cn",
    lastVerified: "2026-09-18",
    zh: {
      name: "Qoder：Qwen3.8-Flash 免费用到 9 月 30 日 + 每日 100 Credits",
      description:
        "阿里 Qoder 编程平台的限时福利（9 月 18 日 10:00 起）：打开 Qoder 桌面端，模型选择器选中 Qwen3.8-Flash 即用，计费系数从 0.1× 降到 0.0×，不扣 Credits，免费至 9 月 30 日，无需领取资格。同期叠加每天可领的 100 通用 Credits（每笔有效期 30 天，可累积）。国际版与国内版、新老个人用户均有份。",
      limits:
        "Qwen3.8-Flash 在 Qoder 内不扣 Credits（至 9 月 30 日）；每日 100 通用 Credits 需当天领取，每笔 30 天有效、可累积；面向个人用户",
      caveat:
        "来自公众号「数字生命Q」文章（2026-09-18 收录），属社区消息，Qoder 官网未见公告；活动起始与截止时间、Credits 规则以客户端实际展示为准。上一次同类赠送很多人没赶上，这次别拖。",
    },
    en: {
      name: "Qoder: Qwen3.8-Flash free through Sep 30 + 100 daily Credits",
      description:
        "A limited-time perk on Alibaba's Qoder coding platform (from Sep 18, 10:00): open the Qoder desktop app, pick Qwen3.8-Flash in the model selector and go — the billing multiplier drops from 0.1x to 0.0x, no Credits deducted, free through Sep 30, no claim needed. Stacked on top: 100 general Credits claimable every day, each grant valid 30 days and accumulative. International and CN editions, new and existing individual users alike.",
      limits:
        "Qwen3.8-Flash costs zero Credits inside Qoder through Sep 30; the 100 daily general Credits must be claimed each day, every grant lasts 30 days and stacks; individual users only",
      caveat:
        "Reported by the WeChat account 数字生命Q (added 2026-09-18) — a community lead, no official announcement on the Qoder site; start/end times and Credit rules follow what the client actually shows. The last giveaway of this kind left many empty-handed — don't sit on this one.",
    },
  },
  {
    id: "workbuddy-intl-free",
    provider: "Tencent WorkBuddy",
    kind: "temporary",
    access: "public",
    verified: true,
    expiry: null,
    url: "https://www.workbuddy.ai/",
    source: "https://www.workbuddy.ai/",
    actionUrl: "https://www.workbuddy.ai/",
    lastVerified: "2026-09-18",
    zh: {
      name: "WorkBuddy 国际版：Hy4 preview + DeepSeek V4.1 Flash 免费",
      description:
        "腾讯的 AI 办公工作台，国际版（workbuddy.ai）内置 Claude、GPT、Gemini、混元、DeepSeek 等模型，免翻墙可用。当前 Hy4 preview 与 DeepSeek V4.1 Flash 两个模型免费使用：Hy4 preview 是 8 月 28 日开源的腾讯混元 770B MoE 模型（1M 上下文，Terminal Bench 2.1 得分 85.4）；DeepSeek V4.1 Flash 是 9 月 10 日发布的轻量旗舰（552B MoE）。国内版同期为限时折扣（DeepSeek 0.03 倍率、Hy4 闲时免费），国际版更宽松。",
      limits:
        "每日免费额度有限，触发限频需等待页面重置；Hy4 preview 不支持图像/视频等多模态任务（走其他模型正常扣积分）；国际版新用户注册送 350 积分",
      caveat:
        "免费口径以官方计费页展示为准（2026-09-18 核实），官方未单独发布国际版公告。GitHub 一键登录有封号报告，建议邮箱注册。",
    },
    en: {
      name: "WorkBuddy International: Hy4 preview + DeepSeek V4.1 Flash Free",
      description:
        "Tencent's AI office workbench — the international edition (workbuddy.ai) ships Claude, GPT, Gemini, Hunyuan, and DeepSeek models. Hy4 preview and DeepSeek V4.1 Flash are currently free there: Hy4 preview is Tencent Hunyuan's open-source 770B MoE released Aug 28 (1M context, 85.4 on Terminal Bench 2.1); DeepSeek V4.1 Flash is the lightweight flagship released Sep 10 (552B MoE). The domestic edition only discounts in the same window (0.03x DeepSeek rate, off-peak Hy4) — the international one is more generous.",
      limits:
        "Daily free quota is rationed; hitting the rate limit waits for the on-page reset. Hy4 preview has no multimodal support (image/video tasks switch models and burn credits normally); international new users get 350 credits",
      caveat:
        "The free terms follow the official billing page (verified 2026-09-18); there is no separate international announcement. GitHub one-click sign-in has ban reports; prefer email signup.",
    },
  },
  {
    id: "sciencepro-xinzhiyuan-code",
    provider: "磐石 SciencePro",
    kind: "temporary",
    access: "public",
    verified: false,
    expiry: null,
    url: "https://www.scienceone.com.cn/portal/",
    source: "https://www.scienceone.com.cn/portal/",
    actionUrl: "https://www.scienceone.com.cn/portal/",
    code: "DH26JYZ5684",
    lastVerified: "2026-09-18",
    zh: {
      name: "磐石 SciencePro：新智元独家兑换码",
      description:
        "中科闻歌的 AI for Science 科研智能平台：深度研究（多智能体调研）、对话式科学计算、2.7 亿论文/专利文献库。新智元公众号发文送独家福利——注册后在平台内输入兑换码，领取独家福利积分，兑换的 token 直接到账。注意这是科研平台，不是编码工具。",
      limits: "积分/Token 到账数量未公布，以平台内实际到账为准",
      caveat:
        "兑换码来自新智元公众号文章（2026-09-18 收录），属社区消息，未见官方公告；数量有限，领完即止，需注册平台账号。",
    },
    en: {
      name: "Panshi SciencePro: Xinzhiyuan exclusive redemption code",
      description:
        "An AI for Science research platform by Zhongke Wenge: deep research (multi-agent investigation), conversational scientific computing, and a 270M paper/patent library. Xinzhiyuan's WeChat article gives away an exclusive code — sign up, enter it in the platform, and the bonus credits (redeemable for tokens) land directly in your account. Note: this is a research platform, not a coding tool.",
      limits: "Credit/token amount not published; go by what actually lands in your account",
      caveat:
        "The code comes from Xinzhiyuan's WeChat article (added 2026-09-18) — a community lead, no official announcement seen; limited quantity, first come first served, platform account required.",
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
    lastVerified: "2026-09-18",
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
    lastVerified: "2026-09-18",
    zh: {
      name: "OpenRouter 免费层",
      description:
        "支持匿名访问的模型网关：约 20 个 :free 模型轮换供应，另有 stealth/union-alpha 零价格车道——与 OpenCode Zen 免费车同名的 Union Alpha，定价 0、262K 上下文、支持图像输入，申请 API key 后可在任意 agent 中调用。",
      limits:
        ":free 模型 20 请求/分；未充值 50 请求/日，累计充值 10 美元后 1000 请求/日（账户级、所有免费模型共享）；stealth/union-alpha 官方未公布限额",
      caveat: "每日配额在账户下所有 :free 模型间共享；stealth/union-alpha 不带 :free 后缀、不占该配额。",
    },
    en: {
      name: "OpenRouter Free Tier",
      description:
        "Anonymous-access model gateway with a rotating set of :free models (about 20 today) plus the stealth/union-alpha zero-price lane — the same Union Alpha as OpenCode Zen's free lane, priced at 0 with a 262K context and image input, callable from any agent with an API key.",
      limits:
        ":free models: 20 requests/min; 50 requests/day without top-up, 1000/day after 10 lifetime credits (account-wide, shared across all free models); no limit published for stealth/union-alpha",
      caveat:
        "Daily cap is shared across every :free model on the account; stealth/union-alpha carries no :free suffix and does not count against it.",
    },
  },
  {
    id: "opencode-zen-free-rotation",
    provider: "OpenCode",
    kind: "long-term",
    access: "public",
    verified: true,
    url: "https://opencode.ai/zen",
    source: "https://opencode.ai/docs/zen",
    actionUrl: "https://opencode.ai/auth",
    lastVerified: "2026-09-18",
    zh: {
      name: "OpenCode Zen 免费车道（长期轮换）",
      description:
        "OpenCode Zen 的免费车道长期在营、模型滚动轮换：GLM 4.7、MiniMax M2.1、Union Alpha 等先后免费上架又下架，任一时刻通常都有数款模型可零价格调用。下载 opencode 登录即用，免费车道无需充值、无需绑卡。当前阵容（2026-09-18 核实，共 7 款）：Muse Spark 1.3 / 1.2、Ling 3.0 Flash Fin、Nemotron 3.5 Lightning / 3 Ultra、MiMo V2.5、Big Pickle。限时免费的新模型下架后，车道会补上下一批。",
      limits:
        "opencode 客户端内登录即用，免费模型无需充值、无需绑卡；只有取 API key 在第三方 agent 中调用时才需绑定支付信息（余额低于 $5 自动充值 $20，可手动关闭）；免费模型的具体配额未公布",
      caveat:
        "单个模型都是限时免费、到期即下架车道；免费期数据政策各异——Big Pickle、MiMo、Ling 的数据可能用于改进模型，Nemotron 免费车道走 NVIDIA 试用端点、会记录用量，Muse Spark Contributor 的提示词与补全用于训练 Meta 模型。",
    },
    en: {
      name: "OpenCode Zen Free Lane (Rotating)",
      description:
        "OpenCode Zen's free lane runs year-round with rotating models: GLM 4.7, MiniMax M2.1, and Union Alpha have all taken a free turn and left; at any moment several models are callable at price zero. Free models work in the opencode client right after sign-in — no top-up, no card. Current lineup (verified 2026-09-18, seven lanes): Muse Spark 1.3 / 1.2, Ling 3.0 Flash Fin, Nemotron 3.5 Lightning / 3 Ultra, MiMo V2.5, and Big Pickle. As one limited-time model leaves, the next batch lands.",
      limits:
        "In the opencode client, free models need no top-up and no card after sign-in; billing details are only required to take an API key for calling Zen from other agents (auto-reload adds $20 under a $5 balance; can be disabled); per-model free quotas not published",
      caveat:
        "Each model is individually limited-time free and leaves the lane when it ends; data policies vary — Big Pickle, MiMo, and Ling may use free-period data to improve the model, the Nemotron free lanes ride NVIDIA trial endpoints with logged usage, and Muse Spark Contributor's prompts and completions train future Meta models.",
    },
  },
  {
    id: "aweshare",
    provider: "aweshare",
    kind: "long-term",
    access: "application",
    verified: true,
    url: "https://aweshare.wehuman.top",
    source: "https://github.com/wehuman01/aweshare/blob/main/docs/community-hub/README_cn.md",
    actionUrl: "https://github.com/wehuman01/aweshare/blob/main/docs/community-hub/README_cn.md",
    lastVerified: "2026-09-18",
    zh: {
      name: "aweshare 社区 Hub",
      description:
        "社区模型共享枢纽，发邮件到 peng@wehuman.top 即可申请。生产者暴露自己的后端（Ollama、vLLM 或 API 账号），消费者通过标准 OpenAI/Anthropic/Responses SDK 对接一个 URL 即可调用。现有 40+ 模型车道，代表如 hub/glm-5.3、hub/deepseek-v4-pro、hub/kimi-k3、hub/minimax-m3、jiyu2/gpt-5.6-luna、peng1/gpt-5.5-aihubmix、peng1/union-alpha-openrouter、leidell/mimo-v2.5 等。",
      limits:
        "并发与每日 token 预算由生产者设定；hub 全局消费者名额当前 10 个，生产者不设限",
      caveat: "申请制：向 peng@wehuman.top 发送申请邮件。",
    },
    en: {
      name: "aweshare Community Hub",
      description:
        "Community model-sharing hub — apply by emailing peng@wehuman.top. Producers expose their own backends (Ollama, vLLM, or API accounts); consumers call them through standard OpenAI/Anthropic/Responses SDKs against one URL. 40+ model lanes today, including hub/glm-5.3, hub/deepseek-v4-pro, hub/kimi-k3, hub/minimax-m3, jiyu2/gpt-5.6-luna, peng1/gpt-5.5-aihubmix, peng1/union-alpha-openrouter, and leidell/mimo-v2.5.",
      limits: "Producer-defined concurrency and daily token budgets; hub-wide consumer cap currently 10, producers unlimited",
      caveat: "Application required: email peng@wehuman.top.",
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
    lastVerified: "2026-09-18",
    zh: {
      name: "Codex 开源维护者计划",
      description:
        "OpenAI 面向开源维护者的资助计划：入选者获 6 个月 ChatGPT Pro（含 Codex）、用于项目维护与自动化等工作流的 API 额度，以及视情况开放的 Codex Security。",
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
    id: "claude-oss",
    provider: "Anthropic",
    kind: "long-term",
    access: "application",
    verified: true,
    source: "https://claude.com/contact-sales/claude-for-oss",
    actionUrl: "https://claude.com/contact-sales/claude-for-oss",
    lastVerified: "2026-09-19",
    zh: {
      name: "Claude for Open Source 开源计划",
      description:
        "Anthropic 面向开源维护者与贡献者的感谢计划：入选者获 6 个月免费 Claude Max 20x（含 Claude Code）。满足任一条件即可申请：维护的包被 500+ 仓库依赖 / 100+ 包依赖 / 全 registry 合计月下载 20 万+；是 CPython、Rust、Node.js、Apache、CNCF、Kubernetes、Linux kernel、Django、Rails 等项目的在列 committer 或 maintainer；近 12 个月在他人仓库有 100+ 已合并 PR；某仓库有 20+ 个不同的外部贡献者提交过已合并 PR；或任一仓库 OpenSSF criticality score ≥ 0.4。不完全达标也可以申请并自述情况。",
      limits: "6 个月 Claude Max 20x；申请审核制；每类门槛满足其一即可",
      caveat:
        "6 个月到期后免费订阅自动结束（官方提前邮件提醒）；原有付费计划会按原价自动恢复，不想续费需在到期前取消。",
    },
    en: {
      name: "Claude for Open Source",
      description:
        "Anthropic's thank-you program for open-source maintainers and contributors: selected applicants get 6 months of free Claude Max 20x (includes Claude Code). Any one of these qualifies: your package has 500+ dependent repos / 100+ dependent packages / 200k+ combined monthly downloads across registries; you're a listed committer or maintainer on projects like CPython, Rust, Node.js, Apache, CNCF, Kubernetes, Linux kernel, Django, or Rails; 100+ PRs merged into repos you don't own in the last 12 months; a repo with 20+ unique external contributors with merged PRs in the last 12 months; or any repo you maintain has an OpenSSF criticality score of 0.4+. Don't fit exactly? Apply anyway and tell your story.",
      limits: "6 months of Claude Max 20x; application and review; meeting any single threshold qualifies",
      caveat:
        "The complimentary subscription ends after 6 months (Anthropic emails you beforehand); a prior paid plan resumes at your prior rate unless you cancel.",
    },
  },
  {
    id: "codex-students",
    provider: "OpenAI",
    kind: "long-term",
    access: "application",
    verified: true,
    source: "https://developers.openai.com/community/students",
    actionUrl: "https://developers.openai.com/community/students",
    lastVerified: "2026-09-18",
    zh: {
      name: "Codex 学生计划",
      description:
        "美国/加拿大高校在读学生完成认证后，送 4 个月 ChatGPT Plus 账号，Codex 用量随 Plus 额度走。没有美高校邮的话，海鲜市场有代认证服务；代认证不参与绑卡，但领取优惠需要账号绑卡。",
      limits: "认证学生送 4 个月 ChatGPT Plus 账号；需 ChatGPT 账号（Free/Go/Plus/Pro）",
      caveat:
        "这是 Plus 订阅而非 API 额度；仅限美加在读且居住美加的学生。代认证需把账号交给第三方，违反 OpenAI 条款，有封号风险；领取优惠需要账号绑卡，找充值的话，4 个月 Plus 会挤掉本来套餐的时间，请自行权衡。",
    },
    en: {
      name: "Codex for Students",
      description:
        "Verified university students in the US and Canada get 4 months of ChatGPT Plus for free; Codex usage follows the Plus quota. Without a US/Canada school email, proxy-verification services exist on resale marketplaces; proxy verification doesn't involve card binding, but claiming the offer requires a card on the account.",
      limits: "4 months of ChatGPT Plus per verified student; requires a ChatGPT account (Free/Go/Plus/Pro)",
      caveat:
        "This is a Plus subscription, not API credits; limited to students enrolled in and residing in the US/Canada. Proxy verification hands your account to a third party and breaches OpenAI terms — ban risk is yours to weigh. Claiming requires a card on the account; if you go through a top-up service, the 4-month Plus window displaces the remaining time on your existing plan.",
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
    lastVerified: "2026-09-18",
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
    access: "application",
    verified: true,
    url: "https://education.github.com",
    source: "https://education.github.com/pack",
    actionUrl: "https://education.github.com/pack",
    lastVerified: "2026-09-18",
    zh: {
      name: "GitHub 学生开发者包",
      description:
        "面向通过学生认证的开发者：一次认证捆绑 GitHub Pro、Copilot 访问和一大批合作伙伴工具。",
      limits: "学生身份持续有效期间可续期",
      caveat: "需要学校邮箱或学籍认证。",
    },
    en: {
      name: "GitHub Student Developer Pack",
      description:
        "One student verification unlocks GitHub Pro, Copilot access, and a large catalog of partner tools.",
      limits: "Renewed while student status stays verified",
      caveat: "Requires school-issued email or enrollment verification.",
    },
  },
  {
    id: "zed",
    provider: "Zed Industries",
    kind: "long-term",
    access: "application",
    verified: true,
    url: "https://zed.dev",
    source: "https://github.com/zed-industries/zed",
    actionUrl: "https://zed.dev/download",
    lastVerified: "2026-09-18",
    zh: {
      name: "Zed",
      description:
        "免费开源的高性能编辑器（主体 GPL-3.0，部分组件 Apache-2.0）。用学生邮箱认证即送每月 10 美元 AI 额度；非学生也不亏——内置 AI（Zeta）走订阅制，可搭配上面的免费平台，通过自定义 OpenAI 兼容 provider 接入。",
      limits: "编辑器永久免费；学生认证后每月 $10 额度，其余用量取决于接入的平台",
      caveat: "学生额度需学生邮箱认证；非学生无免费额度，需自接 provider。",
    },
    en: {
      name: "Zed",
      description:
        "Free open-source high-performance editor (primarily GPL-3.0, with Apache-2.0 components). Verify a student email and get $10 of AI credit every month; everyone else pairs it with a free platform above via custom OpenAI-compatible providers — the built-in AI (Zeta) is subscription-based.",
      limits: "Editor free forever; $10/month after student verification, other usage depends on the provider you connect",
      caveat: "Student credit requires a student email; no free credits otherwise — bring your own provider.",
    },
  },
]);
