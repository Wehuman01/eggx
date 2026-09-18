// 国产 Coding Plan 活动与政策变动追踪（首批数据，来自 2026-09-18 的信源摸底）。
// 来源：各厂商官方 docs 公告页 / 官网活动页 / changelog，每条带官方链接；
// 只收录官方页面可链的条目，纯社区消息留在临时羊毛目录，不进本页。
// endPrecision 标注截止时间的可信度：deadline=官方给出截止日期，unknown=官方仅说限时，
// none=官方未给截止（按长期进行记录，直到官方宣布结束）。时间均为北京时间 UTC+8。

import { validateCampaigns, type CampaignSnapshot } from "../lib/campaigns";

export const campaignSnapshot: CampaignSnapshot = {
  checkedAt: "2026-09-18T10:05:00.000+08:00",
  verifiedBy: "eggx 人工核实",
  method: "官方公告页抓取 + 人工核对",
  channels: [
    { vendor: "Z.ai / GLM", url: "https://docs.z.ai/devpack/notice/event-glm-5.3-flash" },
    { vendor: "StepFun", url: "https://platform.stepfun.com/step-plan" },
    { vendor: "TRAE", url: "https://www.trae.cn/changelog" },
    { vendor: "MiniMax", url: "https://agent.minimaxi.com/docs/changelog" },
    { vendor: "Kimi", url: "https://www.kimi.com/code/docs/kimi-code/whats-new.html" },
  ],
};

