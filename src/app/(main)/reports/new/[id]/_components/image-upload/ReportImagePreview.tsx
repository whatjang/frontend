"use client";

import { X } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

interface ReportImagePreviewProps {
  file: File;
  index: number;
  onDelete: (index: number) => void;
}

export default function ReportImagePreview({
  file,
  index,
  onDelete,
}: ReportImagePreviewProps) {
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  useEffect(() => {
    const reader = new FileReader();

    reader.onload = () => {
      if (typeof reader.result === "string") {
        setPreviewUrl(reader.result);
      }
    };

    reader.readAsDataURL(file);

    return () => {
      if (reader.readyState === FileReader.LOADING) {
        reader.abort();
      }
    };
  }, [file]);

  return (
    <div className="relative size-23 shrink-0 overflow-hidden rounded-xl bg-gray-100">
      {previewUrl && (
        <Image
          src={previewUrl}
          alt={`제보 이미지 ${index + 1}`}
          fill
          unoptimized
          sizes="92px"
          className="object-cover"
        />
      )}

      <button
        type="button"
        aria-label={`${index + 1}번째 사진 삭제`}
        onClick={() => onDelete(index)}
        className={[
          "absolute top-1 right-1 z-10",
          "flex size-4 items-center justify-center",
          "cursor-pointer rounded-full",
          "bg-black/60 text-white",
        ].join(" ")}
      >
        <X aria-hidden="true" size={10} />
      </button>
    </div>
  );
}
