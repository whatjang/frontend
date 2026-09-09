"use client";

import { Search, X } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState, useTransition } from "react";

interface MarketSearchInputProps {
  initialKeyword: string;
}

const SEARCH_DELAY = 300;

export default function MarketSearchInput({
  initialKeyword,
}: MarketSearchInputProps) {
  const router = useRouter();
  const pathname = usePathname();
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

      const params = new URLSearchParams(searchParams.toString());

      if (trimmedKeyword) {
        params.set("q", trimmedKeyword);
      } else {
        params.delete("q");
      }

      const queryString = params.toString();

      startTransition(() => {
        router.replace(queryString ? `${pathname}?${queryString}` : pathname, {
          scroll: false,
        });
      });
    }, SEARCH_DELAY);

    return () => clearTimeout(timer);
  }, [keyword, pathname, router, searchParams]);

  return (
    <div
      role="search"
      aria-label="시장 검색"
      aria-busy={isPending}
      className="border-light-gray flex items-center gap-2 rounded-xl border bg-white px-3 py-2"
    >
      <Search size={18} aria-hidden="true" className="text-deep-gray" />

      <input
        type="search"
        name="q"
        aria-label="시장명"
        value={keyword}
        onChange={(event) => setKeyword(event.target.value)}
        placeholder="시장명을 검색해주세요."
        className="min-w-0 flex-1 bg-transparent text-sm outline-none [&::-webkit-search-cancel-button]:appearance-none"
      />

      {keyword && (
        <button
          type="button"
          aria-label="검색어 지우기"
          onClick={() => setKeyword("")}
          className="text-deep-gray flex cursor-pointer items-center justify-center"
        >
          <X size={17} aria-hidden="true" />
        </button>
      )}

      {isPending && (
        <span
          role="status"
          aria-live="polite"
          className="text-deep-gray text-xs"
        >
          검색 중
        </span>
      )}
    </div>
  );
}
