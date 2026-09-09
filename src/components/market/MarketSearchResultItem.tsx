import { ChevronRight, MapPin } from "lucide-react";
import Link from "next/link";

import type { MarketSearchItem } from "@/src/services/market";

interface MarketSearchResultItemProps {
  market: MarketSearchItem;
  href: string;
}

export default function MarketSearchResultItem({
  market,
  href,
}: MarketSearchResultItemProps) {
  return (
    <Link
      href={href}
      className="border-light-gray flex items-center justify-between rounded-2xl border bg-white p-3"
    >
      <div className="flex min-w-0 items-center gap-2">
        <div className="bg-light-green border-green/30 text-green flex size-10 shrink-0 items-center justify-center rounded-full border">
          <MapPin size={18} aria-hidden="true" />
        </div>

        <div className="flex min-w-0 flex-col gap-1">
          <strong className="truncate text-sm font-bold text-black">
            {market.name}
          </strong>

          <span className="text-deep-gray truncate text-xs">
            {market.address}
          </span>
        </div>
      </div>

      <ChevronRight
        size={18}
        aria-hidden="true"
        className="text-deep-gray shrink-0"
      />
    </Link>
  );
}
