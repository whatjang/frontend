import { MapPin } from "lucide-react";

import type { TourPlace } from "@/src/types/tour";

interface TourMapProps {
  mode?: "nearby" | "route";
  radiusKm?: number;
  places: TourPlace[];
  selectedPlaceId: number | null;
  onSelectPlace: (placeId: number) => void;
}

const toNumber = (value: string) => Number(value.replace("%", ""));

export default function TourMap({
  mode = "nearby",
  radiusKm,
  places,
  selectedPlaceId,
  onSelectPlace,
}: TourMapProps) {
  const isRoute = mode === "route";
  const routePoints = [
    "50,50",
    ...places.map(
      (place) => `${toNumber(place.marker.left)},${toNumber(place.marker.top)}`
    ),
  ].join(" ");

  return (
    <section className="relative mx-auto aspect-square w-full max-w-77">
      <div className="border-light-gray absolute inset-0 rounded-full border bg-white/70" />
      <div className="border-deep-gray absolute inset-5.5 rounded-full border border-dashed" />
      <div className="border-green/30 absolute top-[10%] left-[9%] h-[58%] w-[58%] rounded-full border" />
      <div className="border-green/30 absolute right-[5%] bottom-[9%] h-[52%] w-[52%] rounded-full border" />

      {isRoute && (
        <svg
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          className="pointer-events-none absolute inset-0 size-full"
        >
          <polyline
            points={routePoints}
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeDasharray="3 2"
            vectorEffect="non-scaling-stroke"
            className="text-green/60"
          />
        </svg>
      )}

      {places.map((place, index) => {
        const selected = selectedPlaceId === place.id;

        return (
          <button
            key={place.id}
            type="button"
            aria-label={`${place.name} 선택`}
            onClick={() => onSelectPlace(place.id)}
            className="absolute z-10 cursor-pointer"
            style={{
              top: place.marker.top,
              left: place.marker.left,
            }}
          >
            {isRoute ? (
              <span
                className={[
                  "flex size-6 items-center justify-center rounded-full border text-[10px] font-bold shadow-xs",
                  selected
                    ? "border-green bg-green text-white"
                    : "border-green text-green bg-white",
                ].join(" ")}
              >
                {index + 2}
              </span>
            ) : (
              <MapPin
                className={
                  selected
                    ? "fill-green/80 text-green"
                    : "fill-green/50 text-green/50"
                }
              />
            )}
          </button>
        );
      })}

      <div className="bg-green absolute top-1/2 left-1/2 z-10 flex size-14.5 -translate-x-1/2 -translate-y-1/2 rotate-45 items-center justify-center rounded-2xl shadow-lg">
        <div className="flex size-4.5 -rotate-45 items-center justify-center rounded-full bg-white">
          <div className="bg-green size-1 rounded-full" />
        </div>
      </div>

      {!isRoute && radiusKm && (
        <div className="text-green absolute bottom-[11%] left-1/2 -translate-x-1/2 rounded-full bg-white px-5 py-2 text-xs font-bold shadow-xs">
          반경 {radiusKm} km
        </div>
      )}
    </section>
  );
}
