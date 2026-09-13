"use client";

import { useState } from "react";

import SearchBar from "@/src/components/search/SearchBar";
import { searchMarkets } from "@/src/lib/api/market/search";
import type { MarketSearchItem } from "@/src/types/market/marketSearch";

import MarketList from "./_components/MarketList";

export default function SearchPage() {
  const [markets, setMarkets] = useState<MarketSearchItem[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSearch = async (keyword: string) => {
    if (!keyword) {
      setMarkets([]);
      setHasSearched(false);
      setErrorMessage("");
      return;
    }

    try {
      setIsLoading(true);
      setErrorMessage("");

      const response = await searchMarkets({
        keyword,
        page: 0,
      });

      setMarkets(response.result.markets);
      setHasSearched(true);
    } catch (error) {
      setMarkets([]);
      setHasSearched(true);

      setErrorMessage(
        error instanceof Error
          ? error.message
          : "시장 검색 중 오류가 발생했습니다."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="flex flex-col gap-6 px-5">
      <SearchBar onSearch={handleSearch} />

      {errorMessage && (
        <p className="text-center text-xs text-red-500">{errorMessage}</p>
      )}

      <MarketList
        markets={markets}
        isLoading={isLoading}
        hasSearched={hasSearched}
      />
    </main>
  );
}
