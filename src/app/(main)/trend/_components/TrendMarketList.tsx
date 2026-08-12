import TrendMarketItem from "./TrendMarketItem";

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
  href: string;
}

interface TrendMarketListProps {
  trends: TrendFood[];
}

export default function TrendMarketList({ trends }: TrendMarketListProps) {
  return (
    <section>
      <h2 className="text-green mb-2 text-lg font-semibold">
        트렌드 맞춤 시장 추천
      </h2>

      <div className="space-y-4">
        {trends.map((trend) => (
          <TrendMarketItem key={trend.id} trend={trend} />
        ))}
      </div>
    </section>
  );
}
