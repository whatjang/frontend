import ProfileCard from "./_components/profile/ProfileCard";
import FavoriteList from "./_components/favorite/FavoriteList";
import { mockMyPageData } from "@/src/mocks/mypage";

export default function MyPage() {
  const { profile, favoriteMarkets, records, recentReports } = mockMyPageData;

  return (
    <main className="px-5">
      <div className="flex flex-col gap-6">
        <ProfileCard profile={profile} />
        <FavoriteList markets={favoriteMarkets} />
      </div>
    </main>
  );
}
