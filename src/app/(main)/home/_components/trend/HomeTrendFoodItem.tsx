import Link from "next/link";

import type { CurationTrend } from "@/src/types/curation";
import { formatGrowthRate } from "@/src/utils/curation";

interface HomeTrendFoodItemProps {
  trend: CurationTrend;
}

export default function HomeTrendFoodItem({ trend }: HomeTrendFoodItemProps) {
  const formattedRank = String(trend.rank).padStart(2, "0");

  return (
    <Link
      href={`/trend?keywordId=${encodeURIComponent(trend.keyword_id)}`}
      aria-label={`${trend.keyword} 트렌드 상세 보기`}
      className="border-light-brown/20 to-light-brown/5 block h-full overflow-hidden rounded-3xl border bg-linear-to-br from-white"
    >
      <article className="relative flex h-full min-h-52 flex-col overflow-hidden p-5">
        <span
          aria-hidden="true"
          className="text-light-brown/15 absolute -top-3 right-3 text-7xl font-black"
        >
          {formattedRank}
        </span>

        <div className="relative">
          <span className="text-light-brown text-xs font-bold">
            TREND #{formattedRank}
          </span>

          <h3 className="mt-3 text-xl font-bold text-black">{trend.keyword}</h3>

          <div className="mt-5">
            <p className="text-deep-gray text-xs font-medium">
              이번 주 검색 증가율
            </p>

            <p className="text-green mt-1 text-3xl font-bold">
              {formatGrowthRate(trend.search_growth_rate)}
            </p>
          </div>
        </div>

        <div className="border-light-brown/15 text-deep-gray relative mt-auto flex items-center gap-2 border-t pt-4 text-xs font-medium">
          <span>외부 지표 {trend.external_score.toFixed(1)}</span>

          <span className="bg-light-brown/30 h-3 w-px" />

          <span>완성도 {Math.round(trend.data_completeness * 100)}%</span>
        </div>
      </article>
    </Link>
  );
}
