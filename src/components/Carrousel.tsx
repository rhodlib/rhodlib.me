import { useEffect, useState } from "react";
import { useTransition, animated, config } from "react-spring";
import { quotes } from "../staticQuotes";
import QuotesDisplay from "./QuotesDisplay";

const Carrousel = () => {
  const [position, setPosition] = useState(0);

  const transitions = useTransition(position, {
    from: { opacity: 0, transform: "translate3d(100%, 0, 0)" },
    enter: { opacity: 1, transform: "translate3d(0, 0, 0)" },
    config: {
      duration: 1000,
    },
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((index) => (index + 1) % quotes.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex my-5" style={{ height: 300 }}>
      {transitions((style, index) => (
        <animated.div style={style}>
          <QuotesDisplay
            author={quotes[index].author}
            quote={quotes[index].quote}
          />
        </animated.div>
      ))}
    </div>
  );
};

export default Carrousel;
