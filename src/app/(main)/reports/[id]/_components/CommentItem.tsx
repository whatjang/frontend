import type { ReportComment } from "@/src/types/report";

import { DeleteMenu } from "./DeleteMenu";

interface CommentItemProps {
  comment: ReportComment;
  onReply: (parentId: number, nickname: string) => void;
  onDelete: (commentId: number) => void;
}

export function CommentItem({ comment, onReply, onDelete }: CommentItemProps) {
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

          {comment.isMine && (
            <div className="ml-auto">
              <DeleteMenu
                onDelete={() => {
                  onDelete(comment.id);
                }}
              />
            </div>
          )}
        </div>

        <p className="text-xs text-black">
          {comment.replyToNickname && (
            <span className="text-green mr-1 font-semibold">
              @{comment.replyToNickname}
            </span>
          )}

          {comment.content}
        </p>

        <div className="text-deep-gray mt-1 flex items-center text-xs">
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
