export type TCatApi = {
  id: string;
  url: string;
}


export type TCat = TCatApi & {
  isLiked: boolean;
};