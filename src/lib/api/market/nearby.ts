import type { ApiResponse } from "@/src/types/api";
import type {
  GetNearbyPlaceDirectionsParams,
  NearbyPlaceCategory,
  NearbyPlaceDetail,
  NearbyPlaceDirections,
  NearbyPlacesResult,
} from "@/src/types/tour";

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

export function getNearbyPlaceDirections(
  marketId: number,
  placeId: string,
  params: GetNearbyPlaceDirectionsParams
): Promise<ApiResponse<NearbyPlaceDirections>> {
  return apiClient.get<ApiResponse<NearbyPlaceDirections>>(
    API_ENDPOINTS.MARKET.NEARBY_PLACE_DIRECTIONS(marketId, placeId),
    {
      params,
    }
  );
}
