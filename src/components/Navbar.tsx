import classNames from "classnames";
import { useState } from "react";
import { Link } from "react-router-dom";
import MenuButton from "./MenuButton";

const Navbar = ({ ...props }) => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div {...props}>
      <div className="flex items-center my-3" onBlur={() => setOpen(false)}>
        <MenuButton
          open={open}
          containerProps={{ className: "mx-5 z-20" }}
          onClick={() => setOpen((prev) => !prev)}
        />
        <h1 className="text-3xl z-20 font-bold text-primary">Rhodlib</h1>
      </div>
      <div
        className={classNames(
          "w-96 transition z-10 duration-200 delay-100 h-screen absolute bg-black opacity-90 flex flex-col justify-center px-5 text-4xl text-primary",
          open ? "" : "-translate-x-full"
        )}
      >
        <Link className="my-4" to="/" onClick={() => setOpen(false)}>
          Home
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
