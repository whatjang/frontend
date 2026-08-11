import { Info } from "lucide-react";

import type { NicknameStatus } from "../../_hooks/useNickname";

type NicknameMessageProps = {
  status: NicknameStatus;
  message: string;
};

export default function NicknameMessage({
  status,
  message,
}: NicknameMessageProps) {
  return (
    <div
      className={[
        "mt-2 flex items-center gap-1 text-xs font-medium",
        status === "default" && "text-deep-gray",
        status === "error" && "text-red",
        status === "success" && "text-green",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <Info className="size-3" aria-hidden="true" />
      <p>{message}</p>
    </div>
  );
}
