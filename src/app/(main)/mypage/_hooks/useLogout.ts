"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

import { logoutUser } from "@/src/lib/api/auth";
import { useAuthStore } from "@/src/stores/authStore";

export function useLogout() {
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  const router = useRouter();
  const clearAuth = useAuthStore((state) => state.clearAuth);

  const logout = async () => {
    try {
      setIsLoggingOut(true);

      await logoutUser();

      clearAuth();
      router.replace("/");
    } catch (error) {
      console.error("로그아웃 실패:", error);

      alert(
        error instanceof Error
          ? error.message
          : "로그아웃 중 오류가 발생했습니다."
      );
    } finally {
      setIsLoggingOut(false);
    }
  };

  return {
    logout,
    isLoggingOut,
  };
}
