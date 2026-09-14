import type { ApiResponse } from "@/src/types/api";
import type {
  MarketDetailParams,
  MarketDetailResult,
} from "@/src/types/market/marketDetail";

import { apiClient } from "../core/client";
import { API_ENDPOINTS } from "../endpoints";

export function getMarketDetail(
  marketId: number,
  params?: MarketDetailParams
): Promise<ApiResponse<MarketDetailResult>> {
  return apiClient.get<ApiResponse<MarketDetailResult>>(
    API_ENDPOINTS.MARKET.DETAIL(marketId),
    {
      params,
      useAuth: false,
      skipRefresh: true,
    }
  );
}
