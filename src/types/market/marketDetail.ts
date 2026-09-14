export interface MarketDetailParams {
  latitude?: number;
  longitude?: number;
}

export interface MarketDetailResult {
  market_id: number;
  name: string;
  market_type: string;

  province: string;
  city: string;
  district: string;

  road_address: string | null;
  jibun_address: string | null;

  open_cycle: string;
  open_day_numbers: number[];
  next_open_dates: string[];

  latitude: number;
  longitude: number;
  distance_km: number | null;

  store_count: number | null;

  products: string[];
  vouchers: string[];

  homepage: string | null;

  toilet_available: boolean | null;
  parking_available: boolean | null;

  opened_year: number | null;
  phone: string | null;
  data_reference_date: string;
}
