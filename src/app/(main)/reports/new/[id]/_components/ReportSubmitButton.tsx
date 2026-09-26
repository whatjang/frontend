import { Send } from "lucide-react";

interface ReportSubmitButtonProps {
  isPending: boolean;
}

export default function ReportSubmitButton({
  isPending,
}: ReportSubmitButtonProps) {
  return (
    <button
      type="submit"
      disabled={isPending}
      className={[
        "bg-green flex w-full py-3",
        "items-center justify-center gap-2",
        "rounded-full text-base font-semibold text-white",
        "shadow-lg transition-opacity",
        "disabled:cursor-not-allowed disabled:opacity-60",
        !isPending ? "cursor-pointer active:opacity-80" : "",
      ].join(" ")}
    >
      <Send size={21} strokeWidth={2} aria-hidden="true" />

      {isPending ? "등록 중..." : "제보 등록하기"}
    </button>
  );
}
