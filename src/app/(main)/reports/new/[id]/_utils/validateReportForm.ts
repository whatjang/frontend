import type { ReportFormValues } from "@/src/types/report";

type ReportValidationValues = Pick<
  ReportFormValues,
  "rating" | "category" | "content"
>;

export function validateReportForm({
  rating,
  category,
  content,
}: ReportValidationValues): string | null {
  if (rating === 0) {
    return "별점을 선택해주세요.";
  }

  if (!category) {
    return "제보 카테고리를 선택해주세요.";
  }

  if (!content.trim()) {
    return "제보 내용을 입력해주세요.";
  }

  return null;
}
