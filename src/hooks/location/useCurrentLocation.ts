"use client";

import { useCallback, useEffect, useRef, useState } from "react";

import {
  type Coordinates,
  getCurrentCoordinates,
  watchLocationPermission,
} from "@/src/lib/browser/geolocation";

interface UseCurrentLocationOptions {
  onLocationChange?: (coordinates: Coordinates | null) => void;
}

export function useCurrentLocation({
  onLocationChange,
}: UseCurrentLocationOptions = {}) {
  const [coordinates, setCoordinates] = useState<Coordinates | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const onLocationChangeRef = useRef(onLocationChange);

  useEffect(() => {
    onLocationChangeRef.current = onLocationChange;
  }, [onLocationChange]);

  const requestLocation = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);

      const nextCoordinates = await getCurrentCoordinates();

      setCoordinates(nextCoordinates);
      onLocationChangeRef.current?.(nextCoordinates);

      return nextCoordinates;
    } catch (error) {
      setCoordinates(null);
      setError(
        error instanceof Error
          ? error.message
          : "현재 위치를 가져올 수 없습니다."
      );

      onLocationChangeRef.current?.(null);

      return null;
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    let cleanup: (() => void) | undefined;

    void watchLocationPermission((state) => {
      if (state === "granted") {
        void requestLocation();
      }

      if (state === "denied") {
        setCoordinates(null);
        setError("현재 위치를 확인할 수 없습니다.");
        onLocationChangeRef.current?.(null);
      }
    }).then((unsubscribe) => {
      cleanup = unsubscribe;
    });

    return () => cleanup?.();
  }, [requestLocation]);

  return {
    coordinates,
    isLoading,
    error,
    requestLocation,
  };
}
