import {
  MAX_REPORT_IMAGE_SIZE,
  MAX_REPORT_IMAGES,
  REPORT_IMAGE_TYPES,
} from "@/src/constants/report";

export function validateReportImages(images: File[]): string | null {
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
