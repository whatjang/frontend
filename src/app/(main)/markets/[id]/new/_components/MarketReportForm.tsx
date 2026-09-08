"use client";

import type { FormEvent } from "react";
import { useRouter } from "next/navigation";

import useReportForm from "@/src/app/(main)/markets/[id]/_hooks/useReportForm";

import ReportRating from "@/src/app/(main)/markets/[id]/_components/report/ReportRating";
import ReportCategory from "@/src/app/(main)/markets/[id]/_components/report/ReportCategory";
import ReportContent from "@/src/app/(main)/markets/[id]/_components/report/ReportContent";
import ReportImageUpload from "@/src/app/(main)/markets/[id]/_components/report/image-upload/ReportImageUpload";
import ReportSubmitButton from "@/src/app/(main)/markets/[id]/_components/report/ReportSubmitButton";

interface MarketReportFormProps {
  marketId: number;
}

export default function MarketReportForm({ marketId }: MarketReportFormProps) {
  const router = useRouter();

  const {
    rating,
    setRating,
    category,
    setCategory,
    content,
    setContent,
    images,
    setImages,
  } = useReportForm();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (rating === 0) {
      alert("별점을 선택해주세요.");
      return;
    }

    if (!category) {
      alert("제보 카테고리를 선택해주세요.");
      return;
    }

    if (!content.trim()) {
      alert("제보 내용을 입력해주세요.");
      return;
    }

    alert("제보 등록이 완료되었습니다.");
    router.replace(`/markets/${marketId}`);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      <div className="flex flex-col gap-6 px-5">
        <ReportRating value={rating} onChange={setRating} />
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
