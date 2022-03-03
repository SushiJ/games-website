// import axios from "axios";
import { Games } from "../components/GameList";

export async function fetchGames() {
  const response = await fetch("https://www.freetogame.com/api/games");

  const data: Array<Games> = await response.json();

  return data;
}

async function getGames(n: number) {
  const data: Array<Games> = await fetchGames();
  const GAMES_PER_PAGE = 20;

  const totalPages = data.length / GAMES_PER_PAGE;

  if (n === 0) {
    const games = data.slice(n, GAMES_PER_PAGE);
    return {
      games,
      totalPages,
    };
  }

  const games = data.slice(
    n * GAMES_PER_PAGE,
    n * GAMES_PER_PAGE + GAMES_PER_PAGE
  );

  return {
    games,
    totalPages,
  };
}
export default getGames;
