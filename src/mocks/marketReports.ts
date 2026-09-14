import type { MarketReport } from "@/src/types/market";

export interface MarketReportMock extends MarketReport {
  marketId: number;
  marketName: string;
}

export const mockMarketReports: MarketReportMock[] = [
  {
    id: 701,
    marketId: 7,
    marketName: "주문진종합시장",
    author: "주문진주민",
    content:
      "오전에는 수산물 점포가 많이 열려 있고 비교적 여유롭게 둘러볼 수 있어요.",
    rating: 4.8,
    createdAt: "2026-09-14",
    tag: "기타",
    isBookmarked: false,
    helpfulCount: 12,
    incorrectCount: 0,
    commentCount: 2,
  },
  {
    id: 702,
    marketId: 7,
    marketName: "주문진종합시장",
    author: "강릉여행중",
    content:
      "시장 주변 주차장이 오후에는 혼잡한 편이라 조금 일찍 방문하는 걸 추천합니다.",
    rating: 4.6,
    createdAt: "2026-09-13",
    tag: "혼잡도",
    isBookmarked: true,
    helpfulCount: 18,
    incorrectCount: 1,
    commentCount: 3,
  },
  {
    id: 703,
    marketId: 7,
    marketName: "주문진종합시장",
    author: "바다좋아",
    content:
      "수산물 종류가 다양하고 시장 안쪽 음식점에서 바로 먹을 수 있는 메뉴도 많았습니다.",
    rating: 4.7,
    createdAt: "2026-09-12",
    tag: "새로운 먹거리",
    imageUrl: "/images/reports/market-report-01.webp",
    isBookmarked: false,
    helpfulCount: 21,
    incorrectCount: 0,
    commentCount: 4,
  },

  {
    id: 201,
    marketId: 2,
    marketName: "강릉중앙시장",
    author: "강릉토박이",
    content:
      "점심시간 이후에는 먹거리 골목이 많이 붐빕니다. 오전 방문이 비교적 여유로워요.",
    rating: 4.8,
    createdAt: "2026-09-11",
    tag: "혼잡도",
    imageUrl: "/images/reports/parking-report.webp",
    isBookmarked: true,
    helpfulCount: 24,
    incorrectCount: 2,
    commentCount: 3,
  },
  {
    id: 202,
    marketId: 2,
    marketName: "강릉중앙시장",
    author: "감자좋아",
    content:
      "감자전과 시장 먹거리 점포 쪽은 대기가 조금 있었지만 회전은 빠른 편이었습니다.",
    rating: 4.7,
    createdAt: "2026-09-10",
    tag: "새로운 먹거리",
    isBookmarked: false,
    helpfulCount: 12,
    incorrectCount: 1,
    commentCount: 0,
  },
];

export function getMarketReports(marketId: number) {
  return mockMarketReports.filter((report) => report.marketId === marketId);
}

export function getReportById(reportId: number) {
  return mockMarketReports.find((report) => report.id === reportId);
}

export function getBookmarkedReports() {
  return mockMarketReports
    .filter((report) => report.isBookmarked)
    .map((report) => ({
      ...report,
      marketId: report.marketId,
      marketName: report.marketName,
    }));
}
