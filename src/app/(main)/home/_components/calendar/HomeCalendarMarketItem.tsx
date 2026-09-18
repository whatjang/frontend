"use client";

import { ChevronRight, MapPin, Navigation } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import {
  DEFAULT_PRODUCT_ICON,
  PRODUCT_ICONS,
} from "@/src/constants/marketProductIcons";
import type { MarketOpenOnItem } from "@/src/types/market/index";

interface HomeCalendarMarketItemProps {
  market: MarketOpenOnItem;
}

const MAX_VISIBLE_PRODUCTS = 3;

export default function HomeCalendarMarketItem({
  market,
}: HomeCalendarMarketItemProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const visibleProducts = isExpanded
    ? market.products
    : market.products.slice(0, MAX_VISIBLE_PRODUCTS);

  const hiddenProductCount = market.products.length - MAX_VISIBLE_PRODUCTS;

  return (
    <article className="overflow-hidden rounded-2xl bg-white shadow-sm">
      <div className="flex">
        <div className="bg-light-gray w-[30%]" />

        <div className="flex min-w-0 flex-1 flex-col gap-1 p-3">
          <h4 className="text-green line-clamp-1 text-sm font-bold">
            {market.name}
          </h4>

          <div className="flex items-start gap-1">
            <MapPin
              aria-hidden="true"
              className="text-deep-gray h-4 w-4 shrink-0"
            />

            <p className="text-deep-gray line-clamp-2 text-xs">
              {market.road_address}
            </p>
          </div>

          <div className="my-1 flex flex-wrap gap-1">
            {visibleProducts.map((product) => {
              const ProductIcon =
                PRODUCT_ICONS[product] ?? DEFAULT_PRODUCT_ICON;

              return (
                <span
                  key={product}
                  className="bg-green/5 text-green border-green/10 flex items-center gap-1 rounded-full border px-2 py-1 text-xs font-semibold"
                >
                  <ProductIcon aria-hidden="true" className="size-3" />
                  {product}
                </span>
              );
            })}

            {hiddenProductCount > 0 && (
              <button
                type="button"
                onClick={() => setIsExpanded((prev) => !prev)}
                aria-expanded={isExpanded}
                className="bg-light-gray/50 text-deep-gray flex cursor-pointer items-center rounded-full px-2 py-1 text-xs font-semibold"
              >
                {isExpanded ? "접기" : `+${hiddenProductCount}`}
              </button>
            )}
          </div>

          <div className="border-light-gray flex items-center justify-between border-t pt-2">
            {market.distance_km !== null ? (
              <div className="text-green flex items-center gap-1">
                <Navigation aria-hidden="true" className="h-4 w-4" />

                <span className="text-xs font-semibold">
                  {market.distance_km}km
                </span>
              </div>
            ) : (
              <div />
            )}

            <Link
              href={`/markets/${market.market_id}`}
              className="text-green flex items-center gap-0.5 text-xs font-semibold"
            >
              상세보기
              <ChevronRight aria-hidden="true" className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
