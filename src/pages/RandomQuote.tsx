import { useQuotes } from "../store/store";
import { useEffect } from "react";

import RandomButton from "../components/RandomButton/RandomButton";
import Quote from "../components/Quote/Quote";
import Button from "../components/Button/Button";
import Spinner from "../components/Spinner/Spinner";
import Error from "../components/Error/Error";
const RandomQuote = () => {
  const { state, callAPI } = useQuotes();

  useEffect(() => {
    callAPI("https://quote-garden.herokuapp.com/api/v3/quotes/random");
  }, [callAPI]);

  if (state.error) return <Error error={state.error} />;
  if (state.isLoading) return <Spinner />;
  return (
    <>
      <RandomButton />
      <Quote quote={state.quotes?.data[0].quoteText as string} />
      <Button
        author={state.quotes?.data[0].quoteAuthor as string}
        category={state.quotes?.data[0].quoteGenre as string}
      />
    </>
  );
};

export default RandomQuote;
