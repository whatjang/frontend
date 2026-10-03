"use client";

import { Bike, Footprints } from "lucide-react";

import {
  TOUR_TRANSPORT_OPTIONS,
  type TourTransportType,
} from "@/src/constants/tour";

interface TransportSelectorProps {
  value: TourTransportType;
  onChange: (value: TourTransportType) => void;
}

const TRANSPORT_ICONS = {
  WALK: Footprints,
  BICYCLE: Bike,
} satisfies Record<TourTransportType, typeof Footprints>;

export default function TransportSelector({
  value,
  onChange,
}: TransportSelectorProps) {
  return (
    <div className="grid grid-cols-2 gap-2">
      {TOUR_TRANSPORT_OPTIONS.map((option) => {
        const Icon = TRANSPORT_ICONS[option.value];
        const selected = value === option.value;

        return (
          <button
            key={option.value}
            type="button"
            onClick={() => onChange(option.value)}
            className={[
              "flex cursor-pointer items-center justify-center gap-2 rounded-2xl border px-4 py-3 text-sm font-semibold transition",
              selected
                ? "border-green bg-light-green/30 text-green"
                : "border-light-gray text-deep-gray bg-white",
            ].join(" ")}
          >
            <Icon size={17} strokeWidth={2} aria-hidden="true" />
            {option.label}
          </button>
        );
      })}
    </div>
  );
}
