"use client";

import type { FormEvent } from "react";
import { useRouter } from "next/navigation";

import useReportForm from "../_hooks/useReportForm";
import { validateReportForm } from "../_utils/validateReportForm";

import ReportCategory from "./ReportCategory";
import ReportContent from "./ReportContent";
import ReportImageUpload from "./image-upload/ReportImageUpload";
import ReportRating from "./ReportRating";
import ReportSubmitButton from "./ReportSubmitButton";

interface ReportCreateFormProps {
  marketId: number;
}

export default function ReportCreateForm({ marketId }: ReportCreateFormProps) {
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

    const errorMessage = validateReportForm({
      rating,
      category,
      content,
    });

    if (errorMessage) {
      alert(errorMessage);
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
