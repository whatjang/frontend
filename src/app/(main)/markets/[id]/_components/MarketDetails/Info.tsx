import type { LucideIcon } from "lucide-react";
import { CalendarDays, ExternalLink, Phone, Store, Ticket } from "lucide-react";
import type { ReactNode } from "react";

import type { MarketDetailResult } from "@/src/types/market/index";

interface InfoProps {
  market: MarketDetailResult;
}

function formatDate(date: string) {
  return date.replaceAll("-", ".");
}

export default function Info({ market }: InfoProps) {
  return (
    <section className="flex flex-col gap-2 px-5">
      <h2 className="text-green text-lg font-bold">시장 정보</h2>

      <div className="border-light-gray flex flex-col divide-y rounded-3xl border bg-white px-4">
        <InfoRow
          icon={Store}
          label="점포 수"
          value={
            market.store_count !== null
              ? `${market.store_count.toLocaleString()}개`
              : "정보 없음"
          }
        />

        <InfoRow
          icon={CalendarDays}
          label="개설 주기"
          value={market.open_cycle || "정보 없음"}
        />

        <InfoRow
          icon={CalendarDays}
          label="개설 연도"
          value={
            market.opened_year !== null
              ? `${market.opened_year}년`
              : "정보 없음"
          }
        />

        <InfoRow
          icon={Phone}
          label="전화번호"
          value={
            market.phone ? (
              <a
                href={`tel:${market.phone}`}
                className="text-green font-semibold"
              >
                {market.phone}
              </a>
            ) : (
              "정보 없음"
            )
          }
        />

        <InfoRow
          icon={Ticket}
          label="사용 가능 상품권"
          value={
            market.vouchers.length > 0
              ? market.vouchers.join(", ")
              : "정보 없음"
          }
        />

        <InfoRow
          icon={ExternalLink}
          label="홈페이지"
          value={
            market.homepage ? (
              <a
                href={market.homepage}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${market.name} 홈페이지 새 창에서 열기`}
                className="text-green flex items-center gap-1 font-semibold"
              >
                바로가기
                <ExternalLink size={12} aria-hidden="true" />
              </a>
            ) : (
              "정보 없음"
            )
          }
        />
      </div>

      <p className="text-deep-gray text-right text-xs">
        데이터 기준일: {formatDate(market.data_reference_date)}
      </p>
    </section>
  );
}

interface InfoRowProps {
  icon: LucideIcon;
  label: string;
  value: ReactNode;
}

function InfoRow({ icon: Icon, label, value }: InfoRowProps) {
  return (
    <div className="flex items-center gap-2 py-3">
      <Icon
        size={18}
        strokeWidth={2}
        className="text-green shrink-0"
        aria-hidden="true"
      />

      <div className="flex min-w-0 flex-1 items-center justify-between gap-4">
        <span className="text-green shrink-0 text-xs font-semibold">
          {label}
        </span>

        <div className="min-w-0 text-right text-xs font-medium">{value}</div>
      </div>
    </div>
  );
}
