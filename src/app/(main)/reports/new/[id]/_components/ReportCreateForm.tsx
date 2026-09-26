"use client";

import { useRouter } from "next/navigation";
import type { FormEvent } from "react";

import { REPORT_CATEGORY_MAP } from "@/src/constants/report";

import useCreateReport from "../_hooks/useCreateReport";
import useReportForm from "../_hooks/useReportForm";
import { validateReportForm } from "../_utils/validateReportForm";
// import ReportImageUpload from "./image-upload/ReportImageUpload";
import ReportCategory from "./ReportCategory";
import ReportContent from "./ReportContent";
import ReportRating from "./ReportRating";
import ReportSubmitButton from "./ReportSubmitButton";

interface ReportCreateFormProps {
  marketId: number;
}

export default function ReportCreateForm({ marketId }: ReportCreateFormProps) {
  const router = useRouter();
  const createReportMutation = useCreateReport();

  const {
    rating,
    setRating,
    category,
    setCategory,
    content,
    setContent,
    images,
    // setImages,
  } = useReportForm();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const errorMessage = validateReportForm({
      rating,
      category,
      content,
      images,
    });

    if (errorMessage) {
      alert(errorMessage);
      return;
    }

    if (!category) return;

    try {
      await createReportMutation.mutateAsync({
        marketId,
        request: {
          rating,
          category: REPORT_CATEGORY_MAP[category],
          content: content.trim(),
        },
        images,
      });

      alert("제보 등록이 완료되었습니다.");

      router.replace(`/reports`);
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "제보 등록에 실패했습니다.";

      alert(message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      <div className="flex flex-col gap-6 px-5">
        <ReportRating value={rating} onChange={setRating} />

        <ReportCategory value={category} onChange={setCategory} />

        <ReportContent value={content} onChange={setContent} />
      </div>

      {/* S3 이미지 업로드 지원 후 활성화 */}
      {/* <ReportImageUpload images={images} onChange={setImages} /> */}

      <div className="px-5">
        <ReportSubmitButton isPending={createReportMutation.isPending} />
      </div>
    </form>
  );
}
