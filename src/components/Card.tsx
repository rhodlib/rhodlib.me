import { FC } from "react";

type CardProperties = {
  readonly title: string;
  readonly date: string;
  readonly containerProps?: JSX.IntrinsicElements["div"];
};

const Card: FC<CardProperties> = ({ title, date, containerProps }) => {
  return (
    <div {...containerProps}>
      <h3>{title}</h3>
      <small className="">{date}</small>
    </div>
  );
};

export default Card;
