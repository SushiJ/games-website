// import { SunIcon } from "@chakra-ui/icons";
import { Heading, HStack, IconButton, useColorMode } from "@chakra-ui/react";

import { MoonIcon, SunIcon } from "@heroicons/react/solid";

const Nav = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack my={4} justifyContent="space-between">
      <Heading as="h1">Logo</Heading>
      <IconButton
        p={1}
        onClick={() => toggleColorMode()}
        aria-label=""
        icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
      />
    </HStack>
  );
};

export default Nav;
