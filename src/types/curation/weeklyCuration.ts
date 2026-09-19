export type CurationDataStatus = "COMPLETE" | "PARTIAL";

export type CurationSourceStatus = "AVAILABLE" | "UNAVAILABLE";

export interface CurationChartItem {
  date: string;
  ratio: number;
}

export interface CurationTrend {
  keyword_id: string;
  keyword: string;
  rank: number;
  data_status: CurationDataStatus;
  search_growth_rate: number | null;
  shopping_growth_rate: number | null;
  external_score: number;
  data_completeness: number;
  source_statuses: Record<string, CurationSourceStatus>;
  unavailable_sources: string[];
  chart: CurationChartItem[];
}

export interface PrimaryMarket {
  market_id: string;
  market_name: string;
  region: string;
}

export interface RecommendedMarket {
  market_id: number;
  trend_keyword: string;
  trend_rank: number;
  name: string;
  market_type: string;
  province: string;
  city: string;
  district: string;
  road_address: string;
  latitude: number;
  longitude: number;
  image_url: string;
  products: string;
  store_count: number;
  parking_available: boolean;
  recommendation_rank: number;
  match_score: number;
  tags: string[];
  primary_market: PrimaryMarket;
}

export interface WeeklyCurationResult {
  generated_at: string;
  trends: CurationTrend[];
  recommended_markets: RecommendedMarket[];
}
