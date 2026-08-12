import { mockTrendData } from "@/src/mocks/trend";

import TrendInsightCard from "./_components/TrendInsightCard";
import TrendNotice from "./_components/TrendNotice";
import TrendMarketList from "./_components/TrendMarketList";

export default function TrendPage() {
  const { insight, trendFood } = mockTrendData;

  return (
    <div className="min-h-screen w-full space-y-5 px-5">
      <TrendInsightCard insight={insight} />

      <TrendNotice />

      <TrendMarketList trends={trendFood} />
    </div>
  );
}
