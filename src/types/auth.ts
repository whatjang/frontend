export interface KakaoLoginRequest {
  code: string;
  redirect_uri: string;
}

export type SignupStatus = "PENDING" | "COMPLETED";

export interface KakaoLoginResult {
  member_id: number;
  access_token: string;
  refresh_token: string | null;
  signup_status: SignupStatus;
}

export interface RefreshTokenResult {
  access_token: string;
}
