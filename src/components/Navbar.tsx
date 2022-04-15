import classNames from "classnames";
import { useState } from "react";
import Link from "./Link";
import MenuButton from "./MenuButton";

const Navbar = ({ ...props }) => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div {...props}>
      <div className="flex mt-5">
        <MenuButton
          open={open}
          containerProps={{ className: "mx-5 z-10" }}
          onClick={() => setOpen((prev) => !prev)}
        />
        <h1 className="text-5xl z-10 font-bold text-primary">Rhodlib</h1>
      </div>
      <div
        className={classNames(
          "w-96 transition duration-200 delay-100 h-screen absolute bg-black opacity-90 flex flex-col justify-center px-5 text-4xl text-primary",
          open ? "" : "-translate-x-full"
        )}
      >
        <Link className="my-4">Home</Link>
        <Link className="my-4">Blog</Link>
      </div>
    </div>
  );
};

export default Navbar;
