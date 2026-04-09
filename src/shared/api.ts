import { PAGE_LIMIT } from "./consts";
import type { TCatApi } from "./types";

export const getCats = (page: number, limit: number = PAGE_LIMIT): Promise<TCatApi[]> => {
  return fetch(
    `https://api.thecatapi.com/v1/images/search?limit=${limit}&page=${page}`,

    {
      headers: {
        "x-api-key":
          "live_8wdOi4BUzL0DtkFCqDUugSAbye0u71cwsdbjTDXRITJyBcsmC2QgMLZ7adQ9hxWu",
      },
    },
  )
    .then((res) => res.json())
    .catch((err) => console.error(err));
};
