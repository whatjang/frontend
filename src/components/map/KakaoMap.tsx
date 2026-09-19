"use client";

import {
  CustomOverlayMap,
  Map,
  MapMarker,
  useKakaoLoader,
} from "react-kakao-maps-sdk";

import type { MapCoordinates, MapMarkerItem } from "@/src/types/map";

interface KakaoMapProps {
  center: MapCoordinates;
  markers: MapMarkerItem[];
  selectedMarkerId?: string | number | null;
  level?: number;
  draggable?: boolean;
  zoomable?: boolean;
  className?: string;
  onClick?: () => void;
  onMarkerClick?: (marker: MapMarkerItem) => void;
}

export default function KakaoMap({
  center,
  markers,
  selectedMarkerId,
  level = 3,
  draggable = true,
  zoomable = true,
  className = "h-52 w-full",
  onClick,
  onMarkerClick,
}: KakaoMapProps) {
  const appKey = process.env.NEXT_PUBLIC_KAKAO_MAP_KEY ?? "";

  const [loading, error] = useKakaoLoader({
    appkey: appKey,
  });

  if (!appKey || error) {
    return (
      <div
        className={`bg-light-gray flex items-center justify-center ${className}`}
      >
        <p className="text-deep-gray text-xs">지도를 불러올 수 없습니다.</p>
      </div>
    );
  }

  if (loading) {
    return (
      <div
        className={`bg-light-gray animate-pulse ${className}`}
        aria-label="지도 불러오는 중"
      />
    );
  }

  const selectedMarker = markers.find(
    (marker) => String(marker.id) === String(selectedMarkerId)
  );

  return (
    <Map
      center={{
        lat: center.latitude,
        lng: center.longitude,
      }}
      level={level}
      draggable={draggable}
      zoomable={zoomable}
      className={className}
      onClick={onClick}
    >
      {markers.map((marker) => (
        <MapMarker
          key={marker.id}
          position={{
            lat: marker.latitude,
            lng: marker.longitude,
          }}
          title={marker.title}
          onClick={() => onMarkerClick?.(marker)}
        />
      ))}

      {selectedMarker && (
        <CustomOverlayMap
          position={{
            lat: selectedMarker.latitude,
            lng: selectedMarker.longitude,
          }}
          yAnchor={1.4}
        >
          <div className="relative rounded-xl border border-gray-100 bg-white px-3 py-2 shadow-md">
            <p className="max-w-40 truncate text-xs font-bold text-black">
              {selectedMarker.title}
            </p>

            {selectedMarker.description && (
              <p className="text-deep-gray mt-0.5 text-[10px] font-medium">
                {selectedMarker.description}
              </p>
            )}

            <div className="absolute -bottom-1.5 left-1/2 size-3 -translate-x-1/2 rotate-45 border-r border-b border-gray-100 bg-white" />
          </div>
        </CustomOverlayMap>
      )}
    </Map>
  );
}
