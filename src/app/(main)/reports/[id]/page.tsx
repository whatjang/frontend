import { notFound } from "next/navigation";

import { getReportDetail } from "@/src/services/report";

import { ReportCard } from "./_components/ReportCard";
import { ReportInteractionSection } from "./_components/ReportInteractionSection";

interface ReportDetailPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function ReportDetailPage({
  params,
}: ReportDetailPageProps) {
  const { id } = await params;

  const report = await getReportDetail(Number(id));

  if (!report) {
    notFound();
  }

  return (
    <main className="flex flex-col gap-6">
      <ReportCard report={report} />

      <ReportInteractionSection
        helpfulCount={report.helpfulCount}
        commentCount={report.commentCount}
        incorrectCount={report.incorrectCount}
        comments={report.comments}
      />
    </main>
  );
}
