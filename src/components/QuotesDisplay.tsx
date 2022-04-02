import Quote from "../icons/Quote";

interface QuoteInterface {
  author: string;
  quote: string;
}

const QuotesDisplay = ({ author, quote }: QuoteInterface) => {
  return (
    <div className="max-w-sm px-4 py-2 rounded mt-10 transition ease-in-out delay-150 border-l-8 hover:border-cyan-400 hover:shadow-lg duration-300 hover:shadow-cyan-400 grayscale hover:grayscale-0">
      <Quote className="fill-cyan-400 w-8 h-8" />
      <p className="font-gela italic">{quote}</p>
      <p className="text-right font-bold">{`- ${author}`}</p>
    </div>
  );
};

export default QuotesDisplay;
