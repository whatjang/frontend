"use client";

import {
  REPORT_ALL_CATEGORY_ICON,
  REPORT_CATEGORY_ICONS,
} from "@/src/app/(main)/reports/_config/reportCategory";
import { REPORT_TAGS } from "@/src/constants/report";
import type { ReportTag } from "@/src/types/report";

export type ReportCategory = "전체" | ReportTag;

const categories: ReportCategory[] = ["전체", ...REPORT_TAGS];

interface ReportCategoryFilterProps {
  selectedCategory: ReportCategory;
  onChange: (category: ReportCategory) => void;
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
      {categories.map((category) => {
        const isSelected = selectedCategory === category;

        const Icon =
          category === "전체"
            ? REPORT_ALL_CATEGORY_ICON
            : REPORT_CATEGORY_ICONS[category];

        return (
          <button
            key={category}
            type="button"
            aria-pressed={isSelected}
            onClick={() => onChange(category)}
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

            {category}
          </button>
        );
      })}
    </div>
  );
}
