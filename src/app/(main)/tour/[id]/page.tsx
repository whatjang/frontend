import { notFound } from "next/navigation";

import NearbyTourSection from "../_components/nearby/NearbyTourSection";

interface TourDetailPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function TourDetailPage({ params }: TourDetailPageProps) {
  const { id } = await params;
  const marketId = Number(id);

  if (!Number.isInteger(marketId) || marketId <= 0) {
    notFound();
  }

  return (
    <main className="flex flex-col gap-10 px-5">
      <h1 className="sr-only">시장 주변 관광 정보</h1>

      <NearbyTourSection marketId={marketId} />
    </main>
  );
}
