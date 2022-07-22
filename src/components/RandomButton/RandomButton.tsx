import { useLocation, useNavigate } from "react-router-dom";
import { useQuotes } from "../../store/store";
import { Reducer } from "../../types/types";

import { FiRefreshCw } from "react-icons/fi";

const RandomButton = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { callAPI, dispatch } = useQuotes();
  return (
    <button
      className="group flex items-center gap-3 mb-52 mt-9 ml-auto mr-8 text-lg text-author hover:scale-150 transition duration-300"
      onClick={() => {
        if (location.pathname !== "/") {
          dispatch({ type: Reducer.LOADING });
          navigate("/");
        } else {
          dispatch({ type: Reducer.LOADING });
          callAPI("https://quote-garden.herokuapp.com/api/v3/quotes/random");
        }
      }}
    >
      random <FiRefreshCw className="group-hover:rotate-180" />
    </button>
  );
};

export default RandomButton;
