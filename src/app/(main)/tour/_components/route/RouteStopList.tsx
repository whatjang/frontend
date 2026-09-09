import { ChevronRight } from "lucide-react";

import type { Market } from "@/src/types/market";
import type { TourPlace } from "@/src/types/tour";

import RouteStopItem from "./RouteStopItem";

interface RouteStopListProps {
  market: Market;
  places: TourPlace[];
  onSelectPlace: (placeId: number) => void;
}

export default function RouteStopList({
  market,
  places,
  onSelectPlace,
}: RouteStopListProps) {
  return (
    <section aria-labelledby="route-stop-title" className="flex flex-col gap-2">
      <h3 id="route-stop-title" className="text-green text-sm font-bold">
        추천 이동 순서
      </h3>

      <ol className="flex scrollbar-none items-center gap-2 overflow-x-auto">
        <li className="shrink-0">
          <RouteStopItem order={1} name={market.name} label="출발지" isStart />
        </li>

        {places.map((place, index) => (
          <li key={place.id} className="flex shrink-0 items-center gap-2">
            <ChevronRight
              aria-hidden="true"
              className="text-deep-gray size-4"
            />

            <RouteStopItem
              order={index + 2}
              image={place.image}
              name={place.name}
              label={place.categoryLabel}
              onClick={() => onSelectPlace(place.id)}
            />
          </li>
        ))}
      </ol>
    </section>
  );
}
