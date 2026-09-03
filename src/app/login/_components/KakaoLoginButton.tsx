"use client";

import Image from "next/image";

import { useKakaoLogin } from "@/src/app/login/_hooks/useKakaoLogin";

export default function KakaoLoginButton() {
  const { isLoading, startKakaoLogin } = useKakaoLogin();

  return (
    <button
      type="button"
      onClick={startKakaoLogin}
      disabled={isLoading}
      className="bg-yellow flex w-full cursor-pointer items-center justify-center gap-3 rounded-2xl py-4 disabled:cursor-not-allowed disabled:opacity-70"
    >
      {!isLoading && (
        <span className="relative size-4.5">
          <Image
            src="/images/login/kakao-logo.svg"
            alt="카카오 로고"
            fill
            sizes="18px"
            className="object-contain"
          />
        </span>
      )}

      <p className="text-brown text-4 font-semibold">
        {isLoading ? "로그인 중..." : "카카오로 시작하기"}
      </p>
    </button>
  );
}
