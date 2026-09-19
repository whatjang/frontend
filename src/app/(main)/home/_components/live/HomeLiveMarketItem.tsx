"use client";

import { MapPin, Navigation } from "lucide-react";
import { useState } from "react";

interface HomeLiveMarketItemProps {
  name: string;
  marketType: string;
  schedule: string;
  address: string;
  distanceKm: number | null;
  directionsUrl: string;
}

function formatToday() {
  return new Intl.DateTimeFormat("ko-KR", {
    month: "long",
    day: "numeric",
    weekday: "short",
    timeZone: "Asia/Seoul",
  }).format(new Date());
}

export default function HomeLiveMarketItem({
  name,
  marketType,
  schedule,
  address,
  distanceKm,
  directionsUrl,
}: HomeLiveMarketItemProps) {
  const [today] = useState(formatToday);

  return (
    <article className="relative flex w-full flex-col overflow-hidden rounded-3xl border border-white/40 p-5 text-white">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/home/live-market.svg')",
        }}
      />

      <div
        aria-hidden="true"
        className="from-green/90 to-green/70 absolute inset-0 bg-linear-to-r"
      />

      <div className="relative z-10 flex flex-col gap-4">
        <header className="flex items-center justify-between">
          <div className="bg-light-brown/90 flex items-center gap-1.5 rounded-full border border-white/40 px-3 py-1">
            <span
              aria-hidden="true"
              className="h-1.5 w-1.5 rounded-full bg-white"
            />

            <span className="text-xs font-bold">TODAY&apos;S MARKET</span>
          </div>

          <time className="text-xs font-medium text-white/75">{today}</time>
        </header>

        <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-bold tracking-tight">{name}</h2>

          <div className="flex items-start gap-1 text-white/90">
            <MapPin
              aria-hidden="true"
              className="size-4 shrink-0"
              strokeWidth={2}
            />

            <p className="line-clamp-1 text-xs font-medium">{address}</p>
          </div>
        </div>

        <div className="flex items-center justify-between border-t border-white/15 pt-3">
          <div className="flex items-center gap-1 text-xs font-semibold text-white/80">
            <span>{marketType}</span>
            <span aria-hidden="true">·</span>
            <span>{schedule}</span>

            {distanceKm !== null && (
              <>
                <span aria-hidden="true">·</span>
                <span>{distanceKm}km</span>
              </>
            )}
          </div>

          <a
            href={directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${name} 카카오맵 길찾기`}
            className="text-green flex shrink-0 items-center gap-1 rounded-full bg-white px-3 py-2 text-xs font-bold transition-opacity hover:opacity-90"
          >
            <Navigation aria-hidden="true" className="size-3.5" />
            <span>길찾기</span>
          </a>
        </div>
      </div>
    </article>
  );
}
