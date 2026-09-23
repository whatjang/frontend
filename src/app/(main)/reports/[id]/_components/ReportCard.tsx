"use client";

import { MapPin, Star } from "lucide-react";

import { REPORT_CATEGORY_LABELS } from "@/src/app/(main)/reports/_config/reportCategory";
import { BookmarkButton } from "@/src/components/reports/BookmarkButton";
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
    <article className="flex w-full flex-col gap-2 px-5">
      <div className="flex items-center justify-between">
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

          <div className="flex flex-col">
            <strong className="text-sm font-bold text-black">
              {report.author.nickname}
            </strong>

            <span className="text-deep-gray text-xs font-medium">
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

          <BookmarkButton initialBookmarked={report.bookmarked} />
        </div>
      </div>

      {firstImageUrl && (
        <div
          className="bg-light-gray relative aspect-[1.44/1] w-full overflow-hidden rounded-2xl bg-cover bg-center"
          style={{
            backgroundImage: `url("${firstImageUrl}")`,
          }}
        >
          <div className="text-green absolute top-2 left-2 z-10 flex items-center gap-1 rounded-xl bg-white/80 px-2 py-1 text-xs font-bold backdrop-blur-sm">
            <MapPin size={13} strokeWidth={2} />
            <span>{report.market.market_name}</span>
          </div>
        </div>
      )}

      {!firstImageUrl && (
        <div className="text-green flex w-fit items-center gap-1 text-xs font-bold">
          <MapPin size={13} strokeWidth={2} />
          <span>{report.market.market_name}</span>
        </div>
      )}

      <div className="bg-light-green text-green border-light-gray flex w-fit items-center gap-1 self-start rounded-full border px-2 py-1 text-xs font-semibold">
        # {REPORT_CATEGORY_LABELS[report.category]}
      </div>

      <p className="text-xs font-medium break-keep whitespace-pre-line text-black">
        {report.content}
      </p>

      <div className="border-light-gray flex items-center justify-between rounded-2xl border bg-white p-3">
        <strong className="text-xs font-bold text-black">종합 평가</strong>

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

          <span className="self-end pb-0.5 text-xs font-bold text-black">
            / 5
          </span>
        </div>
      </div>
    </article>
  );
}
