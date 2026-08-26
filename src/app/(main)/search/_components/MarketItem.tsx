import Link from "next/link";
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

import type { Market, MarketSpecialtyIcon } from "@/src/types/market";

interface MarketItemProps {
  market: Market;
}

const specialtyIcons: Record<MarketSpecialtyIcon, LucideIcon> = {
  seafood: Fish,
  "fried-chicken": Drumstick,
  vegetable: Carrot,
  meat: Beef,
  fruit: Apple,
  food: CookingPot,
};

export default function MarketItem({ market }: MarketItemProps) {
  const marketDayText = market.marketDays.join(", ");

  return (
    <li className="min-w-full">
      <article className="group overflow-hidden rounded-3xl bg-white">
        <div className="bg-light-gray relative aspect-2/1 min-h-40">
          {market.isOpenToday && (
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

            <p className="text-xs font-semibold">{market.address}</p>
          </div>

          <ul
            className="mt-2 flex flex-wrap items-center gap-2"
            aria-label={`${market.name} 대표 상품`}
          >
            {market.specialties.map((specialty) => {
              const SpecialtyIcon = specialtyIcons[specialty.icon];

              return (
                <li
                  key={`${market.id}-${specialty.label}`}
                  className="flex items-center gap-1 text-xs font-semibold"
                >
                  <SpecialtyIcon
                    className="text-green h-4 w-4"
                    strokeWidth={2}
                    aria-hidden="true"
                  />

                  <span>{specialty.label}</span>
                </li>
              );
            })}
          </ul>

          <div className="border-deep-gray text-green mt-2 border-t py-3 font-bold">
            <Link
              href={`/markets/${market.id}`}
              className="flex items-center justify-between text-xs"
              aria-label={`${market.name} 상세보기`}
            >
              <span className="flex items-center gap-1">
                <Navigation
                  className="h-4 w-4"
                  strokeWidth={2}
                  aria-hidden="true"
                />
                {market.distanceKm.toFixed(1)}km 인근
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
