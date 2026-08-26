import type { TrendFood } from "@/src/types/trend";
import TrendMarketItem from "./TrendMarketItem";

interface TrendMarketListProps {
  trends: TrendFood[];
}

export default function TrendMarketList({ trends }: TrendMarketListProps) {
  return (
    <section>
      <h2 className="text-green mb-2 text-lg font-semibold">
        트렌드 맞춤 시장 추천
      </h2>

      <div className="space-y-4">
        {trends.map((trend) => (
          <TrendMarketItem key={trend.id} trend={trend} />
        ))}
      </div>
    </section>
  );
}
