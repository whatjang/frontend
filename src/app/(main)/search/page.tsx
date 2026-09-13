"use client";

import { useEffect } from "react";

import SearchBar from "@/src/components/search/SearchBar";
import { useCurrentLocation } from "@/src/hooks/useCurrentLocation";

import MarketList from "./_components/MarketList";
import { useMarketSearch } from "./_hooks/useMarketSearch";

export default function SearchPage() {
  const {
    coordinates,
    error: locationError,
    requestLocation,
  } = useCurrentLocation();
  const {
    markets,
    totalCount,
    isLoading,
    hasSearched,
    hasNext,
    errorMessage,
    search,
    loadMore,
  } = useMarketSearch(coordinates);

  useEffect(() => {
    requestLocation();
  }, [requestLocation]);

  return (
    <main className="flex flex-col gap-6 px-5">
      <SearchBar onSearch={search} />

      {locationError && (
        <p className="text-deep-gray text-center text-xs">
          현재 위치를 확인할 수 없어 시장명순으로 검색됩니다.
        </p>
      )}

      {errorMessage && (
        <p className="text-red text-center text-xs">{errorMessage}</p>
      )}

      <MarketList
        markets={markets}
        totalCount={totalCount}
        isLoading={isLoading}
        hasSearched={hasSearched}
        hasNext={hasNext}
        onLoadMore={loadMore}
      />
    </main>
  );
}
