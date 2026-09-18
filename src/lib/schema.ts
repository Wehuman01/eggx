export type OfferKind = "temporary" | "long-term";
export type OfferAccess = "public" | "application";
export type Locale = "zh" | "en";

export interface LocalizedOffer {
  name: string;
  description: string;
  limits?: string;
  caveat?: string;
}

export interface Offer {
  id: string;
  provider: string;
  kind: OfferKind;
  access: OfferAccess;
  verified: boolean;
  archived?: boolean;
  expiry?: string | null;
  url?: string;
  source?: string;
  actionUrl?: string;
  code?: string;
  lastVerified?: string;
  zh: LocalizedOffer;
  en: LocalizedOffer;
}

const KINDS: readonly OfferKind[] = ["temporary", "long-term"];
const ACCESSES: readonly OfferAccess[] = ["public", "application"];
const LOCALES: readonly Locale[] = ["zh", "en"];

function validateLocalized(obj: Record<string, unknown>, field: string, id: string): LocalizedOffer {
  const value = obj[field];
  if (!value || typeof value !== "object") {
    throw new Error(`Offer.${field} must be an object (${id})`);
  }
  const loc = value as Record<string, unknown>;
  if (typeof loc.name !== "string" || loc.name.length === 0) {
    throw new Error(`Offer.${field}.name must be a non-empty string (${id})`);
  }
  if (typeof loc.description !== "string" || loc.description.length === 0) {
    throw new Error(`Offer.${field}.description must be a non-empty string (${id})`);
  }
  const result: LocalizedOffer = { name: loc.name, description: loc.description };
  for (const key of ["limits", "caveat"] as const) {
    if (loc[key] !== undefined) {
      if (typeof loc[key] !== "string") {
        throw new Error(`Offer.${field}.${key} must be a string (${id})`);
      }
      result[key] = loc[key] as string;
    }
  }
  return result;
}

export function validateOffer(o: unknown): Offer {
  if (!o || typeof o !== "object") {
    throw new Error("Offer must be an object");
  }
  const obj = o as Record<string, unknown>;

  if (typeof obj.id !== "string" || obj.id.length === 0) {
    throw new Error("Offer.id must be a non-empty string");
  }
  if (typeof obj.provider !== "string" || obj.provider.length === 0) {
    throw new Error("Offer.provider must be a non-empty string");
  }
  if (!KINDS.includes(obj.kind as OfferKind)) {
    throw new Error(`Invalid kind: ${obj.kind}`);
  }
  if (!ACCESSES.includes(obj.access as OfferAccess)) {
    throw new Error(`Invalid access: ${obj.access}`);
  }
  if (typeof obj.verified !== "boolean") {
    throw new Error("Offer.verified must be a boolean");
  }
  if (obj.archived !== undefined && typeof obj.archived !== "boolean") {
    throw new Error("Offer.archived must be a boolean");
  }
  for (const field of ["url", "source", "actionUrl", "code", "lastVerified"] as const) {
    if (obj[field] !== undefined && typeof obj[field] !== "string") {
      throw new Error(`Offer.${field} must be a string`);
    }
  }
  if (obj.expiry !== undefined && obj.expiry !== null && typeof obj.expiry !== "string") {
    throw new Error("Offer.expiry must be a string or null");
  }

  return {
    id: obj.id,
    provider: obj.provider,
    kind: obj.kind as OfferKind,
    access: obj.access as OfferAccess,
    verified: obj.verified,
    ...(obj.archived !== undefined ? { archived: obj.archived as boolean } : {}),
    ...(obj.expiry !== undefined ? { expiry: obj.expiry as string | null } : {}),
    ...(obj.url !== undefined ? { url: obj.url as string } : {}),
    ...(obj.source !== undefined ? { source: obj.source as string } : {}),
    ...(obj.actionUrl !== undefined ? { actionUrl: obj.actionUrl as string } : {}),
    ...(obj.code !== undefined ? { code: obj.code as string } : {}),
    ...(obj.lastVerified !== undefined ? { lastVerified: obj.lastVerified as string } : {}),
    zh: validateLocalized(obj, "zh", obj.id),
    en: validateLocalized(obj, "en", obj.id),
  };
}

export function validateRegistry(offers: unknown[]): Offer[] {
  if (!Array.isArray(offers)) {
    throw new Error("Registry must be an array");
  }
  return offers.map(validateOffer);
}

export function isLocale(value: string): value is Locale {
  return LOCALES.includes(value as Locale);
}
