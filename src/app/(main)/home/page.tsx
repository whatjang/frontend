import HomeHeader from "./_components/HomeHeader";
import HomeLiveMarketList from "./_components/live/HomeLiveMarketList";
import { mockHomeData } from "@/src/mocks/home";

export default function HomePage() {
  const { user, liveMarkets } = mockHomeData;

  return (
    <main className="flex flex-col gap-4">
      <HomeHeader userName={user.name} />

      <section className="flex flex-col gap-4">
        <HomeLiveMarketList markets={liveMarkets} />
      </section>
    </main>
  );
}
