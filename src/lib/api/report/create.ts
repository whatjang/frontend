import type { ApiResponse } from "@/src/types/api";
import type {
  CreateReportRequest,
  CreateReportResult,
} from "@/src/types/report";

import { apiClient } from "../core/client";
import { API_ENDPOINTS } from "../endpoints";

export interface CreateReportParams {
  marketId: number;
  request: CreateReportRequest;
  images: File[];
}

export function createReport({
  marketId,
  request,
  images,
}: CreateReportParams): Promise<ApiResponse<CreateReportResult>> {
  const formData = new FormData();

  formData.append(
    "request",
    new Blob([JSON.stringify(request)], {
      type: "application/json",
    })
  );

  images.forEach((image) => {
    formData.append("images", image);
  });

  return apiClient.post<ApiResponse<CreateReportResult>, FormData>(
    API_ENDPOINTS.REPORT.CREATE(marketId),
    formData
  );
}
