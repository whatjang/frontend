import type { Market } from "@/src/types/market";

import {
  Apple,
  Beef,
  Carrot,
  CircleHelp,
  Drumstick,
  Fish,
  Utensils,
  type LucideIcon,
} from "lucide-react";

interface FoodProps {
  specialties: Market["specialties"];
}

const foodIconMap: Record<string, LucideIcon> = {
  seafood: Fish,
  "fried-chicken": Drumstick,
  food: Utensils,
  vegetable: Carrot,
  fruit: Apple,
  meat: Beef,
};

export default function Food({ specialties }: FoodProps) {
  return (
    <section className="flex flex-col gap-4 overflow-hidden">
      <div className="flex items-center justify-between px-5">
        <h2 className="text-green text-xl font-bold">먹거리 · 특산물</h2>

        <div className="border-light-brown/10 bg-light-brown/10 flex items-center gap-1 rounded-full border px-3 py-1">
          <span className="bg-light-brown h-1.5 w-1.5 rounded-full" />
          <p className="text-light-brown text-xs font-bold">요즘 인기</p>
        </div>
      </div>

      <ul className="scrollbar-hide ml-5 flex gap-4 overflow-x-auto">
        {specialties.map((specialty) => {
          const Icon = foodIconMap[specialty.icon] ?? CircleHelp;

          return (
            <li
              key={specialty.id}
              className="border-light-gray flex w-35 flex-col items-center gap-3 rounded-4xl border bg-white p-3 pb-5"
            >
              <div className="border-light-gray bg-light-green flex aspect-square w-full items-center justify-center rounded-4xl border">
                <Icon
                  className="text-green"
                  size={30}
                  strokeWidth={2}
                  aria-hidden="true"
                />
              </div>

              <p className="text-green text-center text-xs font-semibold">
                {specialty.label}
              </p>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
