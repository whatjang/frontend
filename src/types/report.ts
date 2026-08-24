export interface ReportSummary {
  id: number;
  createdAt: string;
  tag?: string;
  rating: number;
  content: string;
  imageUrl?: string;
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
