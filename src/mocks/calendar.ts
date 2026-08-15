import type { Market } from "@/src/types/market";

type HomeCalendarMarketMock = Pick<
  Market,
  | "id"
  | "name"
  | "address"
  | "imageUrl"
  | "marketDays"
  | "distanceKm"
  | "specialties"
>;

export const mockHomeCalendarMarkets = [
  {
    id: 1,
    name: "정선아리랑시장",
    address: "강원특별자치도 정선군 정선읍 봉양7길 39",
    imageUrl: "",
    marketDays: [2, 7],
    distanceKm: 2.1,
    specialties: [
      {
        id: 1,
        label: "농산물",
        icon: "vegetable",
      },
      {
        id: 2,
        label: "곤드레",
        icon: "food",
      },
    ],
  },
  {
    id: 2,
    name: "봉평전통시장",
    address: "강원특별자치도 평창군 봉평면 동이장터길 14-1",
    imageUrl: "",
    marketDays: [2, 7],
    distanceKm: 3.4,
    specialties: [
      {
        id: 3,
        label: "메밀",
        icon: "food",
      },
      {
        id: 4,
        label: "농산물",
        icon: "vegetable",
      },
    ],
  },
  {
    id: 3,
    name: "강릉중앙시장",
    address: "강원특별자치도 강릉시 금성로 21",
    imageUrl: "",
    marketDays: [3, 8],
    distanceKm: 1.8,
    specialties: [
      {
        id: 5,
        label: "수산물",
        icon: "seafood",
      },
      {
        id: 6,
        label: "먹거리",
        icon: "food",
      },
    ],
  },
  {
    id: 4,
    name: "속초 중앙시장",
    address: "강원특별자치도 속초시 중앙로147번길 12",
    imageUrl: "",
    marketDays: [5, 10],
    distanceKm: 1.4,
    specialties: [
      {
        id: 7,
        label: "수산물",
        icon: "seafood",
      },
      {
        id: 8,
        label: "닭강정",
        icon: "fried-chicken",
      },
    ],
  },
  {
    id: 5,
    name: "속초관광수산시장",
    address: "강원특별자치도 속초시 중앙로147번길 16",
    imageUrl: "",
    marketDays: [4, 9],
    distanceKm: 2.2,
    specialties: [
      {
        id: 9,
        label: "수산물",
        icon: "seafood",
      },
      {
        id: 10,
        label: "건어물",
        icon: "food",
      },
    ],
  },
  {
    id: 6,
    name: "원주민속풍물시장",
    address: "강원특별자치도 원주시 풍물시장길 30",
    imageUrl: "",
    marketDays: [1, 6],
    distanceKm: 4.2,
    specialties: [
      {
        id: 11,
        label: "농산물",
        icon: "vegetable",
      },
      {
        id: 12,
        label: "먹거리",
        icon: "food",
      },
    ],
  },
] satisfies HomeCalendarMarketMock[];

export function getMockHomeMarketsByDate(isoDate: string) {
  const date = Number(isoDate.split("-")[2]);
  const dayNumber = date % 10;

  return mockHomeCalendarMarkets.filter((market) =>
    market.marketDays.some((marketDay) => marketDay % 10 === dayNumber)
  );
}
