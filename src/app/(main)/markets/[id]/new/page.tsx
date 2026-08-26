import { getMarketById } from "@/src/mocks/market";
import { notFound } from "next/navigation";
import MarketReportForm from "./_components/MarketReportForm";

export default async function MarketReportPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const market = getMarketById(Number(id));

  if (!market) {
    notFound();
  }

  return (
    <>
      <section className="flex flex-col gap-5">
        <div className="px-5">
          <div className="shadow-light-gray border-light-gray flex flex-col gap-1 rounded-2xl border bg-white p-4 shadow-xs">
            <p className="text-green text-md font-semibold">
              지금 {market.name}의 생생한 소식을 알려주세요!
            </p>

            <p className="text-deep-gray text-xs font-medium">
              당신의 소중한 제보가 다른 방문객들에게 큰 도움이 됩니다.
              <br />
              강원도의 정이 넘치는 시장 소식을 들려주세요.
            </p>
          </div>
        </div>

        <MarketReportForm marketId={market.id} />
      </section>
    </>
  );
}
