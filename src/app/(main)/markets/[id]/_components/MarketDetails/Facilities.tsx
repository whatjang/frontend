import { CircleParking, Toilet } from "lucide-react";

interface FacilitiesProps {
  parkingAvailable: boolean | null;
  toiletAvailable: boolean | null;
}

export default function Facilities({
  parkingAvailable,
  toiletAvailable,
}: FacilitiesProps) {
  const facilities = [
    {
      id: "parking",
      label: "주차장",
      Icon: CircleParking,
      available: parkingAvailable,
    },
    {
      id: "toilet",
      label: "화장실",
      Icon: Toilet,
      available: toiletAvailable,
    },
  ];

  return (
    <section className="flex flex-col gap-2 px-5">
      <h2 className="text-green text-xl font-bold">편의 시설</h2>

      <ul className="flex gap-4">
        {facilities.map(({ id, label, Icon, available }) => (
          <li
            key={id}
            className={`flex flex-col items-center ${
              available === true ? "text-green" : "text-deep-gray opacity-50"
            }`}
          >
            <div className="shadow-light-gray flex h-18 w-18 items-center justify-center rounded-2xl bg-white shadow-xs">
              <Icon size={20} strokeWidth={2.4} aria-hidden="true" />
            </div>

            <p className="mt-1 text-center text-xs font-semibold">{label}</p>

            <span className="sr-only">
              {available === null
                ? "정보 없음"
                : available
                  ? "이용 가능"
                  : "이용 불가"}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
