import type { MarketSearchItem } from "@/src/services/market";

import MarketSearchInput from "./MarketSearchInput";
import MarketSearchResultList from "./MarketSearchResultList";

interface MarketSearchSectionProps {
  title: string;
  description: string;
  keyword: string;
  markets: MarketSearchItem[];
  getHref: (market: MarketSearchItem) => string;
  searchPrompt?: string;
}

export default function MarketSearchSection({
  title,
  description,
  keyword,
  markets,
  getHref,
  searchPrompt,
}: MarketSearchSectionProps) {
  return (
    <section
      aria-labelledby="market-search-title"
      className="flex flex-col gap-6"
    >
      <header className="flex flex-col gap-1">
        <h1 id="market-search-title" className="text-green text-xl font-bold">
          {title}
        </h1>

        <p className="text-deep-gray text-xs font-medium">{description}</p>
      </header>

      <MarketSearchInput initialKeyword={keyword} />

      <MarketSearchResultList
        markets={markets}
        hasSearched={keyword.length > 0}
        getHref={getHref}
        searchPrompt={searchPrompt}
      />
    </section>
  );
}
