import { useReducer, createContext, useContext, PropsWithChildren, useCallback } from "react";
import axios from "axios";
import { Reducer, QuoteProps } from "../types/types";

type State = {
  quotes: QuoteProps | null;
  isLoading: boolean;
  error: string;
  pages: number;
};

type Action = {
  type: Reducer;
  payload?: QuoteProps;
  error?: string;
  pages?: number;
};

type Context = {
  state: State;
  callAPI: (url: string) => void;
  dispatch: (action: Action) => void;
};

const initialContext = {
  state: {
    quotes: null,
    isLoading: true,
    error: "",
    pages: 0,
  },
  callAPI: (url: string) => {},
  dispatch: (action: Action) => {},
};

const initialState = {
  quotes: null,
  isLoading: true,
  error: "",
  pages: 0,
};

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case Reducer.LOADING:
      return { ...state, isLoading: true };
    case Reducer.LOADED:
      return { ...state, isLoading: false };
    case Reducer.ERROR:
      return { ...state, error: action.error as string };
    case Reducer.NO_ERROR:
      return { ...state, error: "" };
    case Reducer.QUOTES:
      if (!action.payload) return state;
      return { ...state, quotes: action.payload };
    case Reducer.PAGES:
      if (!action.pages) return state;
      return { ...state, pages: action.pages };
    default:
      return state;
  }
};

const QuotesContext = createContext<Context>(initialContext);

const QuotesProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const callAPI = useCallback((url: string) => {
    dispatch({ type: Reducer.NO_ERROR });
    dispatch({ type: Reducer.LOADING });
    axios
      .get(url)
      .then((response) => dispatch({ type: Reducer.QUOTES, payload: response.data }))
      .catch((error) => dispatch({ type: Reducer.ERROR, error }))
      .finally(() => dispatch({ type: Reducer.LOADED }));
  }, []);

  return <QuotesContext.Provider value={{ state, callAPI, dispatch }}>{children}</QuotesContext.Provider>;
};

export const useQuotes = () => useContext(QuotesContext);

export default QuotesProvider;
