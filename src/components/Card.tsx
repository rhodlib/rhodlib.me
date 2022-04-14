import { FC } from "react";

type CardProperties = {
  readonly name: string;
  readonly title: string;
  readonly date: string;
  readonly image: string;
  readonly containerProps?: JSX.IntrinsicElements["div"];
};

const Card: FC<CardProperties> = ({
  name,
  title,
  date,
  containerProps,
  image,
}) => {
  return (
    <div {...containerProps}>
      <img src={image} alt={name} />
      <h3>{title}</h3>
      <small className="">{date}</small>
    </div>
  );
};

export default Card;