export const campaigns = validateCampaigns(
[
  {
    id: "zcode-glm53flash-nightly-202609",
    vendor: "Z.ai",
    kind: "promo",
    status: "active",
    title: {
      zh: "GLM-5.3-Flash 夜间零额度活动（含新人 5 天试用）",
      en: "GLM-5.3-Flash nightly zero-quota campaign (with 5-day new-user trial)",
    },
    detail: {
      zh: "活动期内每天 23:00 至次日 09:00，付费 Coding Plan 用户经 ZCode 使用 GLM-5.3-Flash 零额度不限量，经其他受支持 Agent 使用额度翻倍；新用户另送 5 天试用（每天 5M tokens）。周末节假日同样适用；仅限 GLM-5.3-Flash，GLM-5.3 照常扣额度；需 ZCode ≥ 3.10 且周额度未耗尽。",
      en: "During the campaign, daily 23:00–09:00 (UTC+8), paid Coding Plan users get unlimited zero-quota GLM-5.3-Flash via ZCode and doubled quota via other supported agents; first-time users also get a 5-day trial (5M tokens/day). Weekends and holidays included; GLM-5.3-Flash only; needs ZCode ≥ 3.10 and a non-exhausted weekly quota.",
    },
    startAt: "2026-09-03T23:00:00.000+08:00",
    endAt: "2026-09-20T23:59:59.000+08:00",
    endPrecision: "deadline",
    source: "https://docs.z.ai/devpack/notice/event-glm-5.3-flash",
    offerId: "zcode",
    lastVerified: "2026-09-18",
  },
  {
    id: "stepfun-stepplan-launch-promo",
    vendor: "StepFun",
    kind: "promo",
    status: "active",
    title: {
      zh: "Step Plan 新上线促销：取消限额 + 多重福利",
      en: "Step Plan launch promo: quota caps removed plus launch benefits",
    },
    detail: {
      zh: "阶跃星辰 Step Plan 新套餐上线促销，页面标注「取消限额加多重福利」，月付/季付/年付最高立省 ¥1,722；Flash Mini 档月含 400M Credits。官方仅标注促销、未公布截止日期，参与前以计费页为准。",
      en: "StepFun's Step Plan launch promo (\"caps removed, extra benefits\") — monthly/quarterly/yearly billing saves up to ¥1,722; the Flash Mini tier includes 400M Credits per month. Officially labeled a promo with no end date published; check the billing page before relying on it.",
    },
    startAt: null,
    endAt: null,
    endPrecision: "unknown",
    source: "https://platform.stepfun.com/step-plan",
    offerId: null,
    lastVerified: "2026-09-18",
  },
  {
    id: "trae-student-credits",
    vendor: "TRAE",
    kind: "promo",
    status: "active",
    title: {
      zh: "TRAE 大学生积分福利：注册送 4000 + 认证加 2000",
      en: "TRAE student credits: 4,000 on signup + 2,000 with verification",
    },
    detail: {
      zh: "注册即送 4000 积分（价值约百元），大学生完成学生认证再加 2000 积分，邀请好友双方均可赚积分。官方未公布截止时间，按长期活动记录。",
      en: "4,000 credits on signup (roughly ¥100 in value), plus 2,000 more after student verification; both sides earn credits through referrals. No end date announced — recorded as ongoing.",
    },
    startAt: null,
    endAt: null,
    endPrecision: "none",
    source: "https://www.trae.cn/events/student-verification",
    offerId: null,
    lastVerified: "2026-09-18",
  },
  {
    id: "zai-invite-credits",
    vendor: "Z.ai",
    kind: "promo",
    status: "active",
    title: {
      zh: "Z.ai 邀请好友得 Credits",
      en: "Z.ai invite-a-friend credits",
    },
    detail: {
      zh: "老用户邀请新用户订阅 GLM Coding Plan 可得 Bonus Credits；被邀请者须经邀请链接绑定并在 72 小时内完成首笔订阅付款才计入。规则页标注长期有效（最近更新 2026-03-15）。",
      en: "Existing users earn bonus credits when an invitee subscribes to GLM Coding Plan; the invitee must bind via the referral link and complete their first payment within 72 hours. Rules page marks it ongoing (last updated 2026-03-15).",
    },
    startAt: null,
    endAt: null,
    endPrecision: "none",
    source: "https://docs.z.ai/devpack/credit-campaign-rules",
    offerId: null,
    lastVerified: "2026-09-18",
  },
  {
    id: "stepfun-tokenplan-migration",
    vendor: "StepFun",
    kind: "policy",
    status: "active",
    title: {
      zh: "StepFun：Coding Plan 升级为 Token Plan（单向，停售）",
      en: "StepFun: Coding Plan migrating to Token Plan (one-way, legacy discontinued)",
    },
    detail: {
      zh: "2026-06-18 起 Step Plan 改为 Credit 月池计费（新版 Token Plan）；旧版 Coding Plan 停售。已开自动续费的可继续按旧版续订（扣款失败即被取消且无法重购）；未开自动续费的到期后只能购买 Token Plan。升级 Token Plan 为单向操作，不可回退。",
      en: "Since 2026-06-18 Step Plan bills via a monthly Credit pool (new Token Plan); legacy Coding Plan is discontinued. Auto-renewing legacy users keep renewing (a failed payment cancels it for good); everyone else must buy Token Plan after expiry. Upgrading to Token Plan is one-way.",
    },
    startAt: "2026-06-18T00:00:00.000+08:00",
    endAt: null,
    endPrecision: "none",
    source: "https://platform.stepfun.com/docs/zh/step-plan/upgrade-notice",
    offerId: null,
    lastVerified: "2026-09-18",
  },
  {
    id: "zai-credits-migration",
    vendor: "Z.ai",
    kind: "policy",
    status: "active",
    title: {
      zh: "Z.ai：GLM Coding Plan 转为 Credits 计费",
      en: "Z.ai: GLM Coding Plan moves to a credits-based system",
    },
    detail: {
      zh: "2026-07-30 起新计划按 Credits 计费，旧版（Legacy Plan V1/V2）停售；存量订阅不受影响，且周末全天按闲时费率扣减。旧计划用户在停售日之后仍可续费或升级。",
      en: "Since 2026-07-30 new plans bill in credits; legacy plans (V1/V2) are no longer sold to new users. Existing subscriptions are unaffected and enjoy off-peak rates all day on weekends. Legacy users can still renew or upgrade after the cutoff date.",
    },
    startAt: "2026-07-30T00:00:00.000+08:00",
    endAt: null,
    endPrecision: "none",
    source: "https://docs.z.ai/devpack/notice/usage-revision",
    offerId: null,
    lastVerified: "2026-09-18",
  },
  {
    id: "trae-solo-challenge-2026",
    vendor: "TRAE",
    kind: "promo",
    status: "ended",
    title: {
      zh: "TRAE「AI 无限职场」SOLO 挑战赛",
      en: "TRAE \"AI Workplace\" SOLO challenge",
    },
    detail: {
      zh: "TRAE 与脉脉联合发起，用 SOLO 完成真实任务场景实践并提交作品，可解锁 SOLO 桌面端/网页端内测权限并竞逐现金大奖。活动已于 2026-05-19 结束，保留作审计记录。",
      en: "Co-hosted with Maimai: complete real-task practices with SOLO and submit for cash prizes and SOLO beta access. Ended on 2026-05-19; kept for the audit trail.",
    },
    startAt: "2026-04-09T00:00:00.000+08:00",
    endAt: "2026-05-19T23:59:59.000+08:00",
    endPrecision: "exact",
    source: "https://www.trae.cn/2026-solo-challenge",
    offerId: null,
    lastVerified: "2026-09-18",
  },
]
);
