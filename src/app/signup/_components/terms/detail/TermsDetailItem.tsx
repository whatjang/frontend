import type { TermItem } from "@/src/app/signup/_data/terms";

type TermsDetailItemProps = {
  item: TermItem;
  index: number;
};

export default function TermsDetailItem({ item, index }: TermsDetailItemProps) {
  return (
    <section className="flex flex-col gap-3">
      <h2 className="text-green text-base font-semibold">
        제{index + 1}조 {item.heading}
      </h2>

      <p className="text-deep-gray/80 text-sm leading-6 break-keep">
        {item.body}
      </p>
    </section>
  );
}
