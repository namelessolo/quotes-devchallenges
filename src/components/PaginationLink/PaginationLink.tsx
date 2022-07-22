import { NavLink, useParams } from "react-router-dom";

type Props = {
  page: string;
};

const PaginationLink: React.FC<Props> = ({ page }) => {
  const { author } = useParams();

  return (
    <NavLink to={`/${author}/page/${page}`} className="h-10 w-10 grid place-items-center">
      {page}
    </NavLink>
  );
};

export default PaginationLink;
