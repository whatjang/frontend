"use client";

import { StarIcon } from "lucide-react";
import { useRef, useState } from "react";

import type { MarketFavoriteItem } from "@/src/types/market/index";

import FavoriteItem from "./FavoriteItem";

interface FavoriteListProps {
  markets: MarketFavoriteItem[];
  onRemove: (marketId: number) => void;
}

const ITEMS_PER_PAGE = 3;

function chunkMarkets(markets: MarketFavoriteItem[]) {
  const chunks: MarketFavoriteItem[][] = [];

  for (let i = 0; i < markets.length; i += ITEMS_PER_PAGE) {
    chunks.push(markets.slice(i, i + ITEMS_PER_PAGE));
  }

  return chunks;
}

export default function FavoriteList({ markets, onRemove }: FavoriteListProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [currentPage, setCurrentPage] = useState(0);

  const marketPages = chunkMarkets(markets);

  const activePage = Math.min(currentPage, Math.max(marketPages.length - 1, 0));

  const handleScroll = () => {
    const container = scrollRef.current;

    if (!container || marketPages.length === 0) {
      return;
    }

    const containerLeft = container.getBoundingClientRect().left;
    const pages = Array.from(container.children) as HTMLElement[];

    const page = pages.reduce((closest, element, index) => {
      const distance = Math.abs(
        element.getBoundingClientRect().left - containerLeft
      );

      const closestDistance = Math.abs(
        pages[closest].getBoundingClientRect().left - containerLeft
      );

      return distance < closestDistance ? index : closest;
    }, 0);

    setCurrentPage(page);
  };

  const handleSelectPage = (page: number) => {
    const target = scrollRef.current?.children[page] as HTMLElement | undefined;

    target?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "start",
    });

    setCurrentPage(page);
  };

  return (
    <section className="flex flex-col gap-2">
      <div className="flex items-center gap-1">
        <StarIcon className="fill-green text-green" size={18} />
        <h2 className="text-green font-bold">즐겨찾는 장터</h2>
      </div>

      {markets.length === 0 ? (
        <div className="text-deep-gray rounded-xl text-center text-xs">
          즐겨찾기한 시장이 없어요.
        </div>
      ) : (
        <>
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="scrollbar-hide flex snap-x snap-mandatory scrollbar-none gap-2 overflow-x-auto scroll-smooth"
          >
            {marketPages.map((page, pageIndex) => (
              <div
                key={pageIndex}
                className="flex w-full shrink-0 snap-start flex-col gap-2"
              >
                {page.map((market) => (
                  <FavoriteItem
                    key={market.market_id}
                    market={market}
                    onRemove={onRemove}
                  />
                ))}
              </div>
            ))}
          </div>

          {marketPages.length > 1 && (
            <div className="flex items-center justify-center gap-1.5">
              {marketPages.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  aria-label={`${index + 1}페이지로 이동`}
                  aria-current={activePage === index ? "page" : undefined}
                  onClick={() => handleSelectPage(index)}
                  className={`h-1.5 cursor-pointer rounded-full transition-all ${
                    activePage === index
                      ? "bg-green w-4"
                      : "bg-light-gray w-1.5"
                  }`}
                />
              ))}
            </div>
          )}
        </>
      )}
    </section>
  );
}
