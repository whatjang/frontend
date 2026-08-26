"use client";

import type { ReportTag } from "@/src/types/report";

export type ReportCategory = "전체" | ReportTag;

const categories: ReportCategory[] = [
  "전체",
  "혼잡도",
  "운영 여부",
  "새로운 먹거리",
  "이벤트/축제",
  "기타",
];

interface ReportCategoryFilterProps {
  selectedCategory: ReportCategory;
  onChange: (category: ReportCategory) => void;
}

export default function ReportCategoryFilter({
  selectedCategory,
  onChange,
}: ReportCategoryFilterProps) {
  return (
    <div className="flex scrollbar-none gap-2 overflow-x-auto pl-5">
      {categories.map((category) => {
        const isSelected = selectedCategory === category;

        return (
          <button
            key={category}
            type="button"
            onClick={() => onChange(category)}
            className={`border-light-gray cursor-pointer rounded-full border px-2 py-1 text-sm font-bold whitespace-nowrap transition-colors ${
              isSelected ? "bg-green text-white" : "text-deep-gray bg-white"
            }`}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}
