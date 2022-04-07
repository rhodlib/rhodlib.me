import Board from "../components/Board";
import GithubStats from "../components/GithubStats";
import Stack from "../components/Stack";
import Carrousel from "../components/Carrousel";
import SearchBar from "../components/SearchBar";

const RightSection = ({ ...props }) => {
  return (
    <div {...props}>
      <SearchBar />
      <GithubStats />
      <Board />
      <Stack />
      <Carrousel />
    </div>
  );
};

export default RightSection;
