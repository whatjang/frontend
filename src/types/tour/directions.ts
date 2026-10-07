import type { MapCoordinates } from "@/src/types/map";

export type TourTransportType = "WALK" | "BICYCLE";

export interface NearbyPlaceDirectionsPoint extends MapCoordinates {
  name: string;
}

export interface NearbyPlaceDirections {
  start: NearbyPlaceDirectionsPoint;
  destination: NearbyPlaceDirectionsPoint;
  transport: TourTransportType;
  distance_m: number;
  estimated_minutes: number;
  navigation_url: string | null;
  path: MapCoordinates[];
}

export interface GetNearbyPlaceDirectionsParams {
  currentLatitude: number;
  currentLongitude: number;
  transport: TourTransportType;
}
