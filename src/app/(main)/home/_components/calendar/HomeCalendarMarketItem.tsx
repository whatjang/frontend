import { ChevronRight, MapPin, Navigation } from "lucide-react";
import Link from "next/link";

import type { Market } from "@/src/types/market";

export type HomeCalendarMarket = Pick<
  Market,
  | "id"
  | "name"
  | "address"
  | "imageUrl"
  | "marketDays"
  | "distanceKm"
  | "specialties"
>;

interface HomeCalendarMarketItemProps {
  market: HomeCalendarMarket;
}

export default function HomeCalendarMarketItem({
  market,
}: HomeCalendarMarketItemProps) {
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
              {market.address}
            </p>
          </div>

          <div className="my-1 flex flex-wrap gap-1">
            {market.specialties.map((specialty) => (
              <span
                key={specialty.id}
                className="bg-green/5 text-green border-green/10 rounded-full border px-2 py-1 text-xs font-semibold"
              >
                {specialty.label}
              </span>
            ))}
          </div>

          <div className="border-light-gray flex items-center justify-between border-t pt-2">
            <div className="text-green flex items-center gap-1">
              <Navigation aria-hidden="true" className="h-4 w-4" />

              <span className="text-xs font-semibold">
                {market.distanceKm}km
              </span>
            </div>

            <Link
              href={`/markets/${market.id}`}
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
