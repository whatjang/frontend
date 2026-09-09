import { notFound } from "next/navigation";

import { getMarketById } from "@/src/mocks/market";
import { getMarketTourRoute } from "@/src/mocks/marketTour";
import { mockTourData } from "@/src/mocks/tour";

import NearbyTourSection from "../_components/NearbyTourSection";
// import TourRouteSection from "../_components/TourRouteSection";

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
  // const route = getMarketTourRoute(marketId);

  if (!market) {
    notFound();
  }

  return (
    <main className="flex flex-col gap-10 px-5">
      <h1 className="sr-only">{market.name} 주변 관광 정보</h1>

      {/* {route && <TourRouteSection market={market} route={route} />} */}

      <NearbyTourSection data={mockTourData} />
    </main>
  );
}
