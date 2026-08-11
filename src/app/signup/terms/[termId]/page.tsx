import { notFound } from "next/navigation";

import TermsDetailList from "@/src/app/signup/_components/terms/detail/TermsDetailList";
import TermsDetailHeader from "@/src/app/signup/_components/terms/detail/TermsDetailHeader";
import { findTermById, TERMS } from "../../_data/terms";

type TermsDetailPageProps = {
  params: Promise<{
    termId: string;
  }>;
};

export function generateStaticParams() {
  return TERMS.map((term) => ({
    termId: term.id,
  }));
}

export default async function TermsDetailPage({
  params,
}: TermsDetailPageProps) {
  const { termId } = await params;
  const term = findTermById(termId);

  if (!term) {
    notFound();
  }

  return (
    <main className="to-signup-gradient-end flex min-h-dvh justify-center bg-linear-to-t from-white px-5">
      <div className="flex min-h-dvh w-full max-w-md flex-col">
        <TermsDetailHeader title={term.title} />
        <TermsDetailList content={term.content} />
      </div>
    </main>
  );
}
