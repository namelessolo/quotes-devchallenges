import { AiOutlineLoading3Quarters } from "react-icons/ai";

const Spinner = () => {
  return (
    <div className="flex gap-8 justify-center text-5xl w-full mt-28">
      <AiOutlineLoading3Quarters className="animate-spin" />
      Loading...
    </div>
  );
};

export default Spinner;
