import Board from "../components/Board";
import GithubStats from "../components/GithubStats";
import Stack from "../components/Stack";
import Carrousel from "../components/Carrousel";

const RightSection = ({ ...props }) => {
  return (
    <div {...props}>
      <Carrousel />
      <GithubStats />
      <Board />
      <Stack />
    </div>
  );
};

export default RightSection;
