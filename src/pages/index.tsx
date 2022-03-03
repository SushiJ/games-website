import Link from "next/link";
import { useEffect, useState } from "react";
import GameList, { Games } from "../components/GameList";
// import { fetchGames } from "../lib/getGames";

function Home() {
  const [data, setData] = useState<Array<Games>>([]);

  useEffect(() => {
    async function fetchGames() {
      let response = await fetch("/api/games");
      const res = await response.json();
      setData(res.games);
    }
    fetchGames();
  }, []);

  //Get current games
  return (
    <div>
      <div>
        <Link href={{ pathname: "/", query: { page: 1 } }}>
          <a>here</a>
        </Link>
      </div>
      {/* <GameList games={currentGames} />
      {/* <pre>{totalPageNumbers}</pre> */}
      <pre>{JSON.stringify(data, null, " ")}</pre>
    </div>
  );
}
export default Home;
