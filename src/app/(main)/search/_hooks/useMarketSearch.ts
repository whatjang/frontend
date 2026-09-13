"use client";

import { useCallback, useRef, useState } from "react";

import { searchMarkets } from "@/src/lib/api/market/search";
import type { Coordinates } from "@/src/lib/browser/geolocation";
import type { MarketSearchItem } from "@/src/types/market/marketSearch";

export function useMarketSearch() {
  const [markets, setMarkets] = useState<MarketSearchItem[]>([]);
  const [page, setPage] = useState(0);
  const [hasNext, setHasNext] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [totalCount, setTotalCount] = useState(0);

  const keywordRef = useRef("");
  const coordinatesRef = useRef<Coordinates | null>(null);

  const search = useCallback(
    async (searchKeyword: string, searchCoordinates?: Coordinates | null) => {
      if (!searchKeyword) {
        keywordRef.current = "";

        setMarkets([]);
        setPage(0);
        setHasNext(false);
        setHasSearched(false);
        setErrorMessage("");
        setTotalCount(0);
        return;
      }

      if (searchCoordinates !== undefined) {
        coordinatesRef.current = searchCoordinates;
      }

      keywordRef.current = searchKeyword;

      try {
        setIsLoading(true);
        setHasSearched(true);
        setMarkets([]);
        setPage(0);
        setHasNext(false);
        setTotalCount(0);
        setErrorMessage("");

        const response = await searchMarkets({
          keyword: searchKeyword,
          page: 0,
          ...(coordinatesRef.current && {
            latitude: coordinatesRef.current.latitude,
            longitude: coordinatesRef.current.longitude,
          }),
        });

        setMarkets(response.result.markets);
        setTotalCount(response.result.total_count);
        setHasNext(response.result.has_next);
      } catch (error) {
        setMarkets([]);
        setTotalCount(0);
        setHasNext(false);

        setErrorMessage(
          error instanceof Error
            ? error.message
            : "시장 검색 중 오류가 발생했습니다."
        );
      } finally {
        setIsLoading(false);
      }
    },
    []
  );

  const updateCoordinates = useCallback(
    async (nextCoordinates: Coordinates | null) => {
      coordinatesRef.current = nextCoordinates;

      const currentKeyword = keywordRef.current;

      if (!currentKeyword) {
        return;
      }

      await search(currentKeyword, nextCoordinates);
    },
    [search]
  );

  const loadMore = useCallback(async () => {
    const currentKeyword = keywordRef.current;

    if (!currentKeyword || !hasNext || isLoading) {
      return;
    }

    try {
      setIsLoading(true);
      setErrorMessage("");

      const nextPage = page + 1;

      const response = await searchMarkets({
        keyword: currentKeyword,
        page: nextPage,
        ...(coordinatesRef.current && {
          latitude: coordinatesRef.current.latitude,
          longitude: coordinatesRef.current.longitude,
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
  }, [page, hasNext, isLoading]);

  return {
    markets,
    totalCount,
    isLoading,
    hasSearched,
    hasNext,
    errorMessage,
    search,
    loadMore,
    updateCoordinates,
  };
}
