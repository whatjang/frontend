import type { Market } from "@/src/types/market";

export const markets: Market[] = [
  {
    id: 1,
    name: "속초 중앙시장",
    address: "강원특별자치도 속초시 중앙로 147번길 12",
    marketDays: [5, 12],
    distanceKm: 1.4,
    isOpenToday: true,
    specialties: [
      {
        label: "수산물 (Seafood)",
        icon: "seafood",
      },
      {
        label: "닭강정 (Fried Chicken)",
        icon: "fried-chicken",
      },
    ],
  },
  {
    id: 2,
    name: "강릉 중앙시장",
    address: "강원특별자치도 강릉시 금성로 21",
    marketDays: [2, 7],
    distanceKm: 4.8,
    isOpenToday: false,
    specialties: [
      {
        label: "건어물 (Dried Seafood)",
        icon: "seafood",
      },
      {
        label: "감자전 (Potato Pancake)",
        icon: "food",
      },
    ],
  },
  {
    id: 3,
    name: "양양 전통시장",
    address: "강원특별자치도 양양군 양양읍 남문5길 9",
    marketDays: [4, 9],
    distanceKm: 11.2,
    isOpenToday: true,
    specialties: [
      {
        label: "송이버섯 (Mushroom)",
        icon: "vegetable",
      },
      {
        label: "산나물 (Wild Greens)",
        icon: "vegetable",
      },
    ],
  },
  {
    id: 4,
    name: "동해 북평민속시장",
    address: "강원특별자치도 동해시 대동로 137",
    marketDays: [3, 8],
    distanceKm: 18.6,
    isOpenToday: false,
    specialties: [
      {
        label: "활어회 (Raw Fish)",
        icon: "seafood",
      },
      {
        label: "한우 (Korean Beef)",
        icon: "meat",
      },
    ],
  },
];
