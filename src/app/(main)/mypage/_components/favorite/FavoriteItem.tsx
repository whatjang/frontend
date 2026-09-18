import { Bell, Star, Store } from "lucide-react";

import type { MarketFavoriteItem } from "@/src/types/market/index";

interface FavoriteItemProps {
  market: MarketFavoriteItem;
  onRemove: (marketId: number) => void;
  onToggleNotification: (marketId: number) => void;
}

function getDDayLabel(daysUntilOpen: number | null) {
  if (daysUntilOpen === null) {
    return "-";
  }

  if (daysUntilOpen === 0) {
    return "오늘";
  }

  return `D-${daysUntilOpen}`;
}

export default function FavoriteItem({
  market,
  onRemove,
  onToggleNotification,
}: FavoriteItemProps) {
  return (
    <article className="shadow-light-gray flex items-center gap-2 rounded-xl bg-white/20 p-3 shadow-xs">
      <div className="bg-light-green text-green border-green/30 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border">
        <Store size={20} />
      </div>

      <div className="min-w-0 flex-1">
        <h3 className="truncate text-sm font-bold">{market.name}</h3>

        <p className="text-deep-gray truncate text-xs font-semibold">
          {market.open_day_label}
        </p>
      </div>

      <div className="flex shrink-0 items-center gap-2">
        <span className="border-green text-green rounded-lg border px-2.5 py-1.5 text-xs font-bold">
          {getDDayLabel(market.days_until_open)}
        </span>

        <button
          type="button"
          onClick={() => onToggleNotification(market.market_id)}
          aria-pressed={market.notification_enabled}
          aria-label={`${market.name} 알림 ${
            market.notification_enabled ? "끄기" : "켜기"
          }`}
          className="cursor-pointer"
        >
          <Bell
            size={20}
            className={
              market.notification_enabled
                ? "text-green transition-colors"
                : "text-deep-gray/40 transition-colors"
            }
          />
        </button>

        <button
          type="button"
          onClick={() => onRemove(market.market_id)}
          aria-label={`${market.name} 즐겨찾기 해제`}
          className="text-green cursor-pointer"
        >
          <Star size={20} className="fill-green transition-transform" />
        </button>
      </div>
    </article>
  );
}
