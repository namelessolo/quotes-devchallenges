import { Link, useParams } from "react-router-dom";
import { useQuotes } from "../../store/store";

const PreviousPage = () => {
  const { state } = useQuotes();
  const { author } = useParams();

  const previousPage =
    state.quotes?.pagination.currentPage && state.quotes?.pagination.currentPage > 1
      ? state.quotes?.pagination.currentPage - 1
      : null;
  return (
    <>
      {previousPage && (
        <Link to={`/${author}/page/${previousPage}`} className="h-10 w-10 grid place-items-center bg-yellow">
          {"<"}
        </Link>
      )}
    </>
  );
};

export default PreviousPage;
