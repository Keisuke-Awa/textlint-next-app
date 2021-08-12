import { TextLintEngine } from "textlint";
import path from "path";

const options = {
  // configFile: path.resolve("lib/textlint/.textlintrc"),
  rules: ["no-double-negative-ja"],
};

const engine = new TextLintEngine(options);

const proofreadText = async (text: string) => {
  const results = await engine.executeOnText(text);
  return results[0].messages;
};

export { proofreadText };
