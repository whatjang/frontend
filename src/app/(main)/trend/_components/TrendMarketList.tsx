import type { CurationTrend } from "@/src/types/curation";
import type { CurationTrendWithPrimaryMarket } from "@/src/types/curation/weeklyCuration";

import TrendMarketItem from "./TrendMarketItem";

interface TrendMarketListProps {
  trends: CurationTrend[];
}

function hasPrimaryMarket(
  trend: CurationTrend
): trend is CurationTrendWithPrimaryMarket {
  return trend.primary_market !== null;
}

export default function TrendMarketList({ trends }: TrendMarketListProps) {
  const marketGroups = Array.from(
    trends
      .filter(hasPrimaryMarket)
      .reduce((groups, trend) => {
        const marketId = trend.primary_market.market_id;

        const existing = groups.get(marketId) ?? [];

        groups.set(marketId, [...existing, trend]);

        return groups;
      }, new Map<string, CurationTrendWithPrimaryMarket[]>())
      .entries()
  );

  return (
    <section>
      <h2 className="text-green mb-2 text-lg font-semibold">
        트렌드 맞춤 시장 추천
      </h2>

      {marketGroups.length === 0 ? (
        <div className="bg-light-gray/30 rounded-xl px-4 py-6 text-center">
          <p className="text-deep-gray text-sm font-medium">
            이번 주 추천 시장을 준비 중이에요.
          </p>

          <p className="text-deep-gray mt-1 text-xs">
            추천 시장이 선정되면 이곳에 표시돼요.
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {marketGroups.map(([marketId, marketTrends]) => (
            <TrendMarketItem
              key={marketId}
              marketId={Number(marketId)}
              trends={marketTrends}
            />
          ))}
        </div>
      )}
    </section>
  );
}
