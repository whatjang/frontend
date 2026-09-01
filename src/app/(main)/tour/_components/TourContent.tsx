"use client";

import { useMemo, useState } from "react";

import type { TourData } from "@/src/types/tour";

import CategoryTabs from "./CategoryTabs";
import TourMap from "../../../../components/tour/TourMap";
import PlaceList from "@/src/components/tour/PlaceList";

interface TourContentProps {
  data: TourData;
}

export default function TourContent({ data }: TourContentProps) {
  const { radiusKm, categories, places } = data;

  const [selectedCategory, setSelectedCategory] = useState(
    categories[0]?.id ?? ""
  );
  const [selectedPlaceId, setSelectedPlaceId] = useState<number | null>(null);

  const filteredPlaces = useMemo(
    () => places.filter((place) => place.category === selectedCategory),
    [places, selectedCategory]
  );

  const handleCategoryChange = (categoryId: string) => {
    setSelectedCategory(categoryId);
    setSelectedPlaceId(null);
  };

  const handleMarkerClick = (placeId: number) => {
    setSelectedPlaceId(placeId);

    document.getElementById(`place-${placeId}`)?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
    });
  };

  return (
    <div className="flex flex-col gap-6">
      <TourMap
        radiusKm={radiusKm}
        places={filteredPlaces}
        selectedPlaceId={selectedPlaceId}
        onSelectPlace={handleMarkerClick}
      />

      <CategoryTabs
        categories={categories}
        selectedCategory={selectedCategory}
        onChange={handleCategoryChange}
      />

      <PlaceList
        places={filteredPlaces}
        selectedPlaceId={selectedPlaceId}
        onSelectPlace={setSelectedPlaceId}
      />

      <p className="text-deep-gray text-center text-xs">
        ※ 반경 내 관광지 정보가 없을 경우 주변 관광지 정보 미표시
      </p>
    </div>
  );
}
