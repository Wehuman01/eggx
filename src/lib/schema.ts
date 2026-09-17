export type OfferCategory = "limited-time" | "platform" | "application";
export type OfferAccess = "public" | "invite" | "student" | "application";
export type OfferEvidence = "official" | "community" | "unverified";
export type OfferStatus = "verified" | "provisional" | "expiring" | "archived";

export interface Offer {
  id: string;
  name: string;
  provider: string;
  category: OfferCategory;
  access: OfferAccess;
  evidence: OfferEvidence;
  status: OfferStatus;
  description: string;
  url?: string;
  source?: string;
  actionUrl?: string;
  limits?: string;
  expiry?: string | null;
  caveat?: string;
}

const CATEGORIES: readonly OfferCategory[] = [
  "limited-time",
  "platform",
  "application",
];
const ACCESSES: readonly OfferAccess[] = [
  "public",
  "invite",
  "student",
  "application",
];
const EVIDENCES: readonly OfferEvidence[] = [
  "official",
  "community",
  "unverified",
];
const STATUSES: readonly OfferStatus[] = [
  "verified",
  "provisional",
  "expiring",
  "archived",
];

export function validateOffer(o: unknown): Offer {
  if (!o || typeof o !== "object") {
    throw new Error("Offer must be an object");
  }
  const obj = o as Record<string, unknown>;

  if (typeof obj.id !== "string") {
    throw new Error("Offer.id must be a string");
  }
  if (typeof obj.name !== "string") {
    throw new Error("Offer.name must be a string");
  }
  if (typeof obj.provider !== "string") {
    throw new Error("Offer.provider must be a string");
  }
  if (!CATEGORIES.includes(obj.category as OfferCategory)) {
    throw new Error(`Invalid category: ${obj.category}`);
  }
  if (!ACCESSES.includes(obj.access as OfferAccess)) {
    throw new Error(`Invalid access: ${obj.access}`);
  }
  if (!EVIDENCES.includes(obj.evidence as OfferEvidence)) {
    throw new Error(`Invalid evidence: ${obj.evidence}`);
  }
  if (!STATUSES.includes(obj.status as OfferStatus)) {
    throw new Error(`Invalid status: ${obj.status}`);
  }
  if (typeof obj.description !== "string") {
    throw new Error("Offer.description must be a string");
  }

  const offer: Offer = {
    id: obj.id,
    name: obj.name,
    provider: obj.provider,
    category: obj.category as OfferCategory,
    access: obj.access as OfferAccess,
    evidence: obj.evidence as OfferEvidence,
    status: obj.status as OfferStatus,
    description: obj.description,
  };

  if (obj.url !== undefined) {
    if (typeof obj.url !== "string") {
      throw new Error("Offer.url must be a string");
    }
    offer.url = obj.url;
  }
  if (obj.source !== undefined) {
    if (typeof obj.source !== "string") {
      throw new Error("Offer.source must be a string");
    }
    offer.source = obj.source;
  }
  if (obj.actionUrl !== undefined) {
    if (typeof obj.actionUrl !== "string") {
      throw new Error("Offer.actionUrl must be a string");
    }
    offer.actionUrl = obj.actionUrl;
  }
  if (obj.limits !== undefined) {
    if (typeof obj.limits !== "string") {
      throw new Error("Offer.limits must be a string");
    }
    offer.limits = obj.limits;
  }
  if (obj.expiry !== undefined && obj.expiry !== null) {
    if (typeof obj.expiry !== "string") {
      throw new Error("Offer.expiry must be a string or null");
    }
    offer.expiry = obj.expiry;
  }
  if (obj.caveat !== undefined) {
    if (typeof obj.caveat !== "string") {
      throw new Error("Offer.caveat must be a string");
    }
    offer.caveat = obj.caveat;
  }

  return offer;
}

export function validateRegistry(offers: unknown[]): Offer[] {
  if (!Array.isArray(offers)) {
    throw new Error("Registry must be an array");
  }
  return offers.map(validateOffer);
}
