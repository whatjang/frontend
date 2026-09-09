import { searchMarkets } from "@/src/services/market";

import MarketSearchSection from "@/src/components/market/MarketSearchSection";

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
    <main className="px-5">
      <MarketSearchSection
        title="제보할 시장 선택"
        description="현장 소식을 제보할 시장을 검색해주세요."
        keyword={keyword}
        markets={markets}
        getHref={(market) => `/reports/new/${market.id}`}
      />
    </main>
  );
}
