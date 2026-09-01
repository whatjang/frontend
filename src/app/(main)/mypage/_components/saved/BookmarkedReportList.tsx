import ReportCard from "@/src/components/reports/ReportCard";

import type { BookmarkedReport } from "@/src/types/mypage";

interface BookmarkedReportListProps {
  reports: BookmarkedReport[];
}

export default function BookmarkedReportList({
  reports,
}: BookmarkedReportListProps) {
  if (reports.length === 0) {
    return (
      <p className="text-deep-gray py-6 text-center text-xs">
        스크랩한 제보가 없어요.
      </p>
    );
  }

  return (
    <div className="flex flex-col gap-2">
      {reports.map((report) => (
        <ReportCard key={report.id} report={report} title={report.marketName} />
      ))}
    </div>
  );
}
