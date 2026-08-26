"use client";

import { useState } from "react";
import { Bookmark } from "lucide-react";

interface BookmarkButtonProps {
  initialBookmarked: boolean;
  variant?: "plain" | "outlined";
}

export function BookmarkButton({
  initialBookmarked,
  variant = "outlined",
}: BookmarkButtonProps) {
  const [isBookmarked, setIsBookmarked] = useState(initialBookmarked);

  const handleBookmark = () => {
    // TODO: 북마크 API 연결
    setIsBookmarked((prev) => !prev);
  };

  return (
    <button
      type="button"
      aria-label={isBookmarked ? "제보 저장 해제" : "제보 저장"}
      aria-pressed={isBookmarked}
      onClick={handleBookmark}
      className={`flex shrink-0 cursor-pointer items-center justify-center transition-colors ${
        variant === "outlined"
          ? `size-9 rounded-full border ${
              isBookmarked
                ? "border-light-gray bg-light-green text-green"
                : "border-light-gray text-deep-gray bg-white"
            }`
          : `size-6 ${isBookmarked ? "text-green" : "text-deep-gray"}`
      }`}
    >
      <Bookmark
        size={20}
        strokeWidth={2}
        fill={isBookmarked ? "currentColor" : "none"}
      />
    </button>
  );
}
