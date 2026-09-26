import ReportCreateButton from "./_components/ReportCreateButton";
import ReportsContent from "./_components/ReportsContent";

export default function ReportsPage() {
  return (
    <main className="flex flex-col gap-6">
      <ReportsContent />

      <ReportCreateButton />
    </main>
  );
}
