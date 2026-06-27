import Link from "next/link";

import { TERMS, type TermId } from "../../_data/terms";
import CustomCheckbox from "../common/CustomCheckbox";

type TermsAgreementListProps = {
  checkedTerms: Record<TermId, boolean>;
  isAllChecked: boolean;
  onToggleAll: () => void;
  onToggleTerm: (id: TermId) => void;
};

export default function TermsAgreementList({
  checkedTerms,
  isAllChecked,
  onToggleAll,
  onToggleTerm,
}: TermsAgreementListProps) {
  return (
    <fieldset>
      <legend className="sr-only">서비스 이용약관 동의 항목</legend>

      <CustomCheckbox
        id="terms-all"
        checked={isAllChecked}
        onChange={onToggleAll}
      >
        <span className="text-lg font-bold">전체 동의하기</span>
      </CustomCheckbox>

      <hr className="border-deep-green my-4 border-0 border-t" />

      <ul className="flex flex-col gap-4">
        {TERMS.map((term) => (
          <li key={term.id} className="flex items-center justify-between gap-4">
            <CustomCheckbox
              id={`terms-${term.id}`}
              checked={checkedTerms[term.id]}
              onChange={() => onToggleTerm(term.id)}
            >
              <p className="text-login-gray text-sm font-medium">
                <strong className="text-green font-semibold">
                  [{term.required ? "필수" : "선택"}]
                </strong>{" "}
                {term.label}
              </p>
            </CustomCheckbox>

            <Link
              href={`/signup/terms/${term.id}`}
              aria-label={`${term.title} 상세보기`}
            >
              <img
                src="/images/signup/right-arrow.svg"
                alt=""
                aria-hidden="true"
                className="size-3"
              />
            </Link>
          </li>
        ))}
      </ul>
    </fieldset>
  );
}
