"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";

import {
  addMarketFavorite,
  removeMarketFavorite,
} from "@/src/lib/api/market/favorite";
import type { MarketDetailResult } from "@/src/types/market/marketDetail";

interface ToggleFavoriteParams {
  marketId: number;
  isFavorite: boolean;
}

export function useMarketFavorite() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ marketId, isFavorite }: ToggleFavoriteParams) =>
      isFavorite ? removeMarketFavorite(marketId) : addMarketFavorite(marketId),

    onSuccess: (_, { marketId, isFavorite }) => {
      queryClient.setQueriesData<MarketDetailResult>(
        {
          queryKey: ["market", marketId],
        },
        (market) =>
          market
            ? {
                ...market,
                is_favorite: !isFavorite,
              }
            : market
      );
    },
  });
}
