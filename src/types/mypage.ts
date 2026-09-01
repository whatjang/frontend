import type { ReportSummary } from "./report";
import type { TourPlace } from "./tour";

export interface MyPageData {
  profile: Profile;
  favoriteMarkets: FavoriteMarket[];
  bookmarkedReports: BookmarkedReport[];
  likedPlaces: TourPlace[];
  reports: MyPageReport[];
}

export interface Profile {
  nickname: string;
  favoriteMarketCount: number;
  reportCount: number;
}

export interface FavoriteMarket {
  id: number;
  marketName: string;
  marketDays: string;
  dDay: string;
  notificationEnabled: boolean;
}

export interface BookmarkedReport extends ReportSummary {
  marketId: number;
  marketName: string;
}

export interface MyPageReport extends Omit<
  ReportSummary,
  "isBookmarked" | "helpfulCount" | "incorrectCount" | "commentCount"
> {
  marketId: number;
  marketName: string;
}
