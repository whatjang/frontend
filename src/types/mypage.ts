import type { ReportSummary } from "./report";

export interface BookmarkedReport extends ReportSummary {
  marketId: number;
  marketName: string;
}
