"use client";

import { useRouter } from "next/navigation";
import { type FormEvent, useState } from "react";

import useCompleteOnboarding from "../../_hooks/useCompleteOnboarding";
import useNickname from "../../_hooks/useNickname";
import SignupStepButtons from "../common/SignupStepButtons";
import NicknameCompleteModal from "./NicknameCompleteModal";
import NicknameInput from "./NicknameInput";
import NicknameMessage from "./NicknameMessage";

export default function NicknameForm() {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const {
    nickname,
    setNickname,
    nicknameStatus,
    isValidNickname,
    message,
    maxLength,
  } = useNickname();

  const { submitOnboarding, isSubmitting } = useCompleteOnboarding();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!isValidNickname || isSubmitting) return;

    try {
      await submitOnboarding(nickname);

      setIsModalOpen(true);
    } catch (error) {
      console.error("회원가입 완료 실패:", error);

      alert(
        error instanceof Error
          ? error.message
          : "회원가입 처리 중 오류가 발생했습니다."
      );
    }
  };

  const handleStart = () => {
    router.replace("/home");
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="flex flex-1 flex-col">
        <fieldset>
          <legend className="sr-only">닉네임 설정</legend>

          <NicknameInput
            value={nickname}
            maxLength={maxLength}
            status={nicknameStatus}
            onChange={setNickname}
          />

          <NicknameMessage status={nicknameStatus} message={message} />
        </fieldset>

        <SignupStepButtons
          prevHref="/signup/terms"
          nextLabel={isSubmitting ? "처리 중..." : "완료"}
          nextDisabled={!isValidNickname || isSubmitting}
        />
      </form>

      {isModalOpen && <NicknameCompleteModal onStart={handleStart} />}
    </>
  );
}
