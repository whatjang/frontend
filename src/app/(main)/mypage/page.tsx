import { mockMyPageData } from "@/src/mocks/mypage";

import FavoriteList from "./_components/favorite/FavoriteList";
import ProfileCard from "./_components/profile/ProfileCard";
import ReportList from "./_components/report/ReportList";
import SavedContent from "./_components/saved/SavedContent";

export default function MyPage() {
  const { profile, favoriteMarkets, bookmarkedReports, likedPlaces, reports } =
    mockMyPageData;

  return (
    <main className="px-5">
      <div className="flex flex-col gap-6">
        <ProfileCard profile={profile} />
        <FavoriteList markets={favoriteMarkets} />
        <SavedContent
          bookmarkedReports={bookmarkedReports}
          likedPlaces={likedPlaces}
        />
        <ReportList reports={reports} />
      </div>
    </main>
  );
}
