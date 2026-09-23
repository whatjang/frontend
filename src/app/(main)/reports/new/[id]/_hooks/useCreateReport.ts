"use client";

import { useMutation } from "@tanstack/react-query";

import {
  createReport,
  type CreateReportParams,
} from "@/src/lib/api/report/create";

export default function useCreateReport() {
  return useMutation({
    mutationFn: (params: CreateReportParams) => createReport(params),
  });
}
