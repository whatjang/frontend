import type { Market } from "@/src/types/market";

import type { ReportCategory } from "./ReportCategoryFilter";
import ReportItem from "./ReportItem";

interface ReportListProps {
  markets: Market[];
  category: ReportCategory;
}

export default function ReportList({ markets, category }: ReportListProps) {
  const reports = markets
    .flatMap((market) =>
      market.reports.map((report) => ({
        marketName: market.name,
        report,
      }))
    )
    .filter(({ report }) => {
      if (category === "전체") {
        return true;
      }

      return report.tag === category;
    })
    .sort(
      (a, b) =>
        new Date(b.report.createdAt).getTime() -
        new Date(a.report.createdAt).getTime()
    );

  if (reports.length === 0) {
    return (
      <div className="text-deep-gray text-center text-xs">
        해당 카테고리의 현장 제보가 없습니다.
      </div>
    );
  }

  return (
    <section className="flex flex-col gap-3 px-5">
      {reports.map(({ marketName, report }) => (
        <ReportItem key={report.id} marketName={marketName} report={report} />
      ))}
    </section>
  );
}
