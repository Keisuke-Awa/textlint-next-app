import React, { ReactElement, useState } from "react";
import { Button, Center } from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";
import axios from "axios";

type Props = {
  targetText: string;
  setResultData: any;
};
const ProofreadBtn = ({ targetText, setResultData }: Props): ReactElement => {
  const [isLoading, setIsLoading] = useState(false);

  function checkText(text: string) {
    setIsLoading(true);
    axios
      .post(`${process.env.API_ENDPOINT}/api/textlint`, { text: text })
      .then(
        (response: any) => {
          console.log(response.data.results);
          setResultData({ messages: response.data.results });
        },
        (error) => {
          console.log(error.data);
          console.log(error.data.message);
        }
      )
      .finally(() => {
        setIsLoading(false);
      });
  }

  return (
    <Center h="120px">
      <Button
        rightIcon={<Search2Icon />}
        colorScheme="blue"
        size="md"
        height="60px"
        width="100%"
        isLoading={isLoading}
        isDisabled={!targetText}
        loadingText="文章をチェック中"
        onClick={() => checkText(targetText)}
      >
        文章をチェックする
      </Button>
    </Center>
  );
};

export default ProofreadBtn;
