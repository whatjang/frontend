import type { ApiResponse } from "@/src/types/api";
import type { KakaoLoginRequest, KakaoLoginResult } from "@/src/types/auth";

import { apiClient } from "../core/client";
import { API_ENDPOINTS } from "../endpoints";

export function loginWithKakao(
  request: KakaoLoginRequest
): Promise<ApiResponse<KakaoLoginResult>> {
  return apiClient.post<ApiResponse<KakaoLoginResult>, KakaoLoginRequest>(
    API_ENDPOINTS.AUTH.KAKAO_LOGIN,
    request,
    {
      useAuth: false,
      skipRefresh: true,
    }
  );
}

export function logoutUser() {
  return apiClient.post<ApiResponse<null>>(API_ENDPOINTS.AUTH.LOGOUT);
}
