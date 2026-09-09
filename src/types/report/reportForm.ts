import type { ReportTag } from "./report";

export interface ReportFormValues {
  rating: number;
  category: ReportTag | null;
  content: string;
  images: File[];
}

export type ReportFormInitialValues = Partial<ReportFormValues>;
