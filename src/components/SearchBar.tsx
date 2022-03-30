import search from "../icons/search.svg";
const SearchBar = () => {
  return (
    <div className="relative">
      <input
        type="text"
        className="h-14 w-96 pr-8 pl-5 rounded z-0 focus:shadow focus:outline-none"
        placeholder="Buscar entrada de blog..."
      />
      <img
        src={search}
        alt="search"
        className="absolute top-4 right-3 text-gray-400"
      />
    </div>
  );
};

export default SearchBar;
