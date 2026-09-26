import type { ApiResponse } from "@/src/types/api";
import type { ReportDeleteResult } from "@/src/types/report";

import { apiClient } from "../core/client";
import { API_ENDPOINTS } from "../endpoints";

export function deleteReport(
  reportId: number
): Promise<ApiResponse<ReportDeleteResult>> {
  return apiClient.delete<ApiResponse<ReportDeleteResult>>(
    API_ENDPOINTS.REPORT.DELETE(reportId)
  );
}
