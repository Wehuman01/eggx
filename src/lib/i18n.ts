import type { Locale } from "./schema";

export type { Locale };

export type RouteKey =
  | "/"
  | "/long-term/"
  | "/application/"
  | "/codex-reset/"
  | "/about/"
  | "/agent/"
  | "/submit/";

export function localePath(locale: Locale, route: RouteKey): string {
  if (locale === "zh") return route;
  return route === "/" ? "/en/" : `/en${route}`;
}

export function withBase(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/+$/, "");
  return `${base}/${path.replace(/^\/+/, "")}`;
}

export function pageUrl(locale: Locale, route: RouteKey): string {
  return withBase(localePath(locale, route));
}

export function altLocale(locale: Locale): Locale {
  return locale === "zh" ? "en" : "zh";
}

export interface UIStrings {
  siteTagline: string;
  navGroupDeals: string;
  navTemporary: string;
  navLongTerm: string;
  navApplication: string;
  navGroupMore: string;
  navAbout: string;
  navAgent: string;
  navSubmit: string;
  navGroupTracking: string;
  navCodexReset: string;
  codexResetTitle: string;
  codexResetBlurb: string;
  resetTypeLabel: string;
  cardTypeLabel: string;
  confirmedTag: string;
  announcedTag: string;
  lastResetHeading: string;
  nextResetHeading: string;
  historyHeading: string;
  methodHeading: string;
  confirmedAtLabel: string;
  announceAtLabel: string;
  sourcePostLabel: string;
  scopeLabel: string;
  todayLabel: string;
  daysAgoLabel: string;
  intervalsTemplate: string;
  estimateNote: string;
  followAction: string;
  historySummaryTemplate: string;
  monthSummaryTemplate: string;
  impatientAction: string;
  impatientDone: string;
  impatientCountTemplate: string;
  impatientHint: string;
  impatientUnavailable: string;
  agentTitle: string;
  agentBlurb: string;
  temporaryTitle: string;
  temporaryBlurb: string;
  communitySectionTitle: string;
  communitySectionBlurb: string;
  verifyYesAction: string;
  verifyNoAction: string;
  verifyYesCountTemplate: string;
  verifyNoCountTemplate: string;
  verifyUnavailable: string;
  codeLabel: string;
  codeHint: string;
  codeCopied: string;
  longTermTitle: string;
  longTermBlurb: string;
  applicationTitle: string;
  applicationBlurb: string;
  expiringToday: string;
  expiredTag: string;
  daysLeftOne: string;
  daysLeftOther: string;
  noEndDate: string;
  verifiedTag: string;
  communityTag: string;
  claimAction: string;
  applyAction: string;
  sourceLabel: string;
  pageLabel: string;
  verifiedOn: (date: string) => string;
  limitsLabel: string;
  expiryLabel: string;
  emptyList: string;
  langName: string;
  htmlLang: string;
}

const zh: UIStrings = {
  siteTagline: "已核实的 AI 编码羊毛",
  navGroupDeals: "羊毛",
  navTemporary: "临时羊毛",
  navLongTerm: "长期羊毛",
  navApplication: "申请羊毛",
  navGroupMore: "更多",
  navAbout: "关于",
  navAgent: "Agent 接入",
  navSubmit: "提交羊毛",
  navGroupTracking: "追踪",
  navCodexReset: "Codex 重置",
  codexResetTitle: "Codex 重置监控",
  codexResetBlurb:
    "追踪 Tibo（@thsottiaux）公开宣布的 Codex 全员重置与重置卡发放 — 每条带原始推文来源。静态快照，随构建更新。",
  resetTypeLabel: "全员重置",
  cardTypeLabel: "发重置卡",
  confirmedTag: "已确认",
  announcedTag: "仅预告",
  lastResetHeading: "最近一次全员重置",
  nextResetHeading: "下一次重置",
  historyHeading: "重置记录",
  methodHeading: "统计口径",
  confirmedAtLabel: "确认时间",
  announceAtLabel: "预告时间",
  sourcePostLabel: "原推",
  scopeLabel: "范围",
  todayLabel: "今天",
  daysAgoLabel: "{n} 天前",
  intervalsTemplate: "历史间隔：最短 {min} 天 · 中位 {median} 天 · 最长 {max} 天（{count} 个间隔）",
  estimateNote: "Tibo 不按固定周期重置，本页不做日期预测；以上间隔仅供参考。",
  followAction: "在 X 上关注 @thsottiaux",
  historySummaryTemplate: "自 {from} 以来共 {total} 条记录：全员重置 {resets} 次 · 发重置卡 {cards} 次",
  monthSummaryTemplate: "{n} 条记录",
  impatientAction: "等不及了",
  impatientDone: "已记下了",
  impatientCountTemplate: "{n} 人等不及了",
  impatientHint: "同一浏览器限点一次 · 仅供一乐",
  impatientUnavailable: "计数暂时不可用",
  agentTitle: "Agent 接入",
  agentBlurb:
    "把 eggx 接进你的 Agent：Skill、REST API、RSS、llms.txt — 全部匿名只读，无需 API Key。",
  temporaryTitle: "临时羊毛",
  temporaryBlurb: "限时活动，过期不候 — 按到期时间排序。",
  communitySectionTitle: "社区消息",
  communitySectionBlurb:
    "社区线索，未经官方核实，使用前自辨。领到了或失效了，点一下帮大家核实：",
  verifyYesAction: "我领到了",
  verifyNoAction: "已失效",
  verifyYesCountTemplate: "{n} 人领到了",
  verifyNoCountTemplate: "{n} 人说失效",
  verifyUnavailable: "核实计数暂时不可用",
  codeLabel: "兑换码",
  codeHint: "点击复制",
  codeCopied: "已复制",
  longTermTitle: "长期羊毛",
  longTermBlurb: "持续供应的免费额度与计划，稳定可依赖。",
  applicationTitle: "申请羊毛",
  applicationBlurb: "需申请、认证或人工审核才能领取的羊毛。",
  expiringToday: "今天到期",
  expiredTag: "已过期",
  daysLeftOne: "1 天后到期",
  daysLeftOther: "{n} 天后到期",
  noEndDate: "截止日期未公布",
  verifiedTag: "官方核实",
  communityTag: "社区消息",
  claimAction: "去领取",
  applyAction: "去申请",
  sourceLabel: "来源",
  pageLabel: "页面",
  verifiedOn: (date) => `核实于 ${date}`,
  limitsLabel: "限额",
  expiryLabel: "到期",
  emptyList: "这里暂时没有羊毛。",
  langName: "English",
  htmlLang: "zh-CN",
};

