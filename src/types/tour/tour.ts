export type TourCategoryId = "restaurant" | "attraction" | "cafe";

export interface TourPlace {
  id: number;
  name: string;
  category: TourCategoryId;
  categoryLabel: string;
  distance: string;
  image: string;
  latitude: number;
  longitude: number;
  marker: {
    top: string;
    left: string;
  };
}
