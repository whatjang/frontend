"use client";

import { mockMyPageData } from "@/src/mocks/mypage";

import FavoriteList from "./_components/favorite/FavoriteList";
import ProfileCard from "./_components/profile/ProfileCard";
import ReportList from "./_components/report/ReportList";
import SavedContent from "./_components/saved/SavedContent";
import { useFavoriteMarkets } from "./_hooks/useFavoriteMarkets";

export default function MyPage() {
  const { data: favoriteData } = useFavoriteMarkets();

  const { profile, bookmarkedReports, likedPlaces, reports } = mockMyPageData;

  const favoriteMarkets = favoriteData?.markets ?? [];

  const profileData = {
    ...profile,
    favoriteMarketCount: favoriteData?.total_count ?? 0,
  };

  return (
    <main className="px-5">
      <div className="flex flex-col gap-6">
        <ProfileCard profile={profileData} />

        <FavoriteList
          markets={favoriteMarkets}
          onRemove={() => {}}
          onToggleNotification={() => {}}
        />

        <SavedContent
          bookmarkedReports={bookmarkedReports}
          likedPlaces={likedPlaces}
        />

        <ReportList reports={reports} />
      </div>
    </main>
  );
}
