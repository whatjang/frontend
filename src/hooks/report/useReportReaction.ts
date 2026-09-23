"use client";

import {
  type InfiniteData,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";

import { updateReportReaction } from "@/src/lib/api/report/reaction";
import type {
  ReportDetailResult,
  ReportFeedResult,
  ReportReactionType,
} from "@/src/types/report";

interface UpdateReportReactionParams {
  reportId: number;
  reaction: ReportReactionType;
}

export function useReportReaction() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ reportId, reaction }: UpdateReportReactionParams) => {
      const response = await updateReportReaction(reportId, reaction);

      return response.result;
    },

    onSuccess: (result, { reportId }) => {
      queryClient.setQueryData<ReportDetailResult>(
        ["report", "detail", reportId],
        (previous) => {
          if (!previous) {
            return previous;
          }

          return {
            ...previous,
            helpful_count: result.helpful_count,
            incorrect_count: result.incorrect_count,
            my_reaction: result.my_reaction,
          };
        }
      );

      queryClient.setQueriesData<InfiniteData<ReportFeedResult>>(
        {
          queryKey: ["report-feed"],
        },
        (previous) => {
          if (!previous) {
            return previous;
          }

          return {
            ...previous,
            pages: previous.pages.map((page) => ({
              ...page,
              reports: page.reports.map((report) =>
                report.report_id === reportId
                  ? {
                      ...report,
                      helpful_count: result.helpful_count,
                      incorrect_count: result.incorrect_count,
                    }
                  : report
              ),
            })),
          };
        }
      );
    },
  });
}
