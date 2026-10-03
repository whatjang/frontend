import type { ApiResponse } from "@/src/types/api";
import type {
  NearbyPlaceCategory,
  NearbyPlaceDetail,
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

export function getNearbyPlaceDetail(
  marketId: number,
  placeId: string
): Promise<ApiResponse<NearbyPlaceDetail>> {
  return apiClient.get<ApiResponse<NearbyPlaceDetail>>(
    API_ENDPOINTS.MARKET.NEARBY_PLACE_DETAIL(marketId, placeId)
  );
}
