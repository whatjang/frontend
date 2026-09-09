import { notFound } from "next/navigation";

import { getMarketById } from "@/src/mocks/market";
import { getMarketTourRoute } from "@/src/mocks/marketTour";

import MarketTourRouteView from "../_components/MarketTourRouteView";

interface TourDetailPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function TourDetailPage({ params }: TourDetailPageProps) {
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
      <MarketTourRouteView market={market} route={route} />
    </main>
  );
}
