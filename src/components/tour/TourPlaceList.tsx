import type { TourPlace } from "@/src/types/tour";

import TourPlaceItem from "./TourPlaceItem";

interface TourPlaceListProps {
  places: TourPlace[];
  selectedPlaceId: number | null;
  onSelectPlace: (placeId: number) => void;
}

export default function TourPlaceList({
  places,
  selectedPlaceId,
  onSelectPlace,
}: TourPlaceListProps) {
  if (places.length === 0) {
    return (
      <p role="status" className="text-deep-gray py-6 text-center text-xs">
        주변 장소가 없습니다.
      </p>
    );
  }

  return (
    <ul className="space-y-3">
      {places.map((place, index) => (
        <li key={place.id}>
          <TourPlaceItem
            place={place}
            selected={place.id === selectedPlaceId}
            onSelect={() => onSelectPlace(place.id)}
            eager={index === 0}
          />
        </li>
      ))}
    </ul>
  );
}
