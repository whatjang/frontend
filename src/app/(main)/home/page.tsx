import { mockHomeData } from "@/src/mocks/home";

import HomeCalendarList from "./_components/calendar/HomeCalendarList";
import HomeHeader from "./_components/HomeHeader";
import HomeLiveMarketList from "./_components/live/HomeLiveMarketList";
import HomeTrendFoodList from "./_components/trend/HomeTrendFoodList";

export default function HomePage() {
  const { trendFood } = mockHomeData;

  return (
    <main className="flex flex-col gap-8">
      <HomeHeader />

      <HomeLiveMarketList />

      <HomeTrendFoodList trends={trendFood} />

      <HomeCalendarList />
    </main>
  );
}
