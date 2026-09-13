"use client";

import { useState } from "react";

import { completeOnboarding } from "@/src/lib/api/member";
import { useMemberStore } from "@/src/stores/memberStore";

import { TERMS } from "../_data/terms";
import { useSignupForm } from "../_providers/SignupFormProvider";

export default function useCompleteOnboarding() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const setMember = useMemberStore((state) => state.setMember);

  const { checkedTerms } = useSignupForm();

  const submitOnboarding = async (nickname: string) => {
    const consents = TERMS.filter((term) => checkedTerms[term.id]).map(
      (term) => term.consent
    );

    try {
      setIsSubmitting(true);

      const response = await completeOnboarding({
        nickname: nickname.trim(),
        consents,
      });

      setMember(response.result);

      return response;
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    submitOnboarding,
    isSubmitting,
  };
}
