import { Send } from "lucide-react";

export default function ReportSubmitButton() {
  return (
    <button
      type="submit"
      className={[
        "bg-green flex w-full py-3",
        "cursor-pointer items-center justify-center gap-2",
        "rounded-full text-base font-semibold text-white",
        "shadow-lg transition-opacity",
        "active:opacity-80",
      ].join(" ")}
    >
      <Send size={21} strokeWidth={2} />
      제보 등록하기
    </button>
  );
}
