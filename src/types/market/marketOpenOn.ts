export interface MarketOpenOnParams {
  latitude?: number;
  longitude?: number;
  page?: number;
}

export interface MarketOpenOnItem {
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

export interface MarketOpenOnResult {
  selected_date: string;
  total_count: number;
  page: number;
  size: number;
  has_next: boolean;
  markets: MarketOpenOnItem[];
}
