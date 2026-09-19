import { MapPin } from "lucide-react";
import Link from "next/link";

import type { RecommendedMarket } from "@/src/types/curation";

interface TrendMarketItemProps {
  market: RecommendedMarket;
}

export default function TrendMarketItem({ market }: TrendMarketItemProps) {
  return (
    <article className="border-light-gray shadow-light-gray overflow-hidden rounded-xl border bg-white shadow-xs">
      <div className="bg-light-gray relative h-46 w-full overflow-hidden">
        <div className="bg-green/90 absolute top-2 left-2 rounded-full px-3 py-1.5 text-xs font-bold text-white">
          TREND #{String(market.trend_rank).padStart(2, "0")}{" "}
          {market.trend_keyword}
        </div>
      </div>

      <div className="p-4">
        <div>
          <p className="text-light-brown text-xs font-medium">
            {market.trend_keyword}
          </p>

          <h3 className="text-md font-semibold text-black">{market.name}</h3>

          <div className="text-deep-gray mt-1 flex items-center gap-1 text-xs">
            <MapPin className="h-3 w-3 shrink-0" aria-hidden="true" />

            <span>{market.road_address || "주소 정보 없음"}</span>
          </div>
        </div>

        {market.tags.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-1">
            {market.tags.map((tag) => (
              <span key={tag} className="text-green text-xs font-medium">
                #{tag}
              </span>
            ))}
          </div>
        )}

        {market.recommendation_reason && (
          <div className="bg-light-gray/30 mt-2 rounded-lg p-3">
            <p className="text-light-brown text-xs font-semibold">
              Why this market?
            </p>

            <p className="text-deep-gray mt-1 text-xs">
              {market.recommendation_reason}
            </p>
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
