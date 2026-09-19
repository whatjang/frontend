"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";

import { useCurrentLocation } from "@/src/hooks/location/useCurrentLocation";
import { formatIsoDate, getToday } from "@/src/utils/calendar";

import { useMarketsOpenOn } from "../../_hooks/useMarketsOpenOn";
import HomeLiveMarketItem from "./HomeLiveMarketItem";

const AUTO_SLIDE_DELAY = 4000;
const MAX_MARKET_COUNT = 3;

function getSlideStep(container: HTMLDivElement) {
  const styles = window.getComputedStyle(container);
  const gap = Number.parseFloat(styles.columnGap) || 0;

  return container.clientWidth + gap;
}

export default function HomeLiveMarketList() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const { coordinates } = useCurrentLocation();

  const today = formatIsoDate(getToday());

  const { data, isPending } = useMarketsOpenOn({
    date: today,
    coordinates,
  });

  const markets = data?.pages[0]?.markets.slice(0, MAX_MARKET_COUNT) ?? [];

  const handleScroll = () => {
    const container = scrollContainerRef.current;

    if (!container) {
      return;
    }

    const slideStep = getSlideStep(container);

    if (slideStep === 0) {
      return;
    }

    const nextIndex = Math.round(container.scrollLeft / slideStep);

    const clampedIndex = Math.min(Math.max(nextIndex, 0), markets.length - 1);

    setCurrentIndex(clampedIndex);
  };

  const moveToSlide = useCallback(
    (index: number) => {
      const container = scrollContainerRef.current;

      if (!container || markets.length === 0) {
        return;
      }

      const nextIndex = (index + markets.length) % markets.length;
      const slideStep = getSlideStep(container);

      container.scrollTo({
        left: nextIndex * slideStep,
        behavior: "smooth",
      });

      setCurrentIndex(nextIndex);
    },
    [markets.length]
  );

  const handlePrevious = () => {
    moveToSlide(currentIndex - 1);
  };

  const handleNext = () => {
    moveToSlide(currentIndex + 1);
  };

  useEffect(() => {
    if (markets.length <= 1) {
      return;
    }

    const timer = window.setTimeout(() => {
      moveToSlide(currentIndex + 1);
    }, AUTO_SLIDE_DELAY);

    return () => {
      window.clearTimeout(timer);
    };
  }, [currentIndex, markets.length, moveToSlide]);

  if (isPending || markets.length === 0) {
    return null;
  }

  return (
    <section aria-label="오늘 열리는 시장" className="flex flex-col gap-1 px-5">
      {markets.length > 1 && (
        <nav
          aria-label="시장 슬라이드 이동"
          className="flex items-center justify-end gap-1"
        >
          <button
            type="button"
            onClick={handlePrevious}
            aria-label="이전 시장 보기"
            className="text-gray flex h-4 w-4 cursor-pointer items-center justify-center rounded-full transition-colors hover:bg-black/5"
          >
            <ChevronLeft aria-hidden="true" className="h-4 w-4" />
          </button>

          <span className="text-gray min-w-10 text-center text-xs font-medium">
            {currentIndex + 1} / {markets.length}
          </span>

          <button
            type="button"
            onClick={handleNext}
            aria-label="다음 시장 보기"
            className="text-gray flex h-4 w-4 cursor-pointer items-center justify-center rounded-full transition-colors hover:bg-black/5"
          >
            <ChevronRight aria-hidden="true" className="h-4 w-4" />
          </button>
        </nav>
      )}

      <div
        ref={scrollContainerRef}
        onScroll={handleScroll}
        className="flex snap-x snap-mandatory scrollbar-none gap-4 overflow-x-auto overscroll-x-contain [&::-webkit-scrollbar]:hidden"
      >
        {markets.map((market) => {
          const mapUrl =
            "https://www.google.com/maps/search/?api=1&query=" +
            encodeURIComponent(market.road_address);

          return (
            <div key={market.market_id} className="w-full shrink-0 snap-start">
              <HomeLiveMarketItem
                name={market.name}
                schedule={market.open_cycle}
                address={market.road_address}
                mapUrl={mapUrl}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
}
