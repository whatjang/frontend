import { mockTourData } from "@/src/mocks/tour";

import TourContent from "./_components/TourContent";

export default function TourPage() {
  return (
    <main className="px-5">
      <TourContent data={mockTourData} />
    </main>
  );
}
