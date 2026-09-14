"use client";

import KakaoMap from "@/src/components/map/KakaoMap";
import type { Coordinates } from "@/src/lib/browser/geolocation";
import { buildKakaoDirectionsUrl } from "@/src/lib/kakao/mapLink";

interface MarketMapProps {
  marketId: number;
  name: string;
  latitude: number;
  longitude: number;
  currentCoordinates: Coordinates | null;
}

export default function MarketMap({
  marketId,
  name,
  latitude,
  longitude,
  currentCoordinates,
}: MarketMapProps) {
  const openDirections = () => {
    const url = buildKakaoDirectionsUrl({
      destination: {
        name,
        latitude,
        longitude,
      },
      origin: currentCoordinates
        ? {
            name: "현재 위치",
            latitude: currentCoordinates.latitude,
            longitude: currentCoordinates.longitude,
          }
        : undefined,
    });

    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="flex flex-col gap-2 px-5">
      <h2 className="text-green text-lg font-bold">시장 위치</h2>

      <div
        className="cursor-pointer overflow-hidden rounded-xl"
        onClick={openDirections}
      >
        <KakaoMap
          center={{
            latitude,
            longitude,
          }}
          markers={[
            {
              id: marketId,
              title: name,
              latitude,
              longitude,
            },
          ]}
          level={3}
          draggable={false}
          zoomable={false}
          onClick={openDirections}
        />
      </div>

      <p className="text-deep-gray text-xs">
        지도를 누르면 카카오맵 길찾기로 이동합니다.
      </p>
    </section>
  );
}
