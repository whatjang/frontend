"use client";

import Spinner from "@/src/components/common/Spinner";

import { useNearbyPlaceDetail } from "../_hooks/useNearbyPlaceDetail";
import Directions from "./Directions";
import Intro from "./Intro";
import MenuInfo from "./MenuInfo";
import Overview from "./Overview";
import PlaceInfo from "./PlaceInfo";

interface TourPlaceDetailContentProps {
  marketId: number;
  placeId: string;
}

export default function TourPlaceDetailContent({
  marketId,
  placeId,
}: TourPlaceDetailContentProps) {
  const {
    data: place,
    isPending,
    error,
  } = useNearbyPlaceDetail(marketId, placeId);

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
        장소 상세 정보를 불러올 수 없습니다.
      </p>
    );
  }

  if (!place) {
    return null;
  }

  return (
    <main className="flex flex-col gap-8">
      <Intro place={place} />

      {place.overview && <Overview overview={place.overview} />}

      <PlaceInfo place={place} />

      <MenuInfo
        representativeMenu={place.representative_menu}
        treatMenu={place.treat_menu}
      />

      <Directions />

      <p className="text-deep-gray -mt-5 px-5 text-right text-xs">
        {place.source_notice}
      </p>
    </main>
  );
}
