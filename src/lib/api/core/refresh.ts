import { useAuthStore } from "@/src/stores/authStore";
import type { ApiResponse } from "@/src/types/api";
import type { RefreshTokenResult } from "@/src/types/auth";

import { API_ENDPOINTS } from "../endpoints";
import { ApiError } from "./error";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

let refreshPromise: Promise<string> | null = null;

export function renewAccessToken() {
  if (!API_BASE_URL) {
    throw new Error("API 주소가 설정되지 않았습니다.");
  }

  if (!refreshPromise) {
    refreshPromise = (async () => {
      const response = await fetch(
        `${API_BASE_URL}${API_ENDPOINTS.AUTH.REFRESH_TOKEN}`,
        {
          method: "POST",
          credentials: "include",
        }
      );

      const data: ApiResponse<RefreshTokenResult> | null = await response
        .json()
        .catch(() => null);

      if (!response.ok || !data?.isSuccess || !data.result?.accessToken) {
        // refreshToken 쿠키 이슈 해결 후 인증 만료 처리 다시 적용
        // useAuthStore.getState().clearAuth();

        throw new ApiError(
          data?.message ?? "로그인이 만료되었습니다.",
          response.status,
          data?.code
        );
      }

      const accessToken = data.result.accessToken;

      useAuthStore.getState().setAccessToken(accessToken);

      return accessToken;
    })().finally(() => {
      refreshPromise = null;
    });
  }

  return refreshPromise;
}
