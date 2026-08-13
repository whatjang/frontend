import { MapPin } from "lucide-react";

import type { TourPlace } from "@/src/types/tour";

interface NearbyMapProps {
  radiusKm: number;
  places: TourPlace[];
  selectedPlaceId: number | null;
  onSelectPlace: (placeId: number) => void;
}

export default function NearbyMap({
  radiusKm,
  places,
  selectedPlaceId,
  onSelectPlace,
}: NearbyMapProps) {
  return (
    <section className="relative mx-auto aspect-square w-full max-w-77">
      <div className="border-light-gray absolute inset-0 rounded-full border bg-white/70" />

      <div className="border-deep-gray absolute inset-5.5 rounded-full border border-dashed" />

      <div className="border-green/30 absolute top-[10%] left-[9%] h-[58%] w-[58%] rounded-full border" />

      <div className="border-green/30 absolute right-[5%] bottom-[9%] h-[52%] w-[52%] rounded-full border" />

      {places.map((place) => {
        const isSelected = selectedPlaceId === place.id;

        return (
          <button
            key={place.id}
            type="button"
            aria-label={`${place.name} 선택`}
            onClick={() => onSelectPlace(place.id)}
            className="absolute size-5 cursor-pointer transition-transform hover:scale-110"
            style={{
              top: place.marker.top,
              left: place.marker.left,
            }}
          >
            <MapPin
              className={
                isSelected
                  ? "fill-green/80 text-green"
                  : "fill-green/50 text-green/50"
              }
            />
          </button>
        );
      })}

      <div className="bg-green absolute top-1/2 left-1/2 flex size-14.5 -translate-x-1/2 -translate-y-1/2 rotate-45 items-center justify-center rounded-2xl shadow-lg">
        <div className="flex size-4.5 -rotate-45 items-center justify-center rounded-full bg-white">
          <div className="bg-green size-1 rounded-full" />
        </div>
      </div>

      <div className="text-green shadow-deep-gray absolute bottom-[11%] left-1/2 -translate-x-1/2 rounded-full bg-white px-5 py-2 text-xs font-bold shadow-xs">
        반경 {radiusKm} km
      </div>
    </section>
  );
}
