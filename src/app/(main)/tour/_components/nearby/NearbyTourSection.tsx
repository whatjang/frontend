"use client";

import { useMemo, useState } from "react";

import TourMap from "@/src/components/tour/TourMap";
import TourPlaceList from "@/src/components/tour/TourPlaceList";
import type { NearbyTourData, TourCategoryId } from "@/src/types/tour";

import TourCategoryFilter from "./TourCategoryFilter";

interface NearbyTourSectionProps {
  data: NearbyTourData;
}

export default function NearbyTourSection({ data }: NearbyTourSectionProps) {
  const { radiusKm, categories, places } = data;

  const [selectedCategory, setSelectedCategory] = useState(
    categories[0]?.id ?? ""
  );

  const [selectedPlaceId, setSelectedPlaceId] = useState<number | null>(null);

  const filteredPlaces = useMemo(
    () => places.filter((place) => place.category === selectedCategory),
    [places, selectedCategory]
  );

  const handleCategoryChange = (categoryId: TourCategoryId) => {
    setSelectedCategory(categoryId);
    setSelectedPlaceId(null);
  };

  const handleSelectPlace = (placeId: number) => {
    setSelectedPlaceId(placeId);

    document.getElementById(`place-${placeId}`)?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
    });
  };

  return (
    <section
      aria-labelledby="nearby-tour-title"
      className="flex flex-col gap-6"
    >
      <header className="flex flex-col gap-1">
        <h2 id="nearby-tour-title" className="text-green text-lg font-bold">
          시장 주변 추천
        </h2>

        <p className="text-deep-gray text-xs">
          시장과 함께 둘러보기 좋은 주변 장소를 확인해보세요.
        </p>
      </header>

      <TourCategoryFilter
        categories={categories}
        selectedCategory={selectedCategory}
        onChange={handleCategoryChange}
      />

      <TourMap
        radiusKm={radiusKm}
        places={filteredPlaces}
        selectedPlaceId={selectedPlaceId}
        onSelectPlace={handleSelectPlace}
      />

      <TourPlaceList
        places={filteredPlaces}
        selectedPlaceId={selectedPlaceId}
        onSelectPlace={handleSelectPlace}
      />

      <p className="text-deep-gray text-center text-xs">
        ※ 반경 내 관광 정보가 없을 경우 주변 장소가 표시되지 않습니다.
      </p>
    </section>
  );
}
