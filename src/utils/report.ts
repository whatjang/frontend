import { REPORT_CATEGORY_LABEL_MAP } from "@/src/constants/report";
import type { ReportFeedItem } from "@/src/types/report";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export function getReportImageUrl(imageUrl: string | null | undefined) {
  if (!imageUrl) return null;

  if (imageUrl.startsWith("http://") || imageUrl.startsWith("https://")) {
    return imageUrl;
  }

  if (!API_BASE_URL) {
    return imageUrl;
  }

  return new URL(imageUrl, API_BASE_URL).toString();
}

export function toReportCardData(report: ReportFeedItem) {
  return {
    id: report.report_id,
    createdAt: report.created_at.slice(0, 10),
    tag: REPORT_CATEGORY_LABEL_MAP[report.category],
    rating: report.rating,
    content: report.content,
    imageUrls: report.image_urls,
  };
}
