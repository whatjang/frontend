import ProfileCard from "./_components/profile/ProfileCard";
import FavoriteList from "./_components/favorite/FavoriteList";
import RecordList from "./_components/record/RecordList";
import ReportList from "./_components/report/ReportList";

import { mockMyPageData } from "@/src/mocks/mypage";

export default function MyPage() {
  const { profile, favoriteMarkets, records, reports } = mockMyPageData;

  return (
    <main className="px-5">
      <div className="flex flex-col gap-6">
        <ProfileCard profile={profile} />
        <FavoriteList markets={favoriteMarkets} />
        <RecordList records={records} />
        <ReportList reports={reports} />
      </div>
    </main>
  );
}
