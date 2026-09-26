import {
  MAX_REPORT_CONTENT_LENGTH,
  MAX_REPORT_RATING,
} from "@/src/constants/report";
import type { ReportFormValues } from "@/src/types/report";

import { validateReportImages } from "./validateReportImages";

export function validateReportForm({
  rating,
  category,
  content,
  images,
}: ReportFormValues): string | null {
  if (!Number.isInteger(rating) || rating < 1 || rating > MAX_REPORT_RATING) {
    return "별점을 선택해주세요.";
  }

  if (!category) {
    return "제보 카테고리를 선택해주세요.";
  }

  const trimmedContent = content.trim();

  if (!trimmedContent) {
    return "제보 내용을 입력해주세요.";
  }

  if (trimmedContent.length > MAX_REPORT_CONTENT_LENGTH) {
    return `제보 내용은 ${MAX_REPORT_CONTENT_LENGTH}자 이하로 입력해주세요.`;
  }

  return validateReportImages(images);
}
