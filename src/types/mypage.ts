import type { ReportSummary } from "./report";

export interface MyPageData {
  profile: Profile;
  bookmarkedReports: BookmarkedReport[];
  reports: MyPageReport[];
}

export interface Profile {
  nickname: string;
  favoriteMarketCount: number;
  reportCount: number;
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
