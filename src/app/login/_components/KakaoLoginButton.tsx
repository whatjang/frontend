"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function KakaoLoginButton() {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);

    const code = searchParams.get("code");
    const error = searchParams.get("error");
    const errorDescription = searchParams.get("error_description");

    if (error) {
      console.error("카카오 로그인 실패:", {
        error,
        errorDescription,
      });
      return;
    }

    if (!code) return;

    setIsLoading(true);

    console.log("카카오 인가 코드:", code);

    // 추후 백엔드 연동
    // await kakaoLogin(code);
    // router.replace("/home");
  }, []);

  const handleKakaoLogin = () => {
    const restApiKey = process.env.NEXT_PUBLIC_KAKAO_REST_API_KEY;

    if (!restApiKey) {
      console.error("카카오 REST API 키가 설정되지 않았습니다.");
      return;
    }

    const redirectUri = `${window.location.origin}/login`;

    const params = new URLSearchParams({
      client_id: restApiKey,
      redirect_uri: redirectUri,
      response_type: "code",
    });

    const authUrl = `https://kauth.kakao.com/oauth/authorize?${params.toString()}`;

    console.log("카카오 로그인 요청:", {
      redirectUri,
      authUrl,
    });

    setIsLoading(true);
    window.location.href = authUrl;
  };

  return (
    <button
      type="button"
      onClick={handleKakaoLogin}
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
