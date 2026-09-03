"use client";

import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

import { loginWithKakao } from "@/src/lib/api/auth";
import { useAuthStore } from "@/src/stores/authStore";

const LOGIN_PATH = "/login";

function getRedirectUri() {
  return `${window.location.origin}${LOGIN_PATH}`;
}

function getKakaoAuthUrl(restApiKey: string) {
  const params = new URLSearchParams({
    client_id: restApiKey,
    redirect_uri: getRedirectUri(),
    response_type: "code",
  });

  return `https://kauth.kakao.com/oauth/authorize?${params.toString()}`;
}

export function useKakaoLogin() {
  const [isLoading, setIsLoading] = useState(false);
  const isLoginRequested = useRef(false);

  const router = useRouter();
  const setAuth = useAuthStore((state) => state.setAuth);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);

    const code = params.get("code");
    const error = params.get("error");
    const errorDescription = params.get("error_description");

    if (error) {
      alert(
        errorDescription
          ? `카카오 로그인에 실패했습니다.\n${errorDescription}`
          : "카카오 로그인에 실패했습니다."
      );

      return;
    }

    if (!code || isLoginRequested.current) return;

    isLoginRequested.current = true;

    const login = async () => {
      try {
        setIsLoading(true);

        const response = await loginWithKakao({
          code,
          redirectUri: getRedirectUri(),
        });

        const { memberId, accessToken } = response.result;

        setAuth(memberId, accessToken);

        window.history.replaceState({}, "", LOGIN_PATH);

        router.replace("/home");
      } catch (error) {
        console.error("카카오 로그인 실패:", error);

        alert(
          error instanceof Error
            ? error.message
            : "로그인 중 오류가 발생했습니다."
        );

        window.history.replaceState({}, "", LOGIN_PATH);

        isLoginRequested.current = false;
        setIsLoading(false);
      }
    };

    login();
  }, [router, setAuth]);

  const startKakaoLogin = () => {
    const restApiKey = process.env.NEXT_PUBLIC_KAKAO_REST_API_KEY;

    if (!restApiKey) {
      console.error("카카오 REST API 키가 설정되지 않았습니다.");
      alert("카카오 로그인 설정에 문제가 있습니다.");

      return;
    }

    setIsLoading(true);

    window.location.href = getKakaoAuthUrl(restApiKey);
  };

  return {
    isLoading,
    startKakaoLogin,
  };
}
