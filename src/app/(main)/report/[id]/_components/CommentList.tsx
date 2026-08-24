import type { ReportComment } from "@/src/types/report";

import { CommentItem } from "./CommentItem";

interface CommentListProps {
  comments: ReportComment[];

  onReply: (parentId: number, nickname: string) => void;

  onLike: (commentId: number) => void;
}

export function CommentList({ comments, onReply, onLike }: CommentListProps) {
  if (comments.length === 0) {
    return (
      <div className="text-deep-gray text-center text-xs">
        아직 댓글이 없습니다.
      </div>
    );
  }

  return (
    <ul className="flex flex-col gap-3">
      {comments.map((comment) => (
        <CommentItem
          key={comment.id}
          comment={comment}
          onReply={onReply}
          onLike={onLike}
        />
      ))}
    </ul>
  );
}
