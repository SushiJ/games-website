import { Grid } from "@chakra-ui/react";
import { GameCard } from "./GameCard";

export interface Games {
  id: number;
  title: string;
  thumbnail: string;
  short_description: string;
  game_url: string;
  genre: string;
  platform: string;
  publisher: string;
  developer: string;
  release_date: string;
  freetogame_profile_url: string;
}

const GameList = ({ games }): JSX.Element => {
  return (
    <Grid
      my={6}
      templateColumns={[
        "repeat(1, 1fr)",
        "repeat(2, 1fr)",
        "repeat(3, 1fr)",
        "repeat(4, 1fr)",
      ]}
    >
      {games.map((game) => (
        <GameCard key={game.id} {...game} />
      ))}
    </Grid>
  );
};

export default GameList;
