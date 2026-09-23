"use client";

import useReportDetail from "../_hooks/useReportDetail";
import { ReportCard } from "./ReportCard";
import { ReportInteractionSection } from "./ReportInteractionSection";

interface ReportDetailContentProps {
  reportId: number;
}

export function ReportDetailContent({ reportId }: ReportDetailContentProps) {
  const { data: report, isLoading, isError } = useReportDetail(reportId);

  if (isLoading) {
    return (
      <div className="text-deep-gray py-10 text-center text-xs">
        제보를 불러오는 중입니다.
      </div>
    );
  }

  if (isError || !report) {
    return (
      <div className="text-deep-gray py-10 text-center text-xs">
        제보를 불러오지 못했습니다.
      </div>
    );
  }

  return (
    <main className="flex flex-col gap-6">
      <ReportCard report={report} />

      <ReportInteractionSection
        helpfulCount={report.helpful_count}
        commentCount={report.comment_count}
        incorrectCount={report.incorrect_count}
        myReaction={report.my_reaction}
        comments={report.comments}
      />
    </main>
  );
}
