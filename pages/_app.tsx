import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import Head from "next/head";
import { Container } from "@chakra-ui/react";

import Header from "../components/Header";

function AppContainer({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Head>
        <title>Textlinter α</title>
        <meta
          name="description"
          content="textlint test gui application by Next.js"
        />
      </Head>
      <Header />

      <Container maxW="container.lg" p="100px">
        <Component {...pageProps} />
      </Container>
    </ChakraProvider>
  );
}
export default AppContainer;
