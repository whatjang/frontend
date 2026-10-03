import { List, UtensilsCrossed } from "lucide-react";

interface MenuInfoProps {
  representativeMenu: string | null;
  treatMenu: string | null;
}

function splitMenuItems(value: string) {
  return value
    .split("/")
    .map((item) => item.trim())
    .filter(Boolean);
}

export default function MenuInfo({
  representativeMenu,
  treatMenu,
}: MenuInfoProps) {
  if (!representativeMenu && !treatMenu) {
    return null;
  }

  const treatMenuItems = treatMenu ? splitMenuItems(treatMenu) : [];

  return (
    <section className="flex flex-col gap-2 px-5">
      <h2 className="text-green text-lg font-bold">메뉴 정보</h2>

      <div className="border-light-gray divide-light-gray flex flex-col divide-y rounded-3xl border bg-white px-4">
        {representativeMenu && (
          <div className="flex items-center gap-2 py-3">
            <UtensilsCrossed
              size={18}
              strokeWidth={2}
              className="text-green shrink-0"
              aria-hidden="true"
            />

            <div className="flex min-w-0 flex-1 items-center justify-between gap-4">
              <span className="text-green shrink-0 text-xs font-semibold">
                대표 메뉴
              </span>

              <p className="text-right text-xs font-medium">
                {representativeMenu}
              </p>
            </div>
          </div>
        )}

        {treatMenu && (
          <div className="flex items-start gap-2 py-3">
            <List
              size={18}
              strokeWidth={2}
              className="text-green mt-0.5 shrink-0"
              aria-hidden="true"
            />

            <div className="flex min-w-0 flex-1 items-start justify-between gap-4">
              <span className="text-green mt-1 shrink-0 text-xs font-semibold">
                취급 메뉴
              </span>

              <ul className="flex flex-col items-end gap-1 text-right text-xs leading-5 font-medium">
                {treatMenuItems.map((menu, index) => (
                  <li key={`${menu}-${index}`}>{menu}</li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
