"use client";

import Spinner from "@/src/components/common/Spinner";
import { useCurrentLocation } from "@/src/hooks/location/useCurrentLocation";
import { useMarketDetail } from "@/src/hooks/market/useMarketDetail";
import { getMarketReports } from "@/src/mocks/marketReports";

import BottomActions from "./BottomActions";
import Intro from "./Intro";
import MarketDetails from "./MarketDetails";
import MarketMap from "./MarketMap";
import Reports from "./Reports";

interface MarketDetailContentProps {
  marketId: number;
}

export default function MarketDetailContent({
  marketId,
}: MarketDetailContentProps) {
  const { coordinates } = useCurrentLocation();

  const {
    data: market,
    isPending,
    error,
  } = useMarketDetail({
    marketId,
    coordinates,
  });

  if (isPending) {
    return (
      <div className="flex min-h-60 items-center justify-center">
        <Spinner />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex min-h-60 items-center justify-center px-5">
        <p className="text-deep-gray text-center text-sm font-semibold">
          {error instanceof Error
            ? error.message
            : "시장 정보를 불러올 수 없습니다."}
        </p>
      </div>
    );
  }

  if (!market) {
    return null;
  }

  const reports = getMarketReports(market.market_id);

  return (
    <main className="flex flex-col gap-8">
      <Intro market={market} />

      <MarketMap
        marketId={market.market_id}
        name={market.name}
        latitude={market.latitude}
        longitude={market.longitude}
        currentCoordinates={coordinates}
      />

      <MarketDetails market={market} />

      <Reports reports={reports} marketId={market.market_id} />

      <BottomActions
        marketId={market.market_id}
        isFavorite={market.is_favorite}
      />
    </main>
  );
}
