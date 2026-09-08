"use client";

import { type FormEvent } from "react";
import { useRouter } from "next/navigation";

import SignupStepButtons from "../common/SignupStepButtons";
import TermsAgreementList from "./TermsAgreementList";
import { useSignupForm } from "../../_providers/SignupFormProvider";

type TermsFormProps = {
  nextHref: string;
};

export default function TermsForm({ nextHref }: TermsFormProps) {
  const router = useRouter();

  const {
    checkedTerms,
    isAllChecked,
    isRequiredChecked,
    handleToggleAll,
    handleToggleTerm,
  } = useSignupForm();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!isRequiredChecked) return;

    router.push(nextHref);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-1 flex-col">
      <TermsAgreementList
        checkedTerms={checkedTerms}
        isAllChecked={isAllChecked}
        onToggleAll={handleToggleAll}
        onToggleTerm={handleToggleTerm}
      />

      <SignupStepButtons prevHref="/login" nextDisabled={!isRequiredChecked} />
    </form>
  );
}
