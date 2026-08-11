"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

import ReportCategory from "./ReportCategory";
import ReportContent from "./ReportContent";
import ReportImageUpload from "./ReportImageUpload";
import ReportSubmitButton from "./ReportSubmitButton";

export type ReportCategoryType =
  "혼잡도" | "운영 여부" | "새로운 먹거리" | "이벤트/축제" | "기타";

interface MarketReportFormProps {
  marketId: number;
}

export default function MarketReportForm({ marketId }: MarketReportFormProps) {
  const router = useRouter();

  const [category, setCategory] = useState<ReportCategoryType | null>(null);
  const [content, setContent] = useState("");
  const [images, setImages] = useState<File[]>([]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!category) {
      alert("제보 카테고리를 선택해주세요.");
      return;
    }

    if (!content.trim()) {
      alert("제보 내용을 입력해주세요.");
      return;
    }

    alert("제보 등록이 완료되었습니다.");
    router.push(`/market/${marketId}`);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      <div className="flex flex-col gap-6 px-5">
        <ReportCategory value={category} onChange={setCategory} />
        <ReportContent value={content} onChange={setContent} />
      </div>
      <ReportImageUpload images={images} onChange={setImages} />
      <div className="px-5">
        <ReportSubmitButton />
      </div>
    </form>
  );
}
