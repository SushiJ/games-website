import { Box, Image } from "@chakra-ui/react";
import React from "react";
import Link from "next/link";
import { Games } from "./GameList";

export const GameCard: React.FC<Games> = (game) => {
  return (
    <Box m={2} borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Link href={`/${game.id}`}>
        <Image src={game.thumbnail} alt={game.title} />
      </Link>
    </Box>
  );
};
