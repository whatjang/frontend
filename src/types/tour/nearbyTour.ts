export type NearbyPlaceCategory = "RESTAURANT" | "TOURIST_ATTRACTION" | "CAFE";

export interface NearbyMarket {
  market_id: number;
  name: string;
  latitude: number;
  longitude: number;
}

export interface NearbyPlace {
  place_id: string;
  source: "TOUR_API" | "KAKAO";
  category: NearbyPlaceCategory;
  name: string;
  latitude: number;
  longitude: number;
  distance_m: number;
  thumbnail_url: string | null;
  address: string | null;
  telephone: string | null;
  place_url: string | null;
  detail_available: boolean;
  directions_available: boolean;
}

export interface NearbyPlacesResult {
  market: NearbyMarket;
  category: NearbyPlaceCategory;
  radius_m: number;
  total_count: number;
  places: NearbyPlace[];
  source_notice: string;
}
