"use client";

import Link from "next/link";

import Spinner from "@/src/components/common/Spinner";
import { useWeeklyCuration } from "@/src/hooks/curation/useWeeklyCuration";

import HomeTrendFoodItem from "./HomeTrendFoodItem";

export default function HomeTrendFoodList() {
  const { data, isPending, error } = useWeeklyCuration();

  if (isPending) {
    return (
      <div className="flex justify-center py-8">
        <Spinner />
      </div>
    );
  }

  if (error || !data) {
    return null;
  }

  const trends = [...data.trends].sort((a, b) => a.rank - b.rank);

  if (trends.length === 0) {
    return null;
  }

  return (
    <section aria-labelledby="trend-food-title" className="flex flex-col gap-4">
      <header className="flex items-center justify-between px-5">
        <div className="min-w-0">
          <h2 id="trend-food-title" className="text-green text-lg font-bold">
            이번 주 먹거리 트렌드
          </h2>

          <p className="text-deep-gray text-xs font-semibold">
            주목받는 강원도 먹거리를 확인해보세요
          </p>
        </div>

        <Link
          href="/trend"
          className="border-green/20 text-green shrink-0 cursor-pointer rounded-full border bg-white/40 px-4 py-1.5 text-xs font-semibold backdrop-blur-sm transition-colors hover:bg-white/70"
        >
          전체보기
        </Link>
      </header>

      <div className="flex snap-x snap-mandatory scroll-px-5 scrollbar-none gap-4 overflow-x-auto overscroll-x-contain px-5 [&::-webkit-scrollbar]:hidden">
        {trends.map((trend) => (
          <div
            key={trend.keyword_id}
            className={
              trends.length === 1
                ? "w-full shrink-0 snap-start"
                : "w-[80%] shrink-0 snap-start"
            }
          >
            <HomeTrendFoodItem trend={trend} />
          </div>
        ))}
      </div>
    </section>
  );
}
