export interface KakaoLoginRequest {
  code: string;
  redirect_uri: string;
}

export interface KakaoLoginResult {
  member_id: number;
  access_token: string;
  refresh_token: string;
}

export interface RefreshTokenResult {
  access_token: string;
}
