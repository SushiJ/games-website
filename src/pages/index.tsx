import { GetStaticProps } from "next";
import { useEffect, useState } from "react";
import GameList from "../components/GameList";
import getInitialProps from "../lib/getInitialProps";

function Home({ games }: { games: Array<{}> }) {
  const [gamesArr, setGamesArr] = useState([]);
  const [page, setPage] = useState(0);

  const ITEMS_PER_PAGE = 20;

  const result = gamesArr.slice(page, ITEMS_PER_PAGE);

  const totalPageNumbers = Math.ceil(games.length / ITEMS_PER_PAGE);

  useEffect(() => {
    setGamesArr(games);
  }, []);

  if (!gamesArr) return <div>Something went wrong</div>;

  // const [page, setPage] = useState(0);
  return (
    <div>
      <GameList games={result} />
      <pre>{totalPageNumbers}</pre>
      {/* <pre>{JSON.stringify(result, null, " ")}</pre> */}
      <footer>{}</footer>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const games = await getInitialProps();
  return {
    props: { games },
  };
};

export default Home;
