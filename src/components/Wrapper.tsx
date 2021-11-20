import { Box } from "@chakra-ui/react";

const Wrapper = ({ children }) => {
  return (
    <Box p={2} mx="auto" maxW="1440px">
      {children}
    </Box>
  );
};

export default Wrapper;
