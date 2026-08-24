"use client";

import { useState } from "react";
import { MessageSquareText, ThumbsUp, TriangleAlert } from "lucide-react";

interface ReportActionsProps {
  helpfulCount: number;
  commentCount: number;
  incorrectCount: number;
}

type Reaction = "helpful" | "incorrect" | null;

export function ReportActions({
  helpfulCount,
  commentCount,
  incorrectCount,
}: ReportActionsProps) {
  const [reaction, setReaction] = useState<Reaction>(null);

  const currentHelpfulCount = helpfulCount + (reaction === "helpful" ? 1 : 0);

  const currentIncorrectCount =
    incorrectCount + (reaction === "incorrect" ? 1 : 0);

  const handleHelpful = () => {
    setReaction((prev) => (prev === "helpful" ? null : "helpful"));
  };

  const handleIncorrect = () => {
    setReaction((prev) => (prev === "incorrect" ? null : "incorrect"));
  };

  const handleCommentClick = () => {
    document.getElementById("comments")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className="flex scrollbar-none gap-2 overflow-x-auto pl-5">
      <button
        type="button"
        aria-pressed={reaction === "helpful"}
        onClick={handleHelpful}
        className={`flex shrink-0 cursor-pointer items-center gap-1 rounded-full border px-3 py-2 text-xs font-semibold whitespace-nowrap transition-colors ${
          reaction === "helpful"
            ? "border-green bg-light-green text-green"
            : "border-light-gray text-green"
        }`}
      >
        <ThumbsUp
          size={13}
          strokeWidth={2}
          fill={reaction === "helpful" ? "currentColor" : "none"}
        />

        <span>도움됐어요 {currentHelpfulCount}</span>
      </button>

      <button
        type="button"
        aria-pressed={reaction === "incorrect"}
        onClick={handleIncorrect}
        className={`flex shrink-0 cursor-pointer items-center gap-1 rounded-full border px-3 py-2 text-xs font-semibold whitespace-nowrap transition-colors ${
          reaction === "incorrect"
            ? "border-red/20 text-red bg-red/20"
            : "border-light-gray text-green"
        }`}
      >
        <TriangleAlert
          size={13}
          strokeWidth={2}
          fill={reaction === "incorrect" ? "currentColor" : "none"}
        />

        <span>잘못된 정보 {currentIncorrectCount}</span>
      </button>

      <button
        type="button"
        onClick={handleCommentClick}
        className="border-light-gray text-green hover:bg-gray/50 flex shrink-0 cursor-pointer items-center gap-1 rounded-full border px-3 py-2 text-xs font-semibold whitespace-nowrap transition-colors"
      >
        <MessageSquareText size={13} strokeWidth={2} />

        <span>댓글 {commentCount}</span>
      </button>
    </div>
  );
}
