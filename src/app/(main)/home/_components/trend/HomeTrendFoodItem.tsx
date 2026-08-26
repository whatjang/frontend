import Link from "next/link";

import type { HomeTrendFood } from "@/src/types/trend";

const badgeStyles = [
  {
    badge: "bg-light-brown",
    text: "text-light-brown",
    tag: "border-light-brown/20 bg-light-brown/10 text-light-brown",
  },
  {
    badge: "bg-brown",
    text: "text-brown",
    tag: "border-brown/20 bg-brown/10 text-brown",
  },
  {
    badge: "bg-green",
    text: "text-green",
    tag: "border-green/20 bg-green/10 text-green",
  },
] as const;

export default function HomeTrendFoodItem({
  id,
  rank,
  marketName,
  title,
  tag,
}: HomeTrendFood) {
  const badgeIndex = (rank - 1) % badgeStyles.length;
  const badgeStyle = badgeStyles[badgeIndex];
  const formattedRank = String(rank).padStart(2, "0");

  return (
    <Link
      href={`/markets/${id}`}
      aria-label={`${title} 상세 페이지로 이동`}
      className="block h-full overflow-hidden rounded-3xl bg-white/55 backdrop-blur-md"
    >
      <article className="flex h-full flex-col">
        <div className="bg-light-gray relative aspect-4/3 overflow-hidden">
          <span
            className={`${badgeStyle.badge} absolute top-4 left-4 rounded-full px-3 py-1.5 text-xs font-bold text-white`}
          >
            TREND #{formattedRank}
          </span>
        </div>

        <div className="flex min-h-35 flex-1 flex-col p-4">
          <p className={`${badgeStyle.text} text-xs font-semibold`}>
            {marketName}
          </p>

          <h3 className="text-green text-md line-clamp-2 leading-snug font-bold">
            {title}
          </h3>

          <span
            className={`${badgeStyle.tag} mt-auto w-fit rounded-full border px-2 py-1 text-xs font-semibold`}
          >
            #{tag}
          </span>
        </div>
      </article>
    </Link>
  );
}
