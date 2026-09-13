"use client";

import Spinner from "@/src/components/common/Spinner";
import { useInfiniteScroll } from "@/src/hooks/useInfiniteScroll";
import type { MarketSearchItem } from "@/src/types/market/marketSearch";

import MarketItem from "./MarketItem";

interface MarketListProps {
  markets: MarketSearchItem[];
  isLoading: boolean;
  hasSearched: boolean;
  hasNext: boolean;
  onLoadMore: () => void;
}

export default function MarketList({
  markets,
  isLoading,
  hasSearched,
  hasNext,
  onLoadMore,
}: MarketListProps) {
  const observerRef = useInfiniteScroll({
    hasNext,
    isLoading,
    onLoadMore,
  });

  if (!hasSearched) {
    return null;
  }

  if (markets.length === 0 && isLoading) {
    return (
      <div className="flex w-full justify-center py-10">
        <Spinner />
      </div>
    );
  }

  if (markets.length === 0) {
    return <p className="py-10 text-center text-xs">검색된 시장이 없습니다.</p>;
  }

  return (
    <>
      <ul className="flex w-full flex-col gap-4">
        {markets.map((market) => (
          <MarketItem key={market.market_id} market={market} />
        ))}
      </ul>

      {isLoading && (
        <div className="flex w-full justify-center py-6">
          <Spinner />
        </div>
      )}

      {hasNext && <div ref={observerRef} className="h-1" />}
    </>
  );
}
