"use client";

import { ChevronLeft, ChevronRight, type LucideIcon } from "lucide-react";
import { useState } from "react";

import { REPORT_CATEGORY_LABELS } from "@/src/app/(main)/reports/_config/reportCategory";
import ReportCard from "@/src/components/report/ReportCard";
import type { ReportFeedItem } from "@/src/types/report";

interface ReportSectionProps {
  icon: LucideIcon;
  title: string;
  emptyMessage: string;
  reports: ReportFeedItem[];
  totalCount: number;
  hasNextPage: boolean;
  isFetchingNextPage: boolean;
  onLoadMore: () => void;
}

const REPORT_PAGE_SIZE = 3;

export default function ReportSection({
  icon: Icon,
  title,
  emptyMessage,
  reports,
  totalCount,
  hasNextPage,
  isFetchingNextPage,
  onLoadMore,
}: ReportSectionProps) {
  const [currentPage, setCurrentPage] = useState(0);

  const totalPages = Math.ceil(totalCount / REPORT_PAGE_SIZE);

  const startIndex = currentPage * REPORT_PAGE_SIZE;
  const visibleReports = reports.slice(
    startIndex,
    startIndex + REPORT_PAGE_SIZE
  );

  const handlePrev = () => {
    if (currentPage === 0) return;

    setCurrentPage((prev) => prev - 1);
  };

  const handleNext = () => {
    const nextPage = currentPage + 1;

    if (nextPage >= totalPages) return;

    const nextPageStartIndex = nextPage * REPORT_PAGE_SIZE;

    if (nextPageStartIndex >= reports.length) {
      if (hasNextPage && !isFetchingNextPage) {
        onLoadMore();
      }

      return;
    }

    setCurrentPage(nextPage);

    const remainingReports = reports.length - (nextPage + 1) * REPORT_PAGE_SIZE;

    if (
      remainingReports < REPORT_PAGE_SIZE &&
      hasNextPage &&
      !isFetchingNextPage
    ) {
      onLoadMore();
    }
  };

  return (
    <section className="flex flex-col gap-2">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1">
          <Icon className="text-green" size={18} aria-hidden="true" />
          <h2 className="text-green font-bold">{title}</h2>
        </div>

        {totalPages > 1 && (
          <nav
            aria-label={`${title} 페이지 이동`}
            className="flex items-center gap-1"
          >
            <button
              type="button"
              aria-label={`이전 ${title} 보기`}
              onClick={handlePrev}
              disabled={currentPage === 0}
              className="text-gray flex size-4 cursor-pointer items-center justify-center rounded-full transition-colors hover:bg-black/5 disabled:cursor-default disabled:opacity-30"
            >
              <ChevronLeft aria-hidden="true" className="size-4" />
            </button>

            <span className="text-gray min-w-10 text-center text-xs font-medium">
              {currentPage + 1} / {totalPages}
            </span>

            <button
              type="button"
              aria-label={`다음 ${title} 보기`}
              onClick={handleNext}
              disabled={currentPage >= totalPages - 1 || isFetchingNextPage}
              className="text-gray flex size-4 cursor-pointer items-center justify-center rounded-full transition-colors hover:bg-black/5 disabled:cursor-default disabled:opacity-30"
            >
              <ChevronRight aria-hidden="true" className="size-4" />
            </button>
          </nav>
        )}
      </div>

      {reports.length === 0 ? (
        <p className="text-deep-gray py-6 text-center text-xs">
          {emptyMessage}
        </p>
      ) : (
        <div className="flex flex-col gap-2">
          {visibleReports.map((report) => (
            <ReportCard
              key={report.report_id}
              report={{
                id: report.report_id,
                createdAt: report.created_at.slice(0, 10),
                tag: REPORT_CATEGORY_LABELS[report.category],
                rating: report.rating,
                content: report.content,
                imageUrl: report.image_urls[0],
              }}
              title={report.market_name}
            />
          ))}
        </div>
      )}
    </section>
  );
}