const en: UIStrings = {
  siteTagline: "Verified free AI coding deals",
  navGroupDeals: "Deals",
  navTemporary: "Temporary",
  navLongTerm: "Long-term",
  navApplication: "Apply",
  navGroupMore: "More",
  navAbout: "About",
  navAgent: "Agent access",
  navSubmit: "Submit a deal",
  navGroupTracking: "Tracking",
  navCodexReset: "Codex resets",
  codexResetTitle: "Codex reset tracker",
  codexResetBlurb:
    "Tracking Codex full resets and reset cards publicly announced by Tibo (@thsottiaux) — every entry links to the source post. Static snapshot, refreshed on each build.",
  resetTypeLabel: "Full reset",
  cardTypeLabel: "Reset card",
  confirmedTag: "Confirmed",
  announcedTag: "Announced only",
  lastResetHeading: "Latest full reset",
  nextResetHeading: "Next reset",
  historyHeading: "Reset log",
  methodHeading: "Methodology",
  confirmedAtLabel: "Confirmed at",
  announceAtLabel: "Announced at",
  sourcePostLabel: "Source",
  scopeLabel: "Scope",
  todayLabel: "today",
  daysAgoLabel: "{n} days ago",
  intervalsTemplate: "Historical gaps: min {min} · median {median} · max {max} days ({count} gaps)",
  estimateNote:
    "Resets do not follow a fixed schedule and no date is predicted here; treat these gaps as reference only.",
  followAction: "Follow @thsottiaux on X",
  historySummaryTemplate: "{total} records since {from}: {resets} full resets · {cards} reset cards",
  monthSummaryTemplate: "{n} records",
  impatientAction: "Can't wait",
  impatientDone: "Counted",
  impatientCountTemplate: "{n} can't wait",
  impatientHint: "One click per browser · just for fun",
  impatientUnavailable: "Counter unavailable",
  agentTitle: "Agent access",
  agentBlurb:
    "Wire eggx into your agent: Skill, REST API, RSS, llms.txt — all anonymous, read-only, no API key.",
  temporaryTitle: "Temporary offers",
  temporaryBlurb: "Limited-time campaigns, sorted by expiry date.",
  communitySectionTitle: "Community reports",
  communitySectionBlurb:
    "Community leads, not officially verified — judge before you rely on them. Claimed one, or found it dead? Tap to help verify:",
  verifyYesAction: "It worked",
  verifyNoAction: "Expired",
  verifyYesCountTemplate: "{n} claimed it",
  verifyNoCountTemplate: "{n} say expired",
  verifyUnavailable: "Verification counts unavailable",
  codeLabel: "Code",
  codeHint: "Click to copy",
  codeCopied: "Copied",
  longTermTitle: "Long-term offers",
  longTermBlurb: "Recurring free tiers and programs you can rely on.",
  applicationTitle: "Application offers",
  applicationBlurb: "Deals that require an application, verification, or review to claim.",
  expiringToday: "Ends today",
  expiredTag: "Expired",
  daysLeftOne: "Ends in 1 day",
  daysLeftOther: "Ends in {n} days",
  noEndDate: "No end date published",
  verifiedTag: "official",
  communityTag: "community",
  claimAction: "Claim it",
  applyAction: "Apply",
  sourceLabel: "Source",
  pageLabel: "Site",
  verifiedOn: (date) => `verified ${date}`,
  limitsLabel: "Limits",
  expiryLabel: "Ends",
  emptyList: "No offers here right now.",
  langName: "中文",
  htmlLang: "en",
};

export const UI: Record<Locale, UIStrings> = { zh, en };