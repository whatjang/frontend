import type { TermItem } from "@/src/app/signup/_data/terms";

import TermsDetailItem from "./TermsDetailItem";

type TermsDetailListProps = {
  content: readonly TermItem[];
};

export default function TermsDetailList({ content }: TermsDetailListProps) {
  return (
    <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain rounded-t-xl border border-white/40 bg-white/60 px-3 py-6 shadow-lg shadow-black/5 backdrop-blur-md">
      <div className="flex flex-col gap-8">
        {content.map((item, index) => (
          <TermsDetailItem key={item.heading} item={item} index={index} />
        ))}
      </div>
    </div>
  );
}
