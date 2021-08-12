import React, { ReactElement } from "react";
import { Box, Heading, Tag } from "@chakra-ui/react";

const Header = (): ReactElement => {
  return (
    <header>
      <Box
        w="100%"
        py={4}
        pl={10}
        boxShadow="base"
        pos="fixed"
        bg="blue.400"
        color="white"
      >
        <Heading as="h1" size="xl">
          Textlinter
          <Tag variant="outline" colorScheme="white">
            α
          </Tag>
          <Tag variant="outline" colorScheme="white">
            v 0.1.7
          </Tag>
        </Heading>
      </Box>
    </header>
  );
};

export default Header;
