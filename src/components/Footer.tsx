import Link from "./Link";

const Footer = ({ ...props }) => {
  return (
    <div {...props}>
      <span className="flex text-3xl text-primary py-4">
        Created by rhodlib ®{new Date().getFullYear()}
      </span>
      <nav>
        <ul className="flex justify-center items-center text-primary text-2xl">
          <li className="mx-5 hover:border-b-2">
            <Link href="https://github.com/rhodlib" target="_blank">
              Github
            </Link>
          </li>
          <li className="mx-5 hover:border-b-2">
            <Link href="https://twitter.com/rhodlib" target="_blank">
              Twitter
            </Link>
          </li>
          <li className="mx-5 hover:border-b-2">
            <Link href="https://dev.to/rhodlib" target="_blank">
              Dev.to
            </Link>
          </li>
          <li className="mx-5 hover:border-b-2">
            <Link href="https://www.linkedin.com/in/rhodlib/" target="_blank">
              Linkedin
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Footer;
