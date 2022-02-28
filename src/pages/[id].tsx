import { Stack, Img, Box } from "@chakra-ui/react";
import { GetStaticPaths, GetStaticProps } from "next";
import getInitialProps from "../lib/getInitialProps";
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
  const games = await getInitialProps();

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
