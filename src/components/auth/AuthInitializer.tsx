"use client";

import { useEffect, useRef } from "react";

import { refreshAccessToken } from "@/src/lib/api/auth";
import { useAuthStore } from "@/src/stores/authStore";

export default function AuthInitializer() {
  const initializedRef = useRef(false);

  useEffect(() => {
    if (initializedRef.current) return;

    initializedRef.current = true;

    const initializeAuth = async () => {
      const { accessToken, setAccessToken, setInitialized } =
        useAuthStore.getState();

      if (window.location.pathname === "/login") {
        setInitialized(true);
        return;
      }

      if (accessToken) {
        setInitialized(true);
        return;
      }

      try {
        const response = await refreshAccessToken();

        setAccessToken(response.result.accessToken);
      } catch (error) {
        console.error("인증 초기화 실패:", error);

        // refreshToken 쿠키 이슈 해결 후 인증 실패 시 상태 초기화
        // useAuthStore.getState().clearAuth();
      } finally {
        useAuthStore.getState().setInitialized(true);
      }
    };

    void initializeAuth();
  }, []);

  return null;
}
