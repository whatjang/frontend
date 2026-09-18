"use client";

import { useState } from "react";

import type { MarketReportMock } from "@/src/mocks/marketReports";

import ReportCategoryFilter, {
  type ReportCategory,
} from "./ReportCategoryFilter";
import ReportList from "./ReportList";

interface ReportsContentProps {
  reports: MarketReportMock[];
}

export default function ReportsContent({ reports }: ReportsContentProps) {
  const [selectedCategory, setSelectedCategory] =
    useState<ReportCategory>("전체");

  return (
    <>
      <ReportCategoryFilter
        selectedCategory={selectedCategory}
        onChange={setSelectedCategory}
      />

      <ReportList reports={reports} category={selectedCategory} />
    </>
  );
}
