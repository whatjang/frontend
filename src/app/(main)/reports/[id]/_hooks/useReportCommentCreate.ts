"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";

import { createReportComment } from "@/src/lib/api/report/comment";
import type { CreateReportCommentRequest } from "@/src/types/report";

export default function useReportCommentCreate(reportId: number) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (request: CreateReportCommentRequest) =>
      createReportComment(reportId, request),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["report", "detail", reportId],
      });

      queryClient.invalidateQueries({
        queryKey: ["report", "feed"],
      });
    },
  });
}
