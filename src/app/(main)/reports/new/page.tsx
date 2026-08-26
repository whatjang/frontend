import { searchMarkets } from "@/src/services/market";

import MarketSearchInput from "./_components/MarketSearchInput";
import MarketSelectList from "./_components/MarketSelectList";

interface ReportMarketSelectPageProps {
  searchParams: Promise<{
    q?: string;
  }>;
}

export default async function ReportMarketSelectPage({
  searchParams,
}: ReportMarketSelectPageProps) {
  const { q = "" } = await searchParams;

  const keyword = q.trim();

  const markets = keyword ? await searchMarkets(keyword) : [];

  return (
    <main className="flex flex-col gap-6 px-5">
      <div className="flex flex-col gap-1">
        <h1 className="text-green text-xl font-bold">제보할 시장 선택</h1>

        <p className="text-deep-gray text-xs font-medium">
          현장 소식을 제보할 시장을 검색해주세요.
        </p>
      </div>

      <MarketSearchInput initialKeyword={keyword} />

      <MarketSelectList markets={markets} hasSearched={keyword.length > 0} />
    </main>
  );
}
