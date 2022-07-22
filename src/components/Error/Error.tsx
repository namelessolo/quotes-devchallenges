import { Link } from "react-router-dom";

type Props = {
  error: string;
};

const Error: React.FC<Props> = ({ error }) => {
  return (
    <div className="grid h-screen place-items-center">
      <div className="text-3xl text-center">
        <h2>Something went wrong. Try again later</h2>
        <h3 className="mb-10">{error}</h3>
        <Link to="/">Back to home page</Link>
      </div>
    </div>
  );
};

export default Error;
