import { notFound } from "next/navigation";

import MarketDetailContent from "./_components/MarketDetailContent";

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

  return <MarketDetailContent marketId={marketId} />;
}
