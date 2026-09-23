import type { ReportItemCategory } from "./reportFeed";

export type ReportReaction = "HELPFUL" | "INCORRECT" | null;

export interface ReportDetailAuthor {
  member_id: number;
  nickname: string;
  profile_image_url: string;
}

export interface ReportDetailMarket {
  market_id: number;
  market_name: string;
}

export interface ReportDetailReply {
  comment_id: number;
  author: ReportDetailAuthor;
  mine: boolean;
  content: string;
  created_at: string;
}

export interface ReportDetailComment {
  comment_id: number;
  author: ReportDetailAuthor;
  mine: boolean;
  content: string;
  created_at: string;
  replies: ReportDetailReply[];
}

export interface ReportDetailResult {
  report_id: number;
  author: ReportDetailAuthor;
  mine: boolean;
  market: ReportDetailMarket;
  rating: number;
  category: ReportItemCategory;
  content: string;
  image_urls: string[];
  created_at: string;
  helpful_count: number;
  incorrect_count: number;
  my_reaction: ReportReaction;
  comment_count: number;
  bookmarked: boolean;
  comments: ReportDetailComment[];
}
