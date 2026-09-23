"use client";

import { REPORT_FEED_CATEGORIES } from "@/src/app/(main)/reports/_config/reportCategory";
import type { ReportFeedCategory } from "@/src/types/report";

interface ReportCategoryFilterProps {
  selectedCategory: ReportFeedCategory;
  onChange: (category: ReportFeedCategory) => void;
}

export default function ReportCategoryFilter({
  selectedCategory,
  onChange,
}: ReportCategoryFilterProps) {
  return (
    <div
      role="group"
      aria-label="제보 카테고리 필터"
      className="flex scrollbar-none gap-2 overflow-x-auto pl-5"
    >
      {REPORT_FEED_CATEGORIES.map(({ value, label, icon: Icon }) => {
        const isSelected = selectedCategory === value;

        return (
          <button
            key={value}
            type="button"
            aria-pressed={isSelected}
            onClick={() => onChange(value)}
            className={[
              "border-light-gray flex cursor-pointer items-center gap-1.5",
              "rounded-full border px-3 py-1",
              "text-sm font-bold whitespace-nowrap transition-colors",
              isSelected
                ? "border-green bg-green text-white"
                : "text-deep-gray bg-white",
            ].join(" ")}
          >
            <Icon size={16} strokeWidth={1.8} aria-hidden="true" />
            {label}
          </button>
        );
      })}
    </div>
  );
}
