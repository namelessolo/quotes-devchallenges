type Props = {
  quote: string;
};

const Quote: React.FC<Props> = ({ quote }) => {
  return (
    <div className="w-full after:content=['*'] after:top-0 after:left-0 after:w-2 after:h-full after:bg-yellow after:absolute relative px-24 my-auto text-4xl mb-36">
      {quote}
    </div>
  );
};

export default Quote;
