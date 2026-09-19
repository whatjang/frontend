"use client";

import { Compass, Star } from "lucide-react";
import Link from "next/link";

import { useMarketFavorite } from "@/src/hooks/market/useMarketFavorite";

interface BottomActionsProps {
  marketId: number;
  isFavorite: boolean;
}

export default function BottomActions({
  marketId,
  isFavorite,
}: BottomActionsProps) {
  const favoriteMutation = useMarketFavorite();

  const handleFavorite = () => {
    if (favoriteMutation.isPending) return;

    favoriteMutation.mutate({
      marketId,
      isFavorite,
    });
  };

  return (
    <div className="flex items-center gap-3 px-5 pb-5">
      <button
        type="button"
        onClick={handleFavorite}
        disabled={favoriteMutation.isPending}
        aria-pressed={isFavorite}
        aria-label={isFavorite ? "즐겨찾기 해제" : "즐겨찾기 추가"}
        className="border-light-gray shadow-light-gray flex size-14 shrink-0 cursor-pointer items-center justify-center rounded-3xl border bg-white shadow-xs disabled:opacity-60"
      >
        <Star
          size={22}
          strokeWidth={2}
          className={isFavorite ? "fill-green text-green" : "text-green"}
        />
      </button>

      <Link
        href={`/tour/${marketId}`}
        className="bg-green shadow-light-gray flex h-14 min-w-0 flex-1 items-center justify-center gap-2 rounded-3xl text-sm font-bold text-white shadow-xs"
      >
        <Compass size={18} strokeWidth={2.2} />
        주변 관광
      </Link>
    </div>
  );
}
