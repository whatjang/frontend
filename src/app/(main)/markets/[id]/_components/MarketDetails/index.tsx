import type { MarketDetailResult } from "@/src/types/market/index";

import Facilities from "./Facilities";
import Info from "./Info";
import Products from "./Products";

interface MarketDetailsProps {
  market: MarketDetailResult;
}

export default function MarketDetails({ market }: MarketDetailsProps) {
  return (
    <div className="flex flex-col gap-8">
      <Facilities
        parkingAvailable={market.parking_available}
        toiletAvailable={market.toilet_available}
      />

      <Products products={market.products} />

      <Info market={market} />
    </div>
  );
}
