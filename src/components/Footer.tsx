const Footer = ({ ...props }) => {
  return (
    <div {...props}>
      <span className="flex text-3xl text-primary py-4">
        Created by rhodlib ®{new Date().getFullYear()}
      </span>
      <nav>
        <ul className="flex justify-center items-center text-primary text-2xl">
          <li className="mx-5 hover:border-b-2">Github</li>
          <li className="mx-5 hover:border-b-2">Twitter</li>
          <li className="mx-5 hover:border-b-2">Dev.to</li>
          <li className="mx-5 hover:border-b-2">Linkedin</li>
        </ul>
      </nav>
    </div>
  );
};

export default Footer;
