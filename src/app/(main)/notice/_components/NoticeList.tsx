"use client";

import { useEffect, useState } from "react";

import { Notice } from "@/src/types/notice";

import NoticeItem from "./NoticeItem";

interface NoticeListProps {
  notices: Notice[];
}

export default function NoticeList({ notices }: NoticeListProps) {
  const [noticeList, setNoticeList] = useState<Notice[]>(notices);

  // 읽음 처리 임시 확인용
  useEffect(() => {
    const timer = setTimeout(() => {
      setNoticeList((prev) =>
        prev.map((notice) => ({
          ...notice,
          isRead: true,
        }))
      );
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  if (noticeList.length === 0) {
    return (
      <div className="text-deep-gray text-center text-sm">
        받은 알림이 없어요.
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-2">
      {noticeList.map((notice) => (
        <NoticeItem key={notice.id} notice={notice} />
      ))}
    </div>
  );
}
