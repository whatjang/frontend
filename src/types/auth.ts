export interface KakaoLoginRequest {
  code: string;
  redirectUri: string;
}

export interface KakaoLoginResponseResult {
  member_id: number;
  access_token: string;
  refresh_token: null;
}

export interface KakaoLoginResult {
  memberId: number;
  accessToken: string;
}

export interface RefreshTokenResult {
  accessToken: string;
}
