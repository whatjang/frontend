"use client";

import { useState } from "react";

import type { Market } from "@/src/types/market";

import ReportCategoryFilter, {
  type ReportCategory,
} from "./ReportCategoryFilter";
import ReportList from "./ReportList";

interface ReportsContentProps {
  markets: Market[];
}

export default function ReportsContent({ markets }: ReportsContentProps) {
  const [selectedCategory, setSelectedCategory] =
    useState<ReportCategory>("전체");

  return (
    <>
      <ReportCategoryFilter
        selectedCategory={selectedCategory}
        onChange={setSelectedCategory}
      />

      <ReportList markets={markets} category={selectedCategory} />
    </>
  );
}
