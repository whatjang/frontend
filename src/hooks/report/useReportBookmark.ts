"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";

import {
  addReportBookmark,
  removeReportBookmark,
} from "@/src/lib/api/report/bookmark";
import type { ReportDetailResult } from "@/src/types/report";

interface ToggleBookmarkParams {
  reportId: number;
  isBookmarked: boolean;
}

export function useReportBookmark() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ reportId, isBookmarked }: ToggleBookmarkParams) =>
      isBookmarked
        ? removeReportBookmark(reportId)
        : addReportBookmark(reportId),

    onSuccess: (response, { reportId }) => {
      queryClient.setQueryData<ReportDetailResult>(
        ["report", "detail", reportId],
        (report) =>
          report
            ? {
                ...report,
                bookmarked: response.result.bookmarked,
              }
            : report
      );

      queryClient.invalidateQueries({
        queryKey: ["report", "feed"],
      });
    },
  });
}
