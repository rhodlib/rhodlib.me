import SearchBar from "./SearchBar";

const Main = ({ ...props }) => {
  return (
    <div {...props}>
      <div className="flex justify-center">
        <SearchBar />
      </div>
    </div>
  );
};

export default Main;
