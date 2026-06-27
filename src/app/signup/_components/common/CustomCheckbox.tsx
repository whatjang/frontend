import type { ReactNode } from "react";

type CustomCheckboxProps = {
  id: string;
  checked: boolean;
  onChange: () => void;
  children?: ReactNode;
};

export default function CustomCheckbox({
  id,
  checked,
  onChange,
  children,
}: CustomCheckboxProps) {
  return (
    <label htmlFor={id} className="flex cursor-pointer items-center gap-3">
      <input
        id={id}
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="peer sr-only"
      />

      <span className="border-deep-green peer-checked:bg-green bg-light-green flex size-5 shrink-0 items-center justify-center rounded border">
        {checked && <span className="text-md font-bold text-white">✓</span>}
      </span>

      {children}
    </label>
  );
}
