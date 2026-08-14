import Link from "next/link";

import { MarketRecord } from "@/src/types/mypage";

interface RecordItemProps {
  record: MarketRecord;
}

export default function RecordItem({ record }: RecordItemProps) {
  return (
    <Link href={`/record/${record.id}`} className="block">
      <article className="border-light-gray overflow-hidden rounded-xl border bg-white/30 shadow-xs">
        <div className="relative aspect-4/3 overflow-hidden">
          <div className="bg-light-gray h-full w-full" />

          <span className="absolute top-2 right-2 rounded-md bg-black/50 px-2 py-1 text-xs font-medium text-white">
            {record.visitedAt}
          </span>
        </div>

        <div className="flex flex-col gap-2 p-3">
          <h3 className="truncate text-sm font-bold">{record.marketName}</h3>
          <p className="text-deep-gray line-clamp-2 text-xs">{record.memo}</p>

          <div className="flex flex-wrap gap-1">
            {record.tags.map((tag) => (
              <span
                key={tag}
                className="bg-light-green text-green border-green/30 rounded-md border px-2 py-1 text-xs font-medium"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </article>
    </Link>
  );
}
