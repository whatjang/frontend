import { notFound } from "next/navigation";

import { ReportDetailContent } from "./_components/ReportDetailContent";

interface ReportDetailPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function ReportDetailPage({
  params,
}: ReportDetailPageProps) {
  const { id } = await params;
  const reportId = Number(id);

  if (!Number.isInteger(reportId) || reportId <= 0) {
    notFound();
  }

  return <ReportDetailContent reportId={reportId} />;
}
