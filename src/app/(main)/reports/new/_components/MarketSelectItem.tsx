import Link from "next/link";
import { ChevronRight, MapPin } from "lucide-react";

import type { MarketSearchItem } from "@/src/services/market";

interface MarketSelectItemProps {
  market: MarketSearchItem;
}

export default function MarketSelectItem({ market }: MarketSelectItemProps) {
  return (
    <li>
      <Link
        href={`/markets/${market.id}/new`}
        className="border-light-gray flex items-center justify-between rounded-2xl border bg-white p-3"
      >
        <div className="flex min-w-0 items-center gap-2">
          <div className="bg-light-green border-green/30 text-green flex size-10 items-center justify-center rounded-full border">
            <MapPin size={18} />
          </div>

          <div className="flex min-w-0 flex-col gap-1">
            <strong className="text-sm font-bold text-black">
              {market.name}
            </strong>

            <span className="text-deep-gray text-xs">{market.address}</span>
          </div>
        </div>

        <ChevronRight size={18} className="text-deep-gray" />
      </Link>
    </li>
  );
}
