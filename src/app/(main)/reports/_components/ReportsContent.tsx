"use client";

import { useCallback, useState } from "react";

import SearchBar from "@/src/components/search/SearchBar";
import { useInfiniteScroll } from "@/src/hooks/useInfiniteScroll";
import type { ReportFeedCategory } from "@/src/types/report";

import useReportFeed from "../_hooks/useReportFeed";
import ReportCategoryFilter from "./ReportCategoryFilter";
import ReportList from "./ReportList";

export default function ReportsContent() {
  const [keyword, setKeyword] = useState("");
  const [selectedCategory, setSelectedCategory] =
    useState<ReportFeedCategory>("ALL");

  const {
    data,
    isLoading,
    isError,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  } = useReportFeed({
    keyword,
    category: selectedCategory,
  });

  const reports = data?.pages.flatMap((page) => page.reports) ?? [];

  const handleLoadMore = useCallback(() => {
    void fetchNextPage();
  }, [fetchNextPage]);

  const observerRef = useInfiniteScroll({
    hasNext: hasNextPage,
    isFetching: isFetchingNextPage,
    onLoadMore: handleLoadMore,
  });

  return (
    <>
      <div className="px-5">
        <SearchBar placeholder="시장명을 검색하세요." onSearch={setKeyword} />
      </div>

      <ReportCategoryFilter
        selectedCategory={selectedCategory}
        onChange={setSelectedCategory}
      />

      <ReportList
        reports={reports}
        isLoading={isLoading}
        isError={isError}
        observerRef={observerRef}
        isFetchingNextPage={isFetchingNextPage}
      />
    </>
  );
}
