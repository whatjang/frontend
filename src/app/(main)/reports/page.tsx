import SearchBar from "@/src/components/search/SearchBar";
import ReportsContent from "./_components/ReportsContent";
import { markets } from "@/src/mocks/market";

export default function ReportsPage() {
  return (
    <main className="flex flex-col gap-6">
      <div className="px-5">
        <SearchBar />
      </div>

      <ReportsContent markets={markets} />
    </main>
  );
}
