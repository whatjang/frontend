import { useState } from "react";

import type { ReportTag } from "@/src/types/report";

export default function useReportForm() {
  const [rating, setRating] = useState(0);
  const [category, setCategory] = useState<ReportTag | null>(null);
  const [content, setContent] = useState("");
  const [images, setImages] = useState<File[]>([]);

  return {
    rating,
    setRating,
    category,
    setCategory,
    content,
    setContent,
    images,
    setImages,
  };
}
