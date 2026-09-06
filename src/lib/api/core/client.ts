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

export const apiClient = {
  async get<T>(endpoint: string, options?: AxiosRequestConfig): Promise<T> {
    const { data } = await axiosInstance.get<T>(endpoint, options);

    return data;
  },

  async post<T, B = unknown>(
    endpoint: string,
    body?: B,
    options?: AxiosRequestConfig
  ): Promise<T> {
    const { data } = await axiosInstance.post<T>(endpoint, body, options);

    return data;
  },

  async patch<T, B = unknown>(
    endpoint: string,
    body?: B,
    options?: AxiosRequestConfig
  ): Promise<T> {
    const { data } = await axiosInstance.patch<T>(endpoint, body, options);

    return data;
  },

  async delete<T>(endpoint: string, options?: AxiosRequestConfig): Promise<T> {
    const { data } = await axiosInstance.delete<T>(endpoint, options);

    return data;
  },
};
