import MarketItem from "./MarketItem";
import { markets } from "@/src/mocks/market";

export default function MarketList() {
  if (markets.length === 0) {
    return <p className="text-center text-sm">검색된 데이터가 없습니다.</p>;
  }

  return (
    <ul className="flex w-full flex-col gap-4">
      {markets.map((market) => (
        <MarketItem key={market.id} market={market} />
      ))}
    </ul>
  );
}
