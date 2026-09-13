"use client";

import { useEffect, useRef } from "react";

import { AUTH_SKIP_PATHS } from "@/src/constants/auth";
import { renewAccessToken } from "@/src/lib/api/core/refresh";
import { getMyInfo } from "@/src/lib/api/member";
import { useAuthStore } from "@/src/stores/authStore";
import { useMemberStore } from "@/src/stores/memberStore";

export default function AuthInitializer() {
  const initializedRef = useRef(false);

  useEffect(() => {
    if (initializedRef.current) return;

    initializedRef.current = true;

    const initializeAuth = async () => {
      const { access_token, setInitialized } = useAuthStore.getState();
      const pathname = window.location.pathname;

      if (AUTH_SKIP_PATHS.includes(pathname)) {
        setInitialized(true);
        return;
      }

      try {
        if (!access_token) {
          await renewAccessToken();
        }

        const response = await getMyInfo();

        useMemberStore.getState().setMember(response.result);
      } catch (error) {
        console.error("인증 초기화 실패:", error);

        useAuthStore.getState().clearAuth();
        useMemberStore.getState().clearMember();
      } finally {
        setInitialized(true);
      }
    };

    void initializeAuth();
  }, []);

  return null;
}
