import { Camera } from "lucide-react";
import type { ChangeEvent } from "react";

interface ReportImageUploadButtonProps {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export default function ReportImageUploadButton({
  onChange,
}: ReportImageUploadButtonProps) {
  return (
    <label
      htmlFor="report-image"
      className={[
        "border-light-gray flex size-23 shrink-0",
        "cursor-pointer flex-col items-center justify-center",
        "gap-2 rounded-xl border border-dashed bg-white",
      ].join(" ")}
    >
      <Camera
        aria-hidden="true"
        size={25}
        strokeWidth={1.7}
        className="text-deep-gray"
      />

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
