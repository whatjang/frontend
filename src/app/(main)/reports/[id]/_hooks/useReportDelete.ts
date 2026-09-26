"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";

import { deleteReport as deleteReportApi } from "@/src/lib/api/report/delete";

export default function useReportDelete(reportId: number) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => deleteReportApi(reportId),

    onSuccess: () => {
      queryClient.removeQueries({
        queryKey: ["report", "detail", reportId],
      });

      queryClient.invalidateQueries({
        queryKey: ["report", "feed"],
      });
    },
  });
}
