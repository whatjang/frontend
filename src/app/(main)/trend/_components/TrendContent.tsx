"use client";

import { InfoIcon } from "lucide-react";

import Spinner from "@/src/components/common/Spinner";
import { useWeeklyCuration } from "@/src/hooks/curation/useWeeklyCuration";

import TrendInsightCard from "./TrendInsightCard";
import TrendMarketList from "./TrendMarketList";

export default function TrendContent() {
  const { data, isPending, error } = useWeeklyCuration();

  if (isPending) {
    return (
      <div className="flex min-h-60 items-center justify-center">
        <Spinner />
      </div>
    );
  }

  if (error || !data) {
    return (
      <p className="text-deep-gray py-10 text-center text-sm">
        트렌드 정보를 불러올 수 없습니다.
      </p>
    );
  }

  const trends = [...data.trends].sort((a, b) => a.rank - b.rank);

  const recommendedMarkets = [...data.recommended_markets].sort(
    (a, b) => a.recommendation_rank - b.recommendation_rank
  );

  return (
    <div className="space-y-5">
      {trends.length > 0 && (
        <TrendInsightCard trends={trends} generatedAt={data.generated_at} />
      )}

      <aside className="border-green/30 border-l-green bg-light-green flex gap-2.5 rounded-r-lg border border-l-2 px-3 py-3">
        <InfoIcon
          className="text-green mt-0.5 h-3.5 w-3.5 shrink-0"
          aria-hidden="true"
        />

        <p className="text-green text-xs font-medium">
          강원도의 트렌드 큐레이션은 <strong>실시간 검색 데이터</strong>와{" "}
          <strong>소셜 미디어 방문자 리뷰 데이터</strong>를 다각적으로 분석하여
          도출됩니다.
        </p>
      </aside>

      <TrendMarketList markets={recommendedMarkets} />
    </div>
  );
}
