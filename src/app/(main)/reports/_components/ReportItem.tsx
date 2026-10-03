"use client";

import { MapPin, Star, UserRound } from "lucide-react";
import Link from "next/link";

import { BookmarkButton } from "@/src/components/report/BookmarkButton";
import { ReportActions } from "@/src/components/report/ReportActions";
import ReportImageGrid from "@/src/components/report/ReportImageGrid";
import { REPORT_CATEGORY_LABEL_MAP } from "@/src/constants/report";
import type { ReportFeedItem } from "@/src/types/report";
import { formatDateTime } from "@/src/utils/date";

interface ReportItemProps {
  report: ReportFeedItem;
}

export default function ReportItem({ report }: ReportItemProps) {
  return (
    <article className="border-light-gray flex w-full flex-col gap-3 rounded-3xl border bg-white/20 p-3">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-2">
          <div className="bg-light-green text-green border-green/20 flex size-8 shrink-0 items-center justify-center rounded-full border">
            <UserRound size={15} strokeWidth={1.8} aria-hidden="true" />
          </div>

          <div>
            <div className="flex items-center gap-2">
              <span className="text-sm font-bold text-black">
                {report.author.nickname}
              </span>

              <span className="text-deep-gray text-xs">
                {formatDateTime(report.created_at)}
              </span>
            </div>

            <div className="text-deep-gray flex items-center gap-0.5 text-xs">
              <MapPin className="size-3" />
              <span>{report.market_name}</span>
            </div>
          </div>
        </div>

        <BookmarkButton
          reportId={report.report_id}
          bookmarked={report.bookmarked}
          variant="plain"
        />
      </div>

      <Link
        href={`/reports/${report.report_id}`}
        className="flex flex-col gap-2"
      >
        <p className="text-xs text-black">{report.content}</p>

        <ReportImageGrid imageUrls={report.image_urls} />
      </Link>

      <div className="flex items-center justify-between">
        <span className="bg-light-brown/20 text-light-brown rounded-full px-2 py-1 text-xs font-semibold">
          {REPORT_CATEGORY_LABEL_MAP[report.category]}
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
        reportId={report.report_id}
        helpfulCount={report.helpful_count}
        commentCount={report.comment_count}
        incorrectCount={report.incorrect_count}
        commentHref={`/reports/${report.report_id}#comments`}
        initialReaction={report.my_reaction}
      />
    </article>
  );
}
