"use client";

import { useEffect, useRef } from "react";

import { AUTH_SKIP_PATHS } from "@/src/constants/auth";
import { renewAccessToken } from "@/src/lib/api/core/refresh";
import { useAuthStore } from "@/src/stores/authStore";

export default function AuthInitializer() {
  const initializedRef = useRef(false);

  useEffect(() => {
    if (initializedRef.current) return;

    initializedRef.current = true;

    const initializeAuth = async () => {
      const { accessToken, setInitialized } = useAuthStore.getState();

      const pathname = window.location.pathname;

      if (AUTH_SKIP_PATHS.includes(pathname)) {
        setInitialized(true);
        return;
      }

      if (accessToken) {
        setInitialized(true);
        return;
      }

      try {
        await renewAccessToken();
      } catch (error) {
        console.error("인증 초기화 실패:", error);
        useAuthStore.getState().clearAuth();
      } finally {
        useAuthStore.getState().setInitialized(true);
      }
    };

    void initializeAuth();
  }, []);

  return null;
}
