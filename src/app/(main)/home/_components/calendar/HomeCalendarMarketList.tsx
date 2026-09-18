"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

import { WEEKDAYS } from "@/src/constants/calendar";
import type { MarketOpenOnItem } from "@/src/types/market/index";

import HomeCalendarMarketItem from "./HomeCalendarMarketItem";

interface HomeCalendarMarketListProps {
  selectedDate: string;
  markets: MarketOpenOnItem[];
  totalCount: number;
  isPending: boolean;
  isFetchingNextPage: boolean;
  hasNext: boolean;
  onLoadMore: () => void;
}

interface PageState {
  date: string;
  page: number;
}

const MARKET_PAGE_SIZE = 3;

function formatSelectedDate(isoDate: string) {
  const [year, month, date] = isoDate.split("-").map(Number);
  const targetDate = new Date(Date.UTC(year, month - 1, date));

  return `${month}월 ${date}일 (${WEEKDAYS[(targetDate.getUTCDay() + 6) % 7]})`;
}

export default function HomeCalendarMarketList({
  selectedDate,
  markets,
  totalCount,
  isPending,
  isFetchingNextPage,
  hasNext,
  onLoadMore,
}: HomeCalendarMarketListProps) {
  const [pageState, setPageState] = useState<PageState>({
    date: selectedDate,
    page: 0,
  });

  const currentPage = pageState.date === selectedDate ? pageState.page : 0;
  const totalPages = Math.ceil(totalCount / MARKET_PAGE_SIZE);

  const startIndex = currentPage * MARKET_PAGE_SIZE;
  const visibleMarkets = markets.slice(
    startIndex,
    startIndex + MARKET_PAGE_SIZE
  );

  const handlePrev = () => {
    if (currentPage === 0) return;

    setPageState({
      date: selectedDate,
      page: currentPage - 1,
    });
  };

  const handleNext = () => {
    const nextPage = currentPage + 1;

    if (nextPage >= totalPages) return;

    const nextPageStartIndex = nextPage * MARKET_PAGE_SIZE;

    if (nextPageStartIndex >= markets.length) {
      if (hasNext && !isFetchingNextPage) {
        onLoadMore();
      }
      return;
    }

    setPageState({
      date: selectedDate,
      page: nextPage,
    });

    const remainingMarkets = markets.length - (nextPage + 1) * MARKET_PAGE_SIZE;

    if (remainingMarkets < MARKET_PAGE_SIZE && hasNext && !isFetchingNextPage) {
      onLoadMore();
    }
  };

  return (
    <div className="mt-5">
      <header className="flex items-center justify-between px-1">
        <h3 className="flex items-center gap-2 text-sm font-bold">
          <span aria-hidden="true" className="bg-green h-5 w-1 rounded-full" />

          {formatSelectedDate(selectedDate)}
        </h3>

        <span className="text-deep-gray text-xs">
          열리는 장터 <strong className="text-green">{totalCount}</strong>
        </span>
      </header>

      {markets.length > 0 ? (
        <>
          <div className="mt-2 flex flex-col gap-2">
            {visibleMarkets.map((market) => (
              <HomeCalendarMarketItem key={market.market_id} market={market} />
            ))}
          </div>

          {totalPages > 1 && (
            <div className="mt-2 flex items-center justify-center gap-8">
              <button
                type="button"
                aria-label="이전 장터 보기"
                onClick={handlePrev}
                disabled={currentPage === 0}
                className="border-light-gray flex size-6 cursor-pointer items-center justify-center rounded-full border bg-white disabled:cursor-default disabled:opacity-30"
              >
                <ChevronLeft className="text-green size-4" />
              </button>

              <span className="text-deep-gray min-w-12 text-center text-xs font-semibold">
                {currentPage + 1} / {totalPages}
              </span>

              <button
                type="button"
                aria-label="다음 장터 보기"
                onClick={handleNext}
                disabled={currentPage >= totalPages - 1 || isFetchingNextPage}
                className="border-light-gray flex size-6 cursor-pointer items-center justify-center rounded-full border bg-white disabled:cursor-default disabled:opacity-30"
              >
                <ChevronRight className="text-green size-4" />
              </button>
            </div>
          )}
        </>
      ) : !isPending ? (
        <div className="text-deep-gray mt-2 text-center text-xs">
          해당 날짜에 열리는 장터가 없어요.
        </div>
      ) : null}
    </div>
  );
}
