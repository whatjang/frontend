import axios from "axios";

import { useAuthStore } from "@/src/stores/authStore";
import type { ApiResponse } from "@/src/types/api";
import type { RefreshTokenResult } from "@/src/types/auth";

import { API_ENDPOINTS } from "../endpoints";
import { toApiError } from "./error";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

const refreshClient = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true,
});

let refreshPromise: Promise<string> | null = null;

export function renewAccessToken(): Promise<string> {
  if (!API_BASE_URL) {
    throw new Error("API 주소가 설정되지 않았습니다.");
  }

  if (!refreshPromise) {
    refreshPromise = (async () => {
      try {
        const { data } = await refreshClient.post<
          ApiResponse<RefreshTokenResult>
        >(API_ENDPOINTS.AUTH.REFRESH_TOKEN);

        const { access_token } = data.result;

        useAuthStore.getState().setAccessToken(access_token);

        return access_token;
      } catch (error) {
        throw toApiError(error);
      }
    })().finally(() => {
      refreshPromise = null;
    });
  }

  return refreshPromise;
}
