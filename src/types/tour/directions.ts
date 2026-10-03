export type TourTransportType = "WALK" | "BICYCLE";

export interface NearbyPlaceDirectionsPoint {
  name: string;
  latitude: number;
  longitude: number;
}

export interface NearbyPlaceDirections {
  start: NearbyPlaceDirectionsPoint;
  destination: NearbyPlaceDirectionsPoint;
  transport: TourTransportType;
  distance_m: number;
  estimated_minutes: number;
  navigation_url: string | null;
}

export interface GetNearbyPlaceDirectionsParams {
  currentLatitude: number;
  currentLongitude: number;
  transport: TourTransportType;
}
