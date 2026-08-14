import { MessageSquareText } from "lucide-react";

import ReportCard from "@/src/components/report/ReportCard";
import type { MyPageReport } from "@/src/types/mypage";

interface ReportListProps {
  reports: MyPageReport[];
}

const ITEMS_PER_PAGE = 3;

function chunkReports(reports: MyPageReport[]) {
  const chunks: MyPageReport[][] = [];

  for (let i = 0; i < reports.length; i += ITEMS_PER_PAGE) {
    chunks.push(reports.slice(i, i + ITEMS_PER_PAGE));
  }

  return chunks;
}

export default function ReportList({ reports }: ReportListProps) {
  const reportPages = chunkReports(reports);

  return (
    <section className="flex flex-col gap-2">
      <div className="mb-3 flex items-center gap-1">
        <MessageSquareText className="text-green" size={18} />
        <h2 className="text-green font-bold">나의 제보</h2>
      </div>

      {reports.length === 0 ? (
        <div className="text-deep-gray rounded-xl text-center text-sm">
          아직 작성한 제보가 없어요.
        </div>
      ) : (
        <div className="scrollbar-hide flex snap-x snap-mandatory scrollbar-none gap-2 overflow-x-auto">
          {reportPages.map((page, pageIndex) => (
            <div
              key={pageIndex}
              className="flex w-full shrink-0 snap-start flex-col gap-2"
            >
              {page.map((report) => (
                <ReportCard
                  key={report.id}
                  report={report}
                  title={report.marketName}
                />
              ))}
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
