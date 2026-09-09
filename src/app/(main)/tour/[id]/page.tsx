import { notFound } from "next/navigation";

import { getMarketById } from "@/src/mocks/market";
import { getMarketNearbyTourData } from "@/src/mocks/tour";

import NearbyTourSection from "../_components/nearby/NearbyTourSection";

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
  const nearbyTourData = getMarketNearbyTourData(marketId);

  if (!market || !nearbyTourData) {
    notFound();
  }

  return (
    <main className="flex flex-col gap-10 px-5">
      <h1 className="sr-only">{market.name} 주변 관광 정보</h1>

      <NearbyTourSection data={nearbyTourData} />
    </main>
  );
}
