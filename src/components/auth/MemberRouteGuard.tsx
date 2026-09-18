"use client";

import { usePathname, useRouter } from "next/navigation";
import { type ReactNode, useEffect } from "react";

import { AUTH_SKIP_PATHS, SIGNUP_PATHS } from "@/src/constants/auth";
import { useAuthStore } from "@/src/stores/authStore";
import { useMemberStore } from "@/src/stores/memberStore";

interface MemberRouteGuardProps {
  children: ReactNode;
}

export default function MemberRouteGuard({ children }: MemberRouteGuardProps) {
  const router = useRouter();
  const pathname = usePathname();

  const isInitialized = useAuthStore((state) => state.isInitialized);
  const member = useMemberStore((state) => state.member);

  useEffect(() => {
    if (!isInitialized) return;

    if (AUTH_SKIP_PATHS.includes(pathname)) {
      return;
    }

    if (!member) {
      router.replace("/login");
      return;
    }

    const isSignupPath = SIGNUP_PATHS.some(
      (signupPath) =>
        pathname === signupPath || pathname.startsWith(`${signupPath}/`)
    );

    if (member.signup_status === "PENDING") {
      if (!isSignupPath) {
        router.replace("/signup/terms");
      }

      return;
    }

    if (member.signup_status === "COMPLETED" && isSignupPath) {
      router.replace("/home");
    }
  }, [isInitialized, member, pathname, router]);

  if (!isInitialized) {
    return null;
  }

  return children;
}
