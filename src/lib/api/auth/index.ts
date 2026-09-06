import type { ApiResponse } from "@/src/types/api";
import type {
  KakaoLoginRequest,
  KakaoLoginResponseResult,
  KakaoLoginResult,
} from "@/src/types/auth";

import { apiClient } from "../core/client";
import { API_ENDPOINTS } from "../endpoints";

export async function loginWithKakao(
  request: KakaoLoginRequest
): Promise<ApiResponse<KakaoLoginResult>> {
  const response = await apiClient.post<
    ApiResponse<KakaoLoginResponseResult>,
    KakaoLoginRequest
  >(API_ENDPOINTS.AUTH.KAKAO_LOGIN, request, {
    useAuth: false,
    skipRefresh: true,
  });

  return {
    ...response,
    result: {
      memberId: response.result.member_id,
      accessToken: response.result.access_token,
    },
  };
}

export function logoutUser() {
  return apiClient.post<ApiResponse<null>>(API_ENDPOINTS.AUTH.LOGOUT);
}
