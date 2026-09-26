"use client";

import { Bookmark } from "lucide-react";

import { useReportBookmark } from "@/src/hooks/report/useReportBookmark";

interface BookmarkButtonProps {
  reportId: number;
  initialBookmarked: boolean;
  variant?: "plain" | "outlined";
}

export function BookmarkButton({
  reportId,
  initialBookmarked,
  variant = "outlined",
}: BookmarkButtonProps) {
  const { mutate: updateBookmark, isPending } = useReportBookmark();

  const handleBookmark = () => {
    updateBookmark({
      reportId,
      isBookmarked: initialBookmarked,
    });
  };

  return (
    <button
      type="button"
      disabled={isPending}
      aria-label={initialBookmarked ? "제보 저장 해제" : "제보 저장"}
      aria-pressed={initialBookmarked}
      onClick={handleBookmark}
      className={`flex shrink-0 cursor-pointer items-center justify-center transition-colors disabled:cursor-default disabled:opacity-60 ${
        variant === "outlined"
          ? `size-9 rounded-full border ${
              initialBookmarked
                ? "border-light-gray bg-light-green text-green"
                : "border-light-gray text-deep-gray bg-white"
            }`
          : `size-6 ${initialBookmarked ? "text-green" : "text-deep-gray"}`
      }`}
    >
      <Bookmark
        size={20}
        strokeWidth={2}
        fill={initialBookmarked ? "currentColor" : "none"}
      />
    </button>
  );
}
