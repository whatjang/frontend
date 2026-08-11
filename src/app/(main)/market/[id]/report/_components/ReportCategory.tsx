"use client";

import { Clock3, Ellipsis, Ticket, UsersRound, Utensils } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { ReportCategoryType } from "./MarketReportForm";

interface ReportCategoryProps {
  value: ReportCategoryType | null;
  onChange: (category: ReportCategoryType) => void;
}

const categories: {
  label: ReportCategoryType;
  icon: LucideIcon;
}[] = [
  {
    label: "혼잡도",
    icon: UsersRound,
  },
  {
    label: "운영 여부",
    icon: Clock3,
  },
  {
    label: "새로운 먹거리",
    icon: Utensils,
  },
  {
    label: "이벤트/축제",
    icon: Ticket,
  },
  {
    label: "기타",
    icon: Ellipsis,
  },
];

export default function ReportCategory({
  value,
  onChange,
}: ReportCategoryProps) {
  return (
    <div className="flex flex-col gap-2">
      <p className="text-deep-gray text-sm font-semibold">제보 카테고리</p>

      <div className="flex flex-wrap gap-2">
        {categories.map(({ label, icon: Icon }) => {
          const isSelected = value === label;

          return (
            <button
              key={label}
              type="button"
              onClick={() => onChange(label)}
              className={[
                "flex items-center gap-2 rounded-full border px-3 py-1",
                "cursor-pointer text-sm font-medium transition-colors",
                isSelected
                  ? "border-green bg-green text-white"
                  : "border-light-gray text-deep-gray bg-white",
              ].join(" ")}
            >
              <Icon size={17} strokeWidth={1.8} />
              {label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
