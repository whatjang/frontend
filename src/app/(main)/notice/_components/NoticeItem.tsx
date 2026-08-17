import { Store } from "lucide-react";

import { Notice } from "@/src/types/notice";
import { formatDateTime } from "@/src/utils/date";

interface NoticeItemProps {
  notice: Notice;
}

export default function NoticeItem({ notice }: NoticeItemProps) {
  const isDDay = notice.type === "D-Day";

  return (
    <article
      className={`shadow-light-gray flex items-start gap-2 rounded-xl p-3 shadow-xs ${
        notice.isRead ? "bg-white/20" : "bg-light-green/50"
      }`}
    >
      <div className="bg-light-green border-green/30 text-green flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border">
        <Store size={20} />
      </div>

      <div className="flex min-w-0 flex-1 flex-col gap-1">
        <div className="flex items-center gap-2">
          <h2 className="truncate text-sm font-bold">{notice.marketName}</h2>

          <span
            className={`shrink-0 rounded-md px-2 py-0.5 text-xs font-bold ${
              isDDay ? "bg-green text-white" : "border-green text-green border"
            }`}
          >
            {notice.type}
          </span>
        </div>

        <p className="text-deep-gray text-xs font-semibold">{notice.message}</p>

        <span className="text-deep-gray/60 block text-xs">
          {formatDateTime(notice.createdAt)}
        </span>
      </div>

      {!notice.isRead && (
        <span
          aria-label="읽지 않은 알림"
          className="bg-green h-2 w-2 shrink-0 rounded-full"
        />
      )}
    </article>
  );
}
