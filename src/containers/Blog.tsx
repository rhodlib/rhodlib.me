import classNames from "classnames";
import { useState } from "react";

const Blog = ({ ...props }) => {
  const [active, setActive] = useState(0);
  return (
    <>
      <div {...props}>
        <div className="flex flex-col w-1/5 h-full justify-center">
          <h2 className="text-dark text-5xl">Blog</h2>
          <ul className="text-dark text-4xl mt-10">
            <li
              className={classNames(
                "my-2 pl-10 py-4",
                active === 0 ? "bg-primary rounded-lg" : ""
              )}
              onClick={() => setActive(0)}
            >
              Ultimos
            </li>
            <li
              className={classNames(
                "my-2 pl-10 py-4",
                active === 1 ? "bg-primary rounded-lg" : ""
              )}
              onClick={() => setActive(1)}
            >
              React
            </li>
            <li
              className={classNames(
                "my-2 pl-10 py-4",
                active === 2 ? "bg-primary rounded-lg" : ""
              )}
              onClick={() => setActive(2)}
            >
              Libros
            </li>
            <li
              className={classNames(
                "my-2 pl-10 py-4",
                active === 3 ? "bg-primary rounded-lg" : ""
              )}
              onClick={() => setActive(3)}
            >
              React Native
            </li>
          </ul>
        </div>
        <div className="flex flex-wrap justify-end w-4/5 h-full"></div>
      </div>
    </>
  );
};

export default Blog;
