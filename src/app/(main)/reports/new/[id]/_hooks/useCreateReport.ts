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

    onSuccess: async () => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: ["report", "feed"],
          refetchType: "all",
        }),

        queryClient.invalidateQueries({
          queryKey: ["report", "me"],
        }),
      ]);
    },
  });
}
