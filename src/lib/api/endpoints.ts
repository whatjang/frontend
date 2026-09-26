export const API_ENDPOINTS = {
  AUTH: {
    KAKAO_LOGIN: "/api/auth/kakao",
    REFRESH_TOKEN: "/api/auth/refresh-token",
    LOGOUT: "/api/auth/logout",
  },

  MARKET: {
    LIST: "/api/markets",
    SEARCH: "/api/markets/search",
    DETAIL: (marketId: number) => `/api/markets/${marketId}`,
    FAVORITE: (marketId: number) => `/api/markets/${marketId}/favorite`,
    NEARBY_PLACES: (marketId: number) =>
      `/api/markets/${marketId}/nearby-places`,
    CALENDAR: "/api/markets/calendar",
    OPEN_ON: (date: string) => `/api/markets/open-on/${date}`,
  },

  REPORT: {
    FEED: "/api/reports",
    DETAIL: (reportId: number) => `/api/reports/${reportId}`,
    CREATE: (marketId: number) => `/api/markets/${marketId}/reports`,
  },

  CURATION: {
    WEEKLY: "/api/curations/weekly",
  },

  MEMBER: {
    ONBOARDING: "/api/members/me/onboarding",
    ME: "/api/members/me",
    FAVORITE_MARKETS: "/api/members/favorite-markets",
  },
} as const;
