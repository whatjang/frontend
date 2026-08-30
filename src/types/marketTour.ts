import type { TourPlace } from "./tour";

export interface MarketTourRoute {
  marketId: number;
  estimatedMinutes: number;
  estimatedDistanceKm: number;
  places: TourPlace[];
}
