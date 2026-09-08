import { useState } from "react";

import type { ReportFormInitialValues, ReportTag } from "@/src/types/report";

export default function useReportForm({
  rating: initialRating = 0,
  category: initialCategory = null,
  content: initialContent = "",
  images: initialImages = [],
}: ReportFormInitialValues = {}) {
  const [rating, setRating] = useState(initialRating);
  const [category, setCategory] = useState<ReportTag | null>(initialCategory);
  const [content, setContent] = useState(initialContent);
  const [images, setImages] = useState<File[]>(initialImages);

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
