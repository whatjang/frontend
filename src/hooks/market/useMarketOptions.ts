"use client";

import { useInfiniteQuery } from "@tanstack/react-query";
import { useCallback } from "react";

import { getMarketOptions } from "@/src/services/market";

export function useMarketOptions(keyword: string) {
  const normalizedKeyword = keyword.trim();

  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isPending,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ["market-options", normalizedKeyword],

    queryFn: ({ pageParam }) => getMarketOptions(normalizedKeyword, pageParam),

    initialPageParam: 0,

    getNextPageParam: (lastPage) =>
      lastPage.hasNext ? lastPage.page + 1 : undefined,
  });

  const markets = data?.pages.flatMap((page) => page.markets) ?? [];

  const totalCount = data?.pages[0]?.totalCount ?? 0;

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
    error,
    loadMore,
  };
}
