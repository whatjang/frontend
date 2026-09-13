"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

import { withdrawMember } from "@/src/lib/api/member";
import { useAuthStore } from "@/src/stores/authStore";

export function useWithdraw() {
  const [isWithdrawing, setIsWithdrawing] = useState(false);

  const router = useRouter();
  const clearAuth = useAuthStore((state) => state.clearAuth);

  const withdraw = async () => {
    try {
      setIsWithdrawing(true);

      await withdrawMember();

      clearAuth();

      alert("회원 탈퇴가 완료되었습니다.");

      router.replace("/");
    } catch (error) {
      console.error("회원 탈퇴 실패:", error);

      alert(
        error instanceof Error
          ? error.message
          : "회원 탈퇴 중 오류가 발생했습니다."
      );
    } finally {
      setIsWithdrawing(false);
    }
  };

  return {
    withdraw,
    isWithdrawing,
  };
}
