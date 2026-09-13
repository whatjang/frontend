import type { ApiResponse } from "@/src/types/api";

import { apiClient } from "../core/client";
import { API_ENDPOINTS } from "../endpoints";

export function withdrawMember(): Promise<ApiResponse<null>> {
  return apiClient.delete<ApiResponse<null>>(API_ENDPOINTS.MEMBER.WITHDRAW);
}
