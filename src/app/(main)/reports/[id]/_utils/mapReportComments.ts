import type { ReportComment, ReportDetailComment } from "@/src/types/report";
import { formatDateTime } from "@/src/utils/date";

export function mapReportComments(
  comments: ReportDetailComment[]
): ReportComment[] {
  return comments.flatMap((comment) => {
    const parentComment: ReportComment = {
      id: comment.comment_id,
      author: {
        id: comment.author.member_id,
        nickname: comment.author.nickname,
        profileImage: comment.author.profile_image_url || undefined,
      },
      createdAt: formatDateTime(comment.created_at),
      content: comment.content,
      likeCount: 0,
      isLikedByMe: false,
      isMine: comment.mine,
    };

    const replies: ReportComment[] = comment.replies.map((reply) => ({
      id: reply.comment_id,
      author: {
        id: reply.author.member_id,
        nickname: reply.author.nickname,
        profileImage: reply.author.profile_image_url || undefined,
      },
      createdAt: formatDateTime(reply.created_at),
      content: reply.content,
      likeCount: 0,
      isLikedByMe: false,
      isMine: reply.mine,
      parentId: comment.comment_id,
    }));

    return [parentComment, ...replies];
  });
}
