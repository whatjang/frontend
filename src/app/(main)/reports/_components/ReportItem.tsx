"use client";

import { MapPin, Star } from "lucide-react";
import Link from "next/link";

import { REPORT_CATEGORY_LABELS } from "@/src/app/(main)/reports/_config/reportCategory";
import { BookmarkButton } from "@/src/components/report/BookmarkButton";
import { ReportActions } from "@/src/components/report/ReportActions";
import type { ReportFeedItem } from "@/src/types/report";
import { formatDateTime } from "@/src/utils/date";

interface ReportItemProps {
  report: ReportFeedItem;
}

export default function ReportItem({ report }: ReportItemProps) {
  const firstImageUrl = report.image_urls[0];
  const profileImageUrl = report.author.profile_image_url;

  return (
    <article className="border-light-gray flex w-full flex-col gap-3 rounded-3xl border bg-white/20 p-3">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-2">
          <div
            className="bg-light-gray size-8 rounded-full bg-cover bg-center"
            style={
              profileImageUrl
                ? {
                    backgroundImage: `url("${profileImageUrl}")`,
                  }
                : undefined
            }
          />

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

        <BookmarkButton initialBookmarked={report.bookmarked} variant="plain" />
      </div>

      <Link
        href={`/reports/${report.report_id}`}
        className="flex flex-col gap-2"
      >
        <p className="text-xs text-black">{report.content}</p>

        {firstImageUrl && (
          <div
            className="bg-light-gray aspect-[1.65/1] w-full rounded-2xl bg-cover bg-center"
            style={{
              backgroundImage: `url("${firstImageUrl}")`,
            }}
          />
        )}
      </Link>

      <div className="flex items-center justify-between">
        <span className="bg-light-brown/20 text-light-brown rounded-full px-2 py-1 text-xs font-semibold">
          {REPORT_CATEGORY_LABELS[report.category]}
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
      />
    </article>
  );
}
