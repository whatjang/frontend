export const API_ENDPOINTS = {
  AUTH: {
    KAKAO_LOGIN: "/api/auth/kakao",
    REFRESH_TOKEN: "/api/auth/refresh-token",
    LOGOUT: "/api/auth/logout",
  },

  MARKET: {
    SEARCH: "/api/markets/search",
    DETAIL: (marketId: number) => `/api/markets/${marketId}`,
    FAVORITE: (marketId: number) => `/api/markets/${marketId}/favorite`,
    NEARBY_PLACES: (marketId: number) =>
      `/api/markets/${marketId}/nearby-places`,
  },

  MEMBER: {
    ONBOARDING: "/api/members/me/onboarding",
    ME: "/api/members/me",
  },
} as const;
