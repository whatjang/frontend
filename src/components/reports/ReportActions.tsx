"use client";

import { MessageSquareText, ThumbsUp, TriangleAlert } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import type { ReportReaction } from "@/src/types/report";

interface ReportActionsProps {
  helpfulCount: number;
  commentCount: number;
  incorrectCount: number;
  initialReaction?: ReportReaction;
  commentHref?: string;
  className?: string;
}

export function ReportActions({
  helpfulCount,
  commentCount,
  incorrectCount,
  initialReaction = null,
  commentHref,
  className = "",
}: ReportActionsProps) {
  const [reaction, setReaction] = useState<ReportReaction>(initialReaction);

  const currentHelpfulCount =
    helpfulCount +
    (reaction === "HELPFUL" ? 1 : 0) -
    (initialReaction === "HELPFUL" ? 1 : 0);

  const currentIncorrectCount =
    incorrectCount +
    (reaction === "INCORRECT" ? 1 : 0) -
    (initialReaction === "INCORRECT" ? 1 : 0);

  const handleHelpful = () => {
    setReaction((prev) => (prev === "HELPFUL" ? null : "HELPFUL"));
  };

  const handleIncorrect = () => {
    setReaction((prev) => (prev === "INCORRECT" ? null : "INCORRECT"));
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
        aria-pressed={reaction === "HELPFUL"}
        onClick={handleHelpful}
        className={`flex shrink-0 cursor-pointer items-center gap-1 rounded-full border px-3 py-2 text-xs font-semibold whitespace-nowrap transition-colors ${
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
        aria-pressed={reaction === "INCORRECT"}
        onClick={handleIncorrect}
        className={`flex shrink-0 cursor-pointer items-center gap-1 rounded-full border px-3 py-2 text-xs font-semibold whitespace-nowrap transition-colors ${
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
