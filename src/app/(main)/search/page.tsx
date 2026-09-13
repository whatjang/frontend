"use client";

import SearchBar from "@/src/components/search/SearchBar";

import MarketList from "./_components/MarketList";
import { useMarketSearch } from "./_hooks/useMarketSearch";

export default function SearchPage() {
  const {
    markets,
    isLoading,
    hasSearched,
    hasNext,
    errorMessage,
    search,
    loadMore,
  } = useMarketSearch();

  return (
    <main className="flex flex-col gap-6 px-5">
      <SearchBar onSearch={search} />

      {errorMessage && (
        <p className="text-center text-xs text-red-500">{errorMessage}</p>
      )}

      <MarketList
        markets={markets}
        isLoading={isLoading}
        hasSearched={hasSearched}
        hasNext={hasNext}
        onLoadMore={loadMore}
      />
    </main>
  );
}
