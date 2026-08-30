import { notFound } from "next/navigation";

import { getMarketById } from "@/src/mocks/market";
import { getMarketTourRoute } from "@/src/mocks/marketTour";

import MarketTourContent from "./_components/MarketTourContent";

interface MarketTourPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function MarketTourPage({ params }: MarketTourPageProps) {
  const { id } = await params;
  const marketId = Number(id);

  if (!Number.isInteger(marketId)) {
    notFound();
  }

  const market = getMarketById(marketId);
  const route = getMarketTourRoute(marketId);

  if (!market || !route) {
    notFound();
  }

  return (
    <main className="px-5">
      <MarketTourContent market={market} route={route} />
    </main>
  );
}
