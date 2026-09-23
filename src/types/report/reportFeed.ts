export type ReportFeedCategory =
  "ALL" | "CROWD" | "OPERATION" | "NEW_FOOD" | "EVENT_FESTIVAL" | "OTHER";

export type ReportItemCategory = Exclude<ReportFeedCategory, "ALL">;

export interface ReportFeedParams {
  keyword?: string;
  category?: ReportFeedCategory;
  page?: number;
}

export interface ReportFeedAuthor {
  member_id: number;
  nickname: string;
  profile_image_url: string;
}

export interface ReportFeedItem {
  report_id: number;
  market_id: number;
  market_name: string;

  author: ReportFeedAuthor;

  rating: number;
  category: ReportItemCategory;
  content: string;

  image_urls: string[];

  created_at: string;

  helpful_count: number;
  incorrect_count: number;
  comment_count: number;

  bookmarked: boolean;
}

export interface ReportFeedResult {
  total_count: number;
  page: number;
  size: number;
  has_next: boolean;
  reports: ReportFeedItem[];
}
