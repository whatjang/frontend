import { getReportById } from "../mocks/market";
import { getReportDetailMockById } from "../mocks/reportDetail";

import type { ReportDetail } from "../types/report";

export async function getReportDetail(
  reportId: number
): Promise<ReportDetail | undefined> {
  const result = getReportById(reportId);

  if (!result) {
    return undefined;
  }

  const { market, report } = result;

  const detail = getReportDetailMockById(reportId);

  return {
    id: report.id,
    createdAt: report.createdAt,
    tag: report.tag,
    rating: report.rating,
    content: report.content,
    imageUrl: report.imageUrl,
    author: {
      id: 0,
      nickname: report.author,
    },
    location: market.name,
    isBookmarked: detail?.isBookmarked ?? false,
    helpfulCount: detail?.helpfulCount ?? 0,
    commentCount: detail?.comments.length ?? 0,
    incorrectCount: detail?.incorrectCount ?? 0,
    comments: detail?.comments ?? [],
  };
}
