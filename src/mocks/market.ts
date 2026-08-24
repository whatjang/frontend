import type { Market } from "@/src/types/market";

export const markets: Market[] = [
  {
    id: 1,
    name: "속초 중앙시장",
    address: "강원특별자치도 속초시 중앙로147번길 12",
    description:
      "속초의 대표 전통시장으로 다양한 수산물과 닭강정을 만나볼 수 있습니다.",
    imageUrl: "/images/markets/sokcho-central-market.webp",

    marketType: "상설·오일장",
    marketDays: [5, 10],
    openingHours: "08:00 - 21:00",
    phone: "033-000-0001",
    notice: "점포별 영업시간이 다를 수 있습니다.",

    distanceKm: 1.4,
    isOpenToday: true,
    isFavorite: false,

    location: {
      latitude: 38.2043,
      longitude: 128.5912,
    },

    facilities: [
      {
        id: 1,
        label: "주차장",
        icon: "parking",
        available: true,
      },
      {
        id: 2,
        label: "화장실",
        icon: "restroom",
        available: true,
      },
      {
        id: 3,
        label: "휠체어",
        icon: "wheelchair",
        available: true,
      },
      {
        id: 4,
        label: "수유실",
        icon: "nursing-room",
        available: false,
      },
    ],

    specialties: [
      {
        id: 1,
        label: "수산물",
        icon: "seafood",
        description: "동해에서 잡은 신선한 생선과 해산물",
        imageUrl: "/images/specialties/seafood.webp",
      },
      {
        id: 2,
        label: "닭강정",
        icon: "fried-chicken",
        description: "속초 중앙시장의 대표 먹거리",
        imageUrl: "/images/specialties/fried-chicken.webp",
      },
    ],

    reports: [
      {
        id: 101,
        author: "강릉토박이",
        content:
          "주말에는 방문객이 많아 주차장이 혼잡합니다. 대중교통 이용을 추천합니다.",
        rating: 4.8,
        createdAt: "2026-07-28",
        tag: "교통정보",
        imageUrl: "/images/reports/market-report-01.webp",
      },
      {
        id: 102,
        author: "바다여행자",
        content:
          "오전 시간대에 방문하면 비교적 여유롭게 시장을 둘러볼 수 있습니다.",
        rating: 4.6,
        createdAt: "2026-07-25",
        tag: "방문팁",
      },
    ],

    nearbyAttractions: ["속초해수욕장", "청초호", "아바이마을"],
  },

  {
    id: 2,
    name: "강릉 중앙시장",
    address: "강원특별자치도 강릉시 금성로 21",
    description:
      "강릉의 향토 음식과 다양한 먹거리를 즐길 수 있는 대표 전통시장입니다.",
    imageUrl: "/images/markets/gangneung-central-market.webp",

    marketType: "상설·오일장",
    marketDays: [2, 7],
    openingHours: "09:00 - 20:00",
    phone: "033-000-0002",
    notice: "현재 정상 영업 중이며 휴일과 점포별 운영시간을 확인해 주세요.",

    distanceKm: 4.8,
    isOpenToday: false,
    isFavorite: true,

    location: {
      latitude: 37.752,
      longitude: 128.8758,
    },

    facilities: [
      {
        id: 1,
        label: "주차장",
        icon: "parking",
        available: true,
      },
      {
        id: 2,
        label: "화장실",
        icon: "restroom",
        available: true,
      },
      {
        id: 3,
        label: "휠체어",
        icon: "wheelchair",
        available: true,
      },
      {
        id: 4,
        label: "수유실",
        icon: "nursing-room",
        available: true,
      },
    ],

    specialties: [
      {
        id: 1,
        label: "건어물",
        icon: "seafood",
        description: "동해안에서 생산된 다양한 건어물",
        imageUrl: "/images/specialties/dried-seafood.webp",
      },
      {
        id: 2,
        label: "감자전",
        icon: "food",
        description: "강원도 감자로 만든 고소한 전통 음식",
        imageUrl: "/images/specialties/potato-pancake.webp",
      },
      {
        id: 3,
        label: "닭강정",
        icon: "fried-chicken",
        description: "바삭하고 달콤한 시장 대표 간식",
        imageUrl: "/images/specialties/fried-chicken.webp",
      },
    ],

    reports: [
      {
        id: 201,
        author: "강릉토박이",
        content:
          "지금 중앙시장 공영주차장 만차입니다. 남대천 둔치 주차장을 이용하면 편리합니다.",
        rating: 4.8,
        createdAt: "2026-07-30",
        tag: "교통정보",
        imageUrl: "/images/reports/parking-report.webp",
      },
      {
        id: 202,
        author: "감자좋아",
        content:
          "감자전 골목은 점심시간에 대기 줄이 길어 오전 방문을 추천합니다.",
        rating: 4.7,
        createdAt: "2026-07-29",
        tag: "먹거리",
      },
    ],

    nearbyAttractions: ["월화거리", "강릉대도호부관아", "남대천"],
  },

  {
    id: 3,
    name: "양양 전통시장",
    address: "강원특별자치도 양양군 양양읍 남문5길 9",
    description:
      "양양 지역의 농산물과 산나물을 합리적인 가격에 만나볼 수 있는 전통시장입니다.",
    imageUrl: "/images/markets/yangyang-market.webp",

    marketType: "오일장",
    marketDays: [4, 9],
    openingHours: "08:00 - 18:00",
    phone: "033-000-0003",
    notice: "장날에는 주변 도로가 혼잡할 수 있습니다.",

    distanceKm: 11.2,
    isOpenToday: true,
    isFavorite: false,

    location: {
      latitude: 38.0754,
      longitude: 128.6188,
    },

    facilities: [
      {
        id: 1,
        label: "주차장",
        icon: "parking",
        available: true,
      },
      {
        id: 2,
        label: "화장실",
        icon: "restroom",
        available: true,
      },
      {
        id: 3,
        label: "휠체어",
        icon: "wheelchair",
        available: false,
      },
      {
        id: 4,
        label: "수유실",
        icon: "nursing-room",
        available: false,
      },
    ],

    specialties: [
      {
        id: 1,
        label: "송이버섯",
        icon: "vegetable",
        description: "양양 지역에서 생산된 송이버섯",
        imageUrl: "/images/specialties/mushroom.webp",
      },
      {
        id: 2,
        label: "산나물",
        icon: "vegetable",
        description: "계절에 따라 판매되는 신선한 산나물",
        imageUrl: "/images/specialties/wild-greens.webp",
      },
      {
        id: 3,
        label: "제철 과일",
        icon: "fruit",
        description: "지역 농가에서 생산된 제철 과일",
        imageUrl: "/images/specialties/seasonal-fruit.webp",
      },
    ],

    reports: [
      {
        id: 301,
        author: "양양주민",
        content:
          "오전 10시 이전에 방문하면 농산물 종류가 많고 시장도 비교적 한산합니다.",
        rating: 4.5,
        createdAt: "2026-07-27",
        tag: "방문팁",
      },
    ],

    nearbyAttractions: ["낙산사", "양양 남대천", "낙산해수욕장"],
  },

  {
    id: 4,
    name: "동해 북평민속시장",
    address: "강원특별자치도 동해시 대동로 137",
    description:
      "오랜 역사를 가진 오일장으로 수산물과 농축산물을 다양하게 판매합니다.",
    imageUrl: "/images/markets/bukpyeong-market.webp",

    marketType: "오일장",
    marketDays: [3, 8],
    openingHours: "08:00 - 19:00",
    phone: "033-000-0004",
    notice: "오일장이 열리지 않는 날에는 일부 점포만 운영합니다.",

    distanceKm: 18.6,
    isOpenToday: false,
    isFavorite: false,

    location: {
      latitude: 37.4848,
      longitude: 129.1255,
    },

    facilities: [
      {
        id: 1,
        label: "주차장",
        icon: "parking",
        available: true,
      },
      {
        id: 2,
        label: "화장실",
        icon: "restroom",
        available: true,
      },
      {
        id: 3,
        label: "휠체어",
        icon: "wheelchair",
        available: false,
      },
      {
        id: 4,
        label: "수유실",
        icon: "nursing-room",
        available: false,
      },
    ],

    specialties: [
      {
        id: 1,
        label: "활어회",
        icon: "seafood",
        description: "동해안에서 잡은 신선한 활어",
        imageUrl: "/images/specialties/raw-fish.webp",
      },
      {
        id: 2,
        label: "한우",
        icon: "meat",
        description: "지역에서 판매되는 신선한 한우",
        imageUrl: "/images/specialties/korean-beef.webp",
      },
    ],

    reports: [
      {
        id: 401,
        author: "동해산책",
        content:
          "장날 오후에는 주요 먹거리 점포의 재료가 일찍 소진될 수 있습니다.",
        rating: 4.4,
        createdAt: "2026-07-26",
        tag: "먹거리",
      },
    ],

    nearbyAttractions: ["무릉별유천지", "추암해변", "천곡황금박쥐동굴"],
  },
];

export const getMarketById = (id: number) => {
  return markets.find((market) => market.id === id);
};

export const getReportById = (id: number) => {
  for (const market of markets) {
    const report = market.reports.find((report) => report.id === id);

    if (report) {
      return {
        market,
        report,
      };
    }
  }

  return undefined;
};
