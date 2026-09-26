"use client";

import { useQuery } from "@tanstack/react-query";

import { getReportDetail } from "@/src/lib/api/report/detail";

export default function useReportDetail(reportId: number) {
  return useQuery({
    queryKey: ["report", "detail", reportId],

    queryFn: async () => {
      const response = await getReportDetail(reportId);

      return response.result;
    },

    enabled: reportId > 0,
  });
}
