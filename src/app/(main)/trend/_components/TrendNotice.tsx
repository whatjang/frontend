import { InfoIcon } from "lucide-react";

export default function TrendNotice() {
  return (
    <section className="border-green/30 border-l-green bg-light-green flex gap-2.5 rounded-r-lg border border-l-2 px-3 py-3">
      <InfoIcon className="text-green mt-0.5 h-3.5 w-3.5 shrink-0" />

      <p className="text-green text-xs font-medium">
        강원도의 트렌드 큐레이션은 <strong>실시간 검색 데이터</strong>와{" "}
        <strong>소셜 미디어 방문자 리뷰 데이터</strong>를 다각적으로 분석하여
        도출됩니다.
      </p>
    </section>
  );
}
