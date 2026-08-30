import type { TourPlace } from "@/src/types/tour";

import PlaceItem from "./PlaceItem";

interface PlaceListProps {
  places: TourPlace[];
  selectedPlaceId: number | null;
  onSelectPlace: (placeId: number) => void;
}

export default function PlaceList({
  places,
  selectedPlaceId,
  onSelectPlace,
}: PlaceListProps) {
  if (places.length === 0) {
    return (
      <div className="text-deep-gray py-10 text-center text-sm">
        주변 장소가 없습니다.
      </div>
    );
  }

  return (
    <section className="space-y-3">
      {places.map((place, index) => (
        <PlaceItem
          key={place.id}
          place={place}
          selected={place.id === selectedPlaceId}
          onSelect={() => onSelectPlace(place.id)}
          eager={index === 0}
        />
      ))}
    </section>
  );
}
