import { create } from "zustand";
import type { TCat, TCatApi } from "../shared/types";

type TCatState = {
  cats: TCat[];
};

type TCatActions = {
  addCats: (newCats: TCatApi[]) => void;
  toggleLike: (id: string) => void;
};

export const useCatsStore = create<TCatState & TCatActions>((set) => ({
  cats: [],

  addCats: (newCats: TCatApi[]) =>
    set((state) => {
      const mappedNewCats = newCats.map(({ id, url }) => {
        return { id, url, isLiked: false };
      });
      return { cats: [...state.cats, ...mappedNewCats] };
    }),

  toggleLike: (id: string) =>
    set((state) => ({
      cats: state.cats.map((cat) =>
        cat.id === id ? { ...cat, isLiked: !cat.isLiked } : cat,
      ),
    })),
}));
