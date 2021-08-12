import React, { ReactElement } from "react";
import { Box } from "@chakra-ui/react";
import { TextlintResultMessage } from "../interfaces";

type Props = {
  messages: TextlintResultMessage[];
};

const TextlintResultDisplay = ({ messages }: Props): ReactElement => {
  if (messages?.length == 0) {
    return <Box>no results</Box>;
  } else {
    return (
      <Box>
        {messages?.map((item, index) => (
          <li key={index}>{item.message}</li>
        ))}
      </Box>
    );
  }
};

export default TextlintResultDisplay;
