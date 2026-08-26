export const mockTrendData = {
  insight: {
    title: "실시간 검색어 인사이트",
    updatedAt: "10분 전",

    keywords: [
      {
        name: "닭강정",
        rate: 24,
        history: [
          { day: "월", value: 44 },
          { day: "화", value: 58 },
          { day: "수", value: 49 },
          { day: "목", value: 67 },
          { day: "금", value: 61 },
          { day: "토", value: 86 },
          { day: "일", value: 74 },
        ],
      },
      {
        name: "산나물",
        rate: 18,
        history: [
          { day: "월", value: 36 },
          { day: "화", value: 51 },
          { day: "수", value: 43 },
          { day: "목", value: 59 },
          { day: "금", value: 48 },
          { day: "토", value: 66 },
          { day: "일", value: 57 },
        ],
      },
      {
        name: "벌꿀",
        rate: 12,
        history: [
          { day: "월", value: 33 },
          { day: "화", value: 29 },
          { day: "수", value: 41 },
          { day: "목", value: 37 },
          { day: "금", value: 52 },
          { day: "토", value: 46 },
          { day: "일", value: 56 },
        ],
      },
    ],

    sources: ["Naver DataLab", "Google Trends"],
  },

  trendFood: [
    {
      id: 1,
      rank: 1,

      marketName: "속초 중앙시장",
      title: "달콤매콤 닭강정 페스티벌",
      tag: "전국구_맛",
      keyword: "닭강정",
      image: "/images/trend/dakgangjeong.jpg",

      location: "강원 속초시 중앙로",
      tags: ["닭강정", "시장먹거리", "속초맛집"],
      reason:
        "바삭한 식감과 달콤매콤한 양념으로 전국적으로 사랑받는 속초 대표 먹거리입니다.",
    },

    {
      id: 2,
      rank: 2,

      marketName: "정선 5일장",
      title: "정선 산나물과 지역 먹거리",
      tag: "향긋한_건강",
      keyword: "산나물",
      image: "/images/trend/sannamul.jpg",

      location: "강원 정선군 정선읍",
      tags: ["산나물", "곤드레", "로컬푸드"],
      reason:
        "정선의 청정 자연에서 자란 산나물과 지역 특산물을 다양하게 만나볼 수 있습니다.",
    },

    {
      id: 3,
      rank: 3,

      marketName: "지역 농산물 시장",
      title: "달콤한 로컬 벌꿀 이야기",
      tag: "달콤한_로컬",
      keyword: "벌꿀",
      image: "/images/trend/honey.jpg",

      location: "강원 정선군",
      tags: ["벌꿀", "로컬푸드", "농산물"],
      reason:
        "지역에서 생산된 신선한 벌꿀과 다양한 로컬 농산물을 만나볼 수 있는 시장입니다.",
    },
  ],
};
