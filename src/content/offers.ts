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
    verified: false,
    expiry: null,
    url: "https://typesafe.ai/",
    source: "https://x.com/typesafeai/status/2101786280946499671",
    actionUrl: "https://console.typesafe.ai/",
    lastVerified: "2026-11-14",
    zh: {
      name: "TypeSafe AI：Jev 早期访问，注册送 $5 口径待确认（约 1.2 亿 token）",
      description:
        "TypeSafe AI 的旗舰模型 Jev 是「System One」结构化决策模型：传入 state 与类型化问题（Choice 选项 / Score 打分 / Noul 是非判断），返回带概率与置信度的类型化结果，面向分类、路由、抽取、guardrails 等高频判断场景——它不生成文本，不是编码模型。当前版本 jev-1.14.0（2026-10-14 发布，与 1.13 并存，1.14 新增 Box 问题类型）。2026-09-21 官方曾公告全面开放、取消 waitlist、所有注册用户开局送 $5（官方口径约 120 million tokens）；2026-10-11 与 2026-11-14 两次复核：官网仍是 early access 口径、waitlist 未取消，$5 送额在官网、定价页、博客、文档站、console 登录页均未提及——注册是否仍送 $5 需实际注册账号确认。注册走 Google OAuth 或邮箱验证码，在控制台拿 API key 即用；官方另有 Claude Code / Codex 可装的 agent skill，用 Jev 做 agent 技能路由。",
      limits:
        "Jev 计费仅收输入 token，$42/Btok（$0.042/Mtok），输出免费；限速按机构设置，官方已不再公布固定数值（具体见 console）；$5 送额当前无法从官方页面核实（需注册 console 实测），额度有效期与活动截止时间未公布",
      caveat:
        "2026-09-21 曾核实官方 X 公告「All users start with $5 in credit (~120 million tokens)」与文档定价页。2026-10-11 复核：官网仅剩 early access 与 $42/Btok 计价，官方博客原文「available today in early access」「bringing developers off the waitlist as quickly as we can」——全面开放与取消 waitlist 的口径已回退，$5 送额全站不再提及。2026-11-14 复核：typesafe.ai/pricing 恢复可访问，列出 Jev 1.14（2026-10-14 发布）与 1.13 及 $42/Btok 计价，$5 送额仍全站无提及；限速表述由固定数值改为按机构设置，官方原文「Rate limits are set per organization」。第三方「每月 $5 免费用量」的说法与官方一次性口径冲突，未采纳。本条维持社区待确认（verified=false）：$5 是否仍到账需注册 console 实测。注意这不是编码模型羊毛——Jev 只做结构化决策，对编码工作流的价值在 agent 管线的路由与判断环节。公司 2026-09-16 刚在 Robinhood Crypto 上线 $TYPESAFE 代币，官方文档自述限速仍在动态调整，充值前自行斟酌。",
    },
    en: {
      name: "TypeSafe AI: Jev in early access, $5 signup credit unconfirmed (~120M tokens)",
      description:
        "TypeSafe AI's flagship model Jev is a 'System One' structured-decision model: you send a state plus typed questions (Choice / Score / Noul) and get typed answers with probabilities and confidence, aimed at classification, routing, extraction, and guardrail loops — it generates no text and is not a coding model. The current release is jev-1.14.0 (published 2026-10-14, alongside 1.13; 1.14 adds the Box question type). On 2026-09-21 the company announced general availability with the waitlist removed and $5 in credit for every new account (officially ~120 million tokens); re-verified 2026-10-11 and again 2026-11-14: the site is still on an early-access framing, the waitlist is not removed, and the $5 credit is not mentioned on the site, pricing page, blog, docs, or console sign-in — whether new accounts still get $5 needs an actual signup to confirm. Sign up via Google OAuth or an email code, grab an API key in the console, and go; there is also an agent skill for Claude Code / Codex that routes agent skills through Jev.",
      limits:
        "Jev charges input tokens only at $42/Btok ($0.042/Mtok), output free; rate limits are set per organization and the official pages no longer publish fixed numbers (check the console); the $5 credit still cannot be confirmed from official pages (needs a console signup to test); credit validity and campaign end date unpublished",
      caveat:
        "Verified 2026-09-21: the official X post read 'All users start with $5 in credit (~120 million tokens)' and the docs pricing page confirmed the billing math. Re-verified 2026-10-11: the site showed only early access and $42/Btok billing; the official blog read 'available today in early access' and 'bringing developers off the waitlist as quickly as we can' — the GA/waitlist-removed framing had rolled back and the $5 credit was gone from every page. Re-verified 2026-11-14: typesafe.ai/pricing is reachable again and lists Jev 1.14 (published 2026-10-14) and 1.13 at $42/Btok, with the $5 credit still mentioned nowhere; the rate-limit wording changed from fixed numbers to per-organization settings — 'Rate limits are set per organization'. A third-party claim of '$5/month free usage' conflicts with the official one-time wording and was not adopted. This entry stays community-unconfirmed (verified=false): whether $5 still lands needs a console signup to test. Note this is not a coding-model freebie — Jev only makes structured decisions; its value to coding workflows is routing and judgment steps in agent pipelines. The company listed a $TYPESAFE token on Robinhood Crypto on 2026-09-16, docs say rate limits are still adjusting dynamically, so think twice before topping up.",
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
    source: "https://docs.cline.bot/getting-started/free-models",
    actionUrl: "https://cline.bot/",
    lastVerified: "2026-11-14",
    zh: {
      name: "Cline 免费模型（IDE/CLI 登录即用，名单轮换）",
      description:
        "Cline 为有账号的用户轮换提供限时免费模型，模型选择器会以 FREE 标识，额度用完后可切换付费方式。官方文档目前列出两种入口：Cline（usage-billing）与促销期间的 ClinePass；均可在 IDE 插件和 CLI 中使用。具体模型和免费额度会轮换，以客户端选择器为准。",
      limits:
        "免费模型带 FREE 标签，适用于 Cline IDE Extension 与 CLI，不支持通过 Cline API 调用；模型名单与用量上限未公布，以应用内选择器为准",
      caveat:
        "来自社区 issue 投稿，2026-09-20 经推文与官方博客核实。2026-10-21 复核官方文档：免费活动仍在，模型名单轮换；IDE 与 CLI 均支持 Cline 和 ClinePass 入口，Cline API 不支持免费模型。官方说明免费使用数据可能用于改进模型；未公布截止时间或固定额度。投稿提到的 Kimi K3 未在官方渠道出现，未收录。",
    },
    en: {
      name: "Cline Free Models (IDE/CLI after sign-in, rotating roster)",
      description:
        "Cline rotates limited-time free model promotions for account holders; free models carry a FREE tag in the selector. The official docs list both Cline (usage-billing) and ClinePass as access routes during promotions, through the IDE extension and CLI. Models and quotas change; use the in-app selector as the current list.",
      limits:
        "FREE-tagged models work through the Cline IDE Extension and CLI, with Cline and ClinePass as promotion providers; not available through the Cline API; current roster and usage caps are unpublished",
      caveat:
        "Community-submitted via issue; verified against the tweet and official blog (2026-09-20). Re-checked 2026-10-21: the official docs confirm the limited-time program is live and rotating, and list Cline and ClinePass as providers for the IDE extension and CLI. Free usage may be used to improve model performance; API access is excluded. The submitter's Kimi K3 claim does not appear in official channels and was not included; no end date or fixed quota is announced.",
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
    lastVerified: "2026-11-14",
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
    lastVerified: "2026-11-14",
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
    lastVerified: "2026-11-14",
    zh: {
      name: "Qoder CN：每日 100 Credits 免费领（Qwen3.8-Flash 免费档延长，结束日另行公告）",
      description:
        "阿里 Qoder CN 编程平台的每日福利（2026-09-18 10:00 起，结束时间官方『另行公告』）：每天 10:00 开放新一轮领取，每账号每轮 100 通用 Credits，仅限 Qoder CN 桌面端在用量面板（左下角礼物图标）主动领取，错过不补；每笔自领取之日起 30 天有效，未到期的可叠加保留。Credits 覆盖 Qoder CN 全家桶（桌面端、IDE、JetBrains 插件、CLI、QoderWake、Cloud Agents、移动端与网页版）。Qwen3.8-Flash 0.0× 计费免费档原定 09-30 23:59:59 结束，官方已宣布延长：10 月 1 日起继续免费，结束时间将提前在活动页公告。",
      limits:
        "每日 100 通用 Credits：每账号每轮限领一次，仅桌面端可领，每笔 30 天有效、未领取不累计到下一轮；面向 Qoder CN 个人用户（体验/专业/高级/旗舰版及会员卡用户，免费与试用期用户均可），企业订阅用户不适用",
      caveat:
        "2026-09-24 核实官方活动页（docs.qoder.cn/events/flashoffer 与 /events/100credits）：Flash 免费档、每日 100 Credits 规则均与官方一致。2026-10-04、10-11 复核：每日 100 Credits 仍 live，结束时间『另行公告』；Flash 免费档原定 9 月 30 日结束，现已延长，自 10 月 1 日继续免费。2026-10-21 再核官方活动页，规则与未公布截止日仍未变，expiry 保持 null。09-18 收录时「国际版也有份」的说法来自公众号投稿，官方活动页仅写 Qoder CN，仍限定为 Qoder CN。",
    },
    en: {
      name: "Qoder CN: 100 free Credits daily (Qwen3.8-Flash free window extended, end TBA)",
      description:
        "A daily perk on Alibaba's Qoder CN coding platform (from 2026-09-18 10:00, end date officially \"to be announced\"): a new claim round opens daily at 10:00, granting 100 general Credits per account per round, claimable only in the Qoder CN desktop app from the usage panel (gift icon, bottom-left); missed rounds are not made up. Each grant expires 30 days after it is claimed; unexpired grants stack. Credits work across the Qoder CN product family (desktop, IDE, JetBrains plugin, CLI, QoderWake, Cloud Agents, mobile, web). The Qwen3.8-Flash 0.0x free-billing window was originally set to end 09-30 23:59:59 but has been officially extended: it continues free from Oct 1, with the end date to be announced in advance on the event page.",
      limits:
        "100 general Credits daily: one claim per account per round, desktop app only, each grant valid 30 days, unclaimed rounds don't carry over; for Qoder CN individual users (trial/pro/max/ultra and member-card tiers, free and trial users included), enterprise subscriptions excluded",
      caveat:
        "Verified 2026-09-24 against the official event pages (docs.qoder.cn/events/flashoffer and /events/100credits): the Flash free window and daily-100-Credits rules matched. Re-checked 2026-10-04 and 10-11: daily 100 Credits remained live with the end date to be announced; Qwen3.8-Flash free billing was extended from Oct 1. Re-checked 2026-10-21: the official event pages still show the same rules and no end date, so expiry remains null. The \"international edition included\" claim from the original Sep 18 submission is still not on the official page — scoped to Qoder CN.",
    },
  },
  {
    id: "workbuddy-intl-free",
    provider: "Tencent WorkBuddy",
    kind: "long-term",
    access: "public",
    verified: true,
    expiry: null,
    url: "https://www.workbuddy.ai/",
    source: "https://www.workbuddy.ai/pricing/",
    actionUrl: "https://www.workbuddy.ai/",
    lastVerified: "2026-10-21",
    zh: {
      name: "WorkBuddy Free：新用户 250 Credits，每月 100 + 每日活跃奖励",
      description:
        "WorkBuddy 官方 Free 计划为 $0/月，面向 AI 办公与编程任务，支持自动模型路由、代码补全和自动化任务。官网列出新用户注册奖励 250 welcome credits；Free 计划另含每月 100 credits、每日活跃奖励 30 credits、5,000 次代码补全和 3 个自动化任务。",
      limits:
        "Free：$0/月；新用户 250 welcome credits；每月 100 credits + 每日活跃奖励 30 credits；5,000 次代码补全、3 个自动化任务。官网未公布 credits 到 token 的换算、模型级限额或 Free 计划截止日",
      caveat:
        "2026-10-21 核实 WorkBuddy 官方定价页（workbuddy.ai/pricing）：Free 计划及其 credits、代码补全和自动化任务额度均按页面更新。此前条目中的 Hy4 preview / DeepSeek V4.1 Flash 指定免费、350 新人积分说法无法由当前官方定价页支持，已移除；具体免费模型及 credits 使用边界以账号内显示为准。",
    },
    en: {
      name: "WorkBuddy Free: 250 welcome Credits, 100 monthly + daily activity rewards",
      description:
        "WorkBuddy's official Free plan costs $0/month and covers office and coding tasks, with automatic model routing, code completion, and automated tasks. The pricing page lists 250 welcome credits for new users; the Free plan also includes 100 credits/month, a 30-credit daily active reward, 5,000 code completions, and 3 automated tasks.",
      limits:
        "Free: $0/month; 250 welcome credits for new users; 100 credits/month plus a 30-credit daily active reward; 5,000 code completions and 3 automated tasks. Credit-to-token conversion, model-level limits, and an end date are unpublished",
      caveat:
        "Verified 2026-10-21 against WorkBuddy's official pricing page (workbuddy.ai/pricing): the Free plan and its listed credit, completion, and task allowances match. The former claims of specific free Hy4 preview / DeepSeek V4.1 Flash models and 350 new-user credits are not supported by the current official pricing page and have been removed; exact free models and credit boundaries follow the signed-in account.",
    },
  },
  {
    id: "inception-new-account-tokens",
    provider: "Inception",
    kind: "temporary",
    access: "public",
    verified: true,
    expiry: "2026-12-28",
    url: "https://www.inceptionlabs.ai/models",
    source: "https://docs.inceptionlabs.ai/get-started",
    actionUrl: "https://platform.inceptionlabs.ai",
    lastVerified: "2026-11-14",
    zh: {
      name: "Inception API：新账号 1 亿免费 Tokens（Mercury 3 等，平台 12-28 关停）",
      description:
        "Inception 官方为新账号提供 1 亿免费 tokens，无需先填支付信息。官方 API Quick Start 确认可用 Mercury 3，并支持通过 OpenAI 兼容接口接入相应编码 Agent。Free 计划宣传可访问所有模型，但具体赠额可用模型仍需按各模型接入条件判断。官方同时公告整个 Mercury API 正在关停，服务保留至 2026-12-28。",
      limits:
        "每个新账号获 1 亿 tokens；Mercury 3 有官方 Quick Start 接入示例；免费额度有效期、速率与模型级适用范围未公布；无需先填写支付信息；平台官方公告 Mercury API 关停，服务保留至 2026-12-28，此后不再提供访问",
      caveat:
        "2026-10-21 核实官方 Quick Start 与 Models 文档：Mercury 3 是明确记录的新账号接入模型，支持 chat completions 与 tool calling。Mercury Voice 目前仅向 enterprise customers 开放；Mercury Decide 使用独立的 v1/decisions 接口，官网标注 Contact sales，赠额是否适用未明确。Mercury 2 与 Mercury 2.5 不对新用户开放。因此目前能确认 1 亿赠额可用 Mercury 3，其它模型不作保证。2026-11-14 复核：1 亿赠额仍在，但官方文档顶部横幅已写明「The Mercury API is winding down and will remain available through December 28, 2026」，官方说明页补充「after that date you will no longer have access to the service or to any data submitted to the platform」——据此把 expiry 定为 2026-12-28，到期自动进过期区。",
    },
    en: {
      name: "Inception API: 100M free tokens for new accounts (Mercury 3 and more; platform shuts down Dec 28)",
      description:
        "Inception grants 100 million free tokens to new accounts without requiring payment details upfront. Its API Quick Start confirms Mercury 3 and shows how to use it through the OpenAI-compatible API with supported coding agents. The Free plan says 'access all models,' but model-specific access requirements still apply. The company has also announced that the entire Mercury API is winding down and remains available through 2026-12-28.",
      limits:
        "100M tokens per new account; Mercury 3 has an official Quick Start; expiry, rate limits, and model eligibility are unpublished; no payment details required to start; the platform's official notice says the Mercury API is winding down and remains available through 2026-12-28, after which there is no further access",
      caveat:
        "Verified 2026-10-21 against Inception's official Quick Start and Models docs: Mercury 3 is the confirmed new-account route and supports chat completions and tool calling. Mercury Voice is currently available only to enterprise customers; Mercury Decide uses a separate v1/decisions endpoint and is marked 'Contact sales' on the models page, with no confirmation that the signup grant covers it. Mercury 2 and Mercury 2.5 are unavailable to new users. The 100M grant is confirmed for Mercury 3; other models are not guaranteed. Re-checked 2026-11-14: the 100M grant is still offered, but the docs banner now reads 'The Mercury API is winding down and will remain available through December 28, 2026', and the support page adds that after that date there is no longer access to the service or to any data submitted to the platform — hence expiry is set to 2026-12-28 and the entry retires automatically on that date.",
    },
  },
  {
    id: "sciencepro-xinzhiyuan-code",
    provider: "磐石 SciencePro",
    kind: "temporary",
    access: "public",
    verified: false,
    archived: true,
    expiry: null,
    url: "https://www.scienceone.com.cn/portal/",
    source: "https://www.scienceone.com.cn/portal/",
    actionUrl: "https://www.scienceone.com.cn/portal/",
    code: "DH26JYZ5684",
    lastVerified: "2026-11-14",
    zh: {
      name: "磐石 SciencePro：新智元独家兑换码（入口已不可查）",
      description:
        "中科闻歌的 AI for Science 科研智能平台：深度研究（多智能体调研）、对话式科学计算、2.7 亿论文/专利文献库。新智元公众号发文送独家福利——注册后在平台内输入兑换码，领取独家福利积分，兑换的 token 直接到账。平台现已改名为 ScienceOra。注意这是科研平台，不是编码工具。",
      limits: "积分/Token 到账数量未公布，以平台内实际到账为准",
      caveat:
        "活动提前失效，2026-11-14 核实已无法核实，本条仅作归档。证据：门户首页已改名为 ScienceOra（页脚「©2026 ScienceOra」），站内不再出现兑换码 DH26JYZ5684 的兑换入口，兑换方式无法公开核实；此前的「首届 AI4S 科研 Skill 大赛 9.4–10.23」也已过期。原记录：兑换码来自新智元公众号文章（2026-09-18 收录），属社区消息，未见官方公告；数量有限，领完即止，需注册平台账号。",
    },
    en: {
      name: "Panshi SciencePro: Xinzhiyuan exclusive redemption code (entry point no longer verifiable)",
      description:
        "An AI for Science research platform by Zhongke Wenge: deep research (multi-agent investigation), conversational scientific computing, and a 270M paper/patent library. Xinzhiyuan's WeChat article gave away an exclusive code — sign up, enter it in the platform, and the bonus credits (redeemable for tokens) land directly in your account. The platform now brands itself as ScienceOra. Note: this is a research platform, not a coding tool.",
      limits: "Credit/token amount not published; go by what actually lands in your account",
      caveat:
        "The offer became unverifiable and was confirmed dead on 2026-11-14; this entry is archived. Evidence: the portal home page has been rebranded to ScienceOra (footer: '©2026 ScienceOra'), the redemption entry for code DH26JYZ5684 no longer appears anywhere on the site, and the redemption route can no longer be checked publicly; the earlier 'first AI4S Research Skill Contest, Sep 4 – Oct 23' has also expired. Original record: the code came from Xinzhiyuan's WeChat article (added 2026-09-18) — a community lead with no official announcement; limited quantity, first come first served, platform account required.",
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
    lastVerified: "2026-11-14",
    zh: {
      name: "OpenCode Zen 免费模型（长期轮换，14 款）",
      description:
        "OpenCode Zen 长期轮换零价格模型。2026-11-14 官方名单列出 14 款：Big Pickle、Iceman Free、Inkling 2 Small Free、GLM-5.3-Flash Free、DeepSeek V4.1 Flash Free、MiniMax M3.1 Flash Free、Beam Free、Flint 40B Free、LongCat 2.5 Free、MiMo-V2.6-Flash Free、Nemotron 3 Ultra Free、Nemotron 3.5 Lightning Free、Nemotron 3.5 Super VL Free、Jev 1.13 Free。登录 OpenCode 使用；官方未公布单模型额度。各模型免费期可能随时结束并轮换。",
      limits:
        "opencode 客户端内登录即用，免费模型无需充值、无需绑卡；只有取 API key 在第三方 agent 中调用时才需绑定支付信息（余额低于 $5 自动充值 $20，可手动关闭）；免费模型的具体配额未公布；LongCat 2.5 Free 官方另标限 100 请求/日",
      caveat:
        "2026-10-21 依官方文档核实：每个模型均为限时免费。Big Pickle、LL Alpha、Exo、MiMo 两款的免费期数据可能用于改进模型；LL Alpha 保留 30 天。Nemotron 三款走 NVIDIA 试用端点，会记录用量并用于改进产品，官方建议勿提交个人或机密数据。Beam 不用于训练但保留数据 30 天；Jev 免费档的数据政策未说明。其余模型按官方页面列出的供应商策略处理。2026-11-14 复核：LL Alpha 与 Exo 已从免费名单移除，新增 Iceman Free、Inkling 2 Small Free、Flint 40B Free、LongCat 2.5 Free；原 MiMo-V2.5 档已无独立免费条目，改为 MiMo-V2.6-Flash Free。官方对多数条目写明「available on OpenCode for a limited time」；Big Pickle 官方原文「Big Pickle is a stealth model that's free on OpenCode for a limited time」；LongCat 2.5 Free 官方原文「free on OpenCode for a limited time, with a limit of 100 requests per day」，并注明「Hosted in China. Prompts and other inputs are not used for training or retained」。",
    },
    en: {
      name: "OpenCode Zen Free Lane (Rotating, 14 models)",
      description:
        "OpenCode Zen maintains a rotating zero-price model lane. Its official lineup on 2026-11-14 lists 14 models: Big Pickle, Iceman Free, Inkling 2 Small Free, GLM-5.3-Flash Free, DeepSeek V4.1 Flash Free, MiniMax M3.1 Flash Free, Beam Free, Flint 40B Free, LongCat 2.5 Free, MiMo-V2.6-Flash Free, Nemotron 3 Ultra Free, Nemotron 3.5 Lightning Free, Nemotron 3.5 Super VL Free, and Jev 1.13 Free. Sign in to use them in OpenCode; per-model quotas are unpublished and the free models may rotate at any time.",
      limits:
        "In the opencode client, free models need no top-up and no card after sign-in; billing details are only required to take an API key for calling Zen from other agents (auto-reload adds $20 under a $5 balance; can be disabled); per-model free quotas not published; LongCat 2.5 Free is separately capped at 100 requests per day",
      caveat:
        "Re-checked 2026-10-21 against official docs: each free model is limited-time. During free access, data from Big Pickle, LL Alpha, Exo, and both MiMo models may be used to improve the models; LL Alpha retains data for 30 days. The three Nemotron free endpoints log usage and may use it to improve NVIDIA products; do not submit personal or confidential data. Beam is not used for training but retains data for 30 days. The Jev free lane has no published data policy. See the official docs for current provider-specific terms. Re-checked 2026-11-14: LL Alpha and Exo have left the free lineup, and Iceman Free, Inkling 2 Small Free, Flint 40B Free, and LongCat 2.5 Free have joined; the old MiMo-V2.5 lane is gone, replaced by MiMo-V2.6-Flash Free. Most entries now read 'available on OpenCode for a limited time'; the official line for Big Pickle is 'Big Pickle is a stealth model that's free on OpenCode for a limited time'; for LongCat 2.5 Free it is 'free on OpenCode for a limited time, with a limit of 100 requests per day', plus 'Hosted in China. Prompts and other inputs are not used for training or retained'.",
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
    lastVerified: "2026-11-14",
    zh: {
      name: "OpenCode Zen 免费车道：已下架的轮换模型（GLM 4.7、MiniMax M2.1、Union Alpha、LL Alpha、Exo 等）",
      description:
        "OpenCode Zen 免费车道的历史轮换档：GLM 4.7、MiniMax M2.1、Union Alpha、Muse Spark 1.2、LL Alpha、Exo 等先后限时免费，现已全部下架（部分转入付费档），不再可零价格调用。车道本身仍在营并持续补新；现行阵容、领取方式与数据政策见「OpenCode Zen 免费模型（长期轮换）」条目。",
      limits:
        "历史各档在免费期内均为零价格调用，配额未公布；下架后模型转入付费档或直接退役",
      caveat:
        "历史归档条目（2026-10-21 整理，2026-11-14 补记）：所列模型已全部离开免费车道，本条仅作追溯。2026-11-14 复核官方名单时确认 LL Alpha 与 Exo 也已移出，补入本条；OpenRouter 的 stealth 车道（union-alpha、space-bunny-alpha）同样已结束免费期并分别揭晓为 Unbiased Pareto 与 MiniMax M3.1 Flash。现行阵容、领取方式与数据政策以 opencode-zen-free-rotation 条目为准。",
    },
    en: {
      name: "OpenCode Zen free lane: retired rotation models (GLM 4.7, MiniMax M2.1, Union Alpha, LL Alpha, Exo, etc.)",
      description:
        "Historical turns of OpenCode Zen's free lane: GLM 4.7, MiniMax M2.1, Union Alpha, Muse Spark 1.2, LL Alpha, and Exo all had limited-time free stints and have since left the lane (some moved to paid tiers) — no longer callable at price zero. The lane itself keeps running and restocking. See the OpenCode Zen Free Models (Rotating) entry for how to claim current models and review their data policies.",
      limits:
        "Each historical turn was zero-price during its free window with unpublished quotas; once a model leaves it either moves to a paid tier or retires",
      caveat:
        "Historical archive entry (compiled 2026-10-21, updated 2026-11-14): every model listed here has left the free lane; this entry exists for the record only. The 2026-11-14 re-check of the official lineup confirmed that LL Alpha and Exo have also moved out and added them here; OpenRouter's stealth lane (union-alpha, space-bunny-alpha) has likewise ended its free period, revealing Unbiased Pareto and MiniMax M3.1 Flash respectively. The opencode-zen-free-rotation entry is authoritative for the current lineup, claiming steps, and data policies.",
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
    lastVerified: "2026-11-14",
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
    lastVerified: "2026-11-14",
    zh: {
      name: "OpenRouter 免费层",
      description:
        "支持匿名访问的模型网关：:free 模型轮换供应（2026-11-14 官方 API 在架 14 个 :free 模型，含 ling-3.2-flash、ernie-5.5-flash-preview、inkling-2-small、lfm-3-1.7b、particle-1、flint-v1.0、nemotron 三款、dots-3-note-preview、north-mini-code、gemma-4 两款，另有 google/lyria-3 两个零价多模态与 openrouter/free 路由器）。另有 stealth/ 零价格车道（union-alpha、space-bunny-alpha），两条车道的免费期均已结束，分别揭晓为 Unbiased Pareto 与 MiniMax M3.1 Flash。",
      limits:
        ":free 模型 20 请求/分；未充值 50 请求/日，累计充值 10 美元后 1000 请求/日（账户级、所有免费模型共享）；stealth 车道免费期已结束",
      caveat:
        "每日配额在账户下所有 :free 模型间共享。2026-11-14 复核官方 /api/v1/models：在架 :free 模型为 14 个（此前记录的「约 20 个」已轮换），零价条目另含 google/lyria-3-pro-preview、google/lyria-3-clip-preview 与 openrouter/free 路由器；公共模型列表已无任何 stealth/ 条目，stealth/union-alpha 与 stealth/space-bunny-alpha 两个页面均在正文标注「The free stealth period has ended」，因此本条不再把 stealth 车道列为可领的零价格入口。",
    },
    en: {
      name: "OpenRouter Free Tier",
      description:
        "Anonymous-access model gateway with a rotating set of :free models (14 :free models live on the official API as of 2026-11-14, including ling-3.2-flash, ernie-5.5-flash-preview, inkling-2-small, lfm-3-1.7b, particle-1, flint-v1.0, three Nemotron models, dots-3-note-preview, north-mini-code, and two gemma-4 variants, plus zero-priced google/lyria-3 entries and the openrouter/free router). It also has a stealth/ zero-price lane (union-alpha, space-bunny-alpha), but both lanes' free periods have ended, revealing Unbiased Pareto and MiniMax M3.1 Flash respectively.",
      limits:
        ":free models: 20 requests/min; 50 requests/day without top-up, 1000/day after 10 lifetime credits (account-wide, shared across all free models); the stealth lane's free period has ended",
      caveat:
        "The daily cap is shared across every :free model on the account. Re-checked 2026-11-14 against the official /api/v1/models: 14 :free models are live (the previously recorded 'about 20' has rotated), zero-priced entries also include google/lyria-3-pro-preview, google/lyria-3-clip-preview, and the openrouter/free router; the public model list no longer contains any stealth/ entry, and both stealth/union-alpha and stealth/space-bunny-alpha now state in their body text that 'The free stealth period has ended', so this entry no longer lists the stealth lane as a claimable zero-price route.",
    },
  },
  {
    id: "vercel-ai-gateway-free-monthly",
    provider: "Vercel",
    kind: "long-term",
    access: "public",
    verified: true,
    url: "https://vercel.com/ai-gateway",
    source: "https://vercel.com/docs/ai-gateway/pricing",
    actionUrl: "https://vercel.com/ai-gateway",
    lastVerified: "2026-11-14",
    zh: {
      name: "Vercel AI Gateway：每月 $5 免费模型额度",
      description:
        "Vercel 每个 team 账号的 AI Gateway 免费层每月含 $5 模型调用额度，首次发起 AI Gateway 请求后开始计入。可接入支持该网关的编码 Agent，按模型供应商公开价格扣额度。",
      limits:
        "每个 Vercel team 每月 $5；仅适用于 Free Tier eligible models，且各模型有较低速率限制；免费额度从首次请求开始",
      caveat:
        "2026-10-21 核实官方定价文档：免费层仅开放部分模型，不含完整目录；超出模型速率限制会返回 429。购买 AI Gateway credits 后账号转为付费层，之后不再获得每月 $5 免费额度。",
    },
    en: {
      name: "Vercel AI Gateway: $5 monthly free model credit",
      description:
        "Every Vercel team account receives $5 of AI Gateway model usage each month. The allowance starts after the first AI Gateway request and is charged at the model provider's listed rates. The gateway can connect to supported coding agents.",
      limits:
        "$5 per Vercel team each month; limited to Free Tier eligible models, with lower per-model rate limits; starts on the first request",
      caveat:
        "Verified 2026-10-21 against the official pricing docs: the free tier covers a subset of models, not the full catalog, and requests can receive 429 rate-limit responses. Purchasing AI Gateway credits moves the team to the paid tier and ends the monthly $5 free credit.",
    },
  },
  {
    id: "freebuff-coding-agent-free-plan",
    provider: "Freebuff",
    kind: "long-term",
    access: "public",
    verified: true,
    url: "https://freebuff.com/",
    source: "https://freebuff.com/plans",
    actionUrl: "https://freebuff.com/",
    lastVerified: "2026-11-14",
    zh: {
      name: "Freebuff 免费 Coding Agent：每日补充 30 小时配额",
      description:
        "Freebuff 提供桌面端、网页端与终端 Coding Agent 免费计划，官方列明 $0/月、无需绑卡，每日补充 30 小时模型使用配额，每个 session 内不限消息数。用量按小时计，一个 session 为一小时，该小时内消息不限；每日额度按本地时区午夜重置，未用完不结转。",
      limits:
        "每日补充 30 模型小时、session 内消息不限、不用绑卡；官方 Free 档按模型给出的每日折算：DeepSeek V4.1 Flash 15 小时 或 DeepSeek V4.1 Flash Fast 10 小时；模型小时表另列 DeepSeek V4.1 Flash Fast、DeepSeek V4.1 Flash、GPT-6 Luna、Muse Spark 1.3、Claude Haiku 5.5（100k 上下文）、Muse Ember、Beam 1.0、Nemotron 3.5 Lightning、Glyph Cluster，促销档为 GPT-6.1 Terra、DeepSeek V4.1 Flash Slow、Solar Pro 4、Solar Mini 4；官方另注明「2026-11-03 之前创建的账号保留其原有模型直至下线」",
      caveat:
        "2026-10-21 核实官方计划页：条目原先引用的 MiMo V2.6 Flash Slow 30 小时、Flash Fast 15 小时、DeepSeek V4.1 Flash 10 小时、Claude Haiku 5.5 2 小时等数字已全部过时——2026-11-14 复核时官方页面不再列 MiMo 系列，模型小时表改为 DeepSeek V4.1 Flash / Flash Fast、GPT-6 Luna、Muse Spark 1.3、Claude Haiku 5.5、Muse Ember、Beam 1.0、Nemotron 3.5 Lightning、Glyph Cluster，促销档为 GPT-6.1 Terra、DeepSeek V4.1 Flash Slow、Solar Pro 4、Solar Mini 4；Free 档卡片给出的每日口径为 DeepSeek V4.1 Flash 15 小时或 Flash Fast 10 小时。官方说明每个模型的每日时长是单模型使用的估算、不可相加，促销档为临时口径，beta 期间模型成本与用量可能变动。Fair-use 限制可能暂停或终止 session；Freebuff 以文本广告支持免费使用，模型可用性可能因地区而异；截止日期未公布。",
    },
    en: {
      name: "Freebuff Free Coding Agent: 30 model-hours replenished daily",
      description:
        "Freebuff offers free coding agents for desktop, web, and terminal. Its official plan is $0/month, requires no card, replenishes 30 hours of model usage daily, and allows unlimited messages within each session. Usage is measured in hours: a session lasts an hour with unlimited messages inside it; daily hours reset at midnight in your local timezone and unused daily hours do not roll over.",
      limits:
        "30 model-hours replenished daily, unlimited messages per session, no card required; the official Free tier's per-day figures are 15 hours on DeepSeek V4.1 Flash or 10 hours on DeepSeek V4.1 Flash Fast; the per-model hours table also lists DeepSeek V4.1 Flash Fast, DeepSeek V4.1 Flash, GPT-6 Luna, Muse Spark 1.3, Claude Haiku 5.5 (100k context), Muse Ember, Beam 1.0, Nemotron 3.5 Lightning, and Glyph Cluster, with a promotional tier of GPT-6.1 Terra, DeepSeek V4.1 Flash Slow, Solar Pro 4, and Solar Mini 4; the page also notes that accounts created before November 3 keep their other models until those are retired",
      caveat:
        "Verified 2026-10-21 against the official plans page: the MiMo V2.6 Flash Slow 30h / Flash Fast 15h / DeepSeek V4.1 Flash 10h / Claude Haiku 5.5 2h figures previously listed here are all outdated — at the 2026-11-14 re-check the page no longer lists any MiMo model, and the hours table now covers DeepSeek V4.1 Flash / Flash Fast, GPT-6 Luna, Muse Spark 1.3, Claude Haiku 5.5, Muse Ember, Beam 1.0, Nemotron 3.5 Lightning, and Glyph Cluster, with a promotional tier of GPT-6.1 Terra, DeepSeek V4.1 Flash Slow, Solar Pro 4, and Solar Mini 4; the Free card itself quotes 15 hours on DeepSeek V4.1 Flash or 10 on Flash Fast per day. The official text says the per-model hours are alternatives for using one model and cannot be added together, promotional prices are temporary, and model costs and allowances may change during beta. Fair-use limits can pause or stop a session; Freebuff funds free usage with text ads, and model availability may vary by region. No end date published.",
    },
  },
  {
    id: "space-bunny-alpha",
    provider: "OpenRouter",
    kind: "temporary",
    access: "public",
    verified: true,
    archived: true,
    expiry: null,
    url: "https://openrouter.ai/stealth/space-bunny-alpha",
    source: "https://openrouter.ai/stealth/space-bunny-alpha",
    actionUrl: "https://openrouter.ai",
    lastVerified: "2026-11-14",
    zh: {
      name: "OpenRouter stealth/space-bunny-alpha 免费模型（$0，免费期已结束）",
      description:
        "OpenRouter 的零价格空格模型 space-bunny-alpha（Space Bunny Alpha）：匿名大模型、推理速度快、编码能力强、原生多模态输入，1M 上下文窗口，2026-09-23 上线时走 stealth/ 命名空间的零价格车道（与 stealth/union-alpha 同类），不带 :free 后缀、不占 :free 模型的每日共享配额。现已揭晓为 MiniMax M3.1 Flash，免费期结束。",
      limits: "定价 $0，不占 :free 每日配额；具体用量与限速官方未公布",
      caveat:
        "活动提前结束，2026-11-14 核实已失效，本条仅作归档。证据：官方 stealth 页面现已标注「The free stealth period has ended; use MiniMax M3.1 Flash at https://openrouter.ai/minimax/minimax-m3.1-flash」，模型身份也揭晓为 MiniMax M3.1 Flash（2026-09-23 发布）；同车道的 union-alpha 同样已结束免费期并揭晓为 Unbiased Pareto。原记录：2026-09-24 经 OpenRouter /api/v1/models 官方数据核实该模型真实在架且定价为 0；2026-10-04 与 10-11 复核时页面仍在且公共 /api/v1/models 已无任何 stealth/ 条目、单模型端点 404，$0 定价无法再经官方 API 复核。",
    },
    en: {
      name: "OpenRouter stealth/space-bunny-alpha Free Lane ($0, free period ended)",
      description:
        "OpenRouter's zero-price stealth model space-bunny-alpha (Space Bunny Alpha): an anonymous large model with fast inference, strong coding capability and native multimodal input, in a 1M-token context window. It launched on 2026-09-23 on OpenRouter's stealth/ zero-price lane (alongside stealth/union-alpha), carried no :free suffix and did not count against the shared daily :free cap. It has since been revealed as MiniMax M3.1 Flash and its free period has ended.",
      limits: "Priced at $0 and outside the :free daily quota; per-usage caps and rate limits not published",
      caveat:
        "The offer ended early and was confirmed dead on 2026-11-14; this entry is archived. Evidence: the official stealth page now reads 'The free stealth period has ended; use MiniMax M3.1 Flash at https://openrouter.ai/minimax/minimax-m3.1-flash', and the model is revealed as MiniMax M3.1 Flash (released 2026-09-23); its sibling union-alpha has likewise ended its free period and is revealed as Unbiased Pareto. Original record: verified against OpenRouter's official /api/v1/models data on 2026-09-24 — the model existed and was priced at 0; at the 2026-10-04 and 10-11 re-checks the page was still up while the public /api/v1/models no longer listed any stealth/ entry and the single-model endpoint 404'd, so the $0 price could no longer be re-verified via the official API.",
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
    lastVerified: "2026-10-11",
    zh: {
      name: "Token Harbor：Claude Haiku 5.5 限时免费（官方称免费一周）",
      description:
        "Token Harbor（tokenharbor.ai，OpenAI 兼容聚合网关：一个 API key 调全部模型、按 token 直通计价）的限时免费：注册后经其 OpenAI 兼容端点用模型 claude-haiku-5.5:free 即可零价格调用 Claude Haiku 5.5，官方 X 宣传为「免费一周」。同场限免的还有 deepseek-v4.1-flash:free 与 mimo-v2.6-flash:free。持有 Agent Pass 及以上通行证的用户享受 2× 模型加速（官方 FAQ：Haiku 5.5 的 2× Model Boost 至 2026-10-15）。",
      limits:
        "免费路线不扣账户余额；官方免费档按模型列表价的等值用量计量、自首次请求起算 7×24 小时个人滚动窗口，本活动是独立额度还是占用免费档额度未公布；新账号注册无赠送金；免费路线的请求与响应在你启用免费模型后可能被 Token Harbor 保留",
      caveat:
        "官方未单独公布 :free 路线的结束日，expiry 的 2026-10-15 取自官方 FAQ 的 Haiku 5.5 Model Boost 窗口与官方 X「免费一周」说法。2026-10-11 复核 Models 页 Free 区：claude-haiku-5.5:free 仍在列（标注 Limited time），FAQ 的 2× Model Boost 窗口仍至 2026-10-15；官方 X 帖有登录墙，未直接核实。免费路线条款：启用免费模型后 prompts/responses 可能被 Token Harbor 保留，勿发送敏感内容。:free 目录随时轮换，下架即失效，以 Models 页 Free 区为准。",
    },
    en: {
      name: "Token Harbor: Claude Haiku 5.5 free for a limited time (officially one week)",
      description:
        "Token Harbor (tokenharbor.ai, an OpenAI-compatible aggregator: one API key reaches every model at passthrough per-token pricing) runs a limited-time free route: register, then call Claude Haiku 5.5 at price zero via the model ID claude-haiku-5.5:free on their OpenAI-compatible endpoint — officially announced as free for a week. Also free in the same window: deepseek-v4.1-flash:free and mimo-v2.6-flash:free. Holders of an Agent Pass or higher get 2x model speed (official FAQ: Haiku 5.5's 2x Model Boost runs through October 15, 2026).",
      limits:
        "Free routes never charge your balance; the official free tier is metered by list-price value of usage over a personal rolling 7x24-hour window from your first request — whether this campaign has its own allowance or draws on the free tier is not published; new accounts start at $0 with no sign-up credit; free-route prompts and responses may be retained by Token Harbor after you enable free models",
      caveat:
        "No separate end date is published for the :free route itself; the expiry of 2026-10-15 comes from the official FAQ's Haiku 5.5 Model Boost window and the official X post's free-for-a-week wording. Re-checked 2026-10-11 on the Models page Free section: claude-haiku-5.5:free is still listed (tagged Limited time) and the FAQ's 2x Model Boost window still runs through 2026-10-15; the official X post is behind a login wall and was not directly verified. Free-route terms: after enabling free models, prompts/responses may be retained by Token Harbor — don't send sensitive content. The :free catalogue rotates; once a lane leaves the list the route is gone. The Models page Free section is the source of truth.",
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
    lastVerified: "2026-11-14",
    zh: {
      name: "aweshare 社区 Hub",
      description:
        "社区模型共享枢纽，发邮件到 peng@wehuman.top 即可申请。生产者暴露自己的后端（Ollama、vLLM 或 API 账号），消费者通过标准 OpenAI/Anthropic/Responses SDK 对接一个 URL 即可调用。模型列表动态变化（官方 README 原话「别问本页，问 hub——列表会变」），代表车道如 hub/glm-5.3、hub/deepseek-v4-pro、hub/kimi-k3、hub/minimax-m3、jiyu2/gpt-5.6-luna、peng1/gpt-5.5-aihubmix、peng1/union-alpha-openrouter、leidell/mimo-v2.5 等，以 hub 实际为准。",
      limits:
        "并发与每日 token 预算由生产者设定；hub 全局消费者名额当前 10 个，生产者不设限",
      caveat: "申请制：向 peng@wehuman.top 发送申请邮件。2026-10-11 复核官方 README：邮件申请方式与「消费者名额当前 10 个、生产者不设限」仍准确；「40+ 模型车道」的固定数字官方页已无对应表述，改为动态口径。",
    },
    en: {
      name: "aweshare Community Hub",
      description:
        "Community model-sharing hub — apply by emailing peng@wehuman.top. Producers expose their own backends (Ollama, vLLM, or API accounts); consumers call them through standard OpenAI/Anthropic/Responses SDKs against one URL. The model list changes constantly (official README: \"don't ask this page, ask the hub — the list will change\"), with representative lanes including hub/glm-5.3, hub/deepseek-v4-pro, hub/kimi-k3, hub/minimax-m3, jiyu2/gpt-5.6-luna, peng1/gpt-5.5-aihubmix, peng1/union-alpha-openrouter, and leidell/mimo-v2.5 — the hub is ground truth.",
      limits: "Producer-defined concurrency and daily token budgets; hub-wide consumer cap currently 10, producers unlimited",
      caveat: "Application required: email peng@wehuman.top. Re-checked 2026-10-11 against the official README: the email route and the \"consumer cap currently 10, producers unlimited\" line still hold; the fixed \"40+ model lanes\" figure no longer appears officially, so the entry now uses dynamic wording.",
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
    lastVerified: "2026-11-14",
    zh: {
      name: "Codex 开源维护者计划",
      description:
        "OpenAI 面向开源维护者的资助计划：入选者获 6 个月 ChatGPT Pro（含 Codex）、用于项目维护与自动化等工作流的 API 额度，以及视情况开放的 Codex Security。官方另称该计划由 Codex Open Source Fund（100 万美元）支撑。",
      limits:
        "申请制、滚动评审；可自荐或提名他人；官方未公布固定名额与截止日。Codex Open Source Fund 规模 100 万美元",
      caveat:
        "需要一个活跃维护中的开源项目。2026-11-14 复核官方申请页：入选福利三项（6 个月 ChatGPT Pro、API credits、Codex Security 的 conditional access）未变，官方页面新增/保留了 Codex Open Source Fund（100 万美元）的表述，据此补入。",
    },
    en: {
      name: "Codex for Open Source",
      description:
        "OpenAI program for open-source maintainers: selected maintainers receive 6 months of ChatGPT Pro (which includes Codex), API credits for review/automation/release workflows, and conditional access to Codex Security. The company also says the program is backed by the Codex Open Source Fund ($1 million).",
      limits:
        "Application-based, reviewed on a rolling basis; self-apply or nominate another maintainer; no fixed quota or end date published. The Codex Open Source Fund is $1 million",
      caveat:
        "Requires an actively maintained open-source project. Re-checked 2026-11-14 against the official application page: the three benefits (6 months of ChatGPT Pro, API credits, conditional access to Codex Security) are unchanged, and the page now also carries the Codex Open Source Fund ($1 million) wording, which this entry now records.",
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
    lastVerified: "2026-11-14",
    zh: {
      name: "Claude for Open Source 开源计划",
      description:
        "Anthropic 面向开源维护者与贡献者的感谢计划：入选者获 6 个月免费 Claude Ultra（含 Claude Code）。满足任一条件即可申请：维护的包被 500+ 仓库依赖 / 100+ 包依赖 / 全 registry 合计月下载 20 万+；是 CPython、Rust、Node.js、Apache、CNCF、Kubernetes、Linux kernel、Django、Rails 等项目的在列 committer 或 maintainer；近 12 个月在他人仓库有 100+ 已合并 PR；某仓库有 20+ 个不同的外部贡献者提交过已合并 PR；或任一仓库 OpenSSF criticality score ≥ 0.4。不完全达标也可以申请并自述情况。",
      limits: "6 个月 Claude Ultra；申请审核制；每类门槛满足其一即可",
      caveat:
        "6 个月到期后免费订阅自动结束（官方提前邮件提醒）；原有付费计划会按原价自动恢复，不想续费需在到期前取消。2026-11-14 复核官方申请页：福利口径已由 Claude Max 20x 改为 Claude Ultra（官方原文「6 months of Claude Ultra on us」），门槛条件与到期规则未变。",
    },
    en: {
      name: "Claude for Open Source",
      description:
        "Anthropic's thank-you program for open-source maintainers and contributors: selected applicants get 6 months of free Claude Ultra (includes Claude Code). Any one of these qualifies: your package has 500+ dependent repos / 100+ dependent packages / 200k+ combined monthly downloads across registries; you're a listed committer or maintainer on projects like CPython, Rust, Node.js, Apache, CNCF, Kubernetes, Linux kernel, Django, or Rails; 100+ PRs merged into repos you don't own in the last 12 months; a repo with 20+ unique external contributors with merged PRs in the last 12 months; or any repo you maintain has an OpenSSF criticality score of 0.4+. Don't fit exactly? Apply anyway and tell your story.",
      limits: "6 months of Claude Ultra; application and review; meeting any single threshold qualifies",
      caveat:
        "The complimentary subscription ends after 6 months (Anthropic emails you beforehand); a prior paid plan resumes at your prior rate unless you cancel. Re-checked 2026-11-14 against the official application page: the benefit wording has moved from Claude Max 20x to Claude Ultra (official line: '6 months of Claude Ultra on us'); the qualifying thresholds and the end-of-term rules are unchanged.",
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
    lastVerified: "2026-11-14",
    zh: {
      name: "Codex 学生计划",
      description:
        "美国/加拿大高校在读学生完成认证后，获得 $100 ChatGPT credits 用于 Codex（授予后 12 个月有效）——官方页面已不再提供此前的 4 个月 ChatGPT Plus。没有美高校邮的话，海鲜市场有代认证服务；代认证不参与绑卡，但领取优惠需要账号绑卡。",
      limits: "$100 Codex 额度，授予后 12 个月有效；限美国/加拿大 degree-granting 高校在读学生、领取时居住美/加；需 ChatGPT 账号",
      caveat:
        "2026-10-11 核实官方页面：福利已从 4 个月 ChatGPT Plus 改为「$100 in ChatGPT credits to use in Codex」（授予后 12 个月有效），Plus 口径已从页面移除；资格仍限美加在读且居住美加。这是 API 额度而非订阅。代认证需把账号交给第三方，违反 OpenAI 条款，有封号风险；领取优惠需要账号绑卡，找充值的话会挤掉本来套餐的时间，请自行权衡。",
    },
    en: {
      name: "Codex for Students",
      description:
        "Verified university students in the US and Canada get $100 in ChatGPT credits to use in Codex, expiring 12 months after the grant date — the page no longer offers the previous 4 months of ChatGPT Plus. Without a US/Canada school email, proxy-verification services exist on resale marketplaces; proxy verification doesn't involve card binding, but claiming the offer requires a card on the account.",
      limits: "$100 in Codex credits, expiring 12 months after grant; students enrolled at degree-granting universities in the US/Canada and residing there when claiming; requires a ChatGPT account",
      caveat:
        "Verified 2026-10-11 against the official page: the benefit changed from 4 months of ChatGPT Plus to \"$100 in ChatGPT credits to use in Codex\" (valid 12 months after grant), and the Plus wording is gone from the page; eligibility is still US/Canada students enrolled and residing there. These are API credits, not a subscription. Proxy verification hands your account to a third party and breaches OpenAI terms — ban risk is yours to weigh. Claiming requires a card on the account; if you go through a top-up service, the credit window displaces the remaining time on your existing plan.",
    },
  },
  {
    id: "stepfun-builder",
    provider: "StepFun",
    kind: "long-term",
    access: "application",
    verified: true,
    archived: true,
    url: "https://platform.stepfun.com",
    source: "https://platform.stepfun.com/builder-program",
    actionUrl: "https://platform.stepfun.com/builder-program",
    lastVerified: "2026-10-11",
    zh: {
      name: "StepFun Builder 计划（申请暂时暂停）",
      description:
        "季度开发者计划：填表可获得模型 API、Step Plan、AI Studio 与开发额度，另有工作坊和社区；教育认证通道支持学信材料。当前申请已暂时暂停：2026-10-11 核实，官网三个申请按钮均禁用、悬停显示「暂时暂停」，页面仍保留计划介绍与 FAQ；计划按季度运转，预计下季重开（无官方日期）。",
      limits: "申请制；按季度滚动；优秀项目可升级至 Startup Program。当前申请通道暂时暂停，恢复时间未公布",
      caveat:
        "申请通道暂时暂停，2026-10-11 核实已无法提交，本条转归档。证据：platform.stepfun.com/builder-program 页面的「申请加入」「立即申请」「申请教育认证」按钮在服务端渲染的 HTML 中均为禁用状态（aria-disabled），按钮悬停提示「暂时暂停」；页面无带日期的暂停公告，从「按季度运转、下一季 Builder 再一次出发」的措辞看预计下季重开，恢复后另行核实移回在架。原记录：接受个人申请，不需要商业计划书。",
    },
    en: {
      name: "StepFun Builder Program (applications paused)",
      description:
        "Quarterly builder program: a form gets you model API access, Step Plan, AI Studio, and development quota, plus workshops and community; a separate education-verification channel accepts Xuexin materials. Applications are currently paused: verified 2026-10-11, all three application buttons on the official page are disabled with a \"temporarily paused\" tooltip, while the program intro and FAQ stay up; the program runs in quarterly cycles and is expected to return next quarter (no official date).",
      limits: "Application-based; quarterly cycles; projects can graduate to the Startup Program. The application channel is paused for now; no resumption date published",
      caveat:
        "Applications are temporarily paused and submissions were confirmed impossible on 2026-10-11; this entry is archived. Evidence: on platform.stepfun.com/builder-program, the \"Apply\", \"Apply now\", and education-verification buttons are all disabled in the server-rendered HTML (aria-disabled) with a \"temporarily paused\" tooltip; no dated pause notice is published — from the \"quarterly cycles, next-quarter Builder sets off again\" wording a return next quarter is expected, to be re-verified and restored when it reopens. Original note: individuals welcome; no business plan required.",
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
    lastVerified: "2026-11-14",
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
    source: "https://zed.dev/education",
    actionUrl: "https://zed.dev/download",
    lastVerified: "2026-11-14",
    zh: {
      name: "Zed",
      description:
        "免费开源的高性能编辑器（主体 GPL-3.0，部分组件 Apache-2.0）。学生福利在 zed.dev/education 申请：全球认证大学在校生（年满 18 岁、GitHub 账号满 30 天、学校邮箱验证）可免费用 Zed Pro 一年，含每月 $10 AI token 额度、无限 edit predictions 与实时多人协作，到期自动降级 Free。非学生也不亏——内置 AI（Zeta）走订阅制，可搭配上面的免费平台，通过自定义 OpenAI 兼容 provider 接入。",
      limits: "编辑器永久免费；学生认证后 Zed Pro 免费用 12 个月（每月 $10 token 额度），到期自动降级 Free；其余用量取决于接入的平台",
      caveat: "2026-10-11 核实：学生福利实际在 zed.dev/education（官方博客 2026-03-09「Introducing Zed for Education」），GitHub 仓库页无此信息，来源已更正；福利为 Zed Pro 一年（含 $10/月 token），不含 Claude Fable/Opus、GPT Pro 等模型；资格为全球认证大学在读、年满 18、GitHub 账号满 30 天。非学生无免费额度，需自接 provider。",
    },
    en: {
      name: "Zed",
      description:
        "Free open-source high-performance editor (primarily GPL-3.0, with Apache-2.0 components). The student offer lives at zed.dev/education: verified university students worldwide (18+, GitHub account older than 30 days, school-email verification) get Zed Pro free for one year, including $10/month in token credits, unlimited edit predictions, and real-time multiplayer collaboration, then auto-downgrade to Free. Everyone else pairs it with a free platform above via custom OpenAI-compatible providers — the built-in AI (Zeta) is subscription-based.",
      limits: "Editor free forever; verified students get Zed Pro free for 12 months (with $10/month in token credits) before auto-downgrade; other usage depends on the provider you connect",
      caveat: "Verified 2026-10-11: the student offer actually lives at zed.dev/education (official blog 2026-03-09 \"Introducing Zed for Education\"); the GitHub repo page carries none of this, so the source link is corrected. The benefit is one year of Zed Pro (with $10/month in tokens), excluding models like Claude Fable/Opus and GPT Pro; eligibility is enrollment at an accredited university worldwide, age 18+, GitHub account older than 30 days. No free credits for non-students — bring your own provider.",
    },
  },
  {
    id: "kiro-free-tier",
    provider: "Kiro",
    kind: "long-term",
    access: "public",
    verified: true,
    expiry: null,
    url: "https://kiro.dev/pricing/",
    source: "https://kiro.dev/pricing/",
    actionUrl: "https://app.kiro.dev/",
    lastVerified: "2026-11-14",
    zh: {
      name: "Kiro Free：每月 50 credits，开源权重模型 + Claude Sonnet",
      description:
        "Kiro 是 AWS 的 agentic AI 工程系统，形态有 IDE、CLI、Web、移动端与 Kiro Crew，主打 spec 驱动开发。官方 Free 计划 $0/月、永久有效、无需 AWS 账号（GitHub / Google / AWS Builder ID / IAM Identity Center 任一登录），含每月 50 credits。官方 models 表标 Free 可用的模型为 Claude Sonnet 4.6、Claude Sonnet 4.5、Claude Sonnet 4.0、Auto、DeepSeek 3.2、MiniMax M2.5、MiniMax M2.1、GLM-5、Qwen3 Coder Next（定价页只写「Open-weight models and Claude Sonnet 4.5」，models 表更全）。1 credit = 一次 prompt 对应的工作量，Auto 是 1.0× 基线，Sonnet 4.6 是 1.3×、Qwen3 Coder Next 仅 0.05×，最小计到 0.01 credit；未用完的 credits 不结转。",
      limits:
        "每月 50 credits，重置不结转；免费层模型：Claude Sonnet 4.6 / 4.5 / 4.0、Auto、DeepSeek 3.2、MiniMax M2.5 / M2.1、GLM-5、Qwen3 Coder Next；免 AWS 账号；Enterprise 与 AWS GovCloud(US) 无 Free 层",
      caveat:
        "2026-11-14 依 kiro.dev/pricing、/docs/models、/faq 核实。首升优惠：2026-11-01 起首次从 Free 升级到付费档，当月剩余天数按比例免费并额外给 500 个 12 个月有效的 trial credits（官方博客 kiro.dev/blog/kiros-new-free-trial-gives-you-500-extra-credits），需绑卡、仅限首次升级，降级回 Free 后未用 trial credits 可结转但只能花在免费层模型上。Kiro 可能对经社交登录 / Builder ID 的 Free 层内容用于服务改进（文档里可 opt out；经 IAM Identity Center / 企业 IdP 的付费用户不用）。经第三方自动化框架把请求路由到 Kiro 原生界面之外不被允许。学生身份见 Kiro for Students 条目，创业公司见 Kiro Startup Credits 条目。",
    },
    en: {
      name: "Kiro Free: 50 credits/month on open-weight models and Claude Sonnet",
      description:
        "Kiro is AWS's agentic AI engineering system, available as an IDE, CLI, Web, mobile app, and Kiro Crew, built around spec-driven development. The official Free plan costs $0/month, is perpetual, and needs no AWS account — sign in with GitHub, Google, AWS Builder ID, or IAM Identity Center — and includes 50 credits per month. The official models table marks these as available on Free: Claude Sonnet 4.6, Claude Sonnet 4.5, Claude Sonnet 4.0, Auto, DeepSeek 3.2, MiniMax M2.5, MiniMax M2.1, GLM-5, and Qwen3 Coder Next (the pricing page only says 'open-weight models and Claude Sonnet 4.5', so the models table is the fuller list). One credit is the work behind one prompt: Auto is the 1.0x baseline, Sonnet 4.6 is 1.3x, Qwen3 Coder Next only 0.05x, and metering goes down to 0.01 credit; unused credits do not roll over.",
      limits:
        "50 credits/month, no rollover; free-tier models: Claude Sonnet 4.6 / 4.5 / 4.0, Auto, DeepSeek 3.2, MiniMax M2.5 / M2.1, GLM-5, Qwen3 Coder Next; sign-in with no AWS account; no Free tier for Enterprise or AWS GovCloud (US)",
      caveat:
        "Verified 2026-11-14 against kiro.dev/pricing, /docs/models, and /faq. First-upgrade promotion: from 2026-11-01, a first upgrade from Free to a paid tier makes the rest of that month free and adds 500 trial credits valid for 12 months (official blog: kiro.dev/blog/kiros-new-free-trial-gives-you-500-extra-credits) — it needs a card on file, applies only to the first upgrade, and after downgrading to Free the unused trial credits carry over but can only be spent on free-tier models. Kiro may use Free-tier content from social-login / Builder-ID users for service improvement (opt-out in the docs; paid users via IAM Identity Center or an enterprise IdP are excluded). Routing requests outside Kiro's native interfaces through third-party automation harnesses is not permitted. Students have a separate Kiro for Students entry; startups have a separate Kiro Startup Credits entry.",
    },
  },
  {
    id: "kiro-students",
    provider: "Kiro",
    kind: "long-term",
    access: "application",
    verified: true,
    expiry: null,
    url: "https://kiro.dev/students/",
    source: "https://kiro.dev/students/",
    actionUrl: "https://app.kiro.dev/",
    lastVerified: "2026-11-14",
    zh: {
      name: "Kiro for Students：每月 1000 credits 免费用一年",
      description:
        "Kiro 面向认证高校在读学生的免费计划：经 SheerID 验证学籍后，连续 12 个月每月 1000 credits，覆盖 IDE、CLI、Web 与 Kiro Crew。无需信用卡；年满 18；每人只能验证一次；用学校邮箱验证时需提供姓名、出生日期与学校（不必用大学邮箱注册账号）。credits 不逐月结转，福利期内不能加购 credit，到期后账号自动降回 Kiro Free 层，工作与项目不受影响。学校以官方下拉名单为准，不在列的可提交 interest form。",
      limits:
        "每月 1000 credits × 连续 12 个月；SheerID 验证、年满 18、每人一次；每月额度用满即在下一周期重置；福利期内不可加购 credit、不结转；一年后自动降级 Free",
      caveat:
        "2026-11-14 依 kiro.dev/students 与其 Terms（更新 2026-09-08）核实。学校名单以页面下拉为准，官方在 2026-09 扩至 133 所、2026-10-28 再增加 41 所，可见名单以美/加/欧/新/韩等海外高校为主；不在列的可提交 interest form。验证失败可经 SheerID 支持表单申诉。这是学生身份福利，与面向个人的 Kiro Free 层、面向创业公司的 Kiro Startup Credits 是不同条目。",
    },
    en: {
      name: "Kiro for Students: 1000 credits/month free for a year",
      description:
        "Kiro's free plan for verified university students: after SheerID student verification, 1000 credits per month for 12 consecutive months across the IDE, CLI, Web, and Kiro Crew. No credit card; 18+; verification is one-time; you do not need to register with a university email, but verification requires your university email, name, and date of birth. Credits do not roll over month to month, add-on credits are not available during the benefit period, and after one year the account auto-downgrades to the Kiro Free tier with your code, specs, and projects intact. The school list follows the official dropdown; unlisted schools can submit an interest form.",
      limits:
        "1000 credits/month × 12 consecutive months; SheerID verification, 18+, one-time; monthly allowance resets each cycle; no top-ups or rollover during the benefit period; auto-downgrade to Free after one year",
      caveat:
        "Verified 2026-11-14 against kiro.dev/students and its Terms (updated 2026-09-08). The school list follows the page dropdown — the official program expanded to 133 schools in Sep 2026 and added 41 more on 2026-10-28, and the visible list is weighted toward US/Canadian/European/Singaporean/Korean institutions; unlisted schools can submit an interest form. Failed verification can be appealed through the SheerID support form. This is an eligibility-based student benefit, distinct from the individual Kiro Free tier and the startup Kiro Startup Credits entry.",
    },
  },
  {
    id: "kiro-startup-credits",
    provider: "Kiro",
    kind: "temporary",
    access: "application",
    verified: true,
    expiry: "2026-12-31",
    url: "https://kiro.dev/startups/",
    source: "https://kiro.dev/startups/terms/",
    actionUrl: "https://aws.amazon.com/startups/credits/kiro",
    lastVerified: "2026-11-14",
    zh: {
      name: "Kiro Startup Credits：合格初创免费领最多一年 Kiro Pro+（至 12-31）",
      description:
        "Kiro 面向早期到 A 轮初创的限时促销：申请通过即获最多一年的 Kiro Pro+ 等值 credits，分 Starter / Growth / Scale 三档。需 AWS 账号、AWS Account ID，以及与创业公司域名一致的企业邮箱；申请期 2026-04-07 至 2026-12-31，滚动评审。credits 审批通过后直接存入对应 AWS 账号、发放即激活，发放 1 年后过期；用尽后账号自动转标准 Kiro Pro+ 计费。使用时必须以 AWS IAM Identity Center 登录 Kiro，用 Builder ID 或社交登录（GitHub、Google）拿不到 startup credits。",
      limits:
        "最多 1 年 Kiro Pro+ credits，三档 Starter / Growth / Scale（各档用户数上限见官方页）；需 AWS 账号 + 匹配域名企业邮箱、年满 18；credits 发放后 1 年过期、用尽自动转标准 Pro+ 计费；每 startup 限一次，不可转让/退款；须以 IAM Identity Center 登录",
      caveat:
        "2026-11-14 依 kiro.dev/startups 与其 Terms（更新 2026-07-24）核实：申请期 2026-04-07 至 12-31。官方排除地区：阿根廷、白俄罗斯、巴西、中国-GCR、古巴、法国、德国、伊朗、意大利、墨西哥、朝鲜、波兰、俄罗斯、西班牙、叙利亚、克里米亚、所谓顿涅茨克人民共和国（DNR）、所谓卢甘斯克人民共和国（LNR）、阿联酋；官方注明大多数有 AWS 计费的国家/地区均支持。持有 AWS Activate credits 的初创不合格（反之 Activate credits 可用于付费 Kiro）。面向公司而非个人，与 Kiro Free 及 Kiro for Students 是不同条目。",
    },
    en: {
      name: "Kiro Startup Credits: up to a year of Kiro Pro+ free for eligible startups (through Dec 31)",
      description:
        "Kiro's limited-time offer for early-stage to Series A startups: approved applicants receive up to one year of Kiro Pro+ equivalent credits, in Starter / Growth / Scale tiers. Requires an AWS account, an AWS Account ID, and a business email matching the startup's domain; applications run 2026-04-07 to 2026-12-31 on a rolling basis. Credits are deposited directly to the AWS account on approval and activate on provisioning, expiring one year after issuance; once used up, the account automatically switches to standard Kiro Pro+ billing. You must sign in to Kiro with AWS IAM Identity Center to redeem them — Builder ID or social logins (GitHub, Google) do not get startup credits.",
      limits:
        "Up to 1 year of Kiro Pro+ credits across Starter / Growth / Scale tiers (per-tier user caps are on the official page); AWS account + matching-domain business email, 18+; credits expire 1 year after issuance and auto-switch to standard Pro+ billing when exhausted; one per startup, non-transferable/non-refundable; must sign in with IAM Identity Center",
      caveat:
        "Verified 2026-11-14 against kiro.dev/startups and its Terms (updated 2026-07-24): applications open 2026-04-07 through 12-31. Official excluded locations: Argentina, Belarus, Brazil, China-GCR, Cuba, France, Germany, Iran, Italy, Mexico, North Korea, Poland, Russia, Spain, Syria, Crimea, the so-called Donetsk People's Republic region (DNR), the so-called Luhansk People's Republic region (LNR), and the United Arab Emirates; the official text says most countries/regions where AWS billing is available are supported. Startups holding AWS Activate credits are ineligible (the reverse does not hold — Activate credits can pay for Kiro). This is company-facing, distinct from Kiro Free and Kiro for Students.",
    },
  },
]);
