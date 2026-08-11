import HomeFavoriteMarketItem from "./HomeFavoriteMarketItem";

interface FavoriteMarket {
  id: number;
  name: string;
  remainingDays: number;
  href: string;
}

interface HomeFavoriteMarketListProps {
  markets: FavoriteMarket[];
}

export default function HomeFavoriteMarketList({
  markets,
}: HomeFavoriteMarketListProps) {
  if (markets.length === 0) {
    return null;
  }

  return (
    <section aria-label="즐겨찾는 시장" className="pl-5">
      <div className="flex snap-x snap-mandatory scrollbar-none gap-3 overflow-x-auto [&::-webkit-scrollbar]:hidden">
        {markets.map((market) => (
          <div
            key={market.id}
            className={
              markets.length === 1
                ? "w-full shrink-0"
                : "w-[94%] shrink-0 snap-start"
            }
          >
            <HomeFavoriteMarketItem
              name={market.name}
              remainingDays={market.remainingDays}
              href={market.href}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
