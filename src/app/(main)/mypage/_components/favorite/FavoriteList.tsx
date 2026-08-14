"use client";

import { StarIcon } from "lucide-react";
import { useState } from "react";

import { FavoriteMarket } from "@/src/types/mypage";

import FavoriteItem from "./FavoriteItem";

interface FavoriteListProps {
  markets: FavoriteMarket[];
}

const ITEMS_PER_PAGE = 3;

function chunkMarkets(markets: FavoriteMarket[]) {
  const chunks: FavoriteMarket[][] = [];

  for (let i = 0; i < markets.length; i += ITEMS_PER_PAGE) {
    chunks.push(markets.slice(i, i + ITEMS_PER_PAGE));
  }

  return chunks;
}

export default function FavoriteList({ markets }: FavoriteListProps) {
  const [favoriteMarkets, setFavoriteMarkets] =
    useState<FavoriteMarket[]>(markets);

  const marketPages = chunkMarkets(favoriteMarkets);

  const handleRemoveFavorite = (marketId: number) => {
    setFavoriteMarkets((prev) =>
      prev.filter((market) => market.id !== marketId)
    );
  };

  return (
    <section className="flex flex-col gap-2">
      <div className="flex items-center gap-1">
        <StarIcon className="fill-green text-green" size={18} />
        <h2 className="text-green font-bold">즐겨찾기</h2>
      </div>

      {favoriteMarkets.length === 0 ? (
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
                  key={market.id}
                  market={market}
                  onRemove={handleRemoveFavorite}
                />
              ))}
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
