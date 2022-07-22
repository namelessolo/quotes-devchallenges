import { PropsWithChildren } from "react";

const QuoteContainer: React.FC<PropsWithChildren> = ({ children }) => {
  return <div className="max-w-3xl mx-auto bg-white">{children}</div>;
};

export default QuoteContainer;
