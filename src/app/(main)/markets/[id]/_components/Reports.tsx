"use client";

import { ChevronLeft, ChevronRight, SquarePen } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import ReportCard from "@/src/components/report/ReportCard";
import type { ReportFeedItem } from "@/src/types/report";
import { toReportCardData } from "@/src/utils/report";

interface ReportsProps {
  reports: ReportFeedItem[];
  marketId: number;
}

const ITEMS_PER_PAGE = 3;

export default function Reports({ reports, marketId }: ReportsProps) {
  const [currentPage, setCurrentPage] = useState(0);

  const totalPages = Math.ceil(reports.length / ITEMS_PER_PAGE);

  const startIndex = currentPage * ITEMS_PER_PAGE;
  const visibleReports = reports.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handlePrev = () => {
    if (currentPage === 0) return;

    setCurrentPage((prev) => prev - 1);
  };

  const handleNext = () => {
    if (currentPage >= totalPages - 1) return;

    setCurrentPage((prev) => prev + 1);
  };

  return (
    <section className="flex flex-col gap-4 px-5">
      <div className="flex items-center justify-between gap-2">
        <div className="flex flex-col">
          <h2 className="text-green text-xl font-bold">현장 제보</h2>

          <p className="text-deep-gray text-xs font-semibold">
            지금 시장의 생생한 소식을 알려주세요!
          </p>
        </div>

        <Link
          href={`/reports/new/${marketId}`}
          className="border-light-brown/10 bg-light-brown/10 text-light-brown flex shrink-0 items-center gap-1 rounded-full border px-3 py-1 text-xs font-bold"
        >
          <SquarePen size={13} strokeWidth={2.2} />
          제보하기
        </Link>
      </div>

      {reports.length === 0 ? (
        <p className="text-deep-gray py-4 text-center text-xs">
          아직 등록된 제보가 없어요.
        </p>
      ) : (
        <div className="flex flex-col gap-2">
          {visibleReports.map((report) => (
            <ReportCard
              key={report.report_id}
              report={toReportCardData(report)}
              title={report.author.nickname}
              showUserIcon
            />
          ))}

          {totalPages > 1 && (
            <nav
              aria-label="현장 제보 페이지 이동"
              className="mt-1 flex items-center justify-center gap-1"
            >
              <button
                type="button"
                aria-label="이전 현장 제보 보기"
                onClick={handlePrev}
                disabled={currentPage === 0}
                className="text-gray flex size-6 cursor-pointer items-center justify-center rounded-full transition-colors hover:bg-black/5 disabled:cursor-default disabled:opacity-30"
              >
                <ChevronLeft aria-hidden="true" className="size-4" />
              </button>

              <span className="text-gray min-w-10 text-center text-xs font-medium">
                {currentPage + 1} / {totalPages}
              </span>

              <button
                type="button"
                aria-label="다음 현장 제보 보기"
                onClick={handleNext}
                disabled={currentPage >= totalPages - 1}
                className="text-gray flex size-6 cursor-pointer items-center justify-center rounded-full transition-colors hover:bg-black/5 disabled:cursor-default disabled:opacity-30"
              >
                <ChevronRight aria-hidden="true" className="size-4" />
              </button>
            </nav>
          )}
        </div>
      )}
    </section>
  );
}
