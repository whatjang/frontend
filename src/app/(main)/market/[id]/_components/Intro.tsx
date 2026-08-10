import type { Market } from "@/src/types/market";
import { MapPin, InfoIcon } from "lucide-react";

interface IntroProps {
  market: Market;
}

function getMarketDates(marketDays: number[], date: Date = new Date()) {
  const year = date.getFullYear();
  const month = date.getMonth();
  const lastDay = new Date(year, month + 1, 0).getDate();

  return Array.from({ length: lastDay }, (_, index) => index + 1).filter(
    (day) => marketDays.some((marketDay) => day % 10 === marketDay % 10)
  );
}

export default function Intro({ market }: IntroProps) {
  const marketDates = getMarketDates(market.marketDays);

  return (
    <section className="flex w-full flex-col gap-4 px-5">
      <div className="bg-light-gray h-50 w-full rounded-3xl" />

      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <h1 className="text-green text-xl font-bold">{market.name}</h1>

          <div className="bg-green/90 rounded-full border border-white/20 px-3 py-1">
            <p className="text-xs font-semibold text-white">
              {market.marketType}
            </p>
          </div>
        </div>
        <div className="flex items-start gap-1">
          <MapPin
            size={16}
            strokeWidth={2}
            className="text-green mt-0.5"
            aria-hidden="true"
          />

          <div className="text-deep-gray flex flex-col text-sm">
            <p className="font-bold">{market.address}</p>
            <p>이번 달 {marketDates.join("-")}일</p>
          </div>
        </div>

        {market.notice && (
          <div className="text-green shadow-light-gray flex items-start gap-3 rounded-3xl bg-white p-2 shadow-xs">
            <InfoIcon size={16} strokeWidth={2} />
            <p className="text-xs font-medium">{market.notice}</p>
          </div>
        )}
      </div>
    </section>
  );
}
