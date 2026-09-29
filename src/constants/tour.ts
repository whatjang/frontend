import type { LucideIcon } from "lucide-react";
import { Coffee, Landmark, Utensils } from "lucide-react";

import type { NearbyPlaceCategory } from "@/src/types/tour";

export const TOUR_CATEGORY_LABELS: Record<NearbyPlaceCategory, string> = {
  RESTAURANT: "음식점",
  TOURIST_ATTRACTION: "관광지",
  CAFE: "카페",
};

export const TOUR_FALLBACK_ICONS: Record<NearbyPlaceCategory, LucideIcon> = {
  RESTAURANT: Utensils,
  TOURIST_ATTRACTION: Landmark,
  CAFE: Coffee,
};

export const TOUR_CATEGORIES: {
  id: NearbyPlaceCategory;
  label: string;
}[] = [
  {
    id: "RESTAURANT",
    label: TOUR_CATEGORY_LABELS.RESTAURANT,
  },
  {
    id: "TOURIST_ATTRACTION",
    label: TOUR_CATEGORY_LABELS.TOURIST_ATTRACTION,
  },
  {
    id: "CAFE",
    label: TOUR_CATEGORY_LABELS.CAFE,
  },
];
