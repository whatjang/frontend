import { ChevronRight, MapPin, Navigation } from "lucide-react";
import Link from "next/link";

import {
  DEFAULT_PRODUCT_ICON,
  PRODUCT_ICONS,
} from "@/src/constants/marketProductIcons";
import type { MarketSearchItem } from "@/src/types/market/index";

interface MarketItemProps {
  market: MarketSearchItem;
}

function isToday(date: string) {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");

  return date === `${year}-${month}-${day}`;
}

export default function MarketItem({ market }: MarketItemProps) {
  const marketDayText =
    market.open_day_numbers.length > 0
      ? `${market.open_day_numbers.join("·")}일 장`
      : "상설장";
  const isMarketDayToday =
    market.open_day_numbers.length > 0 && isToday(market.next_open_date);

  return (
    <li className="min-w-full">
      <article className="group overflow-hidden rounded-3xl bg-white">
        <div className="bg-light-gray relative aspect-2/1 min-h-40">
          {isMarketDayToday && (
            <span className="bg-green absolute top-4 left-4 rounded-full px-3 py-1 text-sm font-bold text-white shadow-sm">
              오늘 장날 (Today)
            </span>
          )}
        </div>

        <div className="flex flex-col gap-2 p-4">
          <div className="flex items-start justify-between gap-3">
            <h3 className="text-green line-clamp-2 min-w-0 flex-1 text-lg font-bold">
              {market.name}
            </h3>

            <span className="border-light-brown/20 bg-light-brown/10 text-light-brown shrink-0 rounded-full border px-2 py-0.5 text-xs font-bold">
              {marketDayText}
            </span>
          </div>

          <div className="flex items-start gap-1">
            <MapPin className="h-4 w-4" strokeWidth={2} aria-hidden="true" />

            <p className="text-xs font-semibold">
              {market.road_address?.trim() || "주소 정보 없음"}
            </p>
          </div>

          <ul
            className="mt-2 flex flex-wrap items-center gap-2"
            aria-label={`${market.name} 대표 상품`}
          >
            {market.products.map((product) => {
              const ProductIcon =
                PRODUCT_ICONS[product] ?? DEFAULT_PRODUCT_ICON;

              return (
                <li
                  key={`${market.market_id}-${product}`}
                  className="flex items-center gap-1 text-xs font-semibold"
                >
                  <ProductIcon
                    className="text-green h-4 w-4"
                    strokeWidth={2}
                    aria-hidden="true"
                  />

                  <span>{product}</span>
                </li>
              );
            })}
          </ul>

          <div className="border-deep-gray text-green mt-2 border-t py-3 font-bold">
            <Link
              href={`/markets/${market.market_id}`}
              className="flex items-center justify-between text-xs"
              aria-label={`${market.name} 상세보기`}
            >
              <span className="flex items-center gap-1">
                {market.distance_km !== null && (
                  <>
                    <Navigation
                      className="h-4 w-4"
                      strokeWidth={2}
                      aria-hidden="true"
                    />
                    {market.distance_km.toFixed(1)}km 인근
                  </>
                )}
              </span>

              <span className="flex items-center">
                상세보기
                <ChevronRight
                  className="ml-1 h-5 w-5 transition-transform duration-200 group-hover:translate-x-1"
                  strokeWidth={2.5}
                  aria-hidden="true"
                />
              </span>
            </Link>
          </div>
        </div>
      </article>
    </li>
  );
}
