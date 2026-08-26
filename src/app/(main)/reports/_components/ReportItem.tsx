"use client";

import Link from "next/link";
import { MapPin, Star } from "lucide-react";

import type { MarketReport } from "@/src/types/market";

import { BookmarkButton } from "@/src/components/reports/BookmarkButton";
import { ReportActions } from "@/src/components/reports/ReportActions";

interface ReportItemProps {
  marketName: string;
  report: MarketReport;
}

export default function ReportItem({ marketName, report }: ReportItemProps) {
  return (
    <article className="border-light-gray flex w-full flex-col gap-3 rounded-3xl border bg-white/20 p-3">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-2">
          <div className="bg-light-gray flex h-8 w-8 rounded-full" />

          <div>
            <div className="flex items-center gap-2">
              <span className="text-sm font-bold text-black">
                {report.author}
              </span>

              <span className="text-deep-gray text-xs">{report.createdAt}</span>
            </div>

            <div className="text-deep-gray flex items-center gap-0.5 text-xs">
              <MapPin className="size-3" />
              <span>{marketName}</span>
            </div>
          </div>
        </div>

        <BookmarkButton
          initialBookmarked={report.isBookmarked}
          variant="plain"
        />
      </div>

      <Link href={`/reports/${report.id}`} className="flex flex-col gap-2">
        <p className="text-xs text-black">{report.content}</p>

        {report.imageUrl && (
          <div className="bg-light-gray aspect-[1.65/1] w-full rounded-2xl" />
        )}
      </Link>

      <div className="flex items-center justify-between">
        <span className="bg-light-brown/20 text-light-brown rounded-full px-2 py-1 text-xs font-semibold">
          {report.tag}
        </span>

        <div className="flex items-center gap-0.5">
          <Star
            size={15}
            strokeWidth={0}
            fill="currentColor"
            className="text-light-brown"
          />

          <strong className="text-light-brown text-xs font-extrabold">
            {report.rating.toFixed(1)}
          </strong>
        </div>
      </div>

      <ReportActions
        helpfulCount={report.helpfulCount}
        commentCount={report.commentCount}
        incorrectCount={report.incorrectCount}
        commentHref={`/reports/${report.id}#comments`}
      />
    </article>
  );
}
