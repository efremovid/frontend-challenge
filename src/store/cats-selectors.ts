import { useCatsStore } from "./store";

export const useLikedCats = () =>
  useCatsStore((state) => state.cats.filter((cat) => cat.isLiked));
