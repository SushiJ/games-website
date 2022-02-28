import { Box, Button, Flex, Link, List, ListItem } from "@chakra-ui/react";
import React from "react";

interface PaginationProps {
  gamesPerPage: number;
  totalGames: number;
  paginate(n: number);
}

export const Pagination: React.FC<PaginationProps> = ({
  totalGames,
  gamesPerPage,
  paginate,
}) => {
  const pageNumbers = [];

  for (let i = 0; i <= Math.ceil(totalGames / gamesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <Box as={List} display="flex" justifyContent="center">
      {pageNumbers.map((num) => (
        <ListItem p={2} key={num}>
          <Button as={Link} onClick={() => paginate(num)} href="">
            {num}
          </Button>
        </ListItem>
      ))}
    </Box>
  );
};
