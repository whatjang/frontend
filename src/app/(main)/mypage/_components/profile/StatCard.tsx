interface StatCardProps {
  label: string;
  value: number;
  unit: string;
  highlighted?: boolean;
}

export default function StatCard({
  label,
  value,
  unit,
  highlighted = false,
}: StatCardProps) {
  return (
    <div
      className={`border-deep-gray/30 flex flex-col items-center justify-center rounded-2xl border py-6 ${
        highlighted ? "bg-light-green" : "bg-light-gray/30"
      }`}
    >
      <span className="text-deep-gray text-xs font-medium">{label}</span>

      <div className="flex items-end gap-1">
        <strong className="text-green text-2xl font-bold">{value}</strong>
        <span className="text-deep-gray mb-1 text-xs">{unit}</span>
      </div>
    </div>
  );
}
