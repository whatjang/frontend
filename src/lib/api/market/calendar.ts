import type { ApiResponse } from "@/src/types/api";
import type {
  MarketCalendarParams,
  MarketCalendarResult,
} from "@/src/types/market/index";

import { apiClient } from "../core/client";
import { API_ENDPOINTS } from "../endpoints";

export function getMonthlyMarketCalendar(
  params: MarketCalendarParams
): Promise<ApiResponse<MarketCalendarResult>> {
  return apiClient.get<ApiResponse<MarketCalendarResult>>(
    API_ENDPOINTS.MARKET.CALENDAR,
    {
      params,
      useAuth: false,
      skipRefresh: true,
    }
  );
}
