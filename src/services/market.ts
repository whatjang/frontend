import { searchMarkets as searchMarketsApi } from "@/src/lib/api/market/search";

export interface MarketSearchItem {
  id: number;
  name: string;
  address: string;
}

const SEARCH_RESULT_LIMIT = 20;

export async function searchMarkets(
  keyword: string
): Promise<MarketSearchItem[]> {
  const normalizedKeyword = keyword.trim();

  if (!normalizedKeyword) {
    return [];
  }

  const response = await searchMarketsApi({
    keyword: normalizedKeyword,
  });

  return response.result.markets
    .slice(0, SEARCH_RESULT_LIMIT)
    .map((market) => ({
      id: market.market_id,
      name: market.name,
      address: market.road_address,
    }));
}
