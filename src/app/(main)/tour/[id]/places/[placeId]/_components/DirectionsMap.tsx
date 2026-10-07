"use client";

import KakaoMap from "@/src/components/map/KakaoMap";
import type { NearbyPlaceDirections } from "@/src/types/tour";
import { formatDistance, formatDuration } from "@/src/utils/tour";

interface DirectionsMapProps {
  directions: NearbyPlaceDirections;
}

export default function DirectionsMap({ directions }: DirectionsMapProps) {
  return (
    <div className="flex flex-col gap-2">
      <div className="bg-light-green flex items-center justify-center gap-2 rounded-2xl px-4 py-3">
        <span className="text-sm font-bold">
          {formatDistance(directions.distance_m)}
        </span>

        <span className="text-deep-gray">·</span>

        <span className="text-deep-gray text-xs font-medium">
          약 {formatDuration(directions.estimated_minutes)}
        </span>
      </div>

      <KakaoMap
        center={{
          latitude: directions.start.latitude,
          longitude: directions.start.longitude,
        }}
        markers={[
          {
            id: "start",
            title: directions.start.name,
            latitude: directions.start.latitude,
            longitude: directions.start.longitude,
          },
          {
            id: "destination",
            title: directions.destination.name,
            latitude: directions.destination.latitude,
            longitude: directions.destination.longitude,
          },
        ]}
        path={directions.path}
        level={5}
        className="h-60 w-full rounded-2xl"
      />
    </div>
  );
}
