import type { RefObject } from "react";

import type { ReportFeedItem } from "@/src/types/report";

import ReportItem from "./ReportItem";

interface ReportListProps {
  reports: ReportFeedItem[];
  isLoading: boolean;
  isError: boolean;
  observerRef: RefObject<HTMLDivElement | null>;
  isFetchingNextPage: boolean;
}

export default function ReportList({
  reports,
  isLoading,
  isError,
  observerRef,
  isFetchingNextPage,
}: ReportListProps) {
  if (isLoading) {
    return (
      <div className="text-deep-gray text-center text-xs">
        현장 제보를 불러오는 중입니다.
      </div>
    );
  }

  if (isError) {
    return (
      <div className="text-deep-gray text-center text-xs">
        현장 제보를 불러오지 못했습니다.
      </div>
    );
  }

  if (reports.length === 0) {
    return (
      <div className="text-deep-gray text-center text-xs">
        조건에 맞는 현장 제보가 없습니다.
      </div>
    );
  }

  return (
    <section className="flex flex-col gap-3 px-5">
      {reports.map((report) => (
        <ReportItem key={report.report_id} report={report} />
      ))}

      <div ref={observerRef} className="h-1" />

      {isFetchingNextPage && (
        <div className="text-deep-gray py-2 text-center text-xs">
          더 불러오는 중입니다.
        </div>
      )}
    </section>
  );
}
