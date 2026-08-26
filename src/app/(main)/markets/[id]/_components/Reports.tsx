import Link from "next/link";

import type { Market } from "@/src/types/market";
import ReportCard from "@/src/components/report/ReportCard";

import { SquarePen } from "lucide-react";

interface ReportsProps {
  reports: Market["reports"];
  marketId: number;
}

type Report = Market["reports"][number];

const ITEMS_PER_PAGE = 3;

function chunkReports(reports: Report[]) {
  const chunks: Report[][] = [];

  for (let i = 0; i < reports.length; i += ITEMS_PER_PAGE) {
    chunks.push(reports.slice(i, i + ITEMS_PER_PAGE));
  }

  return chunks;
}

export default function Reports({ reports, marketId }: ReportsProps) {
  const reportPages = chunkReports(reports);

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
          href={`/market/${marketId}/new`}
          className="border-light-brown/10 bg-light-brown/10 text-light-brown flex shrink-0 items-center gap-1 rounded-full border px-3 py-1 text-xs font-bold"
        >
          <SquarePen size={13} strokeWidth={2.2} />
          제보하기
        </Link>
      </div>

      {reports.length === 0 ? (
        <p className="text-deep-gray text-center text-sm">
          아직 등록된 제보가 없어요.
        </p>
      ) : (
        <div className="scrollbar-hide flex snap-x snap-mandatory scrollbar-none gap-2 overflow-x-auto scroll-smooth py-1">
          {reportPages.map((page, pageIndex) => (
            <ul
              key={pageIndex}
              className="flex w-full shrink-0 snap-start flex-col gap-2"
            >
              {page.map((report) => (
                <li key={report.id}>
                  <ReportCard
                    report={report}
                    title={report.author}
                    showUserIcon
                  />
                </li>
              ))}
            </ul>
          ))}
        </div>
      )}
    </section>
  );
}
