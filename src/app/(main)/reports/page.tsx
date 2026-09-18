import SearchBar from "@/src/components/search/SearchBar";
import { mockMarketReports } from "@/src/mocks/marketReports";

import ReportCreateButton from "./_components/ReportCreateButton";
import ReportsContent from "./_components/ReportsContent";

export default function ReportsPage() {
  return (
    <main className="flex flex-col gap-6">
      <div className="px-5">
        <SearchBar />
      </div>

      <ReportsContent reports={mockMarketReports} />

      <ReportCreateButton />
    </main>
  );
}
