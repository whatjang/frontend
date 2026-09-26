export interface CreateReportCommentRequest {
  content: string;
  parent_comment_id?: number;
}

export interface CreateReportCommentAuthor {
  member_id: number;
  nickname: string;
  profile_image_url: string | null;
}

export interface CreateReportCommentResult {
  comment_id: number;
  parent_comment_id: number | null;
  author: CreateReportCommentAuthor;
  mine: boolean;
  content: string;
  created_at: string;
  comment_count: number;
}
