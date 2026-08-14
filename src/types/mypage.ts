export interface MyPageData {
  profile: Profile;
  favoriteMarkets: FavoriteMarket[];
  records: MarketRecord[];
  recentReports: RecentReport[];
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
}

export interface MarketRecord {
  id: number;
  marketName: string;
  visitedAt: string;
  imageUrl: string;
  tags: string[];
}

export interface RecentReport {
  id: number;
  title: string;
  createdAt: string;
  status: "PENDING" | "ACCEPTED" | "REJECTED";
}
