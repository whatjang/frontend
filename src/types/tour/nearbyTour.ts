import type { TourCategoryId, TourPlace } from "./tour";

export interface NearbyTourCategory {
  id: TourCategoryId;
  label: string;
}

export interface NearbyTourData {
  radiusKm: number;
  categories: NearbyTourCategory[];
  places: TourPlace[];
}
