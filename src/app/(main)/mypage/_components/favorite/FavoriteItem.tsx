import { Bell, Heart, Store } from "lucide-react";

import { FavoriteMarket } from "@/src/types/mypage";

interface FavoriteItemProps {
  market: FavoriteMarket;
  onRemove: (marketId: number) => void;
  onToggleNotification: (marketId: number) => void;
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
        <h3 className="truncate text-sm font-bold">{market.marketName}</h3>
        <p className="text-deep-gray truncate text-xs font-semibold">
          {market.marketDays}
        </p>
      </div>

      <div className="flex shrink-0 items-center gap-2">
        <span className="border-green text-green rounded-lg border px-2.5 py-1.5 text-xs font-bold">
          {market.dDay}
        </span>

        <button
          type="button"
          onClick={() => onToggleNotification(market.id)}
          aria-pressed={market.notificationEnabled}
          aria-label={`${market.marketName} 알림 ${
            market.notificationEnabled ? "끄기" : "켜기"
          }`}
          className="cursor-pointer"
        >
          <Bell
            size={20}
            className={
              market.notificationEnabled
                ? "text-green transition-colors"
                : "text-deep-gray/40 transition-colors"
            }
          />
        </button>

        <button
          type="button"
          onClick={() => onRemove(market.id)}
          aria-label={`${market.marketName} 즐겨찾기 해제`}
          className="text-green cursor-pointer"
        >
          <Heart size={20} className="fill-green transition-transform" />
        </button>
      </div>
    </article>
  );
}
