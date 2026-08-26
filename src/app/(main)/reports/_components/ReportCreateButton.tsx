import Link from "next/link";
import { SquarePen } from "lucide-react";

export default function ReportCreateButton() {
  return (
    <div className="pointer-events-none fixed bottom-32 left-1/2 z-30 w-full max-w-md -translate-x-1/2 cursor-pointer px-6">
      <Link
        href="/reports/new"
        aria-label="현장 제보 작성"
        className="bg-green pointer-events-auto ml-auto flex size-10 items-center justify-center rounded-full text-white shadow-lg"
      >
        <SquarePen size={20} strokeWidth={2} />
      </Link>
    </div>
  );
}
