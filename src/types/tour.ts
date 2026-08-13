export interface TourCategory {
  id: string;
  label: string;
}

export interface TourPlace {
  id: number;
  name: string;
  category: string;
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

export interface TourData {
  radiusKm: number;
  categories: TourCategory[];
  places: TourPlace[];
}
