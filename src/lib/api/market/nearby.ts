import type { ApiResponse } from "@/src/types/api";
import type {
  NearbyPlaceCategory,
  NearbyPlacesResult,
} from "@/src/types/tour/nearbyTour";

import { apiClient } from "../core/client";
import { API_ENDPOINTS } from "../endpoints";

interface GetNearbyPlacesParams {
  category: NearbyPlaceCategory;
}

export function getNearbyPlaces(
  marketId: number,
  params: GetNearbyPlacesParams
): Promise<ApiResponse<NearbyPlacesResult>> {
  return apiClient.get<ApiResponse<NearbyPlacesResult>>(
    API_ENDPOINTS.MARKET.NEARBY_PLACES(marketId),
    {
      params,
    }
  );
}
