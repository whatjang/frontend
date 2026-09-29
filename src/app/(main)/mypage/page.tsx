"use client";
import { Bookmark, MessageSquareText } from "lucide-react";

import { useMarketFavorite } from "@/src/hooks/market/useMarketFavorite";

import FavoriteList from "./_components/favorite/FavoriteList";
import ProfileCard from "./_components/profile/ProfileCard";
import ReportSection from "./_components/report/ReportSection";
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

        <ReportSection
          icon={Bookmark}
          title="제보 스크랩"
          emptyMessage="스크랩한 제보가 없어요."
          reports={bookmarkedReports}
          totalCount={bookmarkedReportTotalCount}
          hasNextPage={hasNextBookmarkedPage}
          isFetchingNextPage={isFetchingNextBookmarkedPage}
          onLoadMore={() => void fetchNextBookmarkedPage()}
        />

        <ReportSection
          icon={MessageSquareText}
          title="나의 제보"
          emptyMessage="아직 작성한 제보가 없어요."
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
