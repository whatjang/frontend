import Link from "next/link";

interface HomeTrendFoodItemProps {
  rank: number;
  marketName: string;
  title: string;
  tag: string;
  href: string;
}

const badgeStyles = ["light-brown", "brown", "green"];

export default function HomeTrendFoodItem({
  rank,
  marketName,
  title,
  tag,
  href,
}: HomeTrendFoodItemProps) {
  const badgeIndex = (rank - 1) % badgeStyles.length;
  const formattedRank = String(rank).padStart(2, "0");

  return (
    <Link
      href={href}
      aria-label={`${title} 상세 페이지로 이동`}
      className="block h-full overflow-hidden rounded-3xl bg-white/55 backdrop-blur-md"
    >
      <article className="flex h-full flex-col">
        <div className="bg-light-gray relative aspect-4/3 overflow-hidden">
          <span
            className={`absolute top-4 left-4 rounded-full px-3 py-1.5 text-xs font-bold text-white bg-${badgeStyles[badgeIndex]}`}
          >
            TREND #{formattedRank}
          </span>
        </div>

        <div className="flex min-h-44 flex-1 flex-col p-4">
          <p
            className={`text-${badgeStyles[badgeIndex]} text-xs font-semibold`}
          >
            {marketName}
          </p>

          <h3 className="text-green text-md line-clamp-2 leading-snug font-bold">
            {title}
          </h3>

          <span
            className={`border-${badgeStyles[badgeIndex]}/20 bg-${badgeStyles[badgeIndex]}/10 text-${badgeStyles[badgeIndex]} mt-auto w-fit rounded-full border px-2 py-1 text-xs font-semibold`}
          >
            #{tag}
          </span>
        </div>
      </article>
    </Link>
  );
}
