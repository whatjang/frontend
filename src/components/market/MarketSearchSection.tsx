import type { MarketSearchItem } from "@/src/services/market";

import MarketSearchInput from "./MarketSearchInput";
import MarketSelectList from "./MarketSelectList";

interface MarketSearchSectionProps {
  title: string;
  description: string;
  keyword: string;
  markets: MarketSearchItem[];
  getHref: (market: MarketSearchItem) => string;
}

export default function MarketSearchSection({
  title,
  description,
  keyword,
  markets,
  getHref,
}: MarketSearchSectionProps) {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-1">
        <h1 className="text-green text-xl font-bold">{title}</h1>

        <p className="text-deep-gray text-xs font-medium">{description}</p>
      </div>

      <MarketSearchInput initialKeyword={keyword} />

      <MarketSelectList
        markets={markets}
        hasSearched={keyword.length > 0}
        getHref={getHref}
      />
    </div>
  );
}
