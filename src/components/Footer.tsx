import Link from "./Link";

const links = [
  {
    label: "Github",
    value: "https://github.com/rhodlib",
  },
  {
    label: "Twitter",
    value: "https://twitter.com/rhodlib",
  },
  {
    label: "Dev.to",
    value: "https://dev.to/rhodlib",
  },
  {
    label: "Linkedin",
    value: "https://www.linkedin.com/in/rhodlib/",
  },
];

const Footer = ({ ...props }) => {
  return (
    <div {...props}>
      <nav>
        <ul className="flex justify-center items-center text-primary text-xl lg:text-3xl">
          {links.map((obj, i) => (
            <li
              key={`footer-link-${i}`}
              className="mx-2 border-b-2 border-b-dark hover:border-b-2 hover:border-b-primary"
            >
              <Link href={obj.value} target="_blank">
                {obj.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <span className="flex justify-center text-1xl lg:text-2xl text-primary mt-5 md:mt-0">
        Created by rhodlib ®{new Date().getFullYear()}
      </span>
    </div>
  );
};

export default Footer;
