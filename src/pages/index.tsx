import { GetStaticProps } from "next";
import GameList from "../components/GameList";

const Index = ({ games }): JSX.Element => (
  <div>
    <GameList games={games} />
  </div>
);

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(`https://www.freetogame.com/api/games`);
  const games = await res.json();
  return {
    props: { games },
  };
};

export default Index;
