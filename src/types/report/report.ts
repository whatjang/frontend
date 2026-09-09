import type { REPORT_TAGS } from "@/src/constants/report";

export type ReportTag = (typeof REPORT_TAGS)[number];

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
  likeCount: number;
  parentId?: number;
  replyToNickname?: string;
  isLikedByMe?: boolean;
  isMine?: boolean;
}

export interface ReportDetail extends ReportSummary {
  author: ReportAuthor;
  location?: string;
  comments: ReportComment[];
}
