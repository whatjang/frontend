"use client";

import { MessageSquareText, ThumbsUp, TriangleAlert } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import { useReportReaction } from "@/src/hooks/report/useReportReaction";
import type { ReportReaction, ReportReactionType } from "@/src/types/report";

interface ReportActionsProps {
  reportId: number;
  helpfulCount: number;
  commentCount: number;
  incorrectCount: number;
  initialReaction?: ReportReaction;
  commentHref?: string;
  className?: string;
}

export function ReportActions({
  reportId,
  helpfulCount,
  commentCount,
  incorrectCount,
  initialReaction = null,
  commentHref,
  className = "",
}: ReportActionsProps) {
  const [reaction, setReaction] = useState<ReportReaction>(initialReaction);
  const [currentHelpfulCount, setCurrentHelpfulCount] = useState(helpfulCount);
  const [currentIncorrectCount, setCurrentIncorrectCount] =
    useState(incorrectCount);

  const { mutate: updateReaction, isPending } = useReportReaction();

  const handleReaction = (nextReaction: ReportReactionType) => {
    updateReaction(
      {
        reportId,
        reaction: nextReaction,
      },
      {
        onSuccess: (result) => {
          setReaction(result.my_reaction);
          setCurrentHelpfulCount(result.helpful_count);
          setCurrentIncorrectCount(result.incorrect_count);
        },
      }
    );
  };

  const handleCommentClick = () => {
    document.getElementById("comments")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const commentClassName =
    "border-light-gray text-green flex shrink-0 cursor-pointer items-center gap-1 rounded-full border px-3 py-2 text-xs font-semibold whitespace-nowrap transition-colors";

  return (
    <div className={`flex scrollbar-none gap-2 overflow-x-auto ${className}`}>
      <button
        type="button"
        disabled={isPending}
        aria-pressed={reaction === "HELPFUL"}
        onClick={() => handleReaction("HELPFUL")}
        className={`flex shrink-0 cursor-pointer items-center gap-1 rounded-full border px-3 py-2 text-xs font-semibold whitespace-nowrap transition-colors disabled:cursor-default disabled:opacity-60 ${
          reaction === "HELPFUL"
            ? "border-green bg-light-green text-green"
            : "border-light-gray text-green"
        }`}
      >
        <ThumbsUp
          size={13}
          strokeWidth={2}
          fill={reaction === "HELPFUL" ? "currentColor" : "none"}
        />

        <span>도움됐어요 {currentHelpfulCount}</span>
      </button>

      <button
        type="button"
        disabled={isPending}
        aria-pressed={reaction === "INCORRECT"}
        onClick={() => handleReaction("INCORRECT")}
        className={`flex shrink-0 cursor-pointer items-center gap-1 rounded-full border px-3 py-2 text-xs font-semibold whitespace-nowrap transition-colors disabled:cursor-default disabled:opacity-60 ${
          reaction === "INCORRECT"
            ? "border-red/20 bg-red/20 text-red"
            : "border-light-gray text-green"
        }`}
      >
        <TriangleAlert
          size={13}
          strokeWidth={2}
          fill={reaction === "INCORRECT" ? "currentColor" : "none"}
        />

        <span>잘못된 정보 {currentIncorrectCount}</span>
      </button>

      {commentHref ? (
        <Link href={commentHref} className={commentClassName}>
          <MessageSquareText size={13} strokeWidth={2} />
          <span>댓글 {commentCount}</span>
        </Link>
      ) : (
        <button
          type="button"
          onClick={handleCommentClick}
          className={commentClassName}
        >
          <MessageSquareText size={13} strokeWidth={2} />
          <span>댓글 {commentCount}</span>
        </button>
      )}
    </div>
  );
}
