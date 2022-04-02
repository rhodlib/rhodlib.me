import { useEffect, useState } from "react";
import { useTransition, animated, config } from "react-spring";
import { quotes } from "../staticQuotes";
import QuotesDisplay from "./QuotesDisplay";

const Carrousel = () => {
  const [items, setItems] = useState(quotes);

  const transitions = useTransition(quotes, {
    from: { opacity: 0, transform: "translate3d(100%, 0, 0)" },
    enter: { opacity: 1, transform: "translate3d(0, 0, 0)" },
    leave: { opacity: 0, transform: "translate3d(-100%, 0,-100%)" },
    delay: 200,
    config: config.molasses,
    onRest: () => setItems([]),
  });

  useEffect(() => {
    if (items.length === 0) {
      setTimeout(() => {
        setItems(quotes);
      }, 2000);
    }
  }, [items]);

  return (
    <div className="flex max-w-sm ">
      {transitions(({ opacity, transform }, item) => (
        <animated.div
          style={{
            opacity,
            transform,
          }}
        >
          <QuotesDisplay author={item.author} quote={item.quote} />
        </animated.div>
      ))}
    </div>
  );
};

export default Carrousel;
