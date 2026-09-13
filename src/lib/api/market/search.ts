import type { ApiResponse } from "@/src/types/api";
import type {
  MarketSearchParams,
  MarketSearchResult,
} from "@/src/types/market/marketSearch";

import { apiClient } from "../core/client";
import { API_ENDPOINTS } from "../endpoints";

export function searchMarkets(
  params: MarketSearchParams
): Promise<ApiResponse<MarketSearchResult>> {
  return apiClient.get<ApiResponse<MarketSearchResult>>(
    API_ENDPOINTS.MARKET.SEARCH,
    {
      params,
      useAuth: false,
      skipRefresh: true,
    }
  );
}
