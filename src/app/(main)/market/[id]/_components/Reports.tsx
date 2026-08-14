import Link from "next/link";

import type { Market } from "@/src/types/market";
import ReportCard from "@/src/components/report/ReportCard";

import { SquarePen } from "lucide-react";

interface ReportsProps {
  reports: Market["reports"];
  marketId: number;
}

function formatDate(date: string) {
  return date.replaceAll("-", ".");
}

export default function Reports({ reports, marketId }: ReportsProps) {
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
          href={`/market/${marketId}/report`}
          className="border-light-brown/10 bg-light-brown/10 text-light-brown flex shrink-0 items-center gap-1 rounded-full border px-3 py-1 text-xs font-bold"
        >
          <SquarePen size={13} strokeWidth={2.2} />
          제보하기
        </Link>
      </div>

      <ul className="flex flex-col gap-2">
        {reports.map((report) => (
          <li key={report.id}>
            <ReportCard report={report} title={report.author} showUserIcon />
          </li>
        ))}
      </ul>
    </section>
  );
}
