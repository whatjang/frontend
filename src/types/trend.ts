export interface TrendHistory {
  day: string;
  value: number;
}

export interface TrendKeyword {
  name: string;
  rate: number;
  history: TrendHistory[];
}

export interface TrendInsight {
  title: string;
  updatedAt: string;
  keywords: TrendKeyword[];
  sources: string[];
}

export interface TrendMarket {
  id: number;
  rank: number;
  marketName: string;
  title: string;
  tag: string;
  keyword: string;
  location: string;
  tags: string[];
  reason: string;
}

export type HomeTrendMarket = Pick<
  TrendMarket,
  "id" | "rank" | "marketName" | "title" | "tag"
>;
