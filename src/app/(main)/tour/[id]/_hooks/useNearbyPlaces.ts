"use client";

import { useQuery } from "@tanstack/react-query";

import { getNearbyPlaces } from "@/src/lib/api/market/nearby";
import type { NearbyPlaceCategory } from "@/src/types/tour/nearbyTour";

export function useNearbyPlaces(
  marketId: number,
  category: NearbyPlaceCategory
) {
  return useQuery({
    queryKey: ["nearby-places", marketId, category],

    queryFn: async () => {
      const response = await getNearbyPlaces(marketId, {
        category,
      });

      return response.result;
    },

    enabled: marketId > 0,
  });
}
