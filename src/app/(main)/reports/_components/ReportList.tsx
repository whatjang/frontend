import type { MarketReportMock } from "@/src/mocks/marketReports";

import type { ReportCategory } from "./ReportCategoryFilter";
import ReportItem from "./ReportItem";

interface ReportListProps {
  reports: MarketReportMock[];
  category: ReportCategory;
}

export default function ReportList({ reports, category }: ReportListProps) {
  const filteredReports = reports
    .filter((report) => {
      if (category === "전체") {
        return true;
      }

      return report.tag === category;
    })
    .sort(
      (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );

  if (filteredReports.length === 0) {
    return (
      <div className="text-deep-gray text-center text-xs">
        해당 카테고리의 현장 제보가 없습니다.
      </div>
    );
  }

  return (
    <section className="flex flex-col gap-3 px-5">
      {filteredReports.map((report) => (
        <ReportItem
          key={report.id}
          marketName={report.marketName}
          report={report}
        />
      ))}
    </section>
  );
}
