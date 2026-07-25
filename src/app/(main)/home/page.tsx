import HomeHeader from "./_components/HomeHeader";
import HomeLiveMarketList from "./_components/live/HomeLiveMarketList";
import HomeFavoriteMarketList from "./_components/favorite/HomeFavoriteMarketList";
import { mockHomeData } from "@/src/mocks/home";

export default function HomePage() {
  const { user, liveMarkets, favoriteMarkets } = mockHomeData;

  return (
    <main className="flex flex-col gap-4">
      <HomeHeader userName={user.name} />

      <section className="flex flex-col gap-2">
        <HomeLiveMarketList markets={liveMarkets} />
        <HomeFavoriteMarketList markets={favoriteMarkets} />
      </section>
    </main>
  );
}
