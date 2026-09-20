"use client";

import { useState } from "react";

import Spinner from "@/src/components/common/Spinner";
import TourMap from "@/src/components/tour/TourMap";
import TourPlaceList from "@/src/components/tour/TourPlaceList";
import { TOUR_CATEGORIES } from "@/src/constants/tour";
import type { NearbyPlaceCategory } from "@/src/types/tour";

import { useNearbyPlaces } from "../../[id]/_hooks/useNearbyPlaces";
import TourCategoryFilter from "./TourCategoryFilter";

interface NearbyTourSectionProps {
  marketId: number;
}

export default function NearbyTourSection({
  marketId,
}: NearbyTourSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<NearbyPlaceCategory>(
    TOUR_CATEGORIES[0].id
  );

  const [selectedPlaceId, setSelectedPlaceId] = useState<string | null>(null);

  const { data, isPending, error } = useNearbyPlaces(
    marketId,
    selectedCategory
  );

  const handleCategoryChange = (categoryId: NearbyPlaceCategory) => {
    setSelectedCategory(categoryId);
    setSelectedPlaceId(null);
  };

  const handleSelectPlace = (placeId: string) => {
    setSelectedPlaceId(placeId);
  };

  const handleSelectMarker = (placeId: string) => {
    setSelectedPlaceId(placeId);

    document.getElementById(`place-${placeId}`)?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
    });
  };

  if (isPending) {
    return (
      <div className="flex min-h-60 items-center justify-center">
        <Spinner />
      </div>
    );
  }

  if (error) {
    return (
      <p className="text-deep-gray py-10 text-center text-sm">
        주변 관광 정보를 불러올 수 없습니다.
      </p>
    );
  }

  if (!data) {
    return null;
  }

  const filteredPlaces = data.places.filter(
    (place) => place.category === selectedCategory
  );

  return (
    <section
      aria-labelledby="nearby-tour-title"
      className="flex flex-col gap-6"
    >
      <header className="flex flex-col gap-1">
        <h2 id="nearby-tour-title" className="text-green text-lg font-bold">
          {data.market.name} 주변 추천
        </h2>

        <p className="text-deep-gray text-xs">
          시장과 함께 둘러보기 좋은 주변 장소를 확인해보세요.
        </p>
      </header>

      <TourCategoryFilter
        selectedCategory={selectedCategory}
        onChange={handleCategoryChange}
      />

      <TourMap
        key={selectedCategory}
        market={data.market}
        places={filteredPlaces}
        selectedPlaceId={selectedPlaceId}
        onSelectPlace={handleSelectMarker}
      />

      <TourPlaceList
        places={filteredPlaces}
        selectedPlaceId={selectedPlaceId}
        onSelectPlace={handleSelectPlace}
      />

      <p className="text-deep-gray/70 -mt-4 text-right text-xs font-semibold">
        {data.source_notice}
      </p>
    </section>
  );
}
