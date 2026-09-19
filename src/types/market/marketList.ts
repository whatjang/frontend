import type { MarketSearchItem } from "./marketSearch";

export interface MarketListParams {
  latitude?: number;
  longitude?: number;
  page?: number;
}

export interface MarketListResult {
  total_count: number;
  page: number;
  size: number;
  has_next: boolean;
  markets: MarketSearchItem[];
}
