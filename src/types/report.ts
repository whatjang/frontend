export type ReportTag =
  "혼잡도" | "운영 여부" | "새로운 먹거리" | "이벤트/축제" | "기타";

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
  isBookmarked: boolean;
  helpfulCount: number;
  commentCount: number;
  incorrectCount: number;
  comments: ReportComment[];
}
