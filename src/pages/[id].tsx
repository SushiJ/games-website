import { Stack, AspectRatio, Img, Box } from "@chakra-ui/react";
import { GetStaticPaths, GetStaticProps } from "next";
import { Game } from "../types";

function details(game: Game): JSX.Element {
  return (
    <Stack>
      <Box h={40}>
        <Img src={game.thumbnail} borderRadius="10" objectFit="contain" />
      </Box>
    </Stack>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch(`https://www.freetogame.com/api/games`);
  const games = await res.json();

  const paths = games.map((game) => ({
    params: { id: game.id.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = params.id;

  const res = await fetch(`https://www.freetogame.com/api/game/?id=${id}`);
  const game = await res.json();
  return {
    props: game,
  };
};

export default details;
