import { searchMarkets } from "@/src/services/market";

import MarketSearchSection from "@/src/components/market/MarketSearchSection";

interface TourPageProps {
  searchParams: Promise<{
    q?: string;
  }>;
}

export default async function TourPage({ searchParams }: TourPageProps) {
  const { q = "" } = await searchParams;

  const keyword = q.trim();
  const markets = keyword ? await searchMarkets(keyword) : [];

  return (
    <main className="px-5">
      <MarketSearchSection
        title="시장 선택"
        description="주변 관광 정보를 확인할 시장을 검색해주세요."
        keyword={keyword}
        markets={markets}
        getHref={(market) => `/tour?marketId=${market.id}`}
      />
    </main>
  );
}
