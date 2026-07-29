import MarketItem from "./MarketItem";
import { markets } from "@/src/mocks/market";

export default function MarketList() {
  return (
    <ul className="flex w-full flex-col gap-4">
      {markets.map((market) => (
        <MarketItem key={market.id} market={market} />
      ))}
    </ul>
  );
}
