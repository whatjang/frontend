"use client";

import { useCallback, useState } from "react";

export interface Coordinates {
  latitude: number;
  longitude: number;
}

export function useCurrentLocation() {
  const [coordinates, setCoordinates] = useState<Coordinates | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const requestLocation = useCallback(() => {
    if (!navigator.geolocation) {
      setError("현재 위치를 지원하지 않는 브라우저입니다.");
      return;
    }

    setIsLoading(true);
    setError(null);

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setCoordinates({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });

        setIsLoading(false);
      },
      () => {
        setCoordinates(null);
        setError("현재 위치를 가져올 수 없습니다.");
        setIsLoading(false);
      }
    );
  }, []);

  return {
    coordinates,
    isLoading,
    error,
    requestLocation,
  };
}
