import {
  DEFAULT_PRODUCT_ICON,
  PRODUCT_ICONS,
} from "@/src/constants/marketProductIcons";

interface ProductsProps {
  products: string[];
}

export default function Products({ products }: ProductsProps) {
  return (
    <section className="flex flex-col gap-2">
      <div className="flex items-center justify-between px-5">
        <h2 className="text-green text-lg font-bold">먹거리 · 특산물</h2>

        {products.length > 0 && (
          <div className="border-light-brown/10 bg-light-brown/10 flex items-center gap-1 rounded-full border px-3 py-1">
            <span className="bg-light-brown h-1.5 w-1.5 rounded-full" />
            <p className="text-light-brown text-xs font-bold">대표 품목</p>
          </div>
        )}
      </div>

      {products.length === 0 ? (
        <p className="text-deep-gray px-5 text-sm">
          등록된 취급 품목이 없습니다.
        </p>
      ) : (
        <ul className="ml-5 flex scrollbar-none gap-4 overflow-x-auto pr-5 [&::-webkit-scrollbar]:hidden">
          {products.map((product) => {
            const Icon = PRODUCT_ICONS[product] ?? DEFAULT_PRODUCT_ICON;

            return (
              <li
                key={product}
                className="border-light-gray flex w-35 shrink-0 flex-col items-center gap-3 rounded-4xl border bg-white p-3 pb-5"
              >
                <div className="border-light-gray bg-light-green flex aspect-square w-full items-center justify-center rounded-4xl border">
                  <Icon
                    className="text-green"
                    size={30}
                    strokeWidth={2}
                    aria-hidden="true"
                  />
                </div>

                <p className="text-green text-center text-xs font-semibold">
                  {product}
                </p>
              </li>
            );
          })}
        </ul>
      )}
    </section>
  );
}
