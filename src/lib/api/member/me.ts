import type { ApiResponse } from "@/src/types/api";
import type { MemberInfo } from "@/src/types/member";

import { apiClient } from "../core/client";
import { API_ENDPOINTS } from "../endpoints";

export function getMyInfo(): Promise<ApiResponse<MemberInfo>> {
  return apiClient.get<ApiResponse<MemberInfo>>(API_ENDPOINTS.MEMBER.ME);
}
