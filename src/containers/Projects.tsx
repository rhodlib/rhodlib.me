import Card from "../components/Card";
import Slider from "react-slick";
import podcast from "../statics/podcast-banner.png";

const Projects = ({ ...props }) => {
  const settings = {
    className: "center",
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    swipeToSlide: true,
    adaptiveHeight: true,
  };

  return (
    <div {...props}>
      <h2 className="text-white text-5xl text-center">Proyectos</h2>
      <Slider {...settings}>
        <Card
          name="podcast"
          title="Proyecto 1"
          date="22/3/2022"
          image={podcast}
        />
      </Slider>
    </div>
  );
};

export default Projects;
