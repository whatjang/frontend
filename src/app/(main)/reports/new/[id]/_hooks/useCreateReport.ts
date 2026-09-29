"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";

import {
  createReport,
  type CreateReportParams,
} from "@/src/lib/api/report/create";

export default function useCreateReport() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (params: CreateReportParams) => createReport(params),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["report", "me"],
      });

      queryClient.invalidateQueries({
        queryKey: ["report", "feed"],
      });
    },
  });
}
