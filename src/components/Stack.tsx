import CssIcon from "../icons/CssIcon";
import ExpressIcon from "../icons/ExpressIcon";
import HtmlIcon from "../icons/HtmlIcon";
import JavascriptIcon from "../icons/JavascriptIcon";
import MongodbIcon from "../icons/MongodbIcon";
import NextIcon from "../icons/NextIcon";
import NodeIcon from "../icons/NodeIcon";
import ReactIcon from "../icons/ReactIcon";
import ReduxIcon from "../icons/ReduxIcon";
import TailwindIcon from "../icons/TailwindIcon";
import ThreeIcon from "../icons/ThreeIcon";
import TypescriptIcon from "../icons/TypescriptIcon";

const Stack = () => {
  return (
    <div className="max-w-sm rounded px-6 py-4 mt-10 transition ease-in-out delay-150 hover:shadow-lg duration-300 hover:shadow-emerald-400 grayscale hover:grayscale-0">
      <p className="text-xl font-bold text-center">Tecnologías</p>
      <div className="flex justify-between mt-4">
        <ReactIcon className="block h-10 w-10 fill-cyan-400" />
        <ReduxIcon className="block h-10 w-10 fill-violet-400" />
        <TailwindIcon className="block h-10 w-10 fill-cyan-400" />
        <TypescriptIcon className="block h-10 w-10 fill-sky-400" />
      </div>
      <div className="flex justify-between mt-4">
        <ThreeIcon className="block h-10 w-10" />
        <NextIcon className="block h-10 w-10 fill-slate-500" />
        <HtmlIcon className="block h-10 w-10 fill-orange-400" />
        <CssIcon className="block h-10 w-10 fill-blue-500" />
      </div>
      <div className="flex justify-between mt-4">
        <JavascriptIcon className="block h-10 w-10 fill-yellow-400" />
        <NodeIcon className="block h-10 w-10 fill-green-500" />
        <ExpressIcon className="block h-10 w-10 fill-purple-400" />
        <MongodbIcon className="block h-10 w-10 fill-emerald-400" />
      </div>
    </div>
  );
};

export default Stack;
