import HomeCalendarMarketItem, {
  type HomeCalendarMarket,
} from "./HomeCalendarMarketItem";

interface HomeCalendarMarketListProps {
  selectedDate: string;
  markets: HomeCalendarMarket[];
}

const WEEKDAY_LABELS = ["일", "월", "화", "수", "목", "금", "토"];
const MARKET_PAGE_SIZE = 3;

function formatSelectedDate(isoDate: string) {
  const [year, month, date] = isoDate.split("-").map(Number);

  const targetDate = new Date(Date.UTC(year, month - 1, date));
  const weekday = WEEKDAY_LABELS[targetDate.getUTCDay()];

  return `${month}월 ${date}일 (${weekday})`;
}

function chunkMarkets(markets: HomeCalendarMarket[]) {
  return Array.from(
    { length: Math.ceil(markets.length / MARKET_PAGE_SIZE) },
    (_, index) =>
      markets.slice(index * MARKET_PAGE_SIZE, (index + 1) * MARKET_PAGE_SIZE)
  );
}

export default function HomeCalendarMarketList({
  selectedDate,
  markets,
}: HomeCalendarMarketListProps) {
  const marketPages = chunkMarkets(markets);

  return (
    <div className="mt-5">
      <header className="flex items-center justify-between px-1">
        <h3 className="flex items-center gap-2 text-sm font-bold">
          <span aria-hidden="true" className="bg-green h-5 w-1 rounded-full" />

          {formatSelectedDate(selectedDate)}
        </h3>

        <span className="text-deep-gray text-xs">
          열리는 장터 <strong className="text-green">{markets.length}</strong>
        </span>
      </header>

      {markets.length > 0 ? (
        <div className="mt-2 flex snap-x snap-mandatory scrollbar-none overflow-x-auto [&::-webkit-scrollbar]:hidden">
          {marketPages.map((page, pageIndex) => (
            <div
              key={pageIndex}
              className="flex min-w-full snap-start flex-col gap-2"
            >
              {page.map((market) => (
                <HomeCalendarMarketItem key={market.id} market={market} />
              ))}
            </div>
          ))}
        </div>
      ) : (
        <div className="text-deep-gray mt-2 text-center text-sm">
          해당 날짜에 열리는 장터가 없어요.
        </div>
      )}
    </div>
  );
}
