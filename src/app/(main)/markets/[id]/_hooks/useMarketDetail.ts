"use client";

import { useCallback, useEffect, useState } from "react";

import { getMarketDetail } from "@/src/lib/api/market/detail";
import type { Coordinates } from "@/src/lib/browser/geolocation";
import type { MarketDetailResult } from "@/src/types/market/marketDetail";

interface UseMarketDetailOptions {
  marketId: number;
  coordinates?: Coordinates | null;
}

export function useMarketDetail({
  marketId,
  coordinates,
}: UseMarketDetailOptions) {
  const [market, setMarket] = useState<MarketDetailResult | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchMarketDetail = useCallback(async () => {
    const response = await getMarketDetail(
      marketId,
      coordinates
        ? {
            latitude: coordinates.latitude,
            longitude: coordinates.longitude,
          }
        : undefined
    );

    return response.result;
  }, [marketId, coordinates]);

  useEffect(() => {
    let cancelled = false;

    void fetchMarketDetail()
      .then((result) => {
        if (cancelled) {
          return;
        }

        setMarket(result);
        setError(null);
      })
      .catch((error) => {
        if (cancelled) {
          return;
        }

        setMarket(null);
        setError(
          error instanceof Error
            ? error.message
            : "시장 정보를 불러올 수 없습니다."
        );
      })
      .finally(() => {
        if (!cancelled) {
          setIsLoading(false);
        }
      });

    return () => {
      cancelled = true;
    };
  }, [fetchMarketDetail]);

  const refetch = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);

      const result = await fetchMarketDetail();

      setMarket(result);

      return result;
    } catch (error) {
      setMarket(null);
      setError(
        error instanceof Error
          ? error.message
          : "시장 정보를 불러올 수 없습니다."
      );

      return null;
    } finally {
      setIsLoading(false);
    }
  }, [fetchMarketDetail]);

  return {
    market,
    isLoading,
    error,
    refetch,
  };
}
