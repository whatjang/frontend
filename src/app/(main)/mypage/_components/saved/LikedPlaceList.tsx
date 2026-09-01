"use client";

import { useState } from "react";

import PlaceItem from "@/src/components/tour/PlaceItem";

import type { TourPlace } from "@/src/types/tour";

interface LikedPlaceListProps {
  places: TourPlace[];
}

export default function LikedPlaceList({
  places: initialPlaces,
}: LikedPlaceListProps) {
  const [places, setPlaces] = useState(initialPlaces);

  const handleUnlikePlace = (placeId: number) => {
    setPlaces((prev) => prev.filter((place) => place.id !== placeId));
  };

  if (places.length === 0) {
    return (
      <p className="text-deep-gray py-6 text-center text-xs">
        찜한 관광지가 없어요.
      </p>
    );
  }

  return (
    <div className="flex flex-col gap-2">
      {places.map((place) => (
        <PlaceItem
          key={place.id}
          place={place}
          liked
          onLikeToggle={() => handleUnlikePlace(place.id)}
        />
      ))}
    </div>
  );
}
