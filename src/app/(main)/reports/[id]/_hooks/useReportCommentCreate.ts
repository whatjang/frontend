"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";

import { createReportComment } from "@/src/lib/api/report/comment";
import type { CreateReportCommentRequest } from "@/src/types/report";

interface CreateCommentParams {
  reportId: number;
  request: CreateReportCommentRequest;
}

export default function useReportCommentCreate() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ reportId, request }: CreateCommentParams) =>
      createReportComment(reportId, request),

    onSuccess: (_, { reportId }) => {
      queryClient.invalidateQueries({
        queryKey: ["report", "detail", reportId],
      });

      queryClient.invalidateQueries({
        queryKey: ["report", "feed"],
      });
    },
  });
}
