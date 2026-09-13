import axios, { type AxiosError, type AxiosRequestConfig } from "axios";

import { useAuthStore } from "@/src/stores/authStore";

import { ApiError, toApiError } from "./error";
import { renewAccessToken } from "./refresh";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

if (!API_BASE_URL) {
  throw new Error("API 주소가 설정되지 않았습니다.");
}

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true,
});

axiosInstance.interceptors.request.use((config) => {
  if (config.useAuth === false) {
    return config;
  }

  const access_token = useAuthStore.getState().access_token;

  if (access_token) {
    config.headers.Authorization = `Bearer ${access_token}`;
  }

  return config;
});

axiosInstance.interceptors.response.use(
  (response) => {
    const data = response.data;

    if (data?.is_success === false) {
      throw new ApiError(
        data.message ?? "API 요청에 실패했습니다.",
        response.status,
        data.code
      );
    }

    return response;
  },

  async (error: AxiosError) => {
    const originalRequest = error.config;

    if (!originalRequest) {
      return Promise.reject(toApiError(error));
    }

    const shouldRefresh =
      error.response?.status === 401 &&
      originalRequest.useAuth !== false &&
      !originalRequest.skipRefresh &&
      !originalRequest._retry;

    if (!shouldRefresh) {
      return Promise.reject(toApiError(error));
    }

    originalRequest._retry = true;

    try {
      await renewAccessToken();

      return axiosInstance(originalRequest);
    } catch (refreshError) {
      useAuthStore.getState().clearAuth();

      return Promise.reject(refreshError);
    }
  }
);

async function request<T>(config: AxiosRequestConfig): Promise<T> {
  const { data } = await axiosInstance.request<T>(config);

  return data;
}

export const apiClient = {
  get<T>(endpoint: string, options?: AxiosRequestConfig) {
    return request<T>({
      ...options,
      method: "GET",
      url: endpoint,
    });
  },

  post<T, B = unknown>(
    endpoint: string,
    body?: B,
    options?: AxiosRequestConfig
  ) {
    return request<T>({
      ...options,
      method: "POST",
      url: endpoint,
      data: body,
    });
  },

  put<T, B = unknown>(
    endpoint: string,
    body?: B,
    options?: AxiosRequestConfig
  ) {
    return request<T>({
      ...options,
      method: "PUT",
      url: endpoint,
      data: body,
    });
  },

  patch<T, B = unknown>(
    endpoint: string,
    body?: B,
    options?: AxiosRequestConfig
  ) {
    return request<T>({
      ...options,
      method: "PATCH",
      url: endpoint,
      data: body,
    });
  },

  delete<T>(endpoint: string, options?: AxiosRequestConfig) {
    return request<T>({
      ...options,
      method: "DELETE",
      url: endpoint,
    });
  },
};
