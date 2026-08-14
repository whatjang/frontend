"use client";

import { NotebookPen } from "lucide-react";

import { MarketRecord } from "@/src/types/mypage";

import RecordItem from "./RecordItem";

interface RecordListProps {
  records: MarketRecord[];
}

const ITEMS_PER_PAGE = 2;

function chunkRecords(records: MarketRecord[]) {
  const chunks: MarketRecord[][] = [];

  for (let i = 0; i < records.length; i += ITEMS_PER_PAGE) {
    chunks.push(records.slice(i, i + ITEMS_PER_PAGE));
  }

  return chunks;
}

export default function RecordList({ records }: RecordListProps) {
  const recordPages = chunkRecords(records);

  return (
    <section className="flex flex-col gap-2">
      <div className="flex items-center gap-1">
        <NotebookPen className="text-green" size={18} />
        <h2 className="text-green font-bold">나의 기록</h2>
      </div>

      {records.length === 0 ? (
        <div className="text-deep-gray rounded-xl text-center text-sm">
          아직 작성한 기록이 없어요.
        </div>
      ) : (
        <div className="scrollbar-hide flex snap-x snap-mandatory scrollbar-none overflow-x-auto">
          {recordPages.map((page, pageIndex) => (
            <div
              key={pageIndex}
              className="grid w-full shrink-0 snap-start grid-cols-2 gap-2"
            >
              {page.map((record) => (
                <RecordItem key={record.id} record={record} />
              ))}
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
