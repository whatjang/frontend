export interface ApiResponse<T> {
  is_success: true;
  code: string;
  message: string;
  result: T;
}

export interface ApiErrorResponse {
  is_success: false;
  code: string;
  message: string;
}
