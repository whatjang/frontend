"use client";

import KakaoMap from "@/src/components/map/KakaoMap";
import type { NearbyMarket, NearbyPlace } from "@/src/types/tour";

interface TourMapProps {
  market: NearbyMarket;
  places: NearbyPlace[];
  selectedPlaceId: string | null;
  onSelectPlace: (placeId: string) => void;
}

export default function TourMap({
  market,
  places,
  selectedPlaceId,
  onSelectPlace,
}: TourMapProps) {
  return (
    <div className="overflow-hidden rounded-3xl">
      <KakaoMap
        center={{
          latitude: market.latitude,
          longitude: market.longitude,
        }}
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
            latitude: place.latitude,
            longitude: place.longitude,
          })),
        ]}
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
