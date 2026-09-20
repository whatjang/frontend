"use client";

import { MapPin } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import {
  DEFAULT_PRODUCT_ICON,
  PRODUCT_ICONS,
} from "@/src/constants/marketProductIcons";
import { useMarketDetail } from "@/src/hooks/market/useMarketDetail";
import type { CurationTrendWithPrimaryMarket } from "@/src/types/curation/weeklyCuration";

interface TrendMarketItemProps {
  marketId: number;
  trends: CurationTrendWithPrimaryMarket[];
}

const DEFAULT_VISIBLE_PRODUCT_COUNT = 3;

export default function TrendMarketItem({
  marketId,
  trends,
}: TrendMarketItemProps) {
  const [isProductsExpanded, setIsProductsExpanded] = useState(false);

  const {
    data: market,
    isPending,
    isError,
  } = useMarketDetail({
    marketId,
  });

  if (isPending) {
    return (
      <article className="border-light-gray h-56 animate-pulse rounded-3xl border bg-white" />
    );
  }

  if (isError || !market) {
    return null;
  }

  const marketDayText =
    market.open_day_numbers.length > 0
      ? `${market.open_day_numbers.join("·")}일 장`
      : "상설장";

  const hasMoreProducts =
    market.products.length > DEFAULT_VISIBLE_PRODUCT_COUNT;

  const visibleProducts = isProductsExpanded
    ? market.products
    : market.products.slice(0, DEFAULT_VISIBLE_PRODUCT_COUNT);

  const hiddenProductCount =
    market.products.length - DEFAULT_VISIBLE_PRODUCT_COUNT;

  return (
    <article className="border-light-gray overflow-hidden rounded-3xl border bg-white shadow-xs">
      <div className="bg-light-gray relative h-44 w-full overflow-hidden">
        <div className="absolute top-3 left-3 flex flex-col items-start gap-1.5">
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

      <div className="p-3">
        <div>
          <div className="flex items-start justify-between gap-3">
            <h3 className="min-w-0 flex-1 text-xl font-bold text-black">
              {market.name}
            </h3>

            <span className="border-light-brown/20 bg-light-brown/10 text-light-brown shrink-0 rounded-full border px-2 py-0.5 text-xs font-bold">
              {marketDayText}
            </span>
          </div>

          <div className="text-deep-gray mt-1 flex items-start gap-1.5 text-xs">
            <MapPin
              className="size-4 shrink-0"
              strokeWidth={2}
              aria-hidden="true"
            />

            <span>{market.road_address || "주소 정보 없음"}</span>
          </div>
        </div>

        {market.products.length > 0 && (
          <ul className="mt-3 flex flex-wrap gap-2">
            {visibleProducts.map((product) => {
              const ProductIcon =
                PRODUCT_ICONS[product] ?? DEFAULT_PRODUCT_ICON;

              return (
                <li
                  key={product}
                  className="border-green/15 bg-green/5 text-green flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-semibold"
                >
                  <ProductIcon size={12} strokeWidth={2} aria-hidden="true" />

                  <span>{product}</span>
                </li>
              );
            })}

            {hasMoreProducts && (
              <li>
                <button
                  type="button"
                  aria-expanded={isProductsExpanded}
                  onClick={() => setIsProductsExpanded((prev) => !prev)}
                  className="bg-light-gray/60 text-deep-gray flex min-h-8 cursor-pointer items-center rounded-full px-3 text-xs font-semibold"
                >
                  {isProductsExpanded ? "접기" : `+${hiddenProductCount}`}
                </button>
              </li>
            )}
          </ul>
        )}

        <Link
          href={`/markets/${market.market_id}`}
          className="bg-green mt-3 flex w-full items-center justify-center rounded-full py-3 text-xs font-semibold text-white"
        >
          시장 상세 보기
        </Link>
      </div>
    </article>
  );
}
