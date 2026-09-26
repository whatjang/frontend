import type { REPORT_CATEGORY_MAP, REPORT_TAGS } from "@/src/constants/report";

export type ReportTag = (typeof REPORT_TAGS)[number];

export type ReportCategory = (typeof REPORT_CATEGORY_MAP)[ReportTag];

export interface CreateReportRequest {
  rating: number;
  category: ReportCategory;
  content: string;
}

export interface CreateReportResult {
  rating: number;
  category: ReportCategory;
  content: string;
}

export interface ReportSummary {
  id: number;
  content: string;
  rating: number;
  createdAt: string;
  tag: ReportTag;
  imageUrl?: string;

  isBookmarked: boolean;
  helpfulCount: number;
  incorrectCount: number;
  commentCount: number;
}

export interface ReportAuthor {
  id: number;
  nickname: string;
  profileImage?: string;
}

export interface ReportComment {
  id: number;
  author: ReportAuthor;
  createdAt: string;
  content: string;
  parentId?: number;
  replyToNickname?: string;
  isMine?: boolean;
}

export interface ReportDetail extends ReportSummary {
  author: ReportAuthor;
  location?: string;
  comments: ReportComment[];
}
