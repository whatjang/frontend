"use client";

interface ReportContentProps {
  value: string;
  onChange: (value: string) => void;
}

export default function ReportContent({ value, onChange }: ReportContentProps) {
  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor="report-content"
        className="text-deep-gray text-sm font-semibold"
      >
        제보 내용
      </label>

      <textarea
        id="report-content"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="시장의 현재 상황을 상세히 적어주세요. (예: 지금 호떡집 대기 줄이 짧아요!)"
        className={[
          "border-light-gray min-h-38.5 w-full resize-none",
          "rounded-xl border bg-white p-3",
          "text-deep-gray text-sm",
          "placeholder:text-gray",
          "focus:border-green focus:outline-none",
        ].join(" ")}
      />
    </div>
  );
}
