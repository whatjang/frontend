"use client";

import { useInfiniteQuery } from "@tanstack/react-query";

import { getReportFeed } from "@/src/lib/api/report/feed";
import type { ReportFeedCategory } from "@/src/types/report";

interface UseReportFeedParams {
  keyword: string;
  category: ReportFeedCategory;
}

export default function useReportFeed({
  keyword,
  category,
}: UseReportFeedParams) {
  const normalizedKeyword = keyword.trim();

  return useInfiniteQuery({
    queryKey: ["report", "feed", normalizedKeyword, category],

    queryFn: async ({ pageParam }) => {
      const response = await getReportFeed({
        ...(normalizedKeyword && {
          keyword: normalizedKeyword,
        }),
        category,
        page: pageParam,
      });

      return response.result;
    },

    initialPageParam: 0,

    getNextPageParam: (lastPage) =>
      lastPage.has_next ? lastPage.page + 1 : undefined,
  });
}
