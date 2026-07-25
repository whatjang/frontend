import Link from "next/link";

import HomeTrendFoodItem from "./HomeTrendFoodItem";

interface TrendFood {
  id: number;
  rank: number;
  marketName: string;
  title: string;
  tag: string;
  href: string;
}

interface HomeTrendFoodListProps {
  trends: TrendFood[];
}

export default function HomeTrendFoodList({ trends }: HomeTrendFoodListProps) {
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

          <p className="text-gray text-xs font-semibold">
            산지의 싱싱함을 전해드려요
          </p>
        </div>

        <Link
          href="/tour"
          className="border-green/20 text-green shrink-0 cursor-pointer rounded-full border bg-white/40 px-4 py-1.5 text-xs font-semibold backdrop-blur-sm transition-colors hover:bg-white/70"
        >
          전체보기
        </Link>
      </header>

      <div className="flex snap-x snap-mandatory scroll-px-5 scrollbar-none gap-4 overflow-x-auto overscroll-x-contain px-5 [&::-webkit-scrollbar]:hidden">
        {trends.map((trend) => (
          <div
            key={trend.id}
            className={
              trends.length === 1
                ? "w-full shrink-0 snap-start"
                : "w-[80%] shrink-0 snap-start"
            }
          >
            <HomeTrendFoodItem
              rank={trend.rank}
              marketName={trend.marketName}
              title={trend.title}
              tag={trend.tag}
              href={trend.href}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
