import type { Market } from "@/src/types/market";

import {
  Accessibility,
  Baby,
  CircleHelp,
  CircleParking,
  Toilet,
  type LucideIcon,
} from "lucide-react";

interface FacilitiesProps {
  facilities: Market["facilities"];
}

const facilityIconMap: Record<string, LucideIcon> = {
  parking: CircleParking,
  restroom: Toilet,
  wheelchair: Accessibility,
  "nursing-room": Baby,
};

export default function Facilities({ facilities }: FacilitiesProps) {
  return (
    <section className="flex flex-col gap-4 px-5">
      <h2 className="text-green text-xl font-bold">편의 시설</h2>

      <ul className="flex gap-4">
        {facilities.map((facility) => {
          const Icon = facilityIconMap[facility.icon] ?? CircleHelp;

          return (
            <li
              key={facility.id}
              className={`flex flex-col items-center ${
                facility.available ? "text-green" : "text-deep-gray opacity-50"
              }`}
            >
              <div className="shadow-light-gray flex h-18 w-8 items-center justify-center rounded-2xl bg-white shadow-xs">
                <Icon size={20} strokeWidth={2.4} aria-hidden="true" />
              </div>

              <p className="mt-1 text-center text-xs font-semibold">
                {facility.label}
              </p>

              <span className="sr-only">
                {facility.available ? "이용 가능" : "이용 불가"}
              </span>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
