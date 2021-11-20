import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "../components/Navbar/Nav";

import { AppProps } from "next/app";
import Wrapper from "../components/Wrapper";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Wrapper>
        <Navbar />
        <Component {...pageProps} />
      </Wrapper>
    </ChakraProvider>
  );
}

export default MyApp;
