import Card from "./Card";

const Main = ({ ...props }) => {
  return (
    <div {...props}>
      <div className="flex flex-col justify-center mt-4 w-3/5">
        <h2>Ultimos posteos</h2>
        <Card />
      </div>
    </div>
  );
};

export default Main;
