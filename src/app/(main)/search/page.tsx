"use client";

import { useEffect } from "react";

import SearchBar from "@/src/components/search/SearchBar";
import { useCurrentLocation } from "@/src/hooks/useCurrentLocation";

import MarketList from "./_components/MarketList";
import { useMarketSearch } from "./_hooks/useMarketSearch";

export default function SearchPage() {
  const {
    markets,
    totalCount,
    isLoading,
    hasSearched,
    hasNext,
    errorMessage,
    search,
    loadMore,
    updateCoordinates,
  } = useMarketSearch();

  const {
    isLoading: isLocationLoading,
    error: locationError,
    requestLocation,
  } = useCurrentLocation({
    onLocationChange: updateCoordinates,
  });

  useEffect(() => {
    void requestLocation();
  }, [requestLocation]);

  return (
    <main className="flex flex-col gap-6 px-5">
      <SearchBar onSearch={search} />

      {locationError && (
        <div className="flex items-center justify-center gap-2 text-xs">
          <span className="text-deep-gray">
            현재 위치를 확인할 수 없어 시장명순으로 검색됩니다.
          </span>

          <button
            type="button"
            onClick={() => void requestLocation()}
            disabled={isLocationLoading}
            className="text-green shrink-0 font-semibold disabled:opacity-50"
          >
            {isLocationLoading ? "확인 중..." : "다시 시도"}
          </button>
        </div>
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
