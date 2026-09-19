"use client";

import Spinner from "@/src/components/common/Spinner";
import { useMarketOptions } from "@/src/hooks/market/useMarketOptions";
import { useInfiniteScroll } from "@/src/hooks/useInfiniteScroll";

import MarketSearchResultItem from "./MarketSearchResultItem";

interface MarketSearchResultListProps {
  keyword: string;
  basePath: string;
}

export default function MarketSearchResultList({
  keyword,
  basePath,
}: MarketSearchResultListProps) {
  const {
    markets,
    totalCount,
    isLoading,
    isFetchingNextPage,
    hasNext,
    error,
    loadMore,
  } = useMarketOptions(keyword);

  const observerRef = useInfiniteScroll({
    hasNext,
    isFetching: isFetchingNextPage,
    onLoadMore: loadMore,
  });

  if (isLoading) {
    return (
      <div className="flex justify-center py-10">
        <Spinner />
      </div>
    );
  }

  if (error) {
    return (
      <p className="text-deep-gray py-16 text-center text-sm">
        시장 정보를 불러올 수 없습니다.
      </p>
    );
  }

  if (markets.length === 0) {
    return (
      <p role="status" className="text-deep-gray py-16 text-center text-sm">
        {keyword
          ? `"${keyword}" 검색 결과가 없습니다.`
          : "등록된 시장이 없습니다."}
      </p>
    );
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="border-green flex items-center justify-between border-b pb-2">
        <p className="text-deep-gray text-sm font-bold">시장 목록</p>

        <span className="bg-green/10 text-green rounded-full px-2.5 py-1 text-xs font-bold">
          {totalCount}건
        </span>
      </div>

      <ul className="flex flex-col gap-2">
        {markets.map((market) => (
          <li key={market.id}>
            <MarketSearchResultItem
              market={market}
              href={`${basePath}/${market.id}`}
            />
          </li>
        ))}
      </ul>

      {isFetchingNextPage && (
        <div className="flex justify-center py-6">
          <Spinner />
        </div>
      )}

      {hasNext && <div ref={observerRef} className="h-4" />}
    </div>
  );
}
