import { useCallback, useState } from "react";
import { PAGE_LIMIT } from "../shared/consts";
import type { TCatApi } from "../shared/types";
import { useCatsStore } from "../store/store";

interface usePaginationProps {
  startPage?: number;
  limit?: number;
  fetchFunction: (page: number, limit?: number) => Promise<TCatApi[]>;
}

export const usePagination = ({
  startPage = 1,
  limit = PAGE_LIMIT,
  fetchFunction,
}: usePaginationProps) => {
  const addCats = useCatsStore((state) => state.addCats);

  const [page, setPage] = useState(startPage);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [error, setError] = useState("");

  const loadMore = async () => {
    if (!hasMore || isLoading) return;

    setIsLoading(true);
    setError("");

    try {
      const data = await fetchFunction(page, limit);
      addCats(data);
      if (data.length < limit) {
        setHasMore(false);
      } else {
        setPage((prev) => prev + 1);
      }
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      }
    } finally {
      setIsLoading(false);
    }
  };

  const reset = () => {
    setPage(startPage);
    setHasMore(true);
    setError("");
  };

  return {
    page,
    isLoading,
    hasMore,
    error,
    loadMore,
    reset,
  };
};
