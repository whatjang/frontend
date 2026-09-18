"use client";

import { useQuery } from "@tanstack/react-query";

import { getMarketDetail } from "@/src/lib/api/market/detail";
import type { Coordinates } from "@/src/lib/browser/geolocation";

interface UseMarketDetailParams {
  marketId: number;
  coordinates?: Coordinates | null;
}

export function useMarketDetail({
  marketId,
  coordinates,
}: UseMarketDetailParams) {
  return useQuery({
    queryKey: [
      "market",
      marketId,
      coordinates?.latitude ?? null,
      coordinates?.longitude ?? null,
    ],
    queryFn: async () => {
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
    },
    enabled: marketId > 0,
  });
}
