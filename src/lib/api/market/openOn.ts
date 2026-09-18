import type { ApiResponse } from "@/src/types/api";
import type {
  MarketOpenOnParams,
  MarketOpenOnResult,
} from "@/src/types/market/index";

import { apiClient } from "../core/client";
import { API_ENDPOINTS } from "../endpoints";

export function getMarketsOpenOn(
  date: string,
  params?: MarketOpenOnParams
): Promise<ApiResponse<MarketOpenOnResult>> {
  return apiClient.get<ApiResponse<MarketOpenOnResult>>(
    API_ENDPOINTS.MARKET.OPEN_ON(date),
    {
      params,
      useAuth: false,
      skipRefresh: true,
    }
  );
}
