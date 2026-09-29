"use client";

import { useMarketFavorite } from "@/src/hooks/market/useMarketFavorite";
import { mockMyPageData } from "@/src/mocks/mypage";

import FavoriteList from "./_components/favorite/FavoriteList";
import ProfileCard from "./_components/profile/ProfileCard";
import ReportList from "./_components/report/ReportList";
import BookmarkedReportList from "./_components/saved/BookmarkedReportList";
import { useFavoriteMarkets } from "./_hooks/useFavoriteMarkets";
import { useMyReports } from "./_hooks/useMyReports";

export default function MyPage() {
  const { data: favoriteData } = useFavoriteMarkets();
  const { mutate: toggleFavorite } = useMarketFavorite();

  const {
    data: myReportsData,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useMyReports();

  const { profile, bookmarkedReports } = mockMyPageData;

  const favoriteMarkets = favoriteData?.markets ?? [];

  const reports = myReportsData?.pages.flatMap((page) => page.reports) ?? [];

  const reportTotalCount = myReportsData?.pages[0]?.total_count ?? 0;

  const profileData = {
    ...profile,
    favoriteMarketCount: favoriteData?.total_count ?? 0,
    reportCount: reportTotalCount,
  };

  const handleRemoveFavorite = (marketId: number) => {
    toggleFavorite({
      marketId,
      isFavorite: true,
    });
  };

  return (
    <main className="px-5">
      <div className="flex flex-col gap-6">
        <ProfileCard profile={profileData} />

        <FavoriteList
          markets={favoriteMarkets}
          onRemove={handleRemoveFavorite}
        />

        <BookmarkedReportList reports={bookmarkedReports} />

        <ReportList
          reports={reports}
          totalCount={reportTotalCount}
          hasNextPage={hasNextPage}
          isFetchingNextPage={isFetchingNextPage}
          onLoadMore={() => void fetchNextPage()}
        />
      </div>
    </main>
  );
}
