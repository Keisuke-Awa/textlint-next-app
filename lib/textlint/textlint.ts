import { TextLintEngine } from "textlint";
import path from "path";

const proofreadText = async (text: string) => {
  const options = {
    configFile: path.resolve("lib/textlint/.textlintrc"),
    rulesBaseDirectory: path.resolve("node_modules"),
  };

  const engine = new TextLintEngine(options);
  const results = await engine.executeOnText(text);
  return results[0].messages;
};

export { proofreadText };
