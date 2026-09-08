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
    <label
      htmlFor={id}
      className="group flex cursor-pointer items-center gap-3"
      data-checked={checked}
    >
      <input
        id={id}
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="peer sr-only"
      />

      <span
        aria-hidden="true"
        className="border-deep-green bg-light-green group-data-[checked=true]:bg-green peer-focus-visible:ring-green flex size-5 shrink-0 items-center justify-center rounded border peer-focus-visible:ring-2 peer-focus-visible:ring-offset-2"
      >
        <span className="text-md font-bold text-white opacity-0 group-data-[checked=true]:opacity-100">
          ✓
        </span>
      </span>

      {children}
    </label>
  );
}
