import { searchMarkets as searchMarketsApi } from "@/src/lib/api/market/search";

export interface MarketSearchItem {
  id: number;
  name: string;
  address: string;
}

export async function searchMarketOptions(
  keyword: string
): Promise<MarketSearchItem[]> {
  const normalizedKeyword = keyword.trim();

  if (!normalizedKeyword) {
    return [];
  }

  const response = await searchMarketsApi({
    keyword: normalizedKeyword,
    page: 0,
  });

  return response.result.markets.map((market) => ({
    id: market.market_id,
    name: market.name,
    address: market.road_address,
  }));
}
