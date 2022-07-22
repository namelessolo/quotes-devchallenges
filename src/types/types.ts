export type QuoteProps = {
  data: {
    _id: string;
    quoteText: string;
    quoteAuthor: string;
    quoteGenre: string;
  }[];
  pagination: {
    currentPage: number;
    nextPage: number | null;
    totalPages: number;
  };
};

export enum Reducer {
  LOADING = "LOADING",
  LOADED = "LOADED",
  ERROR = "ERROR",
  NO_ERROR = "NO_ERROR",
  QUOTES = "QUOTES",
  PAGES = "PAGES",
}
