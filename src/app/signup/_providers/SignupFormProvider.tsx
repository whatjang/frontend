"use client";

import {
  createContext,
  type ReactNode,
  useContext,
  useMemo,
  useState,
} from "react";

import { TERMS, type TermId } from "../_data/terms";

type CheckedTerms = Record<TermId, boolean>;

type SignupFormContextValue = {
  checkedTerms: CheckedTerms;
  isAllChecked: boolean;
  isRequiredChecked: boolean;
  handleToggleAll: () => void;
  handleToggleTerm: (id: TermId) => void;

  nickname: string;
  setNickname: (nickname: string) => void;
};

const SignupFormContext = createContext<SignupFormContextValue | null>(null);

const createInitialCheckedTerms = () => {
  return TERMS.reduce((acc, term) => {
    acc[term.id] = false;
    return acc;
  }, {} as CheckedTerms);
};

const createCheckedTerms = (checked: boolean) => {
  return TERMS.reduce((acc, term) => {
    acc[term.id] = checked;
    return acc;
  }, {} as CheckedTerms);
};

type SignupFormProviderProps = {
  children: ReactNode;
};

export default function SignupFormProvider({
  children,
}: SignupFormProviderProps) {
  const [checkedTerms, setCheckedTerms] = useState<CheckedTerms>(
    createInitialCheckedTerms
  );

  const [nickname, setNickname] = useState("");

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

  const value = useMemo(
    () => ({
      checkedTerms,
      isAllChecked,
      isRequiredChecked,
      handleToggleAll,
      handleToggleTerm,
      nickname,
      setNickname,
    }),
    [checkedTerms, isAllChecked, isRequiredChecked, nickname]
  );

  return (
    <SignupFormContext.Provider value={value}>
      {children}
    </SignupFormContext.Provider>
  );
}

export const useSignupForm = () => {
  const context = useContext(SignupFormContext);

  if (!context) {
    throw new Error("useSignupForm must be used within SignupFormProvider");
  }

  return context;
};
