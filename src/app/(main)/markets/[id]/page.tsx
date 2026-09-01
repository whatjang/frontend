import { getMarketById } from "@/src/mocks/market";
import { notFound } from "next/navigation";

import Intro from "./_components/Intro";
import Facilities from "./_components/Facilities";
import Food from "./_components/Food";
import Reports from "./_components/Reports";
import BottomActions from "./_components/BottomActions";

interface MarketDetailPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function MarketDetailPage({
  params,
}: MarketDetailPageProps) {
  const { id } = await params;
  const marketId = Number(id);

  if (!Number.isInteger(marketId)) {
    notFound();
  }

  const market = getMarketById(marketId);

  if (!market) {
    notFound();
  }

  return (
    <main className="flex flex-col gap-8">
      <Intro market={market} />
      <Facilities facilities={market.facilities} />
      <Food specialties={market.specialties} />
      <Reports reports={market.reports} marketId={marketId} />

      <BottomActions marketId={market.id} initialFavorite={market.isFavorite} />
    </main>
  );
}
