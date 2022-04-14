import Link from "./Link";
import classNames from "classnames";
import { useState } from "react";

const Header = ({ ...props }) => {
  const [active, setActive] = useState(0);

  return (
    <div {...props}>
      <h1 className="text-5xl font-bold text-primary">Rhodlib</h1>
      <nav className="flex text-4xl text-primary items-center">
        <Link
          className={classNames(
            "mx-1 py-2 px-4",
            active === 0 ? "bg-primary text-dark rounded-lg" : ""
          )}
          href="#home"
          onClick={() => setActive(0)}
        >
          Inicio
        </Link>
        <Link
          className={classNames(
            "mx-1 py-2 px-4",
            active === 1 ? "bg-primary text-dark rounded-lg" : ""
          )}
          href="#blog"
          onClick={() => setActive(1)}
        >
          Blog
        </Link>
        <Link
          className={classNames(
            "mx-1 py-2 px-4",
            active === 2 ? "bg-primary text-dark rounded-lg" : ""
          )}
          href="#projects"
          onClick={() => setActive(2)}
        >
          Proyectos
        </Link>
        <Link
          className={classNames(
            "mx-1 py-2 px-4",
            active === 3 ? "bg-primary text-dark rounded-lg" : ""
          )}
          href="#contact"
          onClick={() => setActive(3)}
        >
          Contacto
        </Link>
      </nav>
    </div>
  );
};

export default Header;
