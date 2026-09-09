"use client";

import { useRouter } from "next/navigation";
import { type FormEvent, useState } from "react";

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

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!isValidNickname) return;

    setIsModalOpen(true);
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
          nextLabel="완료"
          nextDisabled={!isValidNickname}
        />
      </form>

      {isModalOpen && <NicknameCompleteModal onStart={handleStart} />}
    </>
  );
}
