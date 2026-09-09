"use client";

import { Lightbulb } from "lucide-react";
import type { ChangeEvent } from "react";

import { MAX_REPORT_IMAGES } from "@/src/constants/report";

import ReportImagePreview from "./ReportImagePreview";
import ReportImageUploadButton from "./ReportImageUploadButton";

interface ReportImageUploadProps {
  images: File[];
  onChange: (images: File[]) => void;
}

export default function ReportImageUpload({
  images,
  onChange,
}: ReportImageUploadProps) {
  const canAddImage = images.length < MAX_REPORT_IMAGES;

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = Array.from(event.target.files ?? []);

    if (selectedFiles.length === 0) return;

    const remainingCount = MAX_REPORT_IMAGES - images.length;
    const filesToAdd = selectedFiles.slice(0, remainingCount);

    onChange([...images, ...filesToAdd]);

    event.currentTarget.value = "";
  };

  const handleDelete = (targetIndex: number) => {
    onChange(images.filter((_, index) => index !== targetIndex));
  };

  return (
    <div className="flex w-full flex-col gap-2">
      <ImageUploadHeader count={images.length} />

      <div className="scrollbar-none overflow-x-auto [&::-webkit-scrollbar]:hidden">
        <div className="flex w-max gap-3 px-5">
          {canAddImage && (
            <ReportImageUploadButton onChange={handleImageChange} />
          )}

          {images.map((file, index) => (
            <ReportImagePreview
              key={`${file.name}-${file.lastModified}-${file.size}-${index}`}
              file={file}
              index={index}
              onDelete={handleDelete}
            />
          ))}

          <ImageUploadTip />
        </div>
      </div>
    </div>
  );
}

function ImageUploadHeader({ count }: { count: number }) {
  return (
    <div className="flex items-center justify-between px-5">
      <p className="text-deep-gray text-sm font-semibold">
        사진 첨부{" "}
        <span className="text-gray text-xs">(최대 {MAX_REPORT_IMAGES}장)</span>
      </p>

      <p className="text-deep-gray text-xs font-medium">
        {count} / {MAX_REPORT_IMAGES}
      </p>
    </div>
  );
}

function ImageUploadTip() {
  return (
    <div
      className={[
        "flex min-h-23 min-w-45 shrink-0",
        "items-center gap-2 rounded-xl",
        "border-green/40 bg-light-green border px-4",
      ].join(" ")}
    >
      <Lightbulb
        aria-hidden="true"
        size={24}
        strokeWidth={1.8}
        className="text-green shrink-0"
      />

      <p className="text-green text-xs font-medium">
        선명한 현장 사진은
        <br />
        신뢰도를 높여줍니다.
      </p>
    </div>
  );
}
