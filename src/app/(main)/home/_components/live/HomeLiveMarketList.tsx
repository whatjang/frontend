"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useState } from "react";

import HomeLiveMarketItem from "./HomeLiveMarketItem";

interface HomeLiveMarket {
  id: number;
  name: string;
  schedule: string;
  address: string;
}

interface HomeLiveMarketListProps {
  markets: HomeLiveMarket[];
}

function getSlideStep(container: HTMLDivElement) {
  const styles = window.getComputedStyle(container);
  const gap = Number.parseFloat(styles.columnGap) || 0;

  return container.clientWidth + gap;
}

export default function HomeLiveMarketList({
  markets,
}: HomeLiveMarketListProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

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

  const moveToSlide = (index: number) => {
    const container = scrollContainerRef.current;

    if (!container) {
      return;
    }

    const nextIndex = Math.min(Math.max(index, 0), markets.length - 1);

    const slideStep = getSlideStep(container);

    container.scrollTo({
      left: nextIndex * slideStep,
      behavior: "smooth",
    });

    setCurrentIndex(nextIndex);
  };

  const handlePrevious = () => {
    moveToSlide(currentIndex - 1);
  };

  const handleNext = () => {
    moveToSlide(currentIndex + 1);
  };

  if (markets.length === 0) {
    return null;
  }

  return (
    <section
      aria-label="현재 운영 중인 시장"
      className="flex flex-col gap-1 px-5"
    >
      {markets.length > 1 && (
        <nav
          aria-label="시장 슬라이드 이동"
          className="flex items-center justify-end gap-1"
        >
          <button
            type="button"
            onClick={handlePrevious}
            disabled={currentIndex === 0}
            aria-label="이전 시장 보기"
            className="text-gray flex h-4 w-4 cursor-pointer items-center justify-center rounded-full transition-colors hover:bg-black/5 disabled:cursor-not-allowed disabled:opacity-30"
          >
            <ChevronLeft aria-hidden="true" className="h-4 w-4" />
          </button>

          <span
            aria-live="polite"
            className="text-gray min-w-10 text-center text-xs font-medium"
          >
            {currentIndex + 1} / {markets.length}
          </span>

          <button
            type="button"
            onClick={handleNext}
            disabled={currentIndex === markets.length - 1}
            aria-label="다음 시장 보기"
            className="text-gray flex h-4 w-4 cursor-pointer items-center justify-center rounded-full transition-colors hover:bg-black/5 disabled:cursor-not-allowed disabled:opacity-30"
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
            encodeURIComponent(market.address);

          return (
            <div key={market.id} className="w-full shrink-0 snap-start">
              <HomeLiveMarketItem
                name={market.name}
                schedule={market.schedule}
                address={market.address}
                mapUrl={mapUrl}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
}
