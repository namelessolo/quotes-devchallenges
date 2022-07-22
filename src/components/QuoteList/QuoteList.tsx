import { QuoteProps } from "../../types/types";
import Quote from "../../components/Quote/Quote";

type Props = {
  author: string;
  quotes: QuoteProps;
};

const QuoteList: React.FC<Props> = ({ author, quotes }) => {
  return (
    <>
      <h1 className="mb-36 text-4xl font-bold text-black w-full">{author}</h1>
      <ul>
        {quotes?.data.map((quote) => {
          return (
            <li key={quote._id}>
              <Quote quote={quote.quoteText} />
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default QuoteList;
