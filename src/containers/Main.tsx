import Card from "../components/Card";

const Main = ({ ...props }) => {
  return (
    <div {...props}>
      <div className="flex flex-col">
        <p className="font-bold text-2xl mb-10">Últimos artículos</p>
        <Card />
      </div>
    </div>
  );
};

export default Main;
