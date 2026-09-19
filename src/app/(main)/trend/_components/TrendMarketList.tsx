import type { RecommendedMarket } from "@/src/types/curation";

import TrendMarketItem from "./TrendMarketItem";

interface TrendMarketListProps {
  markets: RecommendedMarket[];
}

export default function TrendMarketList({ markets }: TrendMarketListProps) {
  return (
    <section>
      <h2 className="text-green mb-2 text-lg font-semibold">
        트렌드 맞춤 시장 추천
      </h2>

      {markets.length === 0 ? (
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
          {markets.map((market) => (
            <TrendMarketItem key={market.market_id} market={market} />
          ))}
        </div>
      )}
    </section>
  );
}
