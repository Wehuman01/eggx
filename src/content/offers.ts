import { validateRegistry } from "../lib/schema";

export const offers = validateRegistry([
  {
    id: "autoclaw-token-charge-season",
    provider: "Z.ai",
    kind: "temporary",
    access: "public",
    verified: true,
    expiry: "2026-09-22",
    url: "https://autoglm.zhipuai.cn",
    source: "https://zhipu-ai.feishu.cn/docx/DVm0d6jByosHOKxKXTicpmuxnig",
    actionUrl: "https://autoglm.zhipuai.cn",
    lastVerified: "2026-09-22",
    zh: {
      name: "AutoClaw Token 充能季：9.21 领 2 亿、9.22 领 3 亿 GLM-5.3-Flash tokens",
      description:
        "智谱 AutoClaw（autoglm.zhipuai.cn，Agent 产品，覆盖深度研究、网页自动化、代码执行等能力）的中秋限定活动：9.21（周一）所有用户登录即无门槛领 2 亿 GLM-5.3-Flash tokens（折合约 20,000 积分）；9.22（周二）登录领 3 亿（约 30,000 积分）；当日领取的奖励当天 24:00 失效。9.23–9.27 转为付费会员专属：AutoClaw 连续包月、团购订阅及 GLM Coding Plan 个人套餐用户每日登录领积分，最高 8,000 积分/天。",
      limits:
        "每人每日登录领取一次：9.21 发 2 亿 tokens（≈20,000 积分）、9.22 发 3 亿 tokens（≈30,000 积分），当日 24:00 前有效；9.23–9.27 付费会员每日最高 8,000 积分；活动总量上限未公布",
      caveat:
        "2026-09-22 核实智谱官方飞书文档（9.20 更新）：投稿所称 9.21 发 2 亿、9.22 发 3 亿、所有用户可领、当天到期，均与官方一致。免费领取仅 9.21、9.22 两天，各当日 24:00 过期（9.21 的 2 亿档已过期）；token 在 AutoClaw 站内以积分形态消耗，非 bigmodel API 额度；9.23–9.27 的每日积分仅限 AutoClaw 付费会员。",
    },
    en: {
      name: "AutoClaw Token Charge Season: 200M tokens on Sep 21, 300M on Sep 22 (GLM-5.3-Flash)",
      description:
        "A Mid-Autumn limited campaign for Zhipu's AutoClaw (autoglm.zhipuai.cn, an agent product covering deep research, browser automation, and code execution): on Sep 21 (Mon) every signed-in user claims 200M GLM-5.3-Flash tokens (~20,000 credits) with no threshold; on Sep 22 (Tue), 300M (~30,000 credits). Each day's grant expires at 24:00 that same day. From Sep 23–27 it turns paid-members-only: AutoClaw monthly subscribers, group-buy subscribers, and GLM Coding Plan personal-plan users claim daily credits of up to 8,000/day.",
      limits:
        "One claim per sign-in per day: 200M tokens on Sep 21 (~20,000 credits) and 300M on Sep 22 (~30,000 credits), each valid until 24:00 the same day; Sep 23–27 daily credits up to 8,000 for paid members; no total cap published",
      caveat:
        "Verified 2026-09-22 against Zhipu's official Feishu doc (updated Sep 20): the submission's claims — 200M on Sep 21, 300M on Sep 22, all users, same-day expiry — all match. The free claim runs only Sep 21–22, each expiring at 24:00 that day (the Sep 21 200M round has ended); tokens burn as in-product credits inside AutoClaw, not bigmodel API quota; Sep 23–27 daily credits require a paid AutoClaw membership.",
    },
  },
  {
    id: "typesafe-signup-credit",
    provider: "TypeSafe AI",
    kind: "temporary",
    access: "public",
    verified: true,
    expiry: null,
    url: "https://typesafe.ai/",
    source: "https://x.com/typesafeai/status/2101786280946499671",
    actionUrl: "https://console.typesafe.ai/",
    lastVerified: "2026-09-21",
    zh: {
      name: "TypeSafe AI 注册送 $5 额度（Jev 决策模型，约 1.2 亿 token）",
      description:
        "TypeSafe AI 于 2026-09-21（北京时间）官宣旗舰模型 Jev 全面开放、取消 waitlist，所有注册用户开局送 $5 额度（官方口径约 120 million tokens）。Jev（jev-1.13.0）是「System One」结构化决策模型：传入 state 与类型化问题（Choice 选项 / Score 打分 / Noul 是非判断），返回带概率与置信度的类型化结果，面向分类、路由、抽取、guardrails 等高频判断场景——它不生成文本，不是编码模型。注册走 Google OAuth 或邮箱验证码，在控制台拿 API key 即用；官方另有 Claude Code / Codex 可装的 agent skill，用 Jev 做 agent 技能路由。",
      limits:
        "新注册账号一次性 $5（官方口径约 120 million tokens）；Jev 计费仅收输入 token，$42/Btok（$0.042/Mtok），输出免费；限速 250,000 tokens/s、1,200 请求/分；额度有效期与活动截止时间未公布",
      caveat:
        "2026-09-21 核实：官方 X 公告原文「All users start with $5 in credit (~120 million tokens)」，文档定价页确认计费口径。第三方「每月 $5 免费用量」的说法与官方一次性口径冲突，未采纳。注意这不是编码模型羊毛——Jev 只做结构化决策，对编码工作流的价值在 agent 管线的路由与判断环节。公司 2026-09-16 刚在 Robinhood Crypto 上线 $TYPESAFE 代币，官方文档自述限速仍在动态调整，充值前自行斟酌。",
    },
    en: {
      name: "TypeSafe AI: $5 signup credit (Jev decision model, ~120M tokens)",
      description:
        "On 2026-09-21 (Beijing time) TypeSafe AI announced general availability of its flagship model Jev with the waitlist removed — every account starts with $5 in credit (officially ~120 million tokens). Jev (jev-1.13.0) is a 'System One' structured-decision model: you send a state plus typed questions (Choice / Score / Noul) and get typed answers with probabilities and confidence, aimed at classification, routing, extraction, and guardrail loops — it generates no text and is not a coding model. Sign up via Google OAuth or an email code, grab an API key in the console, and go; there is also an agent skill for Claude Code / Codex that routes agent skills through Jev.",
      limits:
        "One-time $5 per new account (officially ~120 million tokens); Jev charges input tokens only at $42/Btok ($0.042/Mtok), output free; rate limits 250,000 tokens/s and 1,200 requests/min; credit validity and campaign end date unpublished",
      caveat:
        "Verified 2026-09-21: official X post reads 'All users start with $5 in credit (~120 million tokens)' and the docs pricing page confirms the billing math. A third-party claim of '$5/month free usage' conflicts with the official one-time wording and was not adopted. Note this is not a coding-model freebie — Jev only makes structured decisions; its value to coding workflows is routing and judgment steps in agent pipelines. The company listed a $TYPESAFE token on Robinhood Crypto on 2026-09-16, docs say rate limits are still adjusting dynamically, so think twice before topping up.",
    },
  },
  {
    id: "stepfun-step-plan-trial",
    provider: "StepFun",
    kind: "temporary",
    access: "public",
    verified: true,
    archived: true,
    expiry: null,
    url: "https://platform.stepfun.com",
    source: "https://platform.stepfun.com/step-plan",
    actionUrl: "https://platform.stepfun.com/step-plan",
    lastVerified: "2026-09-22",
    zh: {
      name: "阶跃星辰 Step Plan：登录领 15 天，首调/邀请再送，最高 75 天",
      description:
        "Step Plan 是阶跃星辰开放平台新推的个人订阅套餐，含全部旗舰模型（Step 5 Preview、Step 3.7/3.5 Flash、StepAudio 3 系列）、智能路由与 MCP 工具，官方定位 Vibe Coding、学习与个人项目。活动三段拿：登录即得 15 天（在页面套餐商品处手动领取，领取按钮挂在 Plus 档卡片）；完成首次 API 调用自动再得 15 天；邀请新账号注册每位再得 15 天，上限 3 人，合计最高 75 天。",
      limits:
        "登录 15 天（需手动领取）+ 首次调用 15 天（自动发放，站内信通知）+ 邀请每位 15 天（上限 3 人），合计最高 75 天；新用户定义为当前无订阅中套餐的账号，老账号无订阅也能领；发放记录在用户中心「支付管理—赠送记录」",
      caveat:
        "活动提前关闭，2026-09-22 核实已失效，本条仅作归档。证据：Step Plan 页面弹「服务调整通知」——「结合当前服务承载能力，为优先保障已付费用户的使用体验，我们将关闭新增免费体验领取通道」，页面免费领取入口已移除，四个付费档（Mini/Plus/Pro/Max）全部显示已售罄、订阅按钮禁用。原记录：活动标注「限时放送」但未公布截止时间；Credits 与 token 的换算未公布；这是订阅试用而非 API 余额，到期后的续费规则未说明；个人支付仅支持微信支付，数字订阅默认不退款。",
    },
    en: {
      name: "StepFun Step Plan: 15 days on sign-in, more on first call/referrals, up to 75 days",
      description:
        "Step Plan is StepFun's new personal subscription on its open platform — all flagship models (Step 5 Preview, Step 3.7/3.5 Flash, StepAudio 3 series), smart routing, and MCP tools, positioned by the FAQ for vibe coding, learning, and personal projects. The campaign pays out in three stages: 15 days on sign-in (claimed manually from a plan card on the page — the claim button sits on the Plus tier); another 15 days automatically after your first successful API call; plus 15 days per newly registered invitee, capped at 3, for up to 75 days total.",
      limits:
        "15 days on sign-in (manual claim) + 15 days after first API call (automatic, notified via in-site message) + 15 days per invitee (max 3), up to 75 days total; a 'new user' is any account without an active subscription, so unsubscribed old accounts qualify; grant history lives under User Center → Payment Management → Gift Records",
      caveat:
        "The offer was pulled early and was confirmed dead on 2026-09-22; this entry is archived. Evidence: the Step Plan page pops a 'service adjustment notice' — 'Given current service capacity, to protect the experience of paying users first, we are closing the new free-trial claim channel' — the free-claim entry is gone from the page, and all four paid tiers (Mini/Plus/Pro/Max) show sold out with disabled subscribe buttons. Original record: marked 'limited time' with no published end date; credit-to-token conversion unpublished; this was a subscription trial, not API balance, and post-trial renewal terms were unspecified; individuals paid via WeChat Pay only, and digital subscriptions were non-refundable by default.",
    },
  },
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
      description:
        "Cline 官方 2026-09-14 发布的开源桌面端 Cline Desktop，面向开放权重模型的原生界面（并行多智能体、插件/MCP 市场、技能等）。发布推文确认内置免费模型 DeepSeek-V4.1-Flash 与 Musespark-1.3，登录即用，也可配 ClinePass 订阅或自带 API key。macOS 与 Windows（beta）可下载。",
      limits:
        "免费模型在模型选择器中带 FREE 标签，登录即用，无需充值绑卡；官方未公布具体用量上限",
      caveat:
        "来自社区 issue 投稿，推文与官方博客已核实（2026-09-20）；投稿提到的 Kimi K3 未在官方渠道出现，未收录；官方未声明免费截止时间，下线以模型选择器实际展示为准。",
    },
    en: {
      name: "Cline Desktop Free Models (DeepSeek-V4.1-Flash, Musespark-1.3)",
      description:
        "Cline's open-source desktop app announced 2026-09-14 — a native interface for open-weight models (parallel agents, a plugin/MCP marketplace, skills, and more). The launch tweet confirms built-in free models DeepSeek-V4.1-Flash and Musespark-1.3, usable right after sign-in; pair with a ClinePass subscription or bring your own API key. Available on macOS and Windows (beta).",
      limits:
        "Free models carry a FREE tag in the model selector and work after sign-in, no top-up or card; no specific usage caps published",
      caveat:
        "Community-submitted via issue; verified against the tweet and official blog (2026-09-20). The submitter's Kimi K3 claim does not appear in official channels and was not included; no end date announced — the model selector is the source of truth.",
    },
  },
  {
    id: "zcode",
    provider: "Z.ai",
    kind: "temporary",
    access: "public",
    verified: true,
    expiry: "2026-10-07",
    url: "https://zcode.z.ai/en",
    source: "https://docs.z.ai/devpack/notice/event-glm-5.3-flash",
    actionUrl: "https://zcode.z.ai/en",
    lastVerified: "2026-10-04",
    zh: {
      name: "ZCode 夜间免额度活动：GLM-5.3-Flash 每晚 23:00–09:00 零消耗（至 10-07）",
      description:
        "GLM Coding Plan 官方 GLM-5.3-Flash 夜间活动（2026-09-03 至 2026-10-07，原定 09-20 截止、官方已延期）：每天 23:00 至次日 09:00（官方口径为新加坡时间，UTC+8），付费计划用户经 ZCode 使用 GLM-5.3-Flash 零额度消耗、不限量；经其他受支持 Agent 使用则额度翻倍。无需申请，装上 ZCode 即享。",
      limits:
        "夜间窗口经 ZCode 用 GLM-5.3-Flash 不限量（需 ZCode ≥ 3.10，且 5 小时/周额度未耗尽）",
      caveat:
        "周末节假日同样适用；仅限 GLM-5.3-Flash，GLM-5.3 照常扣额度；需付费 Coding Plan。2026-09-24 复核官方公告：活动结束日已从 09-20 延期至 10-07（官方原文 \"the campaign end date has been extended from September 20 to October 7\"），规则不变。此前条目中的「新人 5 天免费试用」在 09-24 复核时已从公告页移除、无法再核实，故删去。2026-10-04 复核官方公告页：活动期与规则未变（9 月 3 日至 10 月 7 日），公告页上仍无「每日登录赠送」类活动。",
    },
    en: {
      name: "ZCode Nightly Free Campaign: zero-quota GLM-5.3-Flash 23:00–09:00 nightly (through Oct 7)",
      description:
        "Official GLM Coding Plan GLM-5.3-Flash usage campaign (Sep 3 – Oct 7, 2026; originally set to end Sep 20, officially extended): daily 23:00–09:00 the next day (Singapore time per the official notice, UTC+8), paid-plan users get unlimited zero-quota GLM-5.3-Flash via ZCode, and doubled quota via other supported agents. No application needed — install ZCode and go.",
      limits:
        "Nightly GLM-5.3-Flash via ZCode is unlimited (needs ZCode ≥ 3.10 and non-exhausted 5-hour/weekly quota)",
      caveat:
        "Weekends and holidays included; GLM-5.3-Flash only — GLM-5.3 still burns quota; requires a paid Coding Plan. Re-verified 2026-09-24 against the official notice: the end date was extended from Sep 20 to Oct 7 (official wording \"the campaign end date has been extended from September 20 to October 7\"), rules unchanged. The 5-day new-user trial previously listed here was gone from the notice page at the Sep 24 re-check and could no longer be verified, so it has been removed. Re-verified 2026-10-04: the notice still reads Sep 3 – Oct 7 with unchanged rules, and no daily-login grant appears on it.",
    },
  },
  {
    id: "zcode-trust-patch-compensation",
    provider: "Z.ai",
    kind: "temporary",
    access: "public",
    verified: false,
    expiry: "2026-10-07",
    url: "https://zcode.z.ai/cn",
    source: "https://finance.sina.com.cn/jjxw/2026-09-28/doc-initkhxe2993800.shtml",
    actionUrl: "https://zcode.z.ai/cn",
    lastVerified: "2026-10-04",
    zh: {
      name: "ZCode「Trust.patch」补偿：每日 1 亿 GLM-5.3-Flash Token 连发 10 天（9-28 至 10-07）",
      description:
        "智谱 ZCode 因「仓库快照上传」数据安全争议推出补偿方案（媒体称 Trust.patch/信任补丁，2026-09-28 10:30 起）：9 月 28 日至 10 月 7 日连续 10 天，每日面向全体用户发放 1 亿 GLM-5.3-Flash Token（每轮 10 万份名额），登录 ZCode 在客户端活动卡片领取、一天一轮；现有付费用户及一个月内回归的付费用户另获 4 张周额度重置卡 + 4 张 5 小时额度重置卡（回归权益窗口 1 个月）。",
      limits:
        "每日 1 亿 Token × 10 万份名额，一天一轮；8 张重置卡仅限现有付费用户及一个月内回归的付费用户，有效期 1 个月；token 使用范围与单份有效期官方未公布",
      caveat:
        "2026-10-04 核实：官方文档站（docs.z.ai）与 ZCode 更新日志均无此活动页（活动卡片在 ZCode 客户端内），故本条标社区来源（verified=false）。9-28 起点、每日 1 亿 Token × 10 万份、连续 10 天（9-28 至 10-07）、客户端活动卡片领取，均为新浪科技、搜狐、腾讯新闻、网易、凤凰网等多家媒体一致报道的官方方案口径；来源链接为新浪科技当日报道（已打开核实：9-28 至 10-7 发放十万份「1亿token」、面向全体用户、4+4 张重置卡细节一致）。活动结束日 10-07 为媒体报道口径，若延期或提前结束以客户端活动卡片实际展示为准。",
    },
    en: {
      name: "ZCode \"Trust.patch\" compensation: 100M GLM-5.3-Flash tokens daily for 10 days (Sep 28 – Oct 7)",
      description:
        "Compensation plan from Zhipu's ZCode after the repository-snapshot upload controversy (dubbed Trust.patch by media, effective 2026-09-28 10:30): from Sep 28 through Oct 7, 100M GLM-5.3-Flash tokens are granted daily to all users (100,000 shares per round) — sign in to ZCode and claim from the in-client activity card, one round per day; existing paid users and paid users returning within a month additionally receive 4 weekly-quota reset cards + 4 five-hour reset cards (returning-user window: 1 month).",
      limits:
        "100M tokens daily × 100,000 shares per round, one round per day; the 8 reset cards are for existing paid users and paid users returning within a month, valid 1 month; token usage scope and per-grant validity not published",
      caveat:
        "Verified 2026-10-04: no campaign page exists on the official docs (docs.z.ai) or the ZCode changelog — the card lives inside the ZCode client, so this entry is community-sourced (verified=false). The Sep 28 start, daily 100M × 100k shares, 10-day run (Sep 28 – Oct 7), and in-client claim mechanics are consistent across Sina Tech, Sohu, Tencent News, NetEase and iFeng reports of the official plan; the source link is Sina Tech's same-day report (opened and checked: 100k shares of \"1亿token\" from Sep 28 to Oct 7 for all users, matching the 4+4 reset-card details). The Oct 7 end date follows media reports — if the campaign is extended or cut short, the in-client activity card is ground truth.",
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
    lastVerified: "2026-09-24",
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
    archived: true,
    expiry: null,
    url: "https://bigmodel.cn/activity/trial-card/D1FDY1XXYQ",
    source: "https://bigmodel.cn/activity/trial-card/D1FDY1XXYQ",
    actionUrl: "https://bigmodel.cn/activity/trial-card/D1FDY1XXYQ",
    lastVerified: "2026-10-08",
    zh: {
      name: "GLM Coding Plan 7 天体验卡",
      description:
        "智谱官方邀请体验活动：通过邀请链接领取 GLM Coding Plan 7 天 AI 编程体验卡，支持 GLM-5.3 与 GLM-5.3-Flash 双模型，无需订阅即可在受支持的 Agent 里试用。",
      limits:
        "该邀请含 3 张体验卡，先到先得，领完即止；每张 7 天有效，支持 GLM-5.3 与 GLM-5.3-Flash",
      caveat:
        "体验卡已领完：2026-10-08 核实 3 张邀请卡全部发放完毕、邀请链接不再出卡，本条仅作归档。原记录：邀请制分享链接，数量有限；体验卡的领取规则与适用范围以 bigmodel.cn 活动页为准。",
    },
    en: {
      name: "GLM Coding Plan 7-Day Trial Card",
      description:
        "Official Zhipu invite campaign: claim a 7-day GLM Coding Plan trial card via the invite link, with support for both GLM-5.3 and GLM-5.3-Flash — no subscription needed to try them in supported agents.",
      limits:
        "This invite carries 3 trial cards, first come first served; each card lasts 7 days and covers GLM-5.3 and GLM-5.3-Flash",
      caveat:
        "Trial cards exhausted: verified 2026-10-08 that all 3 invite cards have been claimed and the link no longer issues cards; archived. Original note: invite-based link with limited cards; claim rules and eligibility follow the bigmodel.cn activity page.",
    },
  },
  {
    id: "glm-hangzhou-coding-plan",
    provider: "Z.ai",
    kind: "temporary",
    access: "application",
    verified: true,
    expiry: "2026-12-09",
    url: "https://docs.bigmodel.cn/cn/coding-plan/hangzhou-rules",
    source: "https://docs.bigmodel.cn/cn/coding-plan/hangzhou-rules",
    actionUrl: "https://docs.bigmodel.cn/cn/coding-plan/hangzhou-rules",
    lastVerified: "2026-09-26",
    zh: {
      name: "智谱·杭州全城 Coding 计划：在杭购卡季卡减 44%、年卡减 51%（至 12-09）",
      description:
        "智谱联合杭州市、上城区推出的城市级购卡补贴（组织方为浙江智谱新篇科技有限公司），活动期 2026-09-10 至 2026-12-09。个人限在杭工作人员或杭州高校在校生：在 BigModel 平台完成个人实名认证后提交表单申请，在职者上传杭州市社保参保证明（浙里办下载的原始 PDF），在校生上传学信网在线验证报告，审核通过后选购 GLM Coding Plan 季卡享 44% 综合减免、年卡享 51% 综合减免。注意这是购买折扣而非免费额度，需先付费购卡。",
      limits:
        "个人：季卡减 44%（Lite 354→198.24 元/季、Pro 1614→903.84 元/季、Max 3234→1811.04 元/季），年卡减 51%（Lite 1416→693.84 元/年、Pro 6456→3163.44 元/年、Max 12936→6338.64 元/年）；每人限 1 次，季卡/年卡二选一，整体减免金额达到上限后不再发放。企业（杭州市上城区主体）：年卡减 55%（标准版 3229.2 元/席位/年、高级版 6469.2 元/席位/年），单家减免上限 100 万元，仅支持年度套餐",
      caveat:
        "2026-09-26 依官方细则页核实：活动时间为 9 月 10 日至 12 月 9 日，额满即止。个人套餐一经购买并激活不支持退款、不支持转让、不支持按剩余周期折算退费；活动页按 IP 判断地域展示。社区流传的「审核约 1 小时」未见官方说明，审核时长以实际为准。",
    },
    en: {
      name: "Zhipu Hangzhou City-Wide Coding Plan: 44% off quarterly, 51% off annual cards for Hangzhou-based users (through Dec 9)",
      description:
        "A city-level purchase subsidy jointly launched by Zhipu with the Hangzhou municipal and Shangcheng district governments (organized by Zhejiang Zhipu Xinbian Technology), running Sep 10 – Dec 9, 2026. Individuals must work in Hangzhou or study at a Hangzhou university: complete personal identity verification on BigModel and submit the application form with a Hangzhou social-insurance certificate (original PDF from the Zhejiang government app) for workers, or a CHSI online verification report for students; once approved, GLM Coding Plan quarterly cards get a 44% combined discount and annual cards 51%. Note this is a purchase discount, not free quota — you still pay for the plan.",
      limits:
        "Individuals: 44% off quarterly (Lite ¥354→198.24, Pro ¥1614→903.84, Max ¥3234→1811.04), 51% off annual (Lite ¥1416→693.84, Pro ¥6456→3163.44, Max ¥12936→6338.64); one redemption per person, quarterly or annual only, ends once the overall discount pool is exhausted. Enterprises (Shangcheng district entities): 55% off annual cards (Standard ¥3229.2/seat/year, Premium ¥6469.2/seat/year), capped at ¥1M per company, annual billing only",
      caveat:
        "Verified 2026-09-26 against the official rules page: the campaign runs Sep 10 – Dec 9 and ends once the discount pool is exhausted. Once activated, individual plans are non-refundable, non-transferable, and cannot be prorated; the activity page is shown based on IP geolocation. A community claim of 'about 1 hour review time' is not stated officially — actual review time may vary.",
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
    verified: true,
    expiry: null,
    url: "https://qoder.cn",
    source: "https://docs.qoder.cn/events/100credits",
    actionUrl: "https://qoder.cn",
    lastVerified: "2026-10-04",
    zh: {
      name: "Qoder CN：每日 100 Credits 免费领（Qwen3.8-Flash 免费档已于 9-30 结束）",
      description:
        "阿里 Qoder CN 编程平台的每日福利（2026-09-18 10:00 起，结束时间官方『另行公告』）：每天 10:00 开放新一轮领取，每账号每轮 100 通用 Credits，仅限 Qoder CN 桌面端在用量面板（左下角礼物图标）主动领取，错过不补；每笔自领取之日起 30 天有效，未到期的可叠加保留。Credits 覆盖 Qoder CN 全家桶（桌面端、IDE、JetBrains 插件、CLI、QoderWake、Cloud Agents、移动端与网页版）。此前的 Qwen3.8-Flash 0.0× 计费免费档已于 09-30 23:59:59 按官方公告结束，结束后按届时公示系数计费。",
      limits:
        "每日 100 通用 Credits：每账号每轮限领一次，仅桌面端可领，每笔 30 天有效、未领取不累计到下一轮；面向 Qoder CN 个人用户（体验/专业/高级/旗舰版及会员卡用户，免费与试用期用户均可），企业订阅用户不适用",
      caveat:
        "2026-09-24 核实官方活动页（docs.qoder.cn/events/flashoffer 与 /events/100credits）：Flash 免费档、每日 100 Credits 规则均与官方一致。2026-10-04 复核 /events/100credits：活动仍 live、结束时间仍为『另行公告』，故 expiry 从原按 Flash 档设定的 09-30 改为 null；Flash 0.0× 档已按官方公告于 09-30 结束，本条目改为聚焦仍在进行的每日 Credits 活动。09-18 收录时「国际版也有份」的说法来自公众号投稿，官方活动页仅写 Qoder CN，仍限定为 Qoder CN。",
    },
    en: {
      name: "Qoder CN: 100 free Credits daily (Qwen3.8-Flash free window ended Sep 30)",
      description:
        "A daily perk on Alibaba's Qoder CN coding platform (from 2026-09-18 10:00, end date officially \"to be announced\"): a new claim round opens daily at 10:00, granting 100 general Credits per account per round, claimable only in the Qoder CN desktop app from the usage panel (gift icon, bottom-left); missed rounds are not made up. Each grant expires 30 days after it is claimed; unexpired grants stack. Credits work across the Qoder CN product family (desktop, IDE, JetBrains plugin, CLI, QoderWake, Cloud Agents, mobile, web). The earlier Qwen3.8-Flash 0.0x free-billing window ended on 09-30 23:59:59 per the official notice — calls are billed at the then-published multipliers afterwards.",
      limits:
        "100 general Credits daily: one claim per account per round, desktop app only, each grant valid 30 days, unclaimed rounds don't carry over; for Qoder CN individual users (trial/pro/max/ultra and member-card tiers, free and trial users included), enterprise subscriptions excluded",
      caveat:
        "Verified 2026-09-24 against the official event pages (docs.qoder.cn/events/flashoffer and /events/100credits): the Flash free window and the daily-100-Credits rules both matched. Re-checked 2026-10-04 on /events/100credits: the event is still live with the end still \"to be announced\", so expiry moved from the 09-30 set by the Flash window to null; the Flash 0.0x window ended on 09-30 as announced, and the entry now focuses on the still-running daily Credits event. The \"international edition included\" claim from the original Sep 18 submission is still not on the official page — scoped to Qoder CN.",
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
    id: "opencode-zen-free-rotation",
    provider: "OpenCode",
    kind: "long-term",
    access: "public",
    verified: true,
    url: "https://opencode.ai/zen",
    source: "https://opencode.ai/docs/zen",
    actionUrl: "https://opencode.ai/auth",
    lastVerified: "2026-10-10",
    zh: {
      name: "OpenCode Zen 免费车道（长期轮换）",
      description:
        "OpenCode Zen 的免费车道长期在营、模型滚动轮换：GLM 4.7、MiniMax M2.1、Union Alpha 等先后免费上架又下架，任一时刻通常都有数款模型可零价格调用。下载 opencode 登录即用，免费车道无需充值、无需绑卡。当前阵容（2026-10-10 核实，共 13 款）：Step 5 Preview（新上架，官方 X 称免费一周、1M 上下文、多模态）、Space Bunny、LongCat 2.5 Preview、Exo、MiMo V2.6 Flash / V2.5、Ling 3.1 Flash / 3.0 Flash Fin、Nemotron 3.5 Lightning / 3 Ultra、Big Pickle、Muse Spark 1.3 Contributor、Jev 1.13。限时免费的新模型下架后，车道会补上下一批。",
      limits:
        "opencode 客户端内登录即用，免费模型无需充值、无需绑卡；只有取 API key 在第三方 agent 中调用时才需绑定支付信息（余额低于 $5 自动充值 $20，可手动关闭）；免费模型的具体配额未公布",
      caveat:
        "单个模型都是限时免费、到期即下架车道。免费期数据政策分三档（2026-10-10 依官方文档核实）：Space Bunny、LongCat 2.5 Preview、Step 5 Preview 供应商零留存、不用于训练；Big Pickle、Exo、MiMo 两款、Ling 两款免费期数据可能用于改进模型；Nemotron 两款走 NVIDIA 免费端点（试用性质，会记录用量但不关联身份，勿提交敏感数据）。Muse Spark 1.3 Contributor 免费期数据用于改进模型；Jev 免费档未给数据说明。",
    },
    en: {
      name: "OpenCode Zen Free Lane (Rotating)",
      description:
        "OpenCode Zen's free lane runs year-round with rotating models: GLM 4.7, MiniMax M2.1, and Union Alpha have all taken a free turn and left; at any moment several models are callable at price zero. Free models work in the opencode client right after sign-in — no top-up, no card. Current lineup (verified 2026-10-10, thirteen lanes): Step 5 Preview (new arrival, officially announced as free for a week with 1M context and multimodal input), Space Bunny, LongCat 2.5 Preview, Exo, MiMo V2.6 Flash / V2.5, Ling 3.1 Flash / 3.0 Flash Fin, Nemotron 3.5 Lightning / 3 Ultra, Big Pickle, Muse Spark 1.3 Contributor, and Jev 1.13. As one limited-time model leaves, the next batch lands.",
      limits:
        "In the opencode client, free models need no top-up and no card after sign-in; billing details are only required to take an API key for calling Zen from other agents (auto-reload adds $20 under a $5 balance; can be disabled); per-model free quotas not published",
      caveat:
        "Each model is individually limited-time free and leaves the lane when it ends. Free-period data policies come in three tiers (per the official docs, verified 2026-10-10): Space Bunny, LongCat 2.5 Preview, and Step 5 Preview ride zero-retention providers with no training use; Big Pickle, Exo, both MiMo lanes, and both Ling lanes may use free-period data to improve the model; both Nemotron lanes ride NVIDIA free endpoints (trial use, usage logged but not linked to identity — don't submit sensitive data). Muse Spark 1.3 Contributor's free-period data improves the model; Jev's free lane states no data policy.",
    },
  },
  {
    id: "opencode-zen-rotation-retirees",
    provider: "OpenCode",
    kind: "temporary",
    access: "public",
    verified: true,
    archived: true,
    expiry: null,
    url: "https://opencode.ai/zen",
    source: "https://opencode.ai/docs/zen",
    actionUrl: "https://opencode.ai/auth",
    lastVerified: "2026-10-10",
    zh: {
      name: "OpenCode Zen 免费车道：已下架的轮换模型（GLM 4.7、MiniMax M2.1、Union Alpha 等）",
      description:
        "OpenCode Zen 免费车道的历史轮换档：GLM 4.7、MiniMax M2.1、Union Alpha、Muse Spark 1.2 等先后限时免费，现已全部下架（部分转入付费档），不再可零价格调用。车道本身仍在营、持续补新——当前主推 Step 5 Preview（免费一周、1M 上下文、多模态），领取方式与现行阵容见「OpenCode Zen 免费车道（长期轮换）」条目。",
      limits:
        "历史各档在免费期内均为零价格调用，配额未公布；下架后模型转入付费档或直接退役",
      caveat:
        "历史归档条目（2026-10-10 整理）：所列模型已全部离开免费车道，本条仅作追溯。现行阵容、领取方式与数据政策以 opencode-zen-free-rotation 条目为准（当前主推 Step 5 Preview）。",
    },
    en: {
      name: "OpenCode Zen free lane: retired rotation models (GLM 4.7, MiniMax M2.1, Union Alpha, etc.)",
      description:
        "Historical turns of OpenCode Zen's free lane: GLM 4.7, MiniMax M2.1, Union Alpha, and Muse Spark 1.2 all had limited-time free stints and have since left the lane (some moved to paid tiers) — no longer callable at price zero. The lane itself keeps running and restocking: the current headliner is Step 5 Preview (free for a week, 1M context, multimodal). See the OpenCode Zen Free Lane (Rotating) entry for how to claim it and the current lineup.",
      limits:
        "Each historical turn was zero-price during its free window with unpublished quotas; once a model leaves it either moves to a paid tier or retires",
      caveat:
        "Historical archive entry (compiled 2026-10-10): every model listed here has left the free lane; this entry exists for the record only. For the current lineup, claiming steps, and data policies, the opencode-zen-free-rotation entry is authoritative (currently headlined by Step 5 Preview).",
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
    id: "space-bunny-alpha",
    provider: "OpenRouter",
    kind: "temporary",
    access: "public",
    verified: true,
    expiry: null,
    url: "https://openrouter.ai/stealth/space-bunny-alpha",
    source: "https://openrouter.ai/stealth/space-bunny-alpha",
    actionUrl: "https://openrouter.ai",
    lastVerified: "2026-10-04",
    zh: {
      name: "OpenRouter stealth/space-bunny-alpha 免费模型（$0，截止日未公布）",
      description:
        "OpenRouter 的零价格空格模型 space-bunny-alpha（Space Bunny Alpha）：匿名大模型、推理速度快、编码能力强、原生多模态输入，1M 上下文窗口。定价 prompt 与 completion 均为 $0，走 OpenRouter stealth/ 命名空间的零价格车道（与 stealth/union-alpha 同类），不带 :free 后缀、不占 :free 模型的每日共享配额。申请 OpenRouter API key 后可在任意 agent 中调用",
      limits: "定价 $0，不占 :free 每日配额；具体用量与限速官方未公布",
      caveat:
        "2026-09-24 经 OpenRouter /api/v1/models 官方数据核实该模型真实在架且定价为 0。2026-10-04 再次复核官方 API：模型仍在架、prompt/completion 定价仍为 $0，已超过登记时按「一周」推算的 expiry=2026-10-01（条目随之短暂进入过期区）；OpenRouter 未公布 stealth 车道的截止日，expiry 改回 null，下线以模型选择器实际展示为准（届时标 archived 归档）。",
    },
    en: {
      name: "OpenRouter stealth/space-bunny-alpha Free Lane ($0, no published end date)",
      description:
        "OpenRouter's zero-price stealth model space-bunny-alpha (Space Bunny Alpha): an anonymous large model with fast inference, strong coding capability and native multimodal input, in a 1M-token context window. Both prompt and completion are priced at $0; it runs on OpenRouter's stealth/ zero-price lane, carries no :free suffix and does not count against the shared daily :free cap. With an OpenRouter API key you can call it from any agent.",
      limits:
        "Priced at $0 and outside the :free daily quota; per-usage caps and rate limits not published",
      caveat:
        "Verified 2026-09-24 against OpenRouter's official /api/v1/models data — the model exists and is priced at 0. Re-checked 2026-10-04 against the official API: the model is still live at $0 prompt/completion, past the expiry=2026-10-01 that registration had estimated from a one-week run (the entry briefly moved to the expired section meanwhile); OpenRouter publishes no end date for the stealth lane, so expiry is back to null — if the lane is pulled, the model selector is ground truth (mark archived then).",
    },
  },
  {
    id: "tokenharbor-claude-haiku-free",
    provider: "Token Harbor",
    kind: "temporary",
    access: "public",
    verified: true,
    expiry: "2026-10-15",
    url: "https://tokenharbor.ai",
    source: "https://tokenharbor.ai/models?category=free",
    actionUrl: "https://tokenharbor.ai",
    lastVerified: "2026-10-10",
    zh: {
      name: "Token Harbor：Claude Haiku 5.5 限时免费（官方称免费一周）",
      description:
        "Token Harbor（tokenharbor.ai，OpenAI 兼容聚合网关：一个 API key 调全部模型、按 token 直通计价）的限时免费：注册后经其 OpenAI 兼容端点用模型 claude-haiku-5.5:free 即可零价格调用 Claude Haiku 5.5，官方 X 宣传为「免费一周」。同场限免的还有 deepseek-v4.1-flash:free 与 mimo-v2.6-flash:free。持有 Agent Pass 及以上通行证的用户享受 2× 模型加速（官方 FAQ：Haiku 5.5 的 2× Model Boost 至 2026-10-15）。",
      limits:
        "免费路线不扣账户余额；官方免费档按模型列表价的等值用量计量、自首次请求起算 7×24 小时个人滚动窗口，本活动是独立额度还是占用免费档额度未公布；新账号注册无赠送金；免费路线的请求与响应在你启用免费模型后可能被 Token Harbor 保留",
      caveat:
        "官方未单独公布 :free 路线的结束日，expiry 的 2026-10-15 取自官方 FAQ 的 Haiku 5.5 Model Boost 窗口与官方 X「免费一周」说法。免费路线条款：启用免费模型后 prompts/responses 可能被 Token Harbor 保留，勿发送敏感内容。:free 目录随时轮换，下架即失效，以 Models 页 Free 区为准。",
    },
    en: {
      name: "Token Harbor: Claude Haiku 5.5 free for a limited time (officially one week)",
      description:
        "Token Harbor (tokenharbor.ai, an OpenAI-compatible aggregator: one API key reaches every model at passthrough per-token pricing) runs a limited-time free route: register, then call Claude Haiku 5.5 at price zero via the model ID claude-haiku-5.5:free on their OpenAI-compatible endpoint — officially announced as free for a week. Also free in the same window: deepseek-v4.1-flash:free and mimo-v2.6-flash:free. Holders of an Agent Pass or higher get 2x model speed (official FAQ: Haiku 5.5's 2x Model Boost runs through October 15, 2026).",
      limits:
        "Free routes never charge your balance; the official free tier is metered by list-price value of usage over a personal rolling 7x24-hour window from your first request — whether this campaign has its own allowance or draws on the free tier is not published; new accounts start at $0 with no sign-up credit; free-route prompts and responses may be retained by Token Harbor after you enable free models",
      caveat:
        "No separate end date is published for the :free route itself; the expiry of 2026-10-15 comes from the official FAQ's Haiku 5.5 Model Boost window and the official X post's free-for-a-week wording. Free-route terms: after enabling free models, prompts/responses may be retained by Token Harbor — don't send sensitive content. The :free catalogue rotates; once a lane leaves the list the route is gone. The Models page Free section is the source of truth.",
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
