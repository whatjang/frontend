import type { ApiResponse } from "@/src/types/api";
import type {
  CreateReportCommentRequest,
  CreateReportCommentResult,
} from "@/src/types/report";

import { apiClient } from "../core/client";
import { API_ENDPOINTS } from "../endpoints";

export function createReportComment(
  reportId: number,
  request: CreateReportCommentRequest
): Promise<ApiResponse<CreateReportCommentResult>> {
  return apiClient.post<ApiResponse<CreateReportCommentResult>>(
    API_ENDPOINTS.REPORT.COMMENTS(reportId),
    request
  );
}
