"use client";

import { Bookmark, Heart, LibraryBig } from "lucide-react";
import { useState } from "react";

import type { BookmarkedReport } from "@/src/types/mypage";
import type { TourPlace } from "@/src/types/tour";

import BookmarkedReportList from "./BookmarkedReportList";
import LikedPlaceList from "./LikedPlaceList";

interface SavedContentProps {
  bookmarkedReports: BookmarkedReport[];
  likedPlaces: TourPlace[];
}

type SavedTab = "report" | "place";

export default function SavedContent({
  bookmarkedReports,
  likedPlaces,
}: SavedContentProps) {
  const [tab, setTab] = useState<SavedTab>("report");

  return (
    <section className="flex flex-col gap-2">
      <div className="flex items-center gap-1">
        <LibraryBig className="text-green" size={18} />
        <h2 className="text-green font-bold">저장한 콘텐츠</h2>
      </div>

      <div className="grid grid-cols-2 gap-2">
        <button
          type="button"
          onClick={() => setTab("report")}
          aria-pressed={tab === "report"}
          className={`flex cursor-pointer items-center justify-center gap-1 rounded-xl border py-2 text-xs font-bold ${
            tab === "report"
              ? "border-green bg-light-green text-green"
              : "border-light-gray text-deep-gray"
          }`}
        >
          <Bookmark size={16} />
          제보 스크랩
        </button>

        <button
          type="button"
          onClick={() => setTab("place")}
          aria-pressed={tab === "place"}
          className={`flex cursor-pointer items-center justify-center gap-1 rounded-xl border py-2 text-xs font-bold ${
            tab === "place"
              ? "border-green bg-light-green text-green"
              : "border-light-gray text-deep-gray"
          }`}
        >
          <Heart size={16} />
          찜한 관광지
        </button>
      </div>

      {tab === "report" ? (
        <BookmarkedReportList reports={bookmarkedReports} />
      ) : (
        <LikedPlaceList places={likedPlaces} />
      )}
    </section>
  );
}
