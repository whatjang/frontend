"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";

import { deleteReportComment } from "@/src/lib/api/report/comment";

export default function useReportCommentDelete(reportId: number) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (commentId: number) => deleteReportComment(reportId, commentId),

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
