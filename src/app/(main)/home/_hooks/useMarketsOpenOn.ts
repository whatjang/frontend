"use client";

import { keepPreviousData, useInfiniteQuery } from "@tanstack/react-query";

import { getMarketsOpenOn } from "@/src/lib/api/market/openOn";
import type { Coordinates } from "@/src/lib/browser/geolocation";

interface UseMarketsOpenOnParams {
  date: string;
  coordinates?: Coordinates | null;
}

export function useMarketsOpenOn({
  date,
  coordinates,
}: UseMarketsOpenOnParams) {
  return useInfiniteQuery({
    queryKey: [
      "markets-open-on",
      date,
      coordinates?.latitude ?? null,
      coordinates?.longitude ?? null,
    ],

    queryFn: async ({ pageParam }) => {
      const response = await getMarketsOpenOn(date, {
        page: pageParam,
        ...(coordinates && {
          latitude: coordinates.latitude,
          longitude: coordinates.longitude,
        }),
      });

      return response.result;
    },

    initialPageParam: 0,

    getNextPageParam: (lastPage) =>
      lastPage.has_next ? lastPage.page + 1 : undefined,

    placeholderData: keepPreviousData,

    enabled: date.length > 0,
  });
}
