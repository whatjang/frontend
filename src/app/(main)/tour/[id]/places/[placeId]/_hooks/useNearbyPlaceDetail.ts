"use client";

import { useQuery } from "@tanstack/react-query";

import { getNearbyPlaceDetail } from "@/src/lib/api/market/nearby";

export function useNearbyPlaceDetail(marketId: number, placeId: string) {
  return useQuery({
    queryKey: ["nearby-place-detail", marketId, placeId],

    queryFn: async () => {
      const response = await getNearbyPlaceDetail(marketId, placeId);

      return response.result;
    },

    enabled: marketId > 0 && placeId.length > 0,
  });
}
