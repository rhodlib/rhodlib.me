import Logo from "../icons/Logo";

const Home = ({ ...props }) => {
  return (
    <div {...props}>
      <ul className="text-primary text-5xl">
        <li className="my-8 text-center">Software developer</li>
        <li className="my-8 text-center">Geek</li>
        <li className="my-8 text-center">Coffee lover</li>
      </ul>
      <div className="w-96 h-96 fill-primary">
        <Logo />
      </div>
    </div>
  );
};

export default Home;
