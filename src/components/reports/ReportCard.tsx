import Link from "next/link";

import { ChevronRight, Star, UserRound } from "lucide-react";

import type { ReportSummary } from "@/src/types/report";

interface ReportCardProps {
  report: ReportSummary;
  title: string;
  showUserIcon?: boolean;
}

function formatDate(date: string) {
  return date.replaceAll("-", ".");
}

export default function ReportCard({
  report,
  title,
  showUserIcon = false,
}: ReportCardProps) {
  return (
    <Link
      href={`/reports/${report.id}`}
      className="shadow-light-gray flex flex-col gap-3 rounded-xl bg-white p-4 shadow-xs"
    >
      <div className="flex min-w-0 items-start gap-2">
        {showUserIcon && (
          <div className="bg-light-green text-green border-light-gray flex size-9 shrink-0 items-center justify-center rounded-full border">
            <UserRound size={18} strokeWidth={2} />
          </div>
        )}

        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-1 whitespace-nowrap">
            <span className="text-green truncate text-sm font-bold">
              {title}
            </span>

            <span className="text-deep-gray shrink-0 text-xs">
              {formatDate(report.createdAt)}
            </span>
          </div>

          <div className="mt-1 flex items-center gap-1 whitespace-nowrap">
            {report.tag && (
              <span className="border-light-gray text-deep-gray truncate rounded-full border px-1.5 py-0.5 text-xs">
                #{report.tag}
              </span>
            )}

            <div className="flex shrink-0 items-center gap-0.5">
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

            <span className="text-green shrink-0 text-xs font-semibold">
              {report.rating.toFixed(1)}
            </span>
          </div>
        </div>

        <ChevronRight
          size={16}
          strokeWidth={2}
          className="text-green mt-1 shrink-0"
        />
      </div>

      <div className="flex min-w-0 items-stretch gap-2">
        <p className="text-green line-clamp-3 min-w-0 flex-1 text-xs">
          {report.content}
        </p>

        {report.imageUrl && (
          <div className="bg-light-gray size-16 shrink-0 rounded-xl" />
        )}
      </div>
    </Link>
  );
}
