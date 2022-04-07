import Card from "../components/Card";
import book from "../statics/book.png";

const Main = ({ ...props }) => {
  return (
    <div {...props}>
      <div className="flex flex-col">
        <p className="font-bold text-2xl mb-10 dark:text-white">
          Últimos artículos
        </p>
        <Card image={book} title="Articulo 4" date="6/4/2022" />
        <Card image={book} title="Articulo 3" date="2/4/2022" />
        <Card image={book} title="Articulo 2" date="31/3/2022" />
        <Card image={book} title="Articulo 1" date="30/3/2022" />
      </div>
    </div>
  );
};

export default Main;
