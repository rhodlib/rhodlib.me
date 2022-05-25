import Logo from "../icons/Logo";

const Home = ({ ...props }) => {
  return (
    <div {...props}>
      <ul className="text-primary text-3xl lg:text-5xl">
        <li className="my-3 text-center">Web developer</li>
        <li className="my-3 text-center">Geek</li>
        <li className="my-3 text-center">Coffee lover</li>
      </ul>
      <div className="w-60 h-64 lg:w-96 lg:h-96 mt-10 md:mt-0 fill-primary">
        <Logo />
      </div>
    </div>
  );
};

export default Home;
