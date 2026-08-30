"use client";

import Image from "next/image";
import { ImageIcon } from "lucide-react";
import { useEffect, useState } from "react";

interface RouteOrderItemProps {
  order: number;
  image?: string | null;
  name: string;
  label: string;
  isStart?: boolean;
  onClick?: () => void;
}

export default function RouteOrderItem({
  order,
  image,
  name,
  label,
  isStart = false,
  onClick,
}: RouteOrderItemProps) {
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    setImageError(false);
  }, [image]);

  const hasImage = image && !imageError;

  const className =
    "relative flex min-w-28 flex-col items-center rounded-2xl border border-light-gray bg-white px-3 py-4 shadow-xs";

  const content = (
    <>
      <span
        className={[
          "border-deep-gray absolute top-0 left-0 flex size-5 items-center justify-center rounded-full border text-xs font-bold shadow-xs",
          isStart ? "bg-green text-white" : "bg-light-green text-black",
        ].join(" ")}
      >
        {order}
      </span>

      {hasImage ? (
        <Image
          src={image}
          alt={name}
          width={64}
          height={64}
          onError={() => setImageError(true)}
          className="border-light-gray size-16 rounded-full border object-cover"
        />
      ) : (
        <div className="border-light-gray bg-light-green text-green flex size-16 items-center justify-center rounded-full border">
          <ImageIcon className="size-6" strokeWidth={1.8} />
        </div>
      )}

      <strong className="mt-2 max-w-24 truncate text-sm">{name}</strong>

      <span className="text-deep-gray mt-0.5 text-xs">{label}</span>
    </>
  );

  if (onClick) {
    return (
      <button
        type="button"
        onClick={onClick}
        className={`${className} cursor-pointer`}
      >
        {content}
      </button>
    );
  }

  return <div className={className}>{content}</div>;
}
