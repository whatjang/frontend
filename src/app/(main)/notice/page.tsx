import NoticeList from "./_components/NoticeList";

import { mockNotices } from "@/src/mocks/notice";

export default function NoticePage() {
  return (
    <main className="px-5">
      <section className="flex flex-col gap-2">
        <h1 className="text-green text-lg font-bold">알림</h1>

        <NoticeList notices={mockNotices} />
      </section>
    </main>
  );
}
