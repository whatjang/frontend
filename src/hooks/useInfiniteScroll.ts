import { useEffect, useRef } from "react";

interface UseInfiniteScrollProps {
  hasNext: boolean;
  isFetching: boolean;
  onLoadMore: () => void;
}

export function useInfiniteScroll({
  hasNext,
  isFetching,
  onLoadMore,
}: UseInfiniteScrollProps) {
  const observerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const target = observerRef.current;

    if (!target || !hasNext || isFetching) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && hasNext && !isFetching) {
          onLoadMore();
        }
      },
      {
        root: null,
        rootMargin: "300px 0px",
        threshold: 0,
      }
    );

    observer.observe(target);

    return () => {
      observer.disconnect();
    };
  }, [hasNext, isFetching, onLoadMore]);

  return observerRef;
}
