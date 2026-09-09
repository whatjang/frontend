import { mockTrendData } from "@/src/mocks/trend";

import TrendInsightCard from "./_components/TrendInsightCard";
import TrendMarketList from "./_components/TrendMarketList";
import TrendNotice from "./_components/TrendNotice";

export default function TrendPage() {
  const { insight, trendMarkets } = mockTrendData;

  return (
    <div className="min-h-screen w-full space-y-5 px-5">
      <TrendInsightCard insight={insight} />

      <TrendNotice />

      <TrendMarketList trends={trendMarkets} />
    </div>
  );
}
