"use client";

import { MapPin, Navigation } from "lucide-react";
import { useEffect, useState } from "react";

interface HomeLiveMarketItemProps {
  name: string;
  schedule: string;
  address: string;
  mapUrl: string;
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
  schedule,
  address,
  mapUrl,
}: HomeLiveMarketItemProps) {
  const [today, setToday] = useState("");

  useEffect(() => {
    setToday(formatToday());
  }, []);

  return (
    <article className="relative flex w-full flex-col justify-between gap-4 overflow-hidden rounded-3xl border border-white/40 p-6 text-white">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/home/live-market.svg')",
        }}
      />

      <div
        aria-hidden="true"
        className="from-green/85 to-green/75 backdrop-blur-1 absolute inset-0 bg-linear-to-r"
      />

      <header className="relative z-10 flex items-start justify-between">
        <div className="bg-light-brown/90 flex items-center gap-1 rounded-full border border-white/50 px-3 py-1">
          <span
            aria-hidden="true"
            className="h-1.5 w-1.5 rounded-full bg-white"
          />

          <span className="text-xs font-bold">MARKET LIVE</span>
        </div>

        <time className="text-xs">{today || "\u00A0"}</time>
      </header>

      <div className="relative z-10 flex flex-col gap-1">
        <h2 className="text-xl font-bold">
          {name} <span>({schedule})</span>
        </h2>

        <div className="flex items-center gap-1">
          <MapPin
            aria-hidden="true"
            className="h-4 w-4 shrink-0"
            strokeWidth={2}
          />

          <p className="text-xs font-medium">{address}</p>
        </div>
      </div>

      <a
        href={mapUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${name} 구글 지도 열기`}
        className="text-green relative z-10 flex w-full items-center justify-center gap-1 rounded-full bg-white/90 py-3.5 text-xs font-bold transition-opacity hover:opacity-90"
      >
        <span>길찾기 바로가기</span>

        <Navigation aria-hidden="true" className="h-4 w-4" strokeWidth={2.5} />
      </a>
    </article>
  );
}
