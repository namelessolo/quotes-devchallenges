import { Link, useParams } from "react-router-dom";
import { useQuotes } from "../../store/store";

const NextPage = () => {
  const { state } = useQuotes();
  const { author } = useParams();

  const nextPage = state.quotes?.pagination.nextPage || null;
  return (
    <>
      {nextPage && (
        <Link to={`/${author}/page/${nextPage}`} className="h-10 w-10 grid place-items-center bg-yellow">
          &gt;
        </Link>
      )}
    </>
  );
};

export default NextPage;
