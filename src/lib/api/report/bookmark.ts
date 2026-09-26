import type { ApiResponse } from "@/src/types/api";
import type { ReportBookmarkResult } from "@/src/types/report";

import { apiClient } from "../core/client";
import { API_ENDPOINTS } from "../endpoints";

export function addReportBookmark(
  reportId: number
): Promise<ApiResponse<ReportBookmarkResult>> {
  return apiClient.put<ApiResponse<ReportBookmarkResult>>(
    API_ENDPOINTS.REPORT.BOOKMARK(reportId)
  );
}

export function removeReportBookmark(
  reportId: number
): Promise<ApiResponse<ReportBookmarkResult>> {
  return apiClient.delete<ApiResponse<ReportBookmarkResult>>(
    API_ENDPOINTS.REPORT.BOOKMARK(reportId)
  );
}
