"use client";

import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

type TermsDetailHeaderProps = {
  title: string;
};

export default function TermsDetailHeader({ title }: TermsDetailHeaderProps) {
  const router = useRouter();

  return (
    <header className="relative flex h-16 items-center justify-center">
      <button
        type="button"
        aria-label="뒤로 가기"
        onClick={() => router.back()}
        className="absolute left-0 flex cursor-pointer items-center justify-center"
      >
        <ArrowLeft size={24} className="text-black" />
      </button>

      <h1 className="text-green text-md truncate text-center font-bold">
        {title}
      </h1>
    </header>
  );
}
