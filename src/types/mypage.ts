import type { ReportSummary } from "./report";

export interface MyPageData {
  profile: Profile;
  favoriteMarkets: FavoriteMarket[];
  records: MarketRecord[];
  reports: MyPageReport[];
}

export interface Profile {
  nickname: string;
  recordedMarketCount: number;
  reportCount: number;
}

export interface FavoriteMarket {
  id: number;
  marketName: string;
  marketDays: string;
  dDay: string;
  notificationEnabled: boolean;
}

export interface MarketRecord {
  id: number;
  marketName: string;
  visitedAt: string;
  imageUrl: string;
  tags: string[];
  memo: string;
}

export interface MyPageReport extends ReportSummary {
  marketId: number;
  marketName: string;
}
