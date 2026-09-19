"use client";

import KakaoMap from "@/src/components/map/KakaoMap";
import { TOUR_CATEGORY_LABELS } from "@/src/constants/tour";
import type { NearbyMarket, NearbyPlace } from "@/src/types/tour";

interface TourMapProps {
  market: NearbyMarket;
  places: NearbyPlace[];
  selectedPlaceId: string | null;
  onSelectPlace: (placeId: string) => void;
}

function formatDistance(distance: number) {
  if (distance < 1000) {
    return `${distance}m`;
  }

  return `${(distance / 1000).toFixed(1)}km`;
}

export default function TourMap({
  market,
  places,
  selectedPlaceId,
  onSelectPlace,
}: TourMapProps) {
  const selectedPlace = places.find(
    (place) => place.place_id === selectedPlaceId
  );

  const center = selectedPlace
    ? {
        latitude: selectedPlace.latitude,
        longitude: selectedPlace.longitude,
      }
    : {
        latitude: market.latitude,
        longitude: market.longitude,
      };

  return (
    <div className="overflow-hidden rounded-3xl">
      <KakaoMap
        center={center}
        markers={[
          {
            id: `market-${market.market_id}`,
            title: market.name,
            latitude: market.latitude,
            longitude: market.longitude,
          },
          ...places.map((place) => ({
            id: place.place_id,
            title: place.name,
            description: `${TOUR_CATEGORY_LABELS[place.category]} · ${formatDistance(
              place.distance_m
            )}`,
            latitude: place.latitude,
            longitude: place.longitude,
          })),
        ]}
        selectedMarkerId={selectedPlaceId}
        level={5}
        className="h-72 w-full"
        onMarkerClick={(marker) => {
          const place = places.find(
            (place) => place.place_id === String(marker.id)
          );

          if (place) {
            onSelectPlace(place.place_id);
          }
        }}
      />
    </div>
  );
}
