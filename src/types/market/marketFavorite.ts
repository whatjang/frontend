export interface MarketFavoriteItem {
  market_id: number;
  name: string;
  open_day_label: string;
  next_open_date: string | null;
  days_until_open: number | null;
  notification_enabled: boolean;
}

export interface MarketFavoriteResult {
  total_count: number;
  markets: MarketFavoriteItem[];
}
