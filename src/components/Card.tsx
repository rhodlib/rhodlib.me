import book from "../statics/book.png";
const Card = () => {
  return (
    <div className="flex w-4/5 p-2 transition ease-in-out delay-150 border-2 rounded-tl-3xl rounded-br-3xl shadow-lg hover:border-cyan-200 grayscale hover:grayscale-0 duration-300">
      <img src={book} alt="book" />
      <div className="flex flex-col ml-3 self-center">
        <h3>The Bullet journal method</h3>
        <small className="text-gray-500">30-4-2022</small>
      </div>
    </div>
  );
};

export default Card;
