"use client";

import { useState } from "react";

import TourMap from "@/src/components/tour/TourMap";
import TourPlaceList from "@/src/components/tour/TourPlaceList";
import type { Market } from "@/src/types/market";
import type { MarketTourRoute } from "@/src/types/marketTour";

import RouteStopList from "./RouteStopList";
import RouteSummary from "./RouteSummary";

interface TourRouteSectionProps {
  market: Market;
  route: MarketTourRoute;
}

export default function TourRouteSection({
  market,
  route,
}: TourRouteSectionProps) {
  const [selectedPlaceId, setSelectedPlaceId] = useState<number | null>(null);

  const handleSelectPlace = (placeId: number) => {
    setSelectedPlaceId(placeId);

    document.getElementById(`place-${placeId}`)?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
    });
  };

  return (
    <section aria-labelledby="tour-route-title" className="flex flex-col gap-6">
      <h2 id="tour-route-title" className="text-green text-lg font-bold">
        추천 관광 동선
      </h2>

      <TourMap
        mode="route"
        places={route.places}
        selectedPlaceId={selectedPlaceId}
        onSelectPlace={handleSelectPlace}
      />

      <RouteSummary
        estimatedMinutes={route.estimatedMinutes}
        estimatedDistanceKm={route.estimatedDistanceKm}
      />

      <RouteStopList
        market={market}
        places={route.places}
        onSelectPlace={handleSelectPlace}
      />

      <section
        aria-labelledby="route-detail-title"
        className="flex flex-col gap-2"
      >
        <h3 id="route-detail-title" className="text-green text-sm font-bold">
          코스 상세 정보
        </h3>

        <TourPlaceList
          places={route.places}
          selectedPlaceId={selectedPlaceId}
          onSelectPlace={handleSelectPlace}
        />
      </section>
    </section>
  );
}
