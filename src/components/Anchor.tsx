import { FC } from "react";

const Anchor: FC<JSX.IntrinsicElements["a"]> = ({ children, ...props }) => {
  return (
    <a {...props} rel="noopener noreferrer">
      {children}
    </a>
  );
};

export default Anchor;
