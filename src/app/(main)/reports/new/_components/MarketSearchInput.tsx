"use client";

import { Search, X } from "lucide-react";
import { useEffect, useState, useTransition } from "react";
import { useRouter, useSearchParams } from "next/navigation";

interface MarketSearchInputProps {
  initialKeyword: string;
}

const SEARCH_DELAY = 300;

export default function MarketSearchInput({
  initialKeyword,
}: MarketSearchInputProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [keyword, setKeyword] = useState(initialKeyword);
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    const timer = setTimeout(() => {
      const trimmedKeyword = keyword.trim();
      const currentKeyword = searchParams.get("q")?.trim() ?? "";

      if (trimmedKeyword === currentKeyword) {
        return;
      }

      startTransition(() => {
        if (trimmedKeyword) {
          router.replace(
            `/reports/new?q=${encodeURIComponent(trimmedKeyword)}`,
            {
              scroll: false,
            }
          );
        } else {
          router.replace("/reports/new", {
            scroll: false,
          });
        }
      });
    }, SEARCH_DELAY);

    return () => clearTimeout(timer);
  }, [keyword, router, searchParams]);

  return (
    <div className="border-light-gray flex items-center gap-2 rounded-xl border bg-white px-3 py-2">
      <Search size={18} className="text-deep-gray" />

      <input
        type="text"
        value={keyword}
        onChange={(event) => setKeyword(event.target.value)}
        placeholder="시장명을 검색해주세요."
        className="min-w-0 flex-1 bg-transparent text-sm outline-none"
      />

      {keyword && (
        <button
          type="button"
          aria-label="검색어 지우기"
          onClick={() => setKeyword("")}
          className="text-deep-gray flex cursor-pointer items-center justify-center"
        >
          <X size={17} />
        </button>
      )}

      {isPending && <span className="text-deep-gray text-xs">검색 중</span>}
    </div>
  );
}
