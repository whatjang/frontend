import { ChevronRight, Star } from "lucide-react";
import Link from "next/link";

interface HomeFavoriteMarketItemProps {
  name: string;
  remainingDays: number;
  href: string;
}

function formatRemainingDays(remainingDays: number) {
  if (remainingDays === 0) {
    return "D-DAY";
  }

  if (remainingDays < 0) {
    return `D+${Math.abs(remainingDays)}`;
  }

  return `D-${remainingDays}`;
}

export default function HomeFavoriteMarketItem({
  name,
  remainingDays,
  href,
}: HomeFavoriteMarketItemProps) {
  return (
    <Link
      href={href}
      aria-label={`${name} 상세 페이지로 이동`}
      className="border-light-brown/20 flex w-full items-center gap-3 rounded-2xl border bg-white/50 p-4"
    >
      <div className="border-light-brown/30 bg-light-brown/10 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border">
        <Star
          aria-hidden="true"
          className="text-light-brown h-5 w-5"
          strokeWidth={2}
        />
      </div>

      <div className="min-w-0 flex-1">
        <p className="text-light-brown text-xs font-semibold">MY FAVORITE</p>

        <div className="flex items-center gap-1">
          <h2 className="text-green text-md truncate font-bold">{name}</h2>

          <span className="text-light-brown text-md shrink-0 font-bold">
            {formatRemainingDays(remainingDays)}
          </span>
        </div>
      </div>

      <ChevronRight
        aria-hidden="true"
        className="text-gray h-5 w-5 shrink-0"
        strokeWidth={2}
      />
    </Link>
  );
}
