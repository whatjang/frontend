"use client";

import { useSignupForm } from "../_providers/SignupFormProvider";

export default function useTermsAgreement() {
  const {
    checkedTerms,
    isAllChecked,
    isRequiredChecked,
    handleToggleAll,
    handleToggleTerm,
  } = useSignupForm();

  return {
    checkedTerms,
    isAllChecked,
    isRequiredChecked,
    handleToggleAll,
    handleToggleTerm,
  };
}
