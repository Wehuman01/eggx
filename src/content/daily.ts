import { activeOffers } from "../lib/offers";
import { offers } from "./offers";

export function getDailyOffers() {
  return activeOffers(offers).slice(0, 5);
}

export const daily = getDailyOffers();
