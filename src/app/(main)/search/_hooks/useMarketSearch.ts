"use client";

import { useCallback, useState } from "react";

import type { Coordinates } from "@/src/hooks/useCurrentLocation";
import { searchMarkets } from "@/src/lib/api/market/search";
import type { MarketSearchItem } from "@/src/types/market/marketSearch";

export function useMarketSearch(coordinates: Coordinates | null) {
  const [markets, setMarkets] = useState<MarketSearchItem[]>([]);
  const [keyword, setKeyword] = useState("");
  const [page, setPage] = useState(0);
  const [hasNext, setHasNext] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [totalCount, setTotalCount] = useState(0);

  const search = useCallback(
    async (keyword: string) => {
      if (!keyword) {
        setMarkets([]);
        setKeyword("");
        setPage(0);
        setHasNext(false);
        setHasSearched(false);
        setErrorMessage("");
        setTotalCount(0);
        return;
      }

      try {
        setIsLoading(true);
        setHasSearched(true);
        setMarkets([]);
        setErrorMessage("");

        const response = await searchMarkets({
          keyword,
          page: 0,
          ...(coordinates && {
            latitude: coordinates.latitude,
            longitude: coordinates.longitude,
          }),
        });

        setMarkets(response.result.markets);
        setTotalCount(response.result.total_count);
        setKeyword(keyword);
        setPage(0);
        setHasNext(response.result.has_next);
      } catch (error) {
        setTotalCount(0);

        setErrorMessage(
          error instanceof Error
            ? error.message
            : "시장 검색 중 오류가 발생했습니다."
        );
      } finally {
        setIsLoading(false);
      }
    },
    [coordinates]
  );

  const loadMore = useCallback(async () => {
    if (!keyword || !hasNext || isLoading) {
      return;
    }

    try {
      setIsLoading(true);

      const nextPage = page + 1;

      const response = await searchMarkets({
        keyword,
        page: nextPage,
        ...(coordinates && {
          latitude: coordinates.latitude,
          longitude: coordinates.longitude,
        }),
      });

      setMarkets((prev) => [...prev, ...response.result.markets]);
      setPage(nextPage);
      setHasNext(response.result.has_next);
    } catch (error) {
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "시장 검색 중 오류가 발생했습니다."
      );
    } finally {
      setIsLoading(false);
    }
  }, [keyword, page, hasNext, isLoading, coordinates]);

  return {
    markets,
    totalCount,
    isLoading,
    hasSearched,
    hasNext,
    errorMessage,
    search,
    loadMore,
  };
}
