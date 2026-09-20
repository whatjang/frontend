"use client";

import { MapPin } from "lucide-react";
import Link from "next/link";

import { useMarketDetail } from "@/src/hooks/market/useMarketDetail";
import type { CurationTrendWithPrimaryMarket } from "@/src/types/curation/weeklyCuration";

interface TrendMarketItemProps {
  marketId: number;
  trends: CurationTrendWithPrimaryMarket[];
}

export default function TrendMarketItem({
  marketId,
  trends,
}: TrendMarketItemProps) {
  const {
    data: market,
    isPending,
    isError,
  } = useMarketDetail({
    marketId,
  });

  if (isPending) {
    return (
      <article className="border-light-gray h-56 animate-pulse rounded-xl border bg-white" />
    );
  }

  if (isError || !market) {
    return null;
  }

  return (
    <article className="border-light-gray shadow-light-gray overflow-hidden rounded-xl border bg-white shadow-xs">
      <div className="bg-light-gray relative h-46 w-full overflow-hidden">
        <div className="absolute top-2 left-2 flex flex-wrap gap-1.5">
          {trends.map((trend) => (
            <div
              key={trend.keyword_id}
              className="bg-green/90 rounded-full px-3 py-1.5 text-xs font-bold text-white"
            >
              TREND #{String(trend.rank).padStart(2, "0")} {trend.keyword}
            </div>
          ))}
        </div>
      </div>

      <div className="p-4">
        <div>
          <p className="text-light-brown text-xs font-medium">
            {trends.map((trend) => trend.keyword).join(" · ")}
          </p>

          <h3 className="text-md font-semibold text-black">{market.name}</h3>

          <div className="text-deep-gray mt-1 flex items-center gap-1 text-xs">
            <MapPin className="h-3 w-3 shrink-0" aria-hidden="true" />

            <span>{market.road_address || "주소 정보 없음"}</span>
          </div>
        </div>

        {market.products.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-1">
            {market.products.map((product) => (
              <span key={product} className="text-green text-xs font-medium">
                #{product}
              </span>
            ))}
          </div>
        )}

        <Link
          href={`/markets/${market.market_id}`}
          className="bg-green mt-4 flex w-full cursor-pointer items-center justify-center rounded-full py-3 text-xs font-semibold text-white"
        >
          시장 상세 보기
        </Link>
      </div>
    </article>
  );
}
