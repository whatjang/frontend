interface OverviewProps {
  overview: string;
}

export default function Overview({ overview }: OverviewProps) {
  return (
    <section className="flex flex-col gap-2 px-5">
      <h2 className="text-green text-lg font-bold">장소 소개</h2>

      <div className="border-light-gray rounded-3xl border bg-white p-4">
        <p className="text-deep-gray text-sm leading-6">{overview}</p>
      </div>
    </section>
  );
}
