import { notFound } from "next/navigation";

import TourPlaceDetailContent from "./_components/TourPlaceDetailContent";

interface TourPlaceDetailPageProps {
  params: Promise<{
    id: string;
    placeId: string;
  }>;
}

export default async function TourPlaceDetailPage({
  params,
}: TourPlaceDetailPageProps) {
  const { id, placeId } = await params;

  const marketId = Number(id);

  if (
    !Number.isInteger(marketId) ||
    marketId <= 0 ||
    placeId.trim().length === 0
  ) {
    notFound();
  }

  return <TourPlaceDetailContent marketId={marketId} placeId={placeId} />;
}
