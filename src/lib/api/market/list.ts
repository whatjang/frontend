import type { ApiResponse } from "@/src/types/api";
import type {
  MarketListParams,
  MarketListResult,
} from "@/src/types/market/index";

import { apiClient } from "../core/client";
import { API_ENDPOINTS } from "../endpoints";

export function getMarkets(
  params: MarketListParams = {}
): Promise<ApiResponse<MarketListResult>> {
  return apiClient.get<ApiResponse<MarketListResult>>(
    API_ENDPOINTS.MARKET.LIST,
    {
      params,
      useAuth: false,
      skipRefresh: true,
    }
  );
}
