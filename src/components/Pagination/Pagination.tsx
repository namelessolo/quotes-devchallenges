import PaginationLink from "../PaginationLink/PaginationLink";
import NextPage from "../NextPage/NextPage";
import { useQuotes } from "../../store/store";
import PreviousPage from "../PreviousPage/PreviousPage";
import { useParams } from "react-router-dom";

const Pagination = () => {
  const {
    state: { quotes },
  } = useQuotes();

  const params = useParams().page;

  const paginationNumber = quotes?.pagination.totalPages || 1;
  let pages = [];

  for (let i = 0; i < paginationNumber; i++) {
    pages.push(String(i + 1));
  }

  const linkList = pages.map((page, i) => (
    <li key={page} className={Number(params) === i + 1 ? "bg-category" : "bg-yellow"}>
      <PaginationLink page={page} />
    </li>
  ));
  return (
    <nav className="fixed bottom-3 right-1/2 translate-x-1/2">
      <ul className="flex gap-2 justify-center">
        <li>
          <PreviousPage />
        </li>
        {linkList}
        <li>
          <NextPage />
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
