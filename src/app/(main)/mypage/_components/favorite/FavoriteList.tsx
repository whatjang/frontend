"use client";

import { StarIcon } from "lucide-react";

import type { MarketFavoriteItem } from "@/src/types/market/index";

import FavoriteItem from "./FavoriteItem";

interface FavoriteListProps {
  markets: MarketFavoriteItem[];
  onRemove: (marketId: number) => void;
  onToggleNotification: (marketId: number) => void;
}

const ITEMS_PER_PAGE = 3;

function chunkMarkets(markets: MarketFavoriteItem[]) {
  const chunks: MarketFavoriteItem[][] = [];

  for (let i = 0; i < markets.length; i += ITEMS_PER_PAGE) {
    chunks.push(markets.slice(i, i + ITEMS_PER_PAGE));
  }

  return chunks;
}

export default function FavoriteList({
  markets,
  onRemove,
  onToggleNotification,
}: FavoriteListProps) {
  const marketPages = chunkMarkets(markets);

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
        <div className="scrollbar-hide flex snap-x snap-mandatory scrollbar-none gap-2 overflow-x-auto">
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
                  onToggleNotification={onToggleNotification}
                />
              ))}
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
