"use client";

import { useMutation } from "@tanstack/react-query";

import { updateReportReaction } from "@/src/lib/api/report/reaction";
import type { ReportReactionType } from "@/src/types/report";

interface UpdateReportReactionParams {
  reportId: number;
  reaction: ReportReactionType;
}

export function useReportReaction() {
  return useMutation({
    mutationFn: async ({ reportId, reaction }: UpdateReportReactionParams) => {
      const response = await updateReportReaction(reportId, reaction);

      return response.result;
    },
  });
}
