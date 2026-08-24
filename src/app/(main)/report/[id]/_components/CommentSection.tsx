"use client";

import { useState } from "react";
import { UserRound } from "lucide-react";

import type { ReportComment } from "@/src/types/report";

import { CommentList } from "./CommentList";

interface CommentSectionProps {
  comments: ReportComment[];
  totalCount: number;
  onCommentCreated: () => void;
}

interface ReplyTarget {
  parentId: number;
  nickname: string;
}

export function CommentSection({
  comments,
  totalCount,
  onCommentCreated,
}: CommentSectionProps) {
  const [commentList, setCommentList] = useState<ReportComment[]>(comments);

  const [replyTarget, setReplyTarget] = useState<ReplyTarget | null>(null);

  const [comment, setComment] = useState("");

  const handleReply = (parentId: number, nickname: string) => {
    setReplyTarget({
      parentId,
      nickname,
    });

    requestAnimationFrame(() => {
      document.getElementById("comment-input")?.focus();
    });
  };

  const handleCancelReply = () => {
    setReplyTarget(null);
  };

  const handleLike = (commentId: number) => {
    setCommentList((prev) =>
      prev.map((comment) => {
        if (comment.id !== commentId) {
          return comment;
        }

        const nextLiked = !comment.isLikedByMe;

        return {
          ...comment,
          isLikedByMe: nextLiked,
          likeCount: nextLiked
            ? comment.likeCount + 1
            : Math.max(0, comment.likeCount - 1),
        };
      })
    );
  };

  const handleSubmit = () => {
    const content = comment.trim();

    if (!content) {
      return;
    }

    // 추후 댓글 등록 API 응답값으로 교체
    const newComment: ReportComment = {
      id: Date.now(),

      author: {
        id: 999,
        nickname: "나",
      },

      createdAt: "방금 전",

      content,

      likeCount: 0,

      isLikedByMe: false,
      isMine: true,

      ...(replyTarget && {
        parentId: replyTarget.parentId,
        replyToNickname: replyTarget.nickname,
      }),
    };

    setCommentList((prev) => {
      if (!replyTarget) {
        return [...prev, newComment];
      }

      const parentIndex = prev.findIndex(
        (item) => item.id === replyTarget.parentId
      );

      if (parentIndex === -1) {
        return [...prev, newComment];
      }

      let insertIndex = parentIndex + 1;

      while (
        insertIndex < prev.length &&
        prev[insertIndex].parentId === replyTarget.parentId
      ) {
        insertIndex += 1;
      }

      return [
        ...prev.slice(0, insertIndex),
        newComment,
        ...prev.slice(insertIndex),
      ];
    });

    onCommentCreated();

    setComment("");
    setReplyTarget(null);
  };

  return (
    <section id="comments" className="flex flex-col gap-2 px-5">
      <h2 className="text-sm font-bold text-black">댓글 {totalCount}</h2>

      <CommentList
        comments={commentList}
        onReply={handleReply}
        onLike={handleLike}
      />

      {replyTarget && (
        <div className="text-deep-gray flex items-center gap-2 px-2 text-xs">
          <span>@{replyTarget.nickname}님에게 답글 작성 중</span>

          <button
            type="button"
            onClick={handleCancelReply}
            className="text-green cursor-pointer font-semibold"
          >
            취소
          </button>
        </div>
      )}

      <div className="border-light-gray mt-3 flex items-center gap-2 rounded-full border bg-white/30 px-1 py-1">
        <div className="bg-light-green text-green border-light-gray flex h-8 w-8 shrink-0 items-center justify-center rounded-full border">
          <UserRound size={15} strokeWidth={2} />
        </div>

        <input
          id="comment-input"
          type="text"
          value={comment}
          onChange={(event) => setComment(event.target.value)}
          onKeyDown={(event) => {
            if (event.key === "Enter" && !event.nativeEvent.isComposing) {
              handleSubmit();
            }
          }}
          placeholder={
            replyTarget
              ? `@${replyTarget.nickname}님에게 답글 남기기`
              : "댓글을 남겨주세요."
          }
          className="placeholder:text-deep-gray min-w-0 flex-1 bg-transparent text-xs text-black outline-none"
        />

        <button
          type="button"
          disabled={!comment.trim()}
          onClick={handleSubmit}
          className="text-green shrink-0 cursor-pointer px-2 text-xs font-bold disabled:cursor-default disabled:opacity-30"
        >
          게시
        </button>
      </div>
    </section>
  );
}
