import HomeHeader from "./_components/HomeHeader";
import HomeLiveMarket from "./_components/HomeLiveMarket";

export default function HomePage() {
  const headerData = {
    userName: "양인서",
  };
  const address = "강원 정선군 정선읍 5일장길 36";
  const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    address
  )}`;

  return (
    <main className="flex flex-col gap-8">
      <HomeHeader userName={headerData.userName} />

      <section className="flex flex-col gap-4">
        <HomeLiveMarket
          name="정선아리랑시장"
          schedule="2, 7일"
          address={address}
          mapUrl={mapUrl}
        />
      </section>
    </main>
  );
}
