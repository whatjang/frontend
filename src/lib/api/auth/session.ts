import type { ApiResponse } from "@/src/types/api";

import { apiClient } from "../core/client";
import { API_ENDPOINTS } from "../endpoints";

export function logoutUser() {
  return apiClient.post<ApiResponse<null>>(API_ENDPOINTS.AUTH.LOGOUT);
}
