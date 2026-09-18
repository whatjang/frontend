export interface MarketSearchParams {
  keyword: string;
  latitude?: number;
  longitude?: number;
  page?: number;
}

export interface MarketSearchItem {
  market_id: number;
  name: string;
  market_type: string;
  city: string;
  district: string;
  road_address: string;
  open_cycle: string;
  open_day_numbers: number[];
  latitude: number;
  longitude: number;
  distance_km: number | null;
  next_open_date: string;
  parking_available: boolean;
  toilet_available: boolean;
  products: string[];
}

export interface MarketSearchResult {
  total_count: number;
  page: number;
  size: number;
  has_next: boolean;
  markets: MarketSearchItem[];
}
