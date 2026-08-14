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
    {
      id: 3,
      marketName: "춘천 풍물시장",
      marketDays: "매월 2, 7일",
      dDay: "D-4",
    },
    {
      id: 4,
      marketName: "강릉 주문진시장",
      marketDays: "매월 1, 6일",
      dDay: "D-5",
    },
    {
      id: 5,
      marketName: "양양 전통시장",
      marketDays: "매월 4, 9일",
      dDay: "D-7",
    },
    {
      id: 6,
      marketName: "평창 봉평시장",
      marketDays: "매월 2, 7일",
      dDay: "D-8",
    },
    {
      id: 7,
      marketName: "홍천 중앙시장",
      marketDays: "매월 1, 6일",
      dDay: "D-10",
    },
    {
      id: 8,
      marketName: "삼척 중앙시장",
      marketDays: "매월 2, 7일",
      dDay: "D-12",
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
