"use client";

import { useInfiniteQuery } from "@tanstack/react-query";

import { getMyBookmarkedReports } from "@/src/lib/api/report/myBookmarkedReports";

export function useMyBookmarkedReports() {
  return useInfiniteQuery({
    queryKey: ["report", "me", "bookmarks"],

    queryFn: async ({ pageParam }) => {
      const response = await getMyBookmarkedReports(pageParam);

      return response.result;
    },

    initialPageParam: 0,

    getNextPageParam: (lastPage) =>
      lastPage.has_next ? lastPage.page + 1 : undefined,
  });
}
