import axios from "axios";

import type { ApiErrorResponse } from "@/src/types/api";

export class ApiError extends Error {
  status: number;
  code?: string;

  constructor(message: string, status: number, code?: string) {
    super(message);

    this.name = "ApiError";
    this.status = status;
    this.code = code;
  }
}

export function toApiError(error: unknown): ApiError {
  if (error instanceof ApiError) {
    return error;
  }

  if (axios.isAxiosError(error)) {
    const data = error.response?.data as ApiErrorResponse | undefined;

    return new ApiError(
      data?.message ?? error.message ?? "API 요청에 실패했습니다.",
      error.response?.status ?? 0,
      data?.code
    );
  }

  return new ApiError("API 요청에 실패했습니다.", 0);
}
