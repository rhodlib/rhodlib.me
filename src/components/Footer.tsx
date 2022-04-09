const Footer = ({ ...props }) => {
  return (
    <div {...props}>
      <div className="flex text-blue-400 py-4 justify-center ">
        ®{new Date().getFullYear()} Created by rhodlib
      </div>
    </div>
  );
};

export default Footer;
