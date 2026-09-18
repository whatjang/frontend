import type { NearbyPlaceCategory } from "@/src/types/tour";

export const TOUR_CATEGORIES: {
  id: NearbyPlaceCategory;
  label: string;
}[] = [
  {
    id: "RESTAURANT",
    label: "음식점",
  },
  {
    id: "TOURIST_ATTRACTION",
    label: "관광지",
  },
  {
    id: "CAFE",
    label: "카페",
  },
];
