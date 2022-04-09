import classNames from "classnames";
import { useState } from "react";
import Card from "../components/Card";

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
        <div className="flex flex-wrap justify-end w-4/5 h-full">
          <Card
            title="Articulo 1"
            date="22/3/2022"
            containerProps={{
              className:
                "w-80 h-90 m-10 flex flex-col justify-center items-center bg-slate rounded-lg",
            }}
          />
          <Card
            title="Articulo 2"
            date="22/3/2022"
            containerProps={{
              className:
                "w-80 h-90 m-10   flex flex-col justify-center items-center bg-slate rounded-lg",
            }}
          />
          <Card
            title="Articulo 3"
            date="22/3/2022"
            containerProps={{
              className:
                "w-80 h-90 m-10   flex flex-col justify-center items-center bg-slate rounded-lg",
            }}
          />
          <Card
            title="Articulo 4"
            date="22/3/2022"
            containerProps={{
              className:
                "w-80 h-90 m-10   flex flex-col justify-center items-center bg-slate rounded-lg",
            }}
          />
          <Card
            title="Articulo 5"
            date="22/3/2022"
            containerProps={{
              className:
                "w-80 h-90 m-10  flex flex-col justify-center items-center bg-slate rounded-lg",
            }}
          />
          <Card
            title="Articulo 6"
            date="22/3/2022"
            containerProps={{
              className:
                "w-80 h-90 m-10   flex flex-col justify-center items-center bg-slate rounded-lg",
            }}
          />
        </div>
      </div>
    </>
  );
};

export default Blog;
