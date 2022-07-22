import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { QuoteProps } from "../types/types";
import { useQuotes } from "../store/store";
import Error from "../components/Error/Error";

import QuoteList from "../components/QuoteList/QuoteList";
import RandomButton from "../components/RandomButton/RandomButton";
import Spinner from "../components/Spinner/Spinner";
import Pagination from "../components/Pagination/Pagination";

const AllQuotes = () => {
  const { page, author } = useParams();
  const URL = encodeURI(author as string);
  const {
    callAPI,
    state: { quotes, error, isLoading },
  } = useQuotes();

  useEffect(() => {
    callAPI(`https://quote-garden.herokuapp.com/api/v3/quotes/?author=${URL}&page=${page}`);
  }, [URL, callAPI, page]);

  if (error) return <Error error={error} />;
  return (
    <>
      {isLoading ? (
        <>
          <Spinner />
          <Pagination />
        </>
      ) : (
        <>
          <RandomButton />
          <QuoteList author={author as string} quotes={quotes as QuoteProps} />
          <Pagination />
        </>
      )}
    </>
  );
};

export default AllQuotes;
