import { ThumbsUp } from "lucide-react";

import type { ReportComment } from "@/src/types/report";

import { EditDeleteMenu } from "./EditDeleteMenu";

interface CommentItemProps {
  comment: ReportComment;
  onReply: (parentId: number, nickname: string) => void;
  onLike: (commentId: number) => void;
}

export function CommentItem({ comment, onReply, onLike }: CommentItemProps) {
  return (
    <li
      className={`border-light-gray flex gap-2 rounded-2xl border bg-white/40 p-3 ${
        comment.parentId ? "ml-8" : ""
      }`}
    >
      <div className="bg-light-gray h-5 w-5 rounded-full" />

      <div className="flex min-w-0 flex-1 flex-col gap-1">
        <div className="flex items-start">
          <div className="flex flex-col">
            <div className="flex items-center">
              <strong className="text-xs font-bold text-black">
                {comment.author.nickname}
              </strong>

              {comment.isMine && (
                <span className="text-green ml-1 text-xs font-semibold">
                  나
                </span>
              )}
            </div>

            <span className="text-deep-gray text-xs">{comment.createdAt}</span>
          </div>

          <div className="ml-auto">
            <EditDeleteMenu
              onEdit={() => {
                // 추후 댓글 수정 UI/API 연결
                console.log("댓글 수정", comment.id);
              }}
              onDelete={() => {
                // 추후 댓글 삭제 API 연결
                console.log("댓글 삭제", comment.id);
              }}
            />
          </div>
        </div>

        <p className="text-xs text-black">
          {comment.replyToNickname && (
            <span className="text-green mr-1 font-semibold">
              @{comment.replyToNickname}
            </span>
          )}

          {comment.content}
        </p>

        <div className="text-deep-gray mt-1 flex items-center gap-3 text-xs">
          <button
            type="button"
            aria-pressed={comment.isLikedByMe}
            onClick={() => onLike(comment.id)}
            className={`flex cursor-pointer items-center gap-1 ${
              comment.isLikedByMe ? "text-green" : ""
            }`}
          >
            <ThumbsUp
              size={11}
              strokeWidth={2}
              fill={comment.isLikedByMe ? "currentColor" : "none"}
            />

            <span>{comment.likeCount}</span>
          </button>

          <button
            type="button"
            onClick={() =>
              onReply(comment.parentId ?? comment.id, comment.author.nickname)
            }
            className="cursor-pointer"
          >
            답글 달기
          </button>
        </div>
      </div>
    </li>
  );
}
