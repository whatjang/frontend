export interface MarketCalendarOpenDate {
  date: string;
  market_count: number;
}

export interface MarketCalendarResult {
  year: number;
  month: number;
  open_dates: MarketCalendarOpenDate[];
}

export interface MarketCalendarParams {
  year: number;
  month: number;
}
