"use client";

import { Bookmark } from "lucide-react";

import { useReportBookmark } from "@/src/hooks/report/useReportBookmark";

interface BookmarkButtonProps {
  reportId: number;
  bookmarked: boolean;
  variant?: "plain" | "outlined";
}

export function BookmarkButton({
  reportId,
  bookmarked,
  variant = "outlined",
}: BookmarkButtonProps) {
  const { mutate: updateBookmark, isPending } = useReportBookmark();

  const handleBookmark = () => {
    updateBookmark({
      reportId,
      bookmarked,
    });
  };

  return (
    <button
      type="button"
      disabled={isPending}
      aria-label={bookmarked ? "제보 저장 해제" : "제보 저장"}
      aria-pressed={bookmarked}
      onClick={handleBookmark}
      className={`flex shrink-0 cursor-pointer items-center justify-center transition-colors disabled:cursor-default disabled:opacity-60 ${
        variant === "outlined"
          ? `size-9 rounded-full border ${
              bookmarked
                ? "border-light-gray bg-light-green text-green"
                : "border-light-gray text-deep-gray bg-white"
            }`
          : `size-6 ${bookmarked ? "text-green" : "text-deep-gray"}`
      }`}
    >
      <Bookmark
        size={20}
        strokeWidth={2}
        fill={bookmarked ? "currentColor" : "none"}
      />
    </button>
  );
}
