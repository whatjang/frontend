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

  reports: [
    {
      id: 1,
      marketId: 1,
      marketName: "양양 전통시장",
      createdAt: "2026-07-28",
      tag: "교통정보",
      rating: 4.8,
      content:
        "주말에는 방문객이 많아 주차장이 혼잡합니다. 대중교통 이용을 추천합니다.",
      imageUrl: "/images/reports/yangyang-parking.jpg",
    },
    {
      id: 2,
      marketId: 2,
      marketName: "속초 관광수산시장",
      createdAt: "2026-07-25",
      tag: "방문팁",
      rating: 4.6,
      content:
        "오전 시간대에 방문하면 비교적 여유롭게 시장을 둘러볼 수 있습니다.",
    },
    {
      id: 3,
      marketId: 3,
      marketName: "춘천 풍물시장",
      createdAt: "2026-07-19",
      tag: "먹거리",
      rating: 4.9,
      content:
        "시장 안쪽에 있는 감자전이 정말 맛있었어요. 따뜻할 때 먹는 걸 추천합니다.",
      imageUrl: "/images/reports/chuncheon-food.jpg",
    },
    {
      id: 4,
      marketId: 4,
      marketName: "강릉 중앙시장",
      createdAt: "2026-07-12",
      tag: "혼잡도",
      rating: 4.4,
      content:
        "저녁 시간에는 먹거리 골목 쪽이 많이 붐벼서 조금 일찍 방문하는 게 좋습니다.",
    },
    {
      id: 5,
      marketId: 5,
      marketName: "정선 5일장",
      createdAt: "2026-07-02",
      tag: "방문팁",
      rating: 4.7,
      content:
        "장날 오전에 방문하면 상점도 많이 열려 있고 지역 특산물 구경하기 좋습니다.",
      imageUrl: "/images/reports/jeongseon-market.jpg",
    },
  ],
};
