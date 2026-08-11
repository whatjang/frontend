import type { NicknameStatus } from "../../_hooks/useNickname";

type NicknameInputProps = {
  value: string;
  maxLength: number;
  status: NicknameStatus;
  onChange: (value: string) => void;
};

export default function NicknameInput({
  value,
  maxLength,
  status,
  onChange,
}: NicknameInputProps) {
  return (
    <>
      <label htmlFor="nickname" className="sr-only">
        닉네임
      </label>

      <input
        id="nickname"
        type="text"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="닉네임을 입력하세요"
        maxLength={maxLength}
        className={[
          "text-md h-14 w-full rounded-xl border bg-white px-4 font-semibold outline-none",
          "placeholder:text-deep-green",
          status === "default" && "border-light-gray",
          status === "success" && "border-green",
          status === "error" && "border-red",
        ]
          .filter(Boolean)
          .join(" ")}
      />
    </>
  );
}
