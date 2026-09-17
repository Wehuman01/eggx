import type { Locale, OfferAccess } from "./schema";

export type { Locale };

export type RouteKey = "/" | "/long-term/" | "/about/";

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
  navGroupMore: string;
  navAbout: string;
  temporaryTitle: string;
  temporaryBlurb: string;
  longTermTitle: string;
  longTermBlurb: string;
  expiringToday: string;
  daysLeft: (n: number) => string;
  noEndDate: string;
  accessLabel: Record<OfferAccess, string>;
  verifiedTag: string;
  communityTag: string;
  claimAction: string;
  sourceLabel: string;
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
  navGroupMore: "更多",
  navAbout: "关于",
  temporaryTitle: "临时羊毛",
  temporaryBlurb: "限时活动，过期不候 — 按到期时间排序。",
  longTermTitle: "长期羊毛",
  longTermBlurb: "持续供应的免费额度与计划，稳定可依赖。",
  expiringToday: "今天到期",
  daysLeft: (n) => `${n} 天后到期`,
  noEndDate: "截止日期未公布",
  accessLabel: { public: "公开", invite: "邀请制", student: "学生认证", application: "需申请" },
  verifiedTag: "官方核实",
  communityTag: "社区消息",
  claimAction: "去领取",
  sourceLabel: "来源",
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
  navGroupMore: "More",
  navAbout: "About",
  temporaryTitle: "Temporary offers",
  temporaryBlurb: "Limited-time campaigns, sorted by expiry date.",
  longTermTitle: "Long-term offers",
  longTermBlurb: "Recurring free tiers and programs you can rely on.",
  expiringToday: "Ends today",
  daysLeft: (n) => `Ends in ${n} day${n === 1 ? "" : "s"}`,
  noEndDate: "No end date published",
  accessLabel: { public: "public", invite: "invite", student: "student", application: "application" },
  verifiedTag: "official",
  communityTag: "community",
  claimAction: "Claim it",
  sourceLabel: "Source",
  verifiedOn: (date) => `verified ${date}`,
  limitsLabel: "Limits",
  expiryLabel: "Ends",
  emptyList: "No offers here right now.",
  langName: "中文",
  htmlLang: "en",
};

export const UI: Record<Locale, UIStrings> = { zh, en };