"use client";

import { useAuthStore } from "@/src/stores/authStore";
import { useMemberStore } from "@/src/stores/memberStore";

export default function HomeHeader() {
  const isInitialized = useAuthStore((state) => state.isInitialized);
  const nickname = useMemberStore((state) => state.member?.nickname);

  if (!isInitialized) {
    return (
      <header className="flex flex-col gap-1 px-5">
        <div className="bg-light-gray h-3 w-28 animate-pulse rounded" />
        <div className="bg-light-gray mt-1 h-12 w-56 animate-pulse rounded" />
      </header>
    );
  }

  return (
    <header className="flex flex-col gap-1 px-5">
      <p className="text-green text-xs font-bold">GANGWON PROVINCE</p>

      <h1 className="text-green text-lg font-bold">
        {nickname}님, <br />
        오늘은 어느 <span className="text-light-brown">전통 장터</span>로
        떠나볼까요?
      </h1>
    </header>
  );
}
