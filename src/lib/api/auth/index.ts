import type { ApiResponse } from "@/src/types/api";
import type {
  KakaoLoginRequest,
  KakaoLoginResponseResult,
  KakaoLoginResult,
  RefreshTokenResult,
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
    auth: false,
  });

  return {
    ...response,
    result: {
      memberId: response.result.member_id,
      accessToken: response.result.access_token,
    },
  };
}

export function refreshAccessToken() {
  return apiClient.post<ApiResponse<RefreshTokenResult>>(
    API_ENDPOINTS.AUTH.REFRESH_TOKEN,
    undefined,
    {
      auth: false,
      skipRefresh: true,
    }
  );
}

export function logoutUser() {
  return apiClient.post<ApiResponse<null>>(
    API_ENDPOINTS.AUTH.LOGOUT,
    undefined,
    {
      skipRefresh: true,
    }
  );
}
