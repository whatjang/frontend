"use client";

import { useInfiniteQuery } from "@tanstack/react-query";
import { useCallback, useState } from "react";

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
      "market-search",
      normalizedKeyword,
      coordinates?.latitude ?? null,
      coordinates?.longitude ?? null,
    ],

    queryFn: async ({ pageParam }) => {
      const response = await searchMarkets({
        keyword: normalizedKeyword,
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

    enabled: normalizedKeyword.length > 0,
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
    isLoading: isPending || isFetchingNextPage,
    hasSearched: normalizedKeyword.length > 0,
    hasNext: hasNextPage,
    errorMessage:
      error instanceof Error
        ? error.message
        : error
          ? "시장 검색 중 오류가 발생했습니다."
          : "",
    search,
    loadMore,
    updateCoordinates,
  };
}
