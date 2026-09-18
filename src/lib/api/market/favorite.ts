import type { ApiResponse } from "@/src/types/api";
import type { MarketFavoriteResult } from "@/src/types/market/index";

import { apiClient } from "../core/client";
import { API_ENDPOINTS } from "../endpoints";

export function getFavoriteMarkets(): Promise<
  ApiResponse<MarketFavoriteResult>
> {
  return apiClient.get<ApiResponse<MarketFavoriteResult>>(
    API_ENDPOINTS.MEMBER.FAVORITE_MARKETS
  );
}

export function addMarketFavorite(
  marketId: number
): Promise<ApiResponse<string>> {
  return apiClient.put<ApiResponse<string>>(
    API_ENDPOINTS.MARKET.FAVORITE(marketId)
  );
}

export function removeMarketFavorite(
  marketId: number
): Promise<ApiResponse<string>> {
  return apiClient.delete<ApiResponse<string>>(
    API_ENDPOINTS.MARKET.FAVORITE(marketId)
  );
}
