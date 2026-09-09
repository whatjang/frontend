import { notFound } from "next/navigation";

import { getMarketById } from "@/src/mocks/market";

import ReportCreateForm from "./_components/ReportCreateForm";

interface ReportCreatePageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function ReportCreatePage({
  params,
}: ReportCreatePageProps) {
  const { id } = await params;

  const marketId = Number(id);

  if (!Number.isInteger(marketId)) {
    notFound();
  }

  const market = getMarketById(marketId);

  if (!market) {
    notFound();
  }

  return (
    <main className="flex flex-col gap-5">
      <section className="px-5">
        <div className="shadow-light-gray border-light-gray flex flex-col gap-1 rounded-2xl border bg-white p-4 shadow-xs">
          <h1 className="text-green text-md font-semibold">
            지금 {market.name}의 생생한 소식을 알려주세요!
          </h1>

          <p className="text-deep-gray text-xs font-medium">
            당신의 소중한 제보가 다른 방문객들에게 큰 도움이 됩니다.
            <br />
            강원도의 정이 넘치는 시장 소식을 들려주세요.
          </p>
        </div>
      </section>

      <ReportCreateForm marketId={market.id} />
    </main>
  );
}
