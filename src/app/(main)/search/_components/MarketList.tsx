"use client";

import Spinner from "@/src/components/common/Spinner";
import { useInfiniteScroll } from "@/src/hooks/useInfiniteScroll";
import type { MarketSearchItem } from "@/src/types/market/marketSearch";

import MarketItem from "./MarketItem";

interface MarketListProps {
  markets: MarketSearchItem[];
  totalCount: number;
  isLoading: boolean;
  hasSearched: boolean;
  hasNext: boolean;
  onLoadMore: () => void;
}

export default function MarketList({
  markets,
  totalCount,
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
      <div className="border-green flex items-center justify-between border-b pb-2">
        <p className="text-deep-gray text-sm font-bold">검색 결과</p>

        <span className="bg-green/10 text-green rounded-full px-2.5 py-1 text-xs font-bold">
          {totalCount}건
        </span>
      </div>

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
