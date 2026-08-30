"use client";

import Link from "next/link";
import { useState } from "react";

import { Compass, Heart } from "lucide-react";

interface BottomActionsProps {
  marketId: number;
  initialFavorite?: boolean;
}

export default function BottomActions({
  marketId,
  initialFavorite = false,
}: BottomActionsProps) {
  const [isFavorite, setIsFavorite] = useState(initialFavorite);

  return (
    <div className="flex items-center gap-3 px-5 pb-5">
      <button
        type="button"
        onClick={() => setIsFavorite((prev) => !prev)}
        aria-label={isFavorite ? "즐겨찾기 해제" : "즐겨찾기 추가"}
        className="border-light-gray shadow-light-gray flex size-14 shrink-0 cursor-pointer items-center justify-center rounded-3xl border bg-white shadow-xs"
      >
        <Heart
          size={22}
          strokeWidth={2}
          className={isFavorite ? "fill-green text-green" : "text-green"}
        />
      </button>

      <Link
        href={`/markets/${marketId}/tour`}
        className="bg-green shadow-light-gray flex h-14 min-w-0 flex-1 items-center justify-center gap-2 rounded-3xl text-sm font-bold text-white shadow-xs"
      >
        <Compass size={18} strokeWidth={2.2} />
        주변 관광 동선
      </Link>
    </div>
  );
}
