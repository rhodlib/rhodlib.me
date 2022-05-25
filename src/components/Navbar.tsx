import classNames from "classnames";
import { useState } from "react";
import { Link } from "react-router-dom";
import MenuButton from "./MenuButton";
import HomeIcon from "../icons/HomeIcon";
import BlogIcon from "../icons/BlogIcon";

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
        <Link to="/" className="text-3xl z-20 font-bold text-primary">Rhodlib</Link>
      </div>
      <div
        className={classNames(
          "w-80 transition z-10 duration-200 delay-100 h-screen bg-dark absolute flex flex-col pt-32 px-5 text-4xl text-primary",
          open ? "" : "-translate-x-full"
        )}
      >
        <Link className="my-4 flex fill-primary items-center" to="/" onClick={() => setOpen(false)}>
          <HomeIcon width={24} height={24} /><span className="ml-2">Home</span>
        </Link>
        <Link className="my-4 flex fill-primary items-center" to="/blog" onClick={() => setOpen(false)}>
          <BlogIcon width={24} height={24} /><span className="ml-2">Blog</span>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
