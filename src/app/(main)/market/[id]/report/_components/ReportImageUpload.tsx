"use client";

import { Camera, Lightbulb, X } from "lucide-react";
import { ChangeEvent, useEffect, useState } from "react";

interface ReportImageUploadProps {
  images: File[];
  onChange: (images: File[]) => void;
}

interface ImageUploadButtonProps {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

interface ImagePreviewProps {
  src: string;
  index: number;
  onDelete: (index: number) => void;
}

const MAX_IMAGES = 3;

export default function ReportImageUpload({
  images,
  onChange,
}: ReportImageUploadProps) {
  const [previewUrls, setPreviewUrls] = useState<string[]>([]);

  const canAddImage = images.length < MAX_IMAGES;

  useEffect(() => {
    const urls = images.map((image) => URL.createObjectURL(image));

    setPreviewUrls(urls);

    return () => {
      urls.forEach((url) => {
        URL.revokeObjectURL(url);
      });
    };
  }, [images]);

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = Array.from(event.target.files ?? []);

    if (selectedFiles.length === 0) return;

    const remainingCount = MAX_IMAGES - images.length;

    const filesToAdd = selectedFiles.slice(0, remainingCount);

    onChange([...images, ...filesToAdd]);

    // 같은 이미지를 다시 선택해도 onChange가 발생하도록 초기화
    event.target.value = "";
  };

  const handleDelete = (targetIndex: number) => {
    const nextImages = images.filter((_, index) => index !== targetIndex);

    onChange(nextImages);
  };

  return (
    <div className="flex w-full flex-col gap-2">
      <ImageUploadHeader count={images.length} />

      <div className="scrollbar-none overflow-x-auto [&::-webkit-scrollbar]:hidden">
        <div className="flex w-max gap-3 px-5">
          {canAddImage && <ImageUploadButton onChange={handleImageChange} />}

          {previewUrls.map((url, index) => {
            const file = images[index];

            if (!file) return null;

            return (
              <ImagePreview
                key={`${file.name}-${file.lastModified}-${index}`}
                src={url}
                index={index}
                onDelete={handleDelete}
              />
            );
          })}

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
        <span className="text-gray text-xs">(최대 {MAX_IMAGES}장)</span>
      </p>

      <p className="text-deep-gray text-xs font-medium">
        {count} / {MAX_IMAGES}
      </p>
    </div>
  );
}

function ImageUploadButton({ onChange }: ImageUploadButtonProps) {
  return (
    <label
      htmlFor="report-image"
      className={[
        "border-light-gray flex size-23 shrink-0",
        "cursor-pointer flex-col items-center justify-center",
        "gap-2 rounded-xl border border-dashed bg-white",
      ].join(" ")}
    >
      <Camera size={25} strokeWidth={1.7} className="text-deep-gray" />

      <span className="text-deep-gray text-xs font-medium">사진 추가</span>

      <input
        id="report-image"
        type="file"
        accept="image/*"
        multiple
        onChange={onChange}
        className="hidden"
      />
    </label>
  );
}

function ImagePreview({ src, index, onDelete }: ImagePreviewProps) {
  return (
    <div className="relative size-23 shrink-0 overflow-hidden rounded-xl">
      <img
        src={src}
        alt={`제보 이미지 ${index + 1}`}
        className="size-full object-cover"
      />

      <button
        type="button"
        aria-label={`${index + 1}번째 사진 삭제`}
        onClick={() => onDelete(index)}
        className={[
          "absolute top-1 right-1",
          "flex size-4 items-center justify-center",
          "cursor-pointer rounded-full",
          "bg-black/60 text-white",
        ].join(" ")}
      >
        <X size={10} />
      </button>
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
      <Lightbulb size={24} strokeWidth={1.8} className="text-green shrink-0" />

      <p className="text-green text-xs font-medium">
        선명한 현장 사진은
        <br />
        신뢰도를 높여줍니다.
      </p>
    </div>
  );
}
