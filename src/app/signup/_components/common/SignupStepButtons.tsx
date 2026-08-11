import Link from "next/link";

type SignupStepButtonsProps = {
  prevHref: string;
  nextLabel?: string;
  prevLabel?: string;
  nextDisabled?: boolean;
};

export default function SignupStepButtons({
  prevHref,
  nextLabel = "다음",
  prevLabel = "이전",
  nextDisabled = false,
}: SignupStepButtonsProps) {
  return (
    <footer className="text-md mt-auto mb-12 flex h-14 w-full gap-3 font-semibold">
      <Link
        href={prevHref}
        className="border-green text-green flex flex-1 items-center justify-center rounded-xl border"
      >
        {prevLabel}
      </Link>

      <button
        type="submit"
        disabled={nextDisabled}
        className="bg-green disabled:text-deep-gray disabled:bg-light-gray flex-1 cursor-pointer rounded-xl text-white"
      >
        {nextLabel}
      </button>
    </footer>
  );
}
