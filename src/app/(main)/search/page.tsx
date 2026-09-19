"use client";

import SearchBar from "@/src/components/search/SearchBar";
import { useCurrentLocation } from "@/src/hooks/location/useCurrentLocation";

import MarketList from "./_components/MarketList";
import { useMarketSearch } from "./_hooks/useMarketSearch";

export default function SearchPage() {
  const {
    markets,
    totalCount,
    isLoading,
    isFetchingNextPage,
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

  return (
    <main className="flex flex-col gap-6 px-5">
      <div className="flex flex-col gap-3">
        <SearchBar onSearch={search} />

        {locationError && (
          <div className="bg-light-gray/50 flex items-center justify-between rounded-xl px-4 py-3">
            <div className="flex flex-col gap-0.5">
              <p className="text-deep-gray text-xs font-semibold">
                위치 정보를 사용할 수 없어요
              </p>

              <p className="text-deep-gray text-xs">시장명순으로 조회됩니다.</p>
            </div>

            <button
              type="button"
              onClick={() => void requestLocation()}
              disabled={isLocationLoading}
              className="text-green shrink-0 text-xs font-bold disabled:opacity-50"
            >
              {isLocationLoading ? "확인 중..." : "다시 시도"}
            </button>
          </div>
        )}
      </div>

      {errorMessage && (
        <p className="text-red text-center text-xs">{errorMessage}</p>
      )}

      <MarketList
        markets={markets}
        totalCount={totalCount}
        isLoading={isLoading}
        isFetchingNextPage={isFetchingNextPage}
        hasNext={hasNext}
        onLoadMore={loadMore}
      />
    </main>
  );
}
