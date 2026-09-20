import type { ApiResponse } from "@/src/types/api";
import type { WeeklyCurationResult } from "@/src/types/curation";

import { apiClient } from "../core/client";
import { API_ENDPOINTS } from "../endpoints";

export function getWeeklyCuration(): Promise<
  ApiResponse<WeeklyCurationResult>
> {
  return apiClient.get<ApiResponse<WeeklyCurationResult>>(
    API_ENDPOINTS.CURATION.WEEKLY,
    {
      useAuth: false,
      skipRefresh: true,
    }
  );
}
