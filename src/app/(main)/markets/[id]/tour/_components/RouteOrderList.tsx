import { ChevronRight } from "lucide-react";

import type { Market } from "@/src/types/market";
import type { TourPlace } from "@/src/types/tour";

import RouteOrderItem from "./RouteOrderItem";

interface RouteOrderListProps {
  market: Market;
  places: TourPlace[];
  onSelectPlace: (placeId: number) => void;
}

export default function RouteOrderList({
  market,
  places,
  onSelectPlace,
}: RouteOrderListProps) {
  return (
    <section className="flex flex-col gap-2">
      <h2 className="text-green text-sm font-bold">추천 이동 순서</h2>

      <div className="flex scrollbar-none items-center gap-2 overflow-x-auto">
        <RouteOrderItem order={1} name={market.name} label="출발지" isStart />

        {places.map((place, index) => (
          <div key={place.id} className="flex items-center gap-2">
            <ChevronRight className="text-deep-gray size-4" />

            <RouteOrderItem
              order={index + 2}
              image={place.image}
              name={place.name}
              label={place.categoryLabel}
              onClick={() => onSelectPlace(place.id)}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
