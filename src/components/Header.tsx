import DevIcon from "../icons/DevIcon";
import GithubIcon from "../icons/GithubIcon";
import LinkedinIcon from "../icons/LinkedinIcon";
import TwitterIcon from "../icons/TwitterIcon";

const Header = ({ ...props }) => {
  return (
    <div {...props}>
      <div className="flex bg-white my-4 w-3/5 transition ease-in-out delay-150 justify-between border-b-2 pb-4 border-cyan-400 grayscale hover:grayscale-0 duration-300 fixed">
        <h1 className="text-2xl self-center font-bold">Rhodlib</h1>
        <div className="flex self-center">
          <DevIcon className="block h-8 w-8 mx-2  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:fill-gray-400 duration-300" />
          <GithubIcon className="block h-8 w-8 mx-2  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:fill-purple-400 duration-300" />
          <LinkedinIcon className="block h-8 w-8 mx-2  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:fill-blue-400 duration-300" />
          <TwitterIcon className="block h-8 w-8 mx-2  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:fill-cyan-400 duration-300" />
        </div>
      </div>
    </div>
  );
};

export default Header;
