import type { Locale, Offer } from "./schema";

export type JsonLdObject = Record<string, unknown>;

function offerUrl(offer: Offer): string | undefined {
  return offer.actionUrl ?? offer.url ?? offer.source;
}

/* List pages render offers as a ranked directory; mirror that order so search
   engines and answer engines see the same list visitors read. Item URLs point
   to the official claim page, not back to eggx. */
export function itemListSchema(list: Offer[], name: string, locale: Locale): JsonLdObject {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name,
    inLanguage: locale === "zh" ? "zh-CN" : "en",
    itemListElement: list.map((offer, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: offer[locale].name,
      ...(offerUrl(offer) ? { url: offerUrl(offer) } : {}),
    })),
  };
}

export function faqSchema(entries: { question: string; answer: string }[]): JsonLdObject {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: entries.map(({ question, answer }) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: { "@type": "Answer", text: answer },
    })),
  };
}
