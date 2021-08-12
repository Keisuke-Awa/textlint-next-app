import { TextLintEngine } from "textlint";
import path from "path";

const options = {
  configFile: path.resolve("lib/textlint/.textlintrc"),
  rulePaths: [
    path.resolve("node_modules/textlint-rule-no-double-negative-ja"),
    path.resolve("node_modules/textlint-rule-prh"),
  ],
};

const engine = new TextLintEngine(options);

const proofreadText = async (text: string) => {
  console.log(engine);
  const results = await engine.executeOnText(text);
  return results[0].messages;
};

export { proofreadText };
