export interface TrendFood {
  id: number;
  rank: number;
  marketName: string;
  title: string;
  tag: string;
  keyword: string;
  image: string;
  location: string;
  tags: string[];
  reason: string;
}

export type HomeTrendFood = Pick<
  TrendFood,
  "id" | "rank" | "marketName" | "title" | "tag"
>;
