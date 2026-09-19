import type { NearbyPlace } from "@/src/types/tour";

import TourPlaceItem from "./TourPlaceItem";

interface TourPlaceListProps {
  places: NearbyPlace[];
  selectedPlaceId: string | null;
  onSelectPlace: (placeId: string) => void;
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
    <div className="flex flex-col gap-3">
      <p className="text-deep-gray text-xs">
        가까운 장소{" "}
        <span className="text-green font-semibold">{places.length}</span>곳
      </p>

      <ul className="space-y-3">
        {places.map((place, index) => (
          <li key={place.place_id}>
            <TourPlaceItem
              place={place}
              selected={place.place_id === selectedPlaceId}
              onSelect={() => onSelectPlace(place.place_id)}
              eager={index === 0}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
