import { getMarkets } from "@/src/lib/api/market/list";
import { searchMarkets } from "@/src/lib/api/market/search";

export interface MarketSearchItem {
  id: number;
  name: string;
  address: string;
}

export interface MarketOptionsResult {
  markets: MarketSearchItem[];
  totalCount: number;
  page: number;
  hasNext: boolean;
}

export async function getMarketOptions(
  keyword: string,
  page: number
): Promise<MarketOptionsResult> {
  const normalizedKeyword = keyword.trim();

  const response = normalizedKeyword
    ? await searchMarkets({
        keyword: normalizedKeyword,
        page,
      })
    : await getMarkets({
        page,
      });

  return {
    markets: response.result.markets.map((market) => ({
      id: market.market_id,
      name: market.name,
      address: market.road_address,
    })),
    totalCount: response.result.total_count,
    page: response.result.page,
    hasNext: response.result.has_next,
  };
}
