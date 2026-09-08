import { useSignupForm } from "../_providers/SignupFormProvider";

const MIN_NICKNAME_LENGTH = 2;
const MAX_NICKNAME_LENGTH = 10;

export type NicknameStatus = "default" | "error" | "success";

const NICKNAME_MESSAGE: Record<NicknameStatus, string> = {
  default: "2~10자로 입력해 주세요.",
  error: "2~10자로 입력해 주세요.",
  success: "사용할 수 있는 닉네임이에요.",
};

const getNicknameStatus = (nickname: string): NicknameStatus => {
  if (!nickname) return "default";

  if (
    nickname.length < MIN_NICKNAME_LENGTH ||
    nickname.length > MAX_NICKNAME_LENGTH
  ) {
    return "error";
  }

  return "success";
};

export default function useNickname() {
  const { nickname, setNickname } = useSignupForm();

  const nicknameStatus = getNicknameStatus(nickname);
  const isValidNickname = nicknameStatus === "success";

  return {
    nickname,
    setNickname,
    nicknameStatus,
    isValidNickname,
    message: NICKNAME_MESSAGE[nicknameStatus],
    maxLength: MAX_NICKNAME_LENGTH,
  };
}
