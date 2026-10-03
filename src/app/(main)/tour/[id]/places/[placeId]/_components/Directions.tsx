"use client";

import { MapPin, Navigation } from "lucide-react";
import { useState } from "react";

import { DEFAULT_TOUR_TRANSPORT } from "@/src/constants/tour";
import { useCurrentLocation } from "@/src/hooks/location/useCurrentLocation";
import { ApiError } from "@/src/lib/api/core/error";
import type { TourTransportType } from "@/src/types/tour";

import { useNearbyPlaceDirections } from "../_hooks/useNearbyPlaceDirections";
import TransportSelector from "./TransportSelector";

interface DirectionsProps {
  marketId: number;
  placeId: string;
}

export default function Directions({ marketId, placeId }: DirectionsProps) {
  const [transport, setTransport] = useState<TourTransportType>(
    DEFAULT_TOUR_TRANSPORT
  );
  const [directionsError, setDirectionsError] = useState<string | null>(null);

  const {
    requestLocation,
    isLoading: isLocationLoading,
    error: locationError,
  } = useCurrentLocation();

  const { mutateAsync: getDirections, isPending: isDirectionsPending } =
    useNearbyPlaceDirections({
      marketId,
      placeId,
    });

  const isLoading = isLocationLoading || isDirectionsPending;
  const errorMessage = locationError || directionsError;

  const handleDirections = async () => {
    setDirectionsError(null);

    const coordinates = await requestLocation();

    if (!coordinates) {
      return;
    }

    try {
      const directions = await getDirections({
        currentLatitude: coordinates.latitude,
        currentLongitude: coordinates.longitude,
        transport,
      });

      if (!directions.navigation_url) {
        setDirectionsError("길찾기 경로를 찾을 수 없습니다.");
        return;
      }

      window.location.assign(directions.navigation_url);
    } catch (error) {
      if (error instanceof ApiError && error.code === "TOUR4042") {
        setDirectionsError(
          transport === "WALK"
            ? "도보 길찾기는 30km 이내에서 지원해요.\n다른 이동 수단을 이용해보세요."
            : "현재 위치에서 자전거 경로를 찾을 수 없습니다."
        );
        return;
      }

      setDirectionsError("길찾기 정보를 불러올 수 없습니다.");
    }
  };

  const handleTransportChange = (nextTransport: TourTransportType) => {
    setTransport(nextTransport);
    setDirectionsError(null);
  };

  return (
    <section className="flex flex-col gap-2 px-5">
      <h2 className="text-green text-lg font-bold">길찾기</h2>

      <div className="border-light-gray flex flex-col gap-5 rounded-3xl border bg-white p-5">
        <div className="flex gap-2">
          <div className="bg-light-green flex size-10 shrink-0 items-center justify-center rounded-full">
            <MapPin
              size={19}
              strokeWidth={2}
              className="text-green"
              aria-hidden="true"
            />
          </div>

          <div className="flex flex-col">
            <p className="text-sm font-semibold">현재 위치에서 길찾기</p>

            <p className="text-deep-gray text-xs">
              현재 위치를 기준으로 카카오맵 길찾기를 제공합니다.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <p className="text-deep-gray text-xs font-semibold">이동 방식</p>

          <TransportSelector
            value={transport}
            onChange={handleTransportChange}
          />
        </div>

        <button
          type="button"
          onClick={handleDirections}
          disabled={isLoading}
          className="bg-green flex w-full cursor-pointer items-center justify-center gap-2 rounded-2xl py-3.5 text-sm font-bold text-white transition active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-60"
        >
          <Navigation size={17} strokeWidth={2} aria-hidden="true" />

          {isLoading ? "길찾기 확인 중..." : "길찾기 바로가기"}
        </button>

        {errorMessage ? (
          <p className="text-red text-center text-xs whitespace-pre-line">
            {errorMessage}
          </p>
        ) : (
          <p className="text-deep-gray text-center text-xs">
            길찾기를 위해 현재 위치 권한이 필요합니다.
          </p>
        )}
      </div>
    </section>
  );
}
