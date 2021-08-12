import React, { ReactElement, useState } from "react";

import TextInput from "../components/TextInput";
import TextlintResultDisplay from "../components/TextlintResultDisplay";
import ProofreadBtn from "../components/ProofreadBtn";

const Home = (): ReactElement => {
  const [targetText, setTargetText] = useState("");
  const [textlintResult, setResultData] = useState({ messages: [] });

  return (
    <main>
      <TextInput setTargetText={setTargetText} />
      <ProofreadBtn targetText={targetText} setResultData={setResultData} />
      <TextlintResultDisplay messages={textlintResult.messages} />
    </main>
  );
};

export default Home;
