"use client";

import { Bookmark, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

import { REPORT_CATEGORY_LABELS } from "@/src/app/(main)/reports/_config/reportCategory";
import ReportCard from "@/src/components/report/ReportCard";
import type { ReportFeedItem } from "@/src/types/report";

interface BookmarkedReportListProps {
  reports: ReportFeedItem[];
  totalCount: number;
  hasNextPage: boolean;
  isFetchingNextPage: boolean;
  onLoadMore: () => void;
}

const REPORT_PAGE_SIZE = 3;

export default function BookmarkedReportList({
  reports,
  totalCount,
  hasNextPage,
  isFetchingNextPage,
  onLoadMore,
}: BookmarkedReportListProps) {
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
      <div className="flex items-center gap-1">
        <Bookmark className="text-green" size={18} aria-hidden="true" />
        <h2 className="text-green font-bold">제보 스크랩</h2>
      </div>

      {reports.length === 0 ? (
        <p className="text-deep-gray py-6 text-center text-xs">
          스크랩한 제보가 없어요.
        </p>
      ) : (
        <>
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

          {totalPages > 1 && (
            <div className="mt-2 flex items-center justify-center gap-8">
              <button
                type="button"
                aria-label="이전 스크랩 제보 보기"
                onClick={handlePrev}
                disabled={currentPage === 0}
                className="border-light-gray flex size-6 cursor-pointer items-center justify-center rounded-full border bg-white disabled:cursor-default disabled:opacity-30"
              >
                <ChevronLeft className="text-green size-4" />
              </button>

              <span className="text-deep-gray min-w-12 text-center text-xs font-semibold">
                {currentPage + 1} / {totalPages}
              </span>

              <button
                type="button"
                aria-label="다음 스크랩 제보 보기"
                onClick={handleNext}
                disabled={currentPage >= totalPages - 1 || isFetchingNextPage}
                className="border-light-gray flex size-6 cursor-pointer items-center justify-center rounded-full border bg-white disabled:cursor-default disabled:opacity-30"
              >
                <ChevronRight className="text-green size-4" />
              </button>
            </div>
          )}
        </>
      )}
    </section>
  );
}
