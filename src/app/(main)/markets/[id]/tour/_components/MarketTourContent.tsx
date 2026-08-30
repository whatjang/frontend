"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

import TourMap from "@/src/components/tour/TourMap";
import PlaceList from "@/src/components/tour/PlaceList";
import type { Market } from "@/src/types/market";
import type { MarketTourRoute } from "@/src/types/marketTour";

import RouteOrderList from "./RouteOrderList";

interface MarketTourContentProps {
  market: Market;
  route: MarketTourRoute;
}

export default function MarketTourContent({
  market,
  route,
}: MarketTourContentProps) {
  const router = useRouter();

  const [selectedPlaceId, setSelectedPlaceId] = useState<number | null>(null);

  const handleSelectPlace = (placeId: number) => {
    setSelectedPlaceId(placeId);

    document.getElementById(`place-${placeId}`)?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
    });
  };

  return (
    <div className="flex flex-col gap-6">
      <TourMap
        mode="route"
        places={route.places}
        selectedPlaceId={selectedPlaceId}
        onSelectPlace={handleSelectPlace}
      />

      <div className="border-light-gray flex items-center justify-between rounded-2xl border bg-white p-3">
        <div className="flex flex-col gap-0.5">
          <p className="text-sm font-semibold">
            도보 약 {route.estimatedMinutes}분 소요
          </p>

          <p className="text-deep-gray text-xs">
            총 {route.estimatedDistanceKm}km
          </p>
        </div>

        <span className="bg-green rounded-full px-4 py-2 text-xs font-bold text-white">
          추천 동선
        </span>
      </div>

      <RouteOrderList
        market={market}
        places={route.places}
        onSelectPlace={handleSelectPlace}
      />

      <section className="flex flex-col gap-2">
        <h2 className="text-green text-sm font-bold">코스 상세 정보</h2>

        <PlaceList
          places={route.places}
          selectedPlaceId={selectedPlaceId}
          onSelectPlace={handleSelectPlace}
        />
      </section>
    </div>
  );
}
