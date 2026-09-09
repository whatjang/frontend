"use client";

import { REPORT_TAGS } from "@/src/constants/report";
import type { ReportTag } from "@/src/types/report";

import { REPORT_CATEGORY_ICONS } from "@/src/app/(main)/reports/_config/reportCategory";

interface ReportCategoryProps {
  value: ReportTag | null;
  onChange: (category: ReportTag) => void;
}

export default function ReportCategory({
  value,
  onChange,
}: ReportCategoryProps) {
  return (
    <fieldset className="flex flex-col gap-2">
      <legend className="text-deep-gray text-sm font-semibold">
        제보 카테고리
      </legend>

      <div className="flex flex-wrap gap-2">
        {REPORT_TAGS.map((tag) => {
          const Icon = REPORT_CATEGORY_ICONS[tag];
          const isSelected = value === tag;

          return (
            <button
              key={tag}
              type="button"
              aria-pressed={isSelected}
              onClick={() => onChange(tag)}
              className={[
                "flex items-center gap-2 rounded-full border px-3 py-1",
                "cursor-pointer text-sm font-medium transition-colors",
                isSelected
                  ? "border-green bg-green text-white"
                  : "border-light-gray text-deep-gray bg-white",
              ].join(" ")}
            >
              <Icon size={17} strokeWidth={1.8} aria-hidden="true" />

              {tag}
            </button>
          );
        })}
      </div>
    </fieldset>
  );
}
