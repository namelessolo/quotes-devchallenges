import React from "react";
import { useNavigate } from "react-router-dom";

import { HiArrowNarrowRight } from "react-icons/hi";

type Props = {
  author: string;
  category: string;
};

const Button: React.FC<Props> = ({ author, category }) => {
  const navigate = useNavigate();
  return (
    <button
      className="transition duration-300 p-7 bg-white hover:bg-black group w-5/6 h-40 flex items-center justify-between mx-auto mt-24"
      onClick={() => {
        navigate(`${author}/page/1`);
      }}
    >
      <div className="text-start">
        <p className="mb-2 text-author font-bold group-hover:text-white transition duration-300">{author}</p>
        <p className=" text-category">{category}</p>
      </div>
      <div>
        <HiArrowNarrowRight className="fill-white scale-150" />
      </div>
    </button>
  );
};

export default Button;
