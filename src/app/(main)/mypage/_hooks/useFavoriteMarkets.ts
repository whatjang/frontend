"use client";

import { useQuery } from "@tanstack/react-query";

import { getFavoriteMarkets } from "@/src/lib/api/market/favorite";

export function useFavoriteMarkets() {
  return useQuery({
    queryKey: ["favorite-markets"],
    queryFn: async () => {
      const response = await getFavoriteMarkets();
      return response.result;
    },
  });
}
