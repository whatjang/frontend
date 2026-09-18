import { MyPageData } from "@/src/types/mypage";

import { getBookmarkedReports } from "./marketReports";
import { marketTourRoutes } from "./marketTour";

const allTourPlaces = marketTourRoutes.flatMap((route) => route.places);

const likedPlaces = allTourPlaces.filter((place) =>
  [101, 103, 202].includes(place.id)
);

export const mockMyPageData: MyPageData = {
  profile: {
    nickname: "양인서",
    favoriteMarketCount: 8,
    reportCount: 28,
  },

  bookmarkedReports: getBookmarkedReports(),

  likedPlaces,

  reports: [
    {
      id: 101,
      marketId: 1,
      marketName: "속초 중앙시장",
      createdAt: "2026-07-28",
      tag: "혼잡도",
      rating: 4.8,
      content:
        "주말에는 방문객이 많아 주차장이 혼잡합니다. 대중교통 이용을 추천합니다.",
      imageUrl: "/images/reports/market-report-01.webp",
    },

    {
      id: 102,
      marketId: 1,
      marketName: "속초 중앙시장",
      createdAt: "2026-07-25",
      tag: "기타",
      rating: 4.6,
      content:
        "오전 시간대에 방문하면 비교적 여유롭게 시장을 둘러볼 수 있습니다.",
    },

    {
      id: 201,
      marketId: 2,
      marketName: "강릉 중앙시장",
      createdAt: "2026-07-30",
      tag: "혼잡도",
      rating: 4.8,
      content:
        "지금 중앙시장 공영주차장 만차입니다. 남대천 둔치 주차장을 이용하면 편리합니다.",
      imageUrl: "/images/reports/parking-report.webp",
    },

    {
      id: 301,
      marketId: 3,
      marketName: "양양 전통시장",
      createdAt: "2026-07-27",
      tag: "기타",
      rating: 4.5,
      content:
        "오전 10시 이전에 방문하면 농산물 종류가 많고 시장도 비교적 한산합니다.",
    },

    {
      id: 401,
      marketId: 4,
      marketName: "동해 북평민속시장",
      createdAt: "2026-07-26",
      tag: "새로운 먹거리",
      rating: 4.4,
      content:
        "장날 오후에는 주요 먹거리 점포의 재료가 일찍 소진될 수 있습니다.",
    },
  ],
};
