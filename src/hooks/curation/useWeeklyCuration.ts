"use client";

import { useQuery } from "@tanstack/react-query";

import { getWeeklyCuration } from "@/src/lib/api/curation/weekly";

export function useWeeklyCuration() {
  return useQuery({
    queryKey: ["curation", "weekly"],
    queryFn: async () => {
      const response = await getWeeklyCuration();

      return response.result;
    },
  });
}
