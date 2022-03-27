import logo from "../logo.svg";

const Header = ({ ...props }) => {
  return (
    <div {...props}>
      <div className="flex items-center justify-center">
        <img src={logo} alt="logo" className="block h-16 w-16" />
        <h1 className="text-2xl">Rhodlib</h1>
      </div>
    </div>
  );
};

export default Header;
