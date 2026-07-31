import { getMarketById } from "@/src/mocks/market";
import { notFound } from "next/navigation";

import Intro from "./_components/Intro";

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
    <main className="flex flex-col">
      <Intro market={market} />
    </main>
  );
}
