import { FC } from "react";

const Link: FC<JSX.IntrinsicElements["a"]> = ({ children, ...props }) => {
  return (
    <a {...props} rel="noopener noreferrer" target="_blank">
      {children}
    </a>
  );
};

export default Link;
