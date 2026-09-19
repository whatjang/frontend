import { Bookmark } from "lucide-react";

import ReportCard from "@/src/components/reports/ReportCard";
import type { BookmarkedReport } from "@/src/types/mypage";

interface BookmarkedReportListProps {
  reports: BookmarkedReport[];
}

export default function BookmarkedReportList({
  reports,
}: BookmarkedReportListProps) {
  return (
    <section className="flex flex-col gap-2">
      <div className="flex items-center gap-1">
        <Bookmark className="text-green" size={18} />
        <h2 className="text-green font-bold">제보 스크랩</h2>
      </div>

      {reports.length === 0 ? (
        <p className="text-deep-gray py-6 text-center text-xs">
          스크랩한 제보가 없어요.
        </p>
      ) : (
        <div className="flex flex-col gap-2">
          {reports.map((report) => (
            <ReportCard
              key={report.id}
              report={report}
              title={report.marketName}
            />
          ))}
        </div>
      )}
    </section>
  );
}
