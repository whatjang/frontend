"use client";

import { useMutation } from "@tanstack/react-query";

import {
  addReportBookmark,
  removeReportBookmark,
} from "@/src/lib/api/report/bookmark";

interface UpdateReportBookmarkParams {
  reportId: number;
  bookmarked: boolean;
}

export function useReportBookmark() {
  return useMutation({
    mutationFn: async ({
      reportId,
      bookmarked,
    }: UpdateReportBookmarkParams) => {
      const response = bookmarked
        ? await addReportBookmark(reportId)
        : await removeReportBookmark(reportId);

      return response.result;
    },
  });
}
