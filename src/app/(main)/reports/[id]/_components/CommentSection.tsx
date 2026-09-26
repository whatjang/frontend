"use client";

import { UserRound } from "lucide-react";
import { useState } from "react";

import type { ReportComment } from "@/src/types/report";

import useReportCommentCreate from "../_hooks/useReportCommentCreate";
import { CommentList } from "./CommentList";

interface CommentSectionProps {
  reportId: number;
  comments: ReportComment[];
  totalCount: number;
}

interface ReplyTarget {
  parentId: number;
  nickname: string;
}

export function CommentSection({
  reportId,
  comments,
  totalCount,
}: CommentSectionProps) {
  const [replyTarget, setReplyTarget] = useState<ReplyTarget | null>(null);
  const [comment, setComment] = useState("");
  const [likedComments, setLikedComments] = useState<Record<number, boolean>>(
    {}
  );

  const createCommentMutation = useReportCommentCreate();

  const commentList = comments.map((comment) => {
    const liked = likedComments[comment.id];

    if (liked === undefined) {
      return comment;
    }

    const likeCountChange = liked === comment.isLikedByMe ? 0 : liked ? 1 : -1;

    return {
      ...comment,
      isLikedByMe: liked,
      likeCount: Math.max(0, comment.likeCount + likeCountChange),
    };
  });

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
    const targetComment = commentList.find(
      (comment) => comment.id === commentId
    );

    if (!targetComment) {
      return;
    }

    setLikedComments((prev) => ({
      ...prev,
      [commentId]: !targetComment.isLikedByMe,
    }));
  };

  const handleSubmit = async () => {
    const content = comment.trim();

    if (!content || createCommentMutation.isPending) {
      return;
    }

    try {
      await createCommentMutation.mutateAsync({
        reportId,
        request: {
          content,
          ...(replyTarget && {
            parent_comment_id: replyTarget.parentId,
          }),
        },
      });

      setComment("");
      setReplyTarget(null);
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "댓글 등록에 실패했습니다.";

      alert(message);
    }
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
          disabled={createCommentMutation.isPending}
          onChange={(event) => setComment(event.target.value)}
          onKeyDown={(event) => {
            if (event.key === "Enter" && !event.nativeEvent.isComposing) {
              void handleSubmit();
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
          disabled={!comment.trim() || createCommentMutation.isPending}
          onClick={() => void handleSubmit()}
          className="text-green shrink-0 cursor-pointer px-2 text-xs font-bold disabled:cursor-default disabled:opacity-30"
        >
          게시
        </button>
      </div>
    </section>
  );
}
