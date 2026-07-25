import { mockHomeData } from "@/src/mocks/home";

import HomeFavoriteMarketList from "./_components/favorite/HomeFavoriteMarketList";
import HomeHeader from "./_components/HomeHeader";
import HomeLiveMarketList from "./_components/live/HomeLiveMarketList";
import HomeTrendFoodList from "./_components/trend/HomeTrendFoodList";

export default function HomePage() {
  const { user, liveMarkets, favoriteMarkets, trendFood } = mockHomeData;

  return (
    <main className="flex flex-col gap-8">
      <HomeHeader userName={user.name} />

      <section className="flex flex-col gap-2">
        <HomeLiveMarketList markets={liveMarkets} />
        <HomeFavoriteMarketList markets={favoriteMarkets} />
      </section>

      <HomeTrendFoodList trends={trendFood} />
    </main>
  );
}
