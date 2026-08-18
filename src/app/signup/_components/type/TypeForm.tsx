"use client";

import { useRouter } from "next/navigation";

import SignupStepButtons from "../common/SignupStepButtons";
import { USER_TYPES } from "../../_data/type";
import { useSignupForm } from "../../_providers/SignupFormProvider";

export default function TypeForm() {
  const router = useRouter();
  const { userType, setUserType } = useSignupForm();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!userType) return;

    router.push("/signup/nickname");
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-1 flex-col">
      <fieldset className="flex flex-col gap-3">
        <legend className="sr-only">회원 유형 선택</legend>

        {USER_TYPES.map(({ type, title, description }) => {
          const isSelected = userType === type;

          return (
            <label
              key={type}
              className={[
                "flex cursor-pointer items-center rounded-xl border bg-white p-4",
                isSelected ? "border-green" : "border-light-gray",
              ].join(" ")}
            >
              <input
                type="radio"
                name="userType"
                value={type}
                checked={isSelected}
                onChange={() => setUserType(type)}
                className="sr-only"
              />

              <div className="flex flex-1 flex-col gap-0.5">
                <span className="text-base font-semibold">{title}</span>
                <span className="text-deep-gray text-sm">{description}</span>
              </div>

              <span
                className={[
                  "size-3 rounded-full border-2",
                  isSelected ? "border-green bg-green" : "border-light-gray",
                ].join(" ")}
              />
            </label>
          );
        })}
      </fieldset>

      <SignupStepButtons prevHref="/signup/terms" nextDisabled={!userType} />
    </form>
  );
}
