import type { ApiResponse } from "@/src/types/api";
import type { ReportDetailResult } from "@/src/types/report";

import { apiClient } from "../core/client";
import { API_ENDPOINTS } from "../endpoints";

export function getReportDetail(
  reportId: number
): Promise<ApiResponse<ReportDetailResult>> {
  return apiClient.get<ApiResponse<ReportDetailResult>>(
    API_ENDPOINTS.REPORT.DETAIL(reportId)
  );
}
