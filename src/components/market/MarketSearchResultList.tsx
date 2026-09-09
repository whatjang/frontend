import type { MarketSearchItem } from "@/src/services/market";

import MarketSearchResultItem from "./MarketSearchResultItem";

interface MarketSearchResultListProps {
  markets: MarketSearchItem[];
  hasSearched: boolean;
  getHref: (market: MarketSearchItem) => string;
  searchPrompt?: string;
}

export default function MarketSearchResultList({
  markets,
  hasSearched,
  getHref,
  searchPrompt = "시장을 검색해주세요.",
}: MarketSearchResultListProps) {
  if (!hasSearched) {
    return (
      <p className="text-deep-gray py-16 text-center text-sm">{searchPrompt}</p>
    );
  }

  if (markets.length === 0) {
    return (
      <p role="status" className="text-deep-gray py-16 text-center text-sm">
        검색 결과가 없습니다.
      </p>
    );
  }

  return (
    <ul className="flex flex-col gap-2">
      {markets.map((market) => (
        <li key={market.id}>
          <MarketSearchResultItem market={market} href={getHref(market)} />
        </li>
      ))}
    </ul>
  );
}
