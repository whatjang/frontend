import { markets } from "@/src/mocks/market";
import type { Market } from "@/src/types/market";

export type MarketSearchItem = Pick<Market, "id" | "name" | "address">;

const SEARCH_RESULT_LIMIT = 20;

export async function searchMarkets(
  keyword: string
): Promise<MarketSearchItem[]> {
  const normalizedKeyword = keyword.trim().toLowerCase();

  if (!normalizedKeyword) {
    return [];
  }

  return markets
    .filter((market) => {
      const name = market.name.toLowerCase();
      const address = market.address.toLowerCase();

      return (
        name.includes(normalizedKeyword) || address.includes(normalizedKeyword)
      );
    })
    .slice(0, SEARCH_RESULT_LIMIT)
    .map(({ id, name, address }) => ({
      id,
      name,
      address,
    }));
}
