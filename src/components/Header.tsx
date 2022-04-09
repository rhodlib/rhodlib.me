import DevIcon from "../icons/DevIcon";
import GithubIcon from "../icons/GithubIcon";
import LinkedinIcon from "../icons/LinkedinIcon";
import TwitterIcon from "../icons/TwitterIcon";
import Link from "./Link";

const Header = ({ ...props }) => {
  return (
    <div {...props}>
      <div className="flex z-10 py-4 justify-around fixed w-full">
        <h1 className="text-2xl text-blue-400 self-center font-bold">
          Rhodlib
        </h1>
        <div className="flex self-center">
          <Link href="https://dev.to/rhodlib">
            <DevIcon className="block h-8 w-8 mx-2 fill-blue-400 transition ease-in-out delay-150 hover:fill-gray-400 duration-300" />
          </Link>
          <Link href="https://github.com/rhodlib">
            <GithubIcon className="block h-8 w-8 mx-2 fill-blue-400 transition ease-in-out delay-150 hover:fill-purple-400 duration-300" />
          </Link>
          <Link href="https://www.linkedin.com/in/rhodlib/">
            <LinkedinIcon className="block h-8 w-8 mx-2 fill-blue-400 transition ease-in-out delay-150 hover:fill-blue-400 duration-300" />
          </Link>
          <Link href="https://twitter.com/rhodlib">
            <TwitterIcon className="block h-8 w-8 mx-2 fill-blue-400 transition ease-in-out delay-150 hover:fill-cyan-400 duration-300" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
