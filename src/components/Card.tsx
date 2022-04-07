interface CardInterface {
  image: string;
  title: string;
  date: string;
}

const Card = ({ image, title, date }: CardInterface) => {
  return (
    <div className="flex w-4/5 p-2 mb-4 transition dark:text-white ease-in-out delay-100 dark:grayscale-0 rounded-tl-3xl rounded-br-3xl hover:border-cyan-400 hover:shadow-cyan-400 hover:shadow-lg grayscale hover:grayscale-0 duration-300">
      <img src={image} alt="book" />
      <div className="flex flex-col ml-3 self-center">
        <h3>{title}</h3>
        <small className="text-gray-500">{date}</small>
      </div>
    </div>
  );
};

export default Card;
