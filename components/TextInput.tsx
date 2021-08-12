import React, { ReactElement } from "react";
import { Textarea } from "@chakra-ui/react";

type Props = {
  setTargetText: any;
  targetText?: string;
};

const TextInput = ({ setTargetText, targetText }: Props): ReactElement => {
  const changeTargetText = (e: any) => setTargetText(e.target.value);

  return (
    <Textarea
      value={targetText}
      onChange={changeTargetText}
      placeholder="校正対象のテキストを入力してください"
      rows={20}
    />
  );
};

export default TextInput;
