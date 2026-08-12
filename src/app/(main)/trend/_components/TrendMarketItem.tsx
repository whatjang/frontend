"use client";

import { useState } from "react";

import Link from "next/link";
import { Heart, MapPin } from "lucide-react";

import type { TrendFood } from "./TrendMarketList";

interface TrendMarketItemProps {
  trend: TrendFood;
  initialFavorite?: boolean;
}

export default function TrendMarketItem({
  trend,
  initialFavorite = false,
}: TrendMarketItemProps) {
  const [isFavorite, setIsFavorite] = useState(initialFavorite);

  return (
    <article className="border-light-gray shadow-light-gray overflow-hidden rounded-xl border bg-white shadow-xs">
      <div className="relative h-46 w-full overflow-hidden">
        <div className="bg-light-gray h-full w-full" />

        <div className="bg-green/90 absolute top-2 left-2 rounded-full px-3 py-1.5 text-xs font-bold text-white">
          TREND #0{trend.rank} {trend.keyword}
        </div>
      </div>

      <div className="p-4">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <p className="text-light-brown text-xs font-medium">
              {trend.title}
            </p>

            <h3 className="text-md font-semibold text-black">
              {trend.marketName}
            </h3>

            <div className="text-deep-gray mt-1 flex items-center gap-1 text-xs">
              <MapPin className="h-3 w-3" />

              <span>{trend.location}</span>
            </div>
          </div>

          <button
            type="button"
            onClick={() => setIsFavorite((prev) => !prev)}
            aria-label={isFavorite ? "즐겨찾기 해제" : "즐겨찾기 추가"}
            aria-pressed={isFavorite}
            className="border-green flex size-7 shrink-0 cursor-pointer items-center justify-center rounded-full border bg-white"
          >
            <Heart
              size={15}
              strokeWidth={2}
              className={isFavorite ? "fill-green text-green" : "text-green"}
            />
          </button>
        </div>

        <div className="mt-2 flex flex-wrap gap-1">
          {trend.tags.map((tag) => (
            <span key={tag} className="text-green text-xs font-medium">
              #{tag}
            </span>
          ))}
        </div>

        <div className="bg-light-gray/30 mt-2 rounded-lg p-3">
          <p className="text-light-brown text-xs font-semibold">
            Why this market?
          </p>

          <p className="text-deep-gray mt-1 text-xs">{trend.reason}</p>
        </div>

        <Link
          href={trend.href}
          className="bg-green mt-4 flex w-full cursor-pointer items-center justify-center rounded-full py-3 text-xs font-semibold text-white"
        >
          시장 상세 보기
        </Link>
      </div>
    </article>
  );
}
