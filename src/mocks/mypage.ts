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
      tags: ["시장먹방", "가을여행"],
      memo: "비 오는 날 따끈한 감자전 먹으면서 시장 한 바퀴. 소소하게 구경하는 재미가 좋았다.",
    },
    {
      id: 2,
      marketName: "강릉 중앙시장",
      visitedAt: "24.10.10",
      imageUrl: "/images/gangneung-market.jpg",
      tags: ["강릉여행", "야시장"],
      memo: "바다 보고 들른 중앙시장. 닭강정이랑 간식 사서 숙소에서 야식으로 먹었다.",
    },
    {
      id: 3,
      marketName: "속초 관광수산시장",
      visitedAt: "24.10.03",
      imageUrl: "/images/sokcho-market.jpg",
      tags: ["속초여행", "먹거리"],
      memo: "사람은 많았지만 구경할 게 정말 많았다. 오징어순대 먹고 회도 포장해서 완벽한 저녁.",
    },
    {
      id: 4,
      marketName: "정선 5일장",
      visitedAt: "24.09.27",
      imageUrl: "/images/jeongseon-market.jpg",
      tags: ["5일장", "로컬여행"],
      memo: "산길 드라이브하다 들른 정선 5일장. 지역 특산물 구경하고 수수부꾸미도 처음 먹어봤다.",
    },
    {
      id: 5,
      marketName: "양양 전통시장",
      visitedAt: "24.09.19",
      imageUrl: "/images/yangyang-market.jpg",
      tags: ["양양여행", "산책"],
      memo: "서핑 끝나고 천천히 둘러본 시장. 작은 가게들이 많아서 골목골목 구경하는 재미가 있었다.",
    },
    {
      id: 6,
      marketName: "평창 봉평시장",
      visitedAt: "24.09.12",
      imageUrl: "/images/bongpyeong-market.jpg",
      tags: ["평창여행", "메밀"],
      memo: "선선한 날씨에 걷기 좋았던 봉평시장. 메밀전병 먹고 주변 골목까지 천천히 둘러봤다.",
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
