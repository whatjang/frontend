export interface ApiResponse<T> {
  isSuccess: boolean;
  code: string;
  message: string;
  result: T;
}

export interface ApiErrorResponse {
  isSuccess: false;
  code: string;
  message: string;
}
