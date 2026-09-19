"use client";

import { TrendingUp } from "lucide-react";
import { useState } from "react";

import { CURATION_SOURCE_LABELS } from "@/src/constants/curation";
import type { CurationTrend } from "@/src/types/curation";
import { formatDateTime } from "@/src/utils/date";

interface TrendInsightCardProps {
  trends: CurationTrend[];
  generatedAt: string;
}

interface MetricItemProps {
  label: string;
  value: string;
}

function formatRate(rate: number | null) {
  if (rate === null) {
    return "-";
  }

  return `${rate > 0 ? "+" : ""}${rate}%`;
}

function MetricItem({ label, value }: MetricItemProps) {
  return (
    <div className="bg-light-gray/30 min-w-0 rounded-lg p-2 text-center">
      <p className="text-deep-gray text-xs whitespace-nowrap">{label}</p>

      <p className="text-green mt-1 text-sm font-bold">{value}</p>
    </div>
  );
}

export default function TrendInsightCard({
  trends,
  generatedAt,
}: TrendInsightCardProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const selectedTrend = trends[selectedIndex];

  const availableSources = Object.entries(selectedTrend.source_statuses)
    .filter(([, status]) => status === "AVAILABLE")
    .map(([source]) => source);

  return (
    <section className="border-light-gray shadow-light-gray rounded-xl border bg-white p-3 shadow-xs">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-green text-xs font-bold uppercase">
            Market Intelligence
          </p>

          <h2 className="text-deep-gray text-xs font-semibold">
            이번 주 먹거리 트렌드
          </h2>
        </div>

        <TrendingUp className="text-light-brown h-4 w-4" aria-hidden="true" />
      </div>

      <div className="mt-5">
        <p className="text-deep-gray text-sm font-semibold">
          {selectedTrend.keyword}
        </p>

        <div className="mt-1 flex items-end gap-2">
          <p className="text-green text-2xl font-bold">
            {formatRate(selectedTrend.search_growth_rate)}
          </p>

          <span className="text-deep-gray mb-0.5 text-xs font-medium">
            검색 증가율
          </span>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-3 gap-2">
        <MetricItem
          label="쇼핑 증가율"
          value={formatRate(selectedTrend.shopping_growth_rate)}
        />

        <MetricItem
          label="외부 지표"
          value={selectedTrend.external_score.toFixed(1)}
        />

        <MetricItem
          label="데이터 완성도"
          value={`${Math.round(selectedTrend.data_completeness * 100)}%`}
        />
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {trends.map((trend, index) => {
          const isSelected = selectedIndex === index;

          return (
            <button
              key={trend.keyword_id}
              type="button"
              aria-pressed={isSelected}
              onClick={() => setSelectedIndex(index)}
              className={`cursor-pointer rounded-full border px-2 py-1 text-xs font-semibold transition-colors ${
                isSelected
                  ? "border-green bg-light-green text-green"
                  : "border-light-brown bg-light-brown/10 text-light-brown"
              }`}
            >
              #{trend.keyword} {formatRate(trend.search_growth_rate)}
            </button>
          );
        })}
      </div>

      <p className="text-deep-gray mt-1 text-xs font-medium">
        업데이트: {formatDateTime(generatedAt)}
      </p>

      {availableSources.length > 0 && (
        <div className="mt-4">
          <p className="text-deep-gray text-xs font-semibold">데이터 출처</p>

          <div className="flex flex-wrap items-center gap-2 gap-y-0.5">
            {availableSources.map((source) => (
              <div
                key={source}
                className="text-deep-gray flex items-center gap-1 text-xs font-medium"
              >
                <span className="bg-green h-1.5 w-1.5 rounded-full" />

                {CURATION_SOURCE_LABELS[source] ?? source}
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
