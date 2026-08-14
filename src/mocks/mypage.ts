import { MyPageData } from "@/src/types/mypage";

export const mockMyPageData: MyPageData = {
  profile: {
    nickname: "양인서",
    recordedMarketCount: 12,
    reportCount: 28,
  },

  favoriteMarkets: [
    {
      id: 1,
      marketName: "속초 관광수산시장",
      marketDays: "매월 3, 8, 13, 18, 23, 28일",
      dDay: "D-2",
    },
    {
      id: 2,
      marketName: "정선 5일장",
      marketDays: "매월 2, 7, 12, 17, 22, 27일",
      dDay: "오늘",
    },
  ],

  records: [
    {
      id: 1,
      marketName: "춘천 풍물시장",
      visitedAt: "24.10.15",
      imageUrl: "/images/chuncheon-market.jpg",
      tags: ["감자전", "메밀전"],
    },
    {
      id: 2,
      marketName: "강릉 중앙시장",
      visitedAt: "24.10.10",
      imageUrl: "/images/gangneung-market.jpg",
      tags: ["닭강정", "수산물"],
    },
  ],

  recentReports: [
    {
      id: 1,
      title: "양양시장 주차장 혼잡도",
      createdAt: "어제 오후 2:30",
      status: "ACCEPTED",
    },
  ],
};
