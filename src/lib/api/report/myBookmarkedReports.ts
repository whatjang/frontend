import type { ApiResponse } from "@/src/types/api";
import type { ReportFeedResult } from "@/src/types/report";

import { apiClient } from "../core/client";
import { API_ENDPOINTS } from "../endpoints";

export function getMyBookmarkedReports(
  page = 0
): Promise<ApiResponse<ReportFeedResult>> {
  return apiClient.get<ApiResponse<ReportFeedResult>>(
    API_ENDPOINTS.REPORT.MY_BOOKMARKS,
    {
      params: { page },
    }
  );
}
