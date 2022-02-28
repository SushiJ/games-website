import { GetStaticProps } from "next";
import { useEffect, useState } from "react";
import GameList, { Games } from "../components/GameList";
import { Pagination } from "../components/Pagination";
import getInitialProps from "../lib/getInitialProps";

function Home({ games }: { games: Games[] }) {
  const [gamesArr, setGamesArr] = useState<Games[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [gamesPerPage] = useState<number>(20);

  useEffect(() => setGamesArr(games), []);

  //Get current games
  const indexOfLastGame = currentPage * gamesPerPage;
  const indexOfFirstGame = indexOfLastGame - gamesPerPage;
  const currentGames = gamesArr.slice(indexOfFirstGame, indexOfLastGame);

  //Change Page
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  if (!gamesArr) return <div>Something went wrong</div>;
  return (
    <div>
      <GameList games={currentGames} />
      {/* <pre>{totalPageNumbers}</pre> */}
      {/* <pre>{JSON.stringify(result, null, " ")}</pre> */}
      <Pagination
        gamesPerPage={gamesPerPage}
        totalGames={gamesArr.length}
        paginate={paginate}
      />
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
