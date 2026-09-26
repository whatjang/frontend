import type { ApiResponse } from "@/src/types/api";
import type { ReportFeedParams, ReportFeedResult } from "@/src/types/report";

import { apiClient } from "../core/client";
import { API_ENDPOINTS } from "../endpoints";

export function getReportFeed(
  params?: ReportFeedParams
): Promise<ApiResponse<ReportFeedResult>> {
  return apiClient.get<ApiResponse<ReportFeedResult>>(
    API_ENDPOINTS.REPORT.FEED,
    {
      params,
    }
  );
}
