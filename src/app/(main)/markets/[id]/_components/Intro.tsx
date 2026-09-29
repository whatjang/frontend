import { MapPin, Store } from "lucide-react";

import type { MarketDetailResult } from "@/src/types/market/index";

interface IntroProps {
  market: MarketDetailResult;
}

function formatDate(date: string) {
  const [, month, day] = date.split("-");

  return `${Number(month)}월 ${Number(day)}일`;
}

export default function Intro({ market }: IntroProps) {
  const address =
    market.road_address?.trim() ||
    market.jibun_address?.trim() ||
    "주소 정보 없음";

  return (
    <section className="flex w-full flex-col gap-4 px-5">
      <div
        className="bg-light-gray flex h-60 w-full items-center justify-center rounded-3xl bg-cover bg-center"
        style={
          market.img_url
            ? {
                backgroundImage: `url("${market.img_url}")`,
              }
            : undefined
        }
      >
        {!market.img_url && (
          <Store
            className="text-deep-gray/40 size-10"
            strokeWidth={1.5}
            aria-hidden="true"
          />
        )}
      </div>

      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-1">
          <h1 className="text-green text-xl font-bold">{market.name}</h1>

          <div className="bg-green/90 rounded-full border border-white/20 px-2 py-1">
            <p className="text-xs font-semibold text-white">
              {market.market_type}
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
            <p className="font-bold">{address}</p>

            {market.next_open_dates.length > 0 && (
              <p>
                다음 장날 {market.next_open_dates.map(formatDate).join(" · ")}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
