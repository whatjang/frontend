"use client";

import { useState } from "react";

import { TERMS, type TermId } from "../_data/terms";

const createInitialCheckedTerms = () => {
  return TERMS.reduce(
    (acc, term) => {
      acc[term.id] = false;
      return acc;
    },
    {} as Record<TermId, boolean>
  );
};

const createCheckedTerms = (checked: boolean) => {
  return TERMS.reduce(
    (acc, term) => {
      acc[term.id] = checked;
      return acc;
    },
    {} as Record<TermId, boolean>
  );
};

export default function useTermsAgreement() {
  const [checkedTerms, setCheckedTerms] = useState<Record<TermId, boolean>>(
    createInitialCheckedTerms
  );

  const isAllChecked = TERMS.every((term) => checkedTerms[term.id]);

  const isRequiredChecked = TERMS.filter((term) => term.required).every(
    (term) => checkedTerms[term.id]
  );

  const handleToggleAll = () => {
    setCheckedTerms(createCheckedTerms(!isAllChecked));
  };

  const handleToggleTerm = (id: TermId) => {
    setCheckedTerms((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return {
    checkedTerms,
    isAllChecked,
    isRequiredChecked,
    handleToggleAll,
    handleToggleTerm,
  };
}
