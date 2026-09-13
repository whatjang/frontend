export const API_ENDPOINTS = {
  AUTH: {
    KAKAO_LOGIN: "/api/auth/kakao",
    REFRESH_TOKEN: "/api/auth/refresh-token",
    LOGOUT: "/api/auth/logout",
  },

  MEMBER: {
    ONBOARDING: "/api/members/me/onboarding",
    WITHDRAW: "/api/members/me",
  },
} as const;
