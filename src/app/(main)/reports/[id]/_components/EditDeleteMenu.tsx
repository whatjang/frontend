"use client";

import { useEffect, useRef, useState } from "react";
import { MoreVertical, Pencil, Trash2 } from "lucide-react";

interface EditDeleteMenuProps {
  onEdit?: () => void;
  onDelete?: () => void;
}

export function EditDeleteMenu({ onEdit, onDelete }: EditDeleteMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const handleEdit = () => {
    setIsOpen(false);
    onEdit?.();
  };

  const handleDelete = () => {
    setIsOpen(false);
    onDelete?.();
  };

  return (
    <div ref={menuRef} className="relative">
      <button
        type="button"
        aria-label="더보기"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((prev) => !prev)}
        className="text-deep-gray flex cursor-pointer items-center justify-center"
      >
        <MoreVertical size={13} strokeWidth={2} />
      </button>

      {isOpen && (
        <div className="border-light-gray absolute top-4 right-0 z-30 w-max overflow-hidden rounded-lg border bg-white p-1 shadow-md">
          <button
            type="button"
            onClick={handleEdit}
            className="flex w-full cursor-pointer items-center gap-1.5 rounded-md px-2 py-1 text-xs whitespace-nowrap text-black"
          >
            <Pencil size={12} strokeWidth={2} />
            <span>수정</span>
          </button>

          <button
            type="button"
            onClick={handleDelete}
            className="text-red flex w-full cursor-pointer items-center gap-1.5 rounded-md px-2 py-1 text-xs whitespace-nowrap"
          >
            <Trash2 size={12} strokeWidth={2} />
            <span>삭제</span>
          </button>
        </div>
      )}
    </div>
  );
}
