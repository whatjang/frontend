import { useEffect, useRef } from "react";

interface UseInfiniteScrollProps {
  hasNext: boolean;
  isLoading: boolean;
  onLoadMore: () => void;
}

export function useInfiniteScroll({
  hasNext,
  isLoading,
  onLoadMore,
}: UseInfiniteScrollProps) {
  const observerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const target = observerRef.current;

    if (!target || !hasNext || isLoading) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          onLoadMore();
        }
      },
      {
        rootMargin: "200px",
      }
    );

    observer.observe(target);

    return () => observer.disconnect();
  }, [hasNext, isLoading, onLoadMore]);

  return observerRef;
}
