import TrendContent from "./_components/TrendContent";

interface TrendPageProps {
  searchParams: Promise<{
    keywordId?: string;
  }>;
}

export default async function TrendPage({ searchParams }: TrendPageProps) {
  const { keywordId } = await searchParams;

  return (
    <main className="min-h-screen w-full px-5">
      <TrendContent initialKeywordId={keywordId} />
    </main>
  );
}
