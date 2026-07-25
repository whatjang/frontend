"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

import styles from "./page.module.css";

export default function Home() {
  const router = useRouter();
  const redirectTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const redirectToLogin = useCallback(() => {
    if (redirectTimerRef.current) return;

    redirectTimerRef.current = setTimeout(() => {
      router.replace("/login");
    }, 2000);
  }, [router]);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    if (prefersReducedMotion.matches) {
      redirectToLogin();
    }

    return () => {
      if (redirectTimerRef.current) {
        clearTimeout(redirectTimerRef.current);
      }
    };
  }, [redirectToLogin]);

  return (
    <main
      className={`to-light-green relative flex min-h-dvh items-center justify-center overflow-hidden bg-linear-to-t from-white via-white ${styles.screen}`}
    >
      <div
        aria-hidden="true"
        className={`bg-green/30 absolute size-72 rounded-full blur-3xl ${styles.backgroundGlow}`}
      />

      <section className="relative z-10 flex items-center gap-4">
        <div className={`relative ${styles.logoContainer}`}>
          <div
            aria-hidden="true"
            className={`bg-green/30 absolute inset-3 rounded-full blur-xl ${styles.logoGlow}`}
          />

          <Image
            priority
            src="/images/common/logo.svg"
            width={90}
            height={120}
            alt="왓장 로고"
            className={`relative ${styles.logo}`}
          />
        </div>

        <div className={`flex flex-col gap-1 ${styles.textContainer}`}>
          <p className="text-green text-2xl font-extrabold tracking-tight">
            왓장
          </p>

          <p className="text-deep-gray text-xs font-semibold">
            강원 전통시장 · 장날 캘린더
          </p>

          <span
            aria-hidden="true"
            onAnimationEnd={redirectToLogin}
            className={`bg-green -mt-0.5 h-0.5 rounded-full ${styles.line}`}
          />
        </div>
      </section>
    </main>
  );
}
