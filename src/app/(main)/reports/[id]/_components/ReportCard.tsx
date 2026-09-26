"use client";

import { MapPin, Star, UserRound } from "lucide-react";

import { REPORT_CATEGORY_LABELS } from "@/src/app/(main)/reports/_config/reportCategory";
import { BookmarkButton } from "@/src/components/report/BookmarkButton";
import type { ReportDetailResult } from "@/src/types/report";
import { formatDateTime } from "@/src/utils/date";

import { EditDeleteMenu } from "./EditDeleteMenu";

interface ReportCardProps {
  report: ReportDetailResult;
}

export function ReportCard({ report }: ReportCardProps) {
  const firstImageUrl = report.image_urls[0];
  const profileImageUrl = report.author.profile_image_url;

  return (
    <article className="flex w-full flex-col gap-4 px-5">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-2.5">
          {profileImageUrl ? (
            <div
              className="bg-light-gray size-9 shrink-0 rounded-full bg-cover bg-center"
              style={{
                backgroundImage: `url("${profileImageUrl}")`,
              }}
            />
          ) : (
            <div className="bg-light-green text-green flex size-9 shrink-0 items-center justify-center rounded-full">
              <UserRound size={17} strokeWidth={1.8} />
            </div>
          )}

          <div className="flex flex-col">
            <strong className="text-sm font-bold text-black">
              {report.author.nickname}
            </strong>

            <span className="text-deep-gray text-xs">
              {formatDateTime(report.created_at)}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-1">
          {report.mine && (
            <EditDeleteMenu
              onEdit={() => {
                console.log("제보 수정", report.report_id);
              }}
              onDelete={() => {
                console.log("제보 삭제", report.report_id);
              }}
            />
          )}

          <BookmarkButton
            reportId={report.report_id}
            bookmarked={report.bookmarked}
          />
        </div>
      </div>

      <div className="text-deep-gray flex items-center gap-1 text-xs font-medium">
        <MapPin size={14} strokeWidth={2} className="text-green shrink-0" />
        <span className="truncate">{report.market.market_name}</span>
      </div>

      {firstImageUrl && (
        <div
          className="bg-light-gray aspect-1.5/1 w-full rounded-2xl bg-cover bg-center"
          style={{
            backgroundImage: `url("${firstImageUrl}")`,
          }}
        />
      )}

      <div className="flex items-center justify-between">
        <span className="bg-light-green text-green rounded-full px-2.5 py-1 text-xs font-semibold">
          # {REPORT_CATEGORY_LABELS[report.category]}
        </span>

        <div className="flex items-center gap-1">
          <Star
            size={15}
            strokeWidth={0}
            fill="currentColor"
            className="text-light-brown"
          />

          <strong className="text-light-brown text-xs font-extrabold">
            {report.rating.toFixed(1)}
          </strong>

          <span className="text-deep-gray text-xs">/ 5</span>
        </div>
      </div>

      <p className="text-sm leading-6 font-medium break-keep whitespace-pre-line text-black">
        {report.content}
      </p>
    </article>
  );
}
