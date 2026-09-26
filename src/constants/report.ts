export const REPORT_TAGS = [
  "혼잡도",
  "운영 여부",
  "새로운 먹거리",
  "이벤트/축제",
  "기타",
] as const;

export const REPORT_CATEGORY_MAP = {
  혼잡도: "CROWD",
  "운영 여부": "OPERATION",
  "새로운 먹거리": "NEW_FOOD",
  "이벤트/축제": "EVENT_FESTIVAL",
  기타: "OTHER",
} as const;

export const MAX_REPORT_IMAGES = 3;

export const MAX_REPORT_RATING = 5;

export const MAX_REPORT_CONTENT_LENGTH = 1000;

export const MAX_REPORT_IMAGE_SIZE = 10 * 1024 * 1024;

export const REPORT_IMAGE_TYPES = [
  "image/jpeg",
  "image/png",
  "image/webp",
] as const;
