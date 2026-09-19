"use client";

import { useInfiniteQuery } from "@tanstack/react-query";
import { useCallback, useState } from "react";

import { getMarkets } from "@/src/lib/api/market/list";
import { searchMarkets } from "@/src/lib/api/market/search";
import type { Coordinates } from "@/src/lib/browser/geolocation";

export function useMarketSearch() {
  const [keyword, setKeyword] = useState("");
  const [coordinates, setCoordinates] = useState<Coordinates | null>(null);

  const normalizedKeyword = keyword.trim();

  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isPending,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: [
      "markets",
      normalizedKeyword,
      coordinates?.latitude ?? null,
      coordinates?.longitude ?? null,
    ],

    queryFn: async ({ pageParam }) => {
      const commonParams = {
        page: pageParam,
        ...(coordinates && {
          latitude: coordinates.latitude,
          longitude: coordinates.longitude,
        }),
      };

      const response = normalizedKeyword
        ? await searchMarkets({
            keyword: normalizedKeyword,
            ...commonParams,
          })
        : await getMarkets(commonParams);

      return response.result;
    },

    initialPageParam: 0,

    getNextPageParam: (lastPage) => {
      if (!lastPage.has_next) {
        return undefined;
      }

      return lastPage.page + 1;
    },
  });

  const markets = data?.pages.flatMap((page) => page.markets) ?? [];
  const totalCount = data?.pages[0]?.total_count ?? 0;

  const search = useCallback((searchKeyword: string) => {
    setKeyword(searchKeyword.trim());
  }, []);

  const updateCoordinates = useCallback(
    (nextCoordinates: Coordinates | null) => {
      setCoordinates(nextCoordinates);
    },
    []
  );

  const loadMore = useCallback(() => {
    if (!hasNextPage || isFetchingNextPage) {
      return;
    }

    void fetchNextPage();
  }, [fetchNextPage, hasNextPage, isFetchingNextPage]);

  return {
    markets,
    totalCount,
    isLoading: isPending,
    isFetchingNextPage,
    hasNext: Boolean(hasNextPage),
    errorMessage:
      error instanceof Error
        ? error.message
        : error
          ? "시장 조회 중 오류가 발생했습니다."
          : "",
    search,
    loadMore,
    updateCoordinates,
  };
}
