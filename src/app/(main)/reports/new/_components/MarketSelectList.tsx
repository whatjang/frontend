import type { MarketSearchItem } from "@/src/services/market";

import MarketSelectItem from "./MarketSelectItem";

interface MarketSelectListProps {
  markets: MarketSearchItem[];
  hasSearched: boolean;
}

export default function MarketSelectList({
  markets,
  hasSearched,
}: MarketSelectListProps) {
  if (!hasSearched) {
    return (
      <p className="text-deep-gray py-16 text-center text-sm">
        제보할 시장을 검색해주세요.
      </p>
    );
  }

  if (markets.length === 0) {
    return (
      <p className="text-deep-gray py-16 text-center text-sm">
        검색 결과가 없습니다.
      </p>
    );
  }

  return (
    <ul className="flex flex-col gap-2">
      {markets.map((market) => (
        <MarketSelectItem key={market.id} market={market} />
      ))}
    </ul>
  );
}
