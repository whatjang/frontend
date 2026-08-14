import { mockTrendData } from "./trend";

export const mockHomeData = {
  user: {
    name: "양인서",
  },

  liveMarkets: [
    {
      id: 1,
      name: "정선아리랑시장",
      schedule: "2, 7일",
      address: "강원 정선군 정선읍 5일장길 36",
    },
    {
      id: 2,
      name: "아우라지역전통시장",
      schedule: "4, 9일",
      address: "강원 정선군 여량면 여량6길 10",
    },
    {
      id: 3,
      name: "고한구공탄시장",
      schedule: "상설시장",
      address: "강원 정선군 고한읍 고한4길 38-6",
    },
  ],

  favoriteMarkets: [
    {
      id: 1,
      name: "강릉중앙시장",
      remainingDays: 3,
      href: "/markets/1",
    },
    {
      id: 2,
      name: "속초관광수산시장",
      remainingDays: 5,
      href: "/markets/2",
    },
    {
      id: 3,
      name: "정선아리랑시장",
      remainingDays: 6,
      href: "/markets/3",
    },
  ],

  trendFood: mockTrendData.trendFood,
};
