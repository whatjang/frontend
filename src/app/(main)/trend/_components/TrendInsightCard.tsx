"use client";

import { useState } from "react";

import { TrendingUp } from "lucide-react";

interface TrendInsight {
  title: string;
  updatedAt: string;
  keywords: {
    name: string;
    rate: number;
    history: {
      day: string;
      value: number;
    }[];
  }[];
  sources: string[];
}

interface TrendInsightCardProps {
  insight: TrendInsight;
}

export default function TrendInsightCard({ insight }: TrendInsightCardProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const selectedKeyword = insight.keywords[selectedIndex];

  const maxValue = Math.max(
    ...selectedKeyword.history.map((item) => item.value)
  );

  return (
    <section className="border-light-gray shadow-light-gray rounded-xl border bg-white p-3 shadow-xs">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-green text-xs font-bold uppercase">
            Market Intelligence
          </p>

          <h2 className="text-deep-gray text-xs font-semibold">
            {insight.title}
          </h2>
        </div>

        <TrendingUp className="text-light-brown h-4 w-4" />
      </div>

      <div className="mt-5 flex items-end justify-between">
        <div>
          <p className="text-deep-gray text-xs font-semibold">
            {selectedKeyword.name} 검색 관심도
          </p>

          <p className="text-deep-gray mt-0.5 text-xs">최근 7일</p>
        </div>

        <span className="text-green text-xs font-bold">
          +{selectedKeyword.rate}%
        </span>
      </div>

      <div className="mt-3 flex h-22 items-end gap-2">
        {selectedKeyword.history.map((item) => {
          const isActive = item.value === maxValue;

          return (
            <div
              key={item.day}
              className="flex h-full min-w-0 flex-1 flex-col justify-end"
            >
              <div
                className={`w-full rounded-t-lg transition-all duration-300 ${
                  isActive ? "bg-green" : "bg-light-gray"
                }`}
                style={{
                  height: `${Math.max(item.value, 20)}%`,
                }}
              />
            </div>
          );
        })}
      </div>

      <div className="mt-1 flex gap-2">
        {selectedKeyword.history.map((item) => (
          <span
            key={item.day}
            className="text-deep-gray/60 flex-1 text-center text-xs font-medium"
          >
            {item.day}
          </span>
        ))}
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {insight.keywords.map((keyword, index) => {
          const isSelected = selectedIndex === index;

          return (
            <button
              key={keyword.name}
              type="button"
              onClick={() => setSelectedIndex(index)}
              className={`cursor-pointer rounded-full border px-2 py-1 text-xs font-semibold transition-colors ${
                isSelected
                  ? "border-green bg-light-green text-green"
                  : "border-light-brown bg-light-brown/10 text-light-brown"
              }`}
            >
              #{keyword.name} +{keyword.rate}%
            </button>
          );
        })}
      </div>

      <p className="text-deep-gray mt-2 text-xs font-medium">
        업데이트 {insight.updatedAt}
      </p>

      <div className="mt-4 flex flex-wrap items-center gap-3">
        {insight.sources.map((source, index) => (
          <div
            key={source}
            className="text-deep-gray flex items-center gap-1.5 text-xs font-medium"
          >
            <span
              className={`h-1.5 w-1.5 rounded-full ${
                index === 0 ? "bg-green" : "bg-light-brown"
              }`}
            />

            {source}
          </div>
        ))}
      </div>
    </section>
  );
}
