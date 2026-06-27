"use client";

import { useMemo } from "react";

import { useSignupForm } from "../_providers/SignupFormProvider";

const MIN_NICKNAME_LENGTH = 2;
const MAX_NICKNAME_LENGTH = 10;

export type NicknameStatus = "default" | "error" | "success";

export default function useNickname() {
  const { nickname, setNickname } = useSignupForm();

  const nicknameStatus = useMemo<NicknameStatus>(() => {
    if (!nickname) return "default";

    if (
      nickname.length < MIN_NICKNAME_LENGTH ||
      nickname.length > MAX_NICKNAME_LENGTH
    ) {
      return "error";
    }

    return "success";
  }, [nickname]);

  const isValidNickname = nicknameStatus === "success";

  const message = {
    default: "2~10자로 입력해 주세요.",
    error: "2~10자로 입력해 주세요.",
    success: "사용할 수 있는 닉네임이에요.",
  }[nicknameStatus];

  return {
    nickname,
    setNickname,
    nicknameStatus,
    isValidNickname,
    message,
    maxLength: MAX_NICKNAME_LENGTH,
  };
}
