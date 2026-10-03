"use client";

import { MapPin, Navigation } from "lucide-react";
import { useState } from "react";

import { DEFAULT_TOUR_TRANSPORT } from "@/src/constants/tour";
import type { TourTransportType } from "@/src/types/tour";

import TransportSelector from "./TransportSelector";

export default function Directions() {
  const [transport, setTransport] = useState<TourTransportType>(
    DEFAULT_TOUR_TRANSPORT
  );

  return (
    <section className="flex flex-col gap-2 px-5">
      <h2 className="text-green text-lg font-bold">길찾기</h2>

      <div className="border-light-gray flex flex-col gap-5 rounded-3xl border bg-white p-5">
        <div className="flex gap-2">
          <div className="bg-light-green flex size-10 shrink-0 items-center justify-center rounded-full">
            <MapPin
              size={19}
              strokeWidth={2}
              className="text-green"
              aria-hidden="true"
            />
          </div>

          <div className="flex flex-col">
            <p className="text-sm font-semibold">현재 위치에서 길찾기</p>

            <p className="text-deep-gray text-xs leading-5">
              현재 위치를 기준으로 카카오맵 길찾기를 제공합니다.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <p className="text-deep-gray text-xs font-semibold">이동 방식</p>

          <TransportSelector value={transport} onChange={setTransport} />
        </div>

        <button
          type="button"
          className="bg-green flex w-full cursor-pointer items-center justify-center gap-2 rounded-2xl py-3.5 text-sm font-bold text-white transition active:scale-[0.99]"
        >
          <Navigation size={17} strokeWidth={2} aria-hidden="true" />
          길찾기 바로가기
        </button>

        <p className="text-deep-gray text-center text-[11px]">
          길찾기를 위해 현재 위치 권한이 필요합니다.
        </p>
      </div>
    </section>
  );
}
