import type { ApiResponse } from "@/src/types/api";
import type {
  CreateReportCommentRequest,
  CreateReportCommentResult,
  DeleteReportCommentResult,
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

export function deleteReportComment(
  reportId: number,
  commentId: number
): Promise<ApiResponse<DeleteReportCommentResult>> {
  return apiClient.delete<ApiResponse<DeleteReportCommentResult>>(
    API_ENDPOINTS.REPORT.COMMENT(reportId, commentId)
  );
}
