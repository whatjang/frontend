"use client";

import { useMarketFavorite } from "@/src/hooks/market/useMarketFavorite";

import FavoriteList from "./_components/favorite/FavoriteList";
import ProfileCard from "./_components/profile/ProfileCard";
import ReportList from "./_components/report/ReportList";
import BookmarkedReportList from "./_components/saved/BookmarkedReportList";
import { useFavoriteMarkets } from "./_hooks/useFavoriteMarkets";
import { useMyBookmarkedReports } from "./_hooks/useMyBookmarkedReports";
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

  const {
    data: bookmarkedReportsData,
    fetchNextPage: fetchNextBookmarkedPage,
    hasNextPage: hasNextBookmarkedPage,
    isFetchingNextPage: isFetchingNextBookmarkedPage,
  } = useMyBookmarkedReports();

  const favoriteMarkets = favoriteData?.markets ?? [];

  const reports = myReportsData?.pages.flatMap((page) => page.reports) ?? [];
  const reportTotalCount = myReportsData?.pages[0]?.total_count ?? 0;

  const bookmarkedReports =
    bookmarkedReportsData?.pages.flatMap((page) => page.reports) ?? [];
  const bookmarkedReportTotalCount =
    bookmarkedReportsData?.pages[0]?.total_count ?? 0;

  const handleRemoveFavorite = (marketId: number) => {
    toggleFavorite({
      marketId,
      isFavorite: true,
    });
  };

  return (
    <main className="px-5">
      <div className="flex flex-col gap-6">
        <ProfileCard
          favoriteMarketCount={favoriteData?.total_count ?? 0}
          reportCount={reportTotalCount}
        />

        <FavoriteList
          markets={favoriteMarkets}
          onRemove={handleRemoveFavorite}
        />

        <BookmarkedReportList
          reports={bookmarkedReports}
          totalCount={bookmarkedReportTotalCount}
          hasNextPage={hasNextBookmarkedPage}
          isFetchingNextPage={isFetchingNextBookmarkedPage}
          onLoadMore={() => void fetchNextBookmarkedPage()}
        />

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
