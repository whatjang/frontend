"use client";

import Spinner from "@/src/components/common/Spinner";
import { useCurrentLocation } from "@/src/hooks/location/useCurrentLocation";

import { useMarketDetail } from "../_hooks/useMarketDetail";
import BottomActions from "./BottomActions";
import Intro from "./Intro";
import MarketDetails from "./MarketDetails";

interface MarketDetailContentProps {
  marketId: number;
}

export default function MarketDetailContent({
  marketId,
}: MarketDetailContentProps) {
  const { coordinates } = useCurrentLocation();

  const { market, isLoading, error } = useMarketDetail({
    marketId,
    coordinates,
  });

  if (isLoading && !market) {
    return (
      <div className="flex min-h-60 items-center justify-center">
        <Spinner />
      </div>
    );
  }

  if (error && !market) {
    return (
      <div className="flex min-h-60 items-center justify-center px-5">
        <p className="text-deep-gray text-center text-sm font-semibold">
          {error}
        </p>
      </div>
    );
  }

  if (!market) {
    return null;
  }

  return (
    <main className="flex flex-col gap-8">
      <Intro market={market} />

      <MarketDetails market={market} />

      <BottomActions marketId={market.market_id} />
    </main>
  );
}
