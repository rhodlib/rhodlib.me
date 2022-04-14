import Slider from "react-slick";
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

const Techs = ({ ...props }) => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 8,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 3000,
    cssEase: "linear",
  };

  return (
    <div {...props}>
      <div className="w-full my-8">
        <Slider {...settings}>
          <CssIcon className="w-32 h-32 mx-4 fill-blue-600" />
          <ExpressIcon className="w-32 h-32 mx-4 fill-indigo-400" />
          <HtmlIcon className="w-32 h-32 mx-4 fill-orange-400" />
          <JavascriptIcon className="w-32 h-32 mx-4 fill-yellow-400" />
          <MongodbIcon className="w-32 h-32 mx-4 fill-green-400" />
          <NextIcon className="w-32 h-32 mx-4 fill-indigo-600" />
          <ReactIcon className="w-32 h-32 mx-4 fill-sky-400" />
          <NodeIcon className="w-32 h-32 mx-4 fill-green-500" />
          <TailwindIcon className="w-32 h-32 mx-4 fill-cyan-400" />
          <ThreeIcon className="w-32 h-32 mx-4" />
          <TypescriptIcon className="w-32 h-32 mx-4 fill-blue-500" />
          <ReduxIcon className="w-32 h-32 mx-4 fill-violet-600" />
        </Slider>
      </div>
    </div>
  );
};

export default Techs;
