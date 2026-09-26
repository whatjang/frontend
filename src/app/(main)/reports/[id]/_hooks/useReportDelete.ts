"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";

import { deleteReport } from "@/src/lib/api/report/delete";

export default function useReportDelete() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (reportId: number) => deleteReport(reportId),

    onSuccess: (_, reportId) => {
      queryClient.removeQueries({
        queryKey: ["report", "detail", reportId],
      });

      queryClient.invalidateQueries({
        queryKey: ["report", "feed"],
      });
    },
  });
}
