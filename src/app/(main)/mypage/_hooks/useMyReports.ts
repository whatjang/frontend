"use client";

import { useInfiniteQuery } from "@tanstack/react-query";

import { getMyReports } from "@/src/lib/api/report/myReports";

export function useMyReports() {
  return useInfiniteQuery({
    queryKey: ["report", "me"],

    queryFn: async ({ pageParam }) => {
      const response = await getMyReports(pageParam);

      return response.result;
    },

    initialPageParam: 0,

    getNextPageParam: (lastPage) =>
      lastPage.has_next ? lastPage.page + 1 : undefined,
  });
}
