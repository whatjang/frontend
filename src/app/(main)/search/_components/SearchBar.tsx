"use client";

import { useState } from "react";
import { Search, X } from "lucide-react";

interface SearchBarProps {
  placeholder?: string;
  defaultValue?: string;
}

export default function SearchBar({
  placeholder = "시장명 또는 강원 지역명을 검색하세요.",
  defaultValue = "",
}: SearchBarProps) {
  const [keyword, setKeyword] = useState(defaultValue);

  return (
    <form
      role="search"
      className="border-deep-gray/30 flex w-full items-center gap-3 rounded-3xl border bg-white p-3.5 shadow-xl"
    >
      <Search
        aria-hidden="true"
        strokeWidth={3}
        className="text-green size-5 shrink-0"
      />

      <label htmlFor="market-search" className="sr-only">
        시장 검색
      </label>

      <input
        id="market-search"
        name="keyword"
        type="search"
        value={keyword}
        onChange={(event) => setKeyword(event.target.value)}
        placeholder={placeholder}
        autoComplete="off"
        className="text-deep-gray placeholder:text-deep-gray min-w-0 flex-1 appearance-none bg-transparent text-sm font-semibold outline-none [&::-webkit-search-cancel-button]:hidden [&::-webkit-search-decoration]:hidden"
      />

      {keyword && (
        <button
          type="button"
          aria-label="검색어 지우기"
          onClick={() => setKeyword("")}
          className="text-deep-gray/60 hover:bg-deep-gray/10 flex size-4 shrink-0 items-center justify-center rounded-full transition-colors"
        >
          <X aria-hidden="true" className="size-4" strokeWidth={2.5} />
        </button>
      )}
    </form>
  );
}
