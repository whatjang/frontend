import type { ApiResponse } from "@/src/types/api";
import type {
  ReportReactionResult,
  ReportReactionType,
} from "@/src/types/report";

import { apiClient } from "../core/client";
import { API_ENDPOINTS } from "../endpoints";

export function updateReportReaction(
  reportId: number,
  reaction: ReportReactionType
): Promise<ApiResponse<ReportReactionResult>> {
  return apiClient.put<ApiResponse<ReportReactionResult>>(
    API_ENDPOINTS.REPORT.REACTION(reportId),
    undefined,
    {
      params: {
        reaction,
      },
    }
  );
}
