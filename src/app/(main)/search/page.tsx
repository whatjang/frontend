import SearchBar from "./_components/SearchBar";
import MarketList from "./_components/MarketList";

export default function SearchPage() {
  return (
    <main className="flex flex-col gap-6 px-5">
      <SearchBar />

      <MarketList />
    </main>
  );
}
