import type { LucideIcon } from "lucide-react";
import {
  Apple,
  Beef,
  Carrot,
  ChevronRight,
  CookingPot,
  Drumstick,
  Fish,
  MapPin,
  Navigation,
} from "lucide-react";
import Link from "next/link";

import type { MarketSearchItem } from "@/src/types/market/marketSearch";

interface MarketItemProps {
  market: MarketSearchItem;
}

const productIcons: Record<string, LucideIcon> = {
  수산물: Fish,
  닭강정: Drumstick,
  농산물: Carrot,
  축산물: Beef,
  과일: Apple,
  먹거리: CookingPot,
};

function isToday(date: string) {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");

  return date === `${year}-${month}-${day}`;
}

export default function MarketItem({ market }: MarketItemProps) {
  const marketDayText = market.open_day_numbers.join(", ");
  const isOpenToday = isToday(market.next_open_date);

  return (
    <li className="min-w-full">
      <article className="group overflow-hidden rounded-3xl bg-white">
        <div className="bg-light-gray relative aspect-2/1 min-h-40">
          {isOpenToday && (
            <span className="bg-green absolute top-4 left-4 rounded-full px-3 py-1 text-sm font-bold text-white shadow-sm">
              오늘 장날 (Today)
            </span>
          )}
        </div>

        <div className="flex flex-col gap-2 p-4">
          <div className="flex items-center justify-between">
            <h3 className="text-green text-lg font-bold">{market.name}</h3>

            <span className="border-light-brown/20 bg-light-brown/10 text-light-brown rounded-full border px-2 py-0.5 text-xs font-bold">
              {marketDayText}일 주기
            </span>
          </div>

          <div className="flex items-center gap-1">
            <MapPin className="h-4 w-4" strokeWidth={2} aria-hidden="true" />

            <p className="text-xs font-semibold">{market.road_address}</p>
          </div>

          <ul
            className="mt-2 flex flex-wrap items-center gap-2"
            aria-label={`${market.name} 대표 상품`}
          >
            {market.products.map((product) => {
              const ProductIcon = productIcons[product] ?? CookingPot;

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
