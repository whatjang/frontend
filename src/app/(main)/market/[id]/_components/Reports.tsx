import Link from "next/link";

import type { Market } from "@/src/types/market";

import { ChevronRight, SquarePen, Star, UserRound } from "lucide-react";

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
      <div className="flex items-center justify-between">
        <div className="flex flex-col">
          <h2 className="text-green text-xl font-bold">현장 제보</h2>
          <p className="text-deep-gray text-xs font-semibold">
            지금 시장의 생생한 소식을 알려주세요!
          </p>
        </div>

        <Link
          href={`/market/${marketId}/report`}
          className="border-light-brown/10 bg-light-brown/10 text-light-brown flex items-center gap-1 rounded-full border px-3 py-1 text-xs font-bold"
        >
          <SquarePen size={13} strokeWidth={2.2} />
          제보하기
        </Link>
      </div>

      <ul className="flex flex-col gap-3">
        {reports.map((report) => (
          <li
            key={report.id}
            className="shadow-light-gray flex flex-col gap-3 rounded-3xl bg-white p-4 shadow-xs"
          >
            <div className="flex items-start justify-between gap-2">
              <div className="flex items-center gap-2">
                <div className="bg-light-green text-green border-light-gray flex size-9 shrink-0 items-center justify-center rounded-full border">
                  <UserRound size={18} strokeWidth={2} />
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-1">
                    <span className="text-green text-sm font-bold">
                      {report.author}
                    </span>

                    <div className="flex items-center gap-0.5">
                      {Array.from({ length: 5 }).map((_, index) => (
                        <Star
                          key={index}
                          size={11}
                          strokeWidth={2}
                          className={
                            index < Math.round(report.rating)
                              ? "fill-green text-green"
                              : "text-light-gray"
                          }
                        />
                      ))}
                    </div>

                    <span className="text-green text-xs font-semibold">
                      {report.rating.toFixed(1)}
                    </span>

                    <span className="border-light-gray text-deep-gray rounded-full border px-1.5 py-0.5 text-xs">
                      #{report.tag}
                    </span>
                  </div>

                  <p className="text-deep-gray text-xs">
                    {formatDate(report.createdAt)}
                  </p>
                </div>
              </div>

              <Link
                href={`/report/${report.id}`}
                aria-label={`${report.author}님의 제보 상세보기`}
                className="mt-1 shrink-0"
              >
                <ChevronRight
                  size={16}
                  strokeWidth={2}
                  className="text-green"
                  aria-hidden="true"
                />
              </Link>
            </div>

            <div className="flex min-w-0 items-stretch gap-2">
              <p className="text-green line-clamp-3 flex-1 text-xs">
                {report.content}
              </p>

              {report.imageUrl && (
                <div
                  className="bg-light-gray size-16 rounded-xl"
                  aria-hidden="true"
                />
              )}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
