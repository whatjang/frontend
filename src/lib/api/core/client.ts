import { useAuthStore } from "@/src/stores/authStore";

import { ApiError } from "./error";
import { renewAccessToken } from "./refresh";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

interface RequestOptions extends Omit<
  RequestInit,
  "method" | "body" | "credentials"
> {
  auth?: boolean;
  skipRefresh?: boolean;
}

async function request<T, B = unknown>(
  endpoint: string,
  method: string,
  body?: B,
  options: RequestOptions = {}
): Promise<T> {
  if (!API_BASE_URL) {
    throw new Error("API 주소가 설정되지 않았습니다.");
  }

  const {
    auth = true,
    skipRefresh = false,
    headers,
    ...requestOptions
  } = options;

  const sendRequest = () => {
    const requestHeaders = new Headers(headers);

    if (body !== undefined) {
      requestHeaders.set("Content-Type", "application/json");
    }

    if (auth) {
      const accessToken = useAuthStore.getState().accessToken;

      if (accessToken) {
        requestHeaders.set("Authorization", `Bearer ${accessToken}`);
      }
    }

    return fetch(`${API_BASE_URL}${endpoint}`, {
      ...requestOptions,
      method,
      headers: requestHeaders,
      credentials: "include",
      body: body !== undefined ? JSON.stringify(body) : undefined,
    });
  };

  let response = await sendRequest();

  if (response.status === 401 && auth && !skipRefresh) {
    await renewAccessToken();

    response = await sendRequest();
  }

  const data = await response.json().catch(() => null);

  if (!response.ok || data?.isSuccess === false) {
    throw new ApiError(
      data?.message ?? "API 요청에 실패했습니다.",
      response.status,
      data?.code
    );
  }

  return data;
}

export const apiClient = {
  get<T>(endpoint: string, options?: RequestOptions) {
    return request<T>(endpoint, "GET", undefined, options);
  },

  post<T, B = unknown>(endpoint: string, body?: B, options?: RequestOptions) {
    return request<T, B>(endpoint, "POST", body, options);
  },

  patch<T, B = unknown>(endpoint: string, body?: B, options?: RequestOptions) {
    return request<T, B>(endpoint, "PATCH", body, options);
  },

  delete<T>(endpoint: string, options?: RequestOptions) {
    return request<T>(endpoint, "DELETE", undefined, options);
  },
};
