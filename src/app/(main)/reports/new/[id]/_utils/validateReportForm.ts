import {
  MAX_REPORT_CONTENT_LENGTH,
  MAX_REPORT_IMAGE_SIZE,
  MAX_REPORT_IMAGES,
  MAX_REPORT_RATING,
  REPORT_IMAGE_TYPES,
} from "@/src/constants/report";
import type { ReportFormValues } from "@/src/types/report";

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

  if (images.length > MAX_REPORT_IMAGES) {
    return `사진은 최대 ${MAX_REPORT_IMAGES}장까지 첨부할 수 있습니다.`;
  }

  const invalidTypeImage = images.find(
    (image) => !REPORT_IMAGE_TYPES.some((type) => type === image.type)
  );

  if (invalidTypeImage) {
    return "사진은 JPG, PNG, WebP 형식만 첨부할 수 있습니다.";
  }

  const oversizedImage = images.find(
    (image) => image.size > MAX_REPORT_IMAGE_SIZE
  );

  if (oversizedImage) {
    return "사진은 장당 최대 10MB까지 첨부할 수 있습니다.";
  }

  return null;
}
