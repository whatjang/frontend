"use client";

import { type FormEvent } from "react";
import { useRouter } from "next/navigation";

import SignupStepButtons from "../common/SignupStepButtons";
import useTermsAgreement from "../../_hooks/useTermsAgreement";
import TermsAgreementList from "./TermsAgreementList";

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
  } = useTermsAgreement();

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
