"use client";

import { useMutation } from "@tanstack/react-query";

import { getNearbyPlaceDirections } from "@/src/lib/api/market/nearby";
import type { GetNearbyPlaceDirectionsParams } from "@/src/types/tour";

interface UseNearbyPlaceDirectionsParams {
  marketId: number;
  placeId: string;
}

export function useNearbyPlaceDirections({
  marketId,
  placeId,
}: UseNearbyPlaceDirectionsParams) {
  return useMutation({
    mutationFn: async (params: GetNearbyPlaceDirectionsParams) => {
      const response = await getNearbyPlaceDirections(
        marketId,
        placeId,
        params
      );

      return response.result;
    },
  });
}
