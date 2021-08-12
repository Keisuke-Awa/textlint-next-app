import { NextApiRequest, NextApiResponse } from "next";
import { proofreadText } from "../../lib/textlint/textlint";

const handler = (req: NextApiRequest, res: NextApiResponse): void => {
  if (req.method === "POST") {
    const requestText = req.body.text;
    proofreadText(requestText).then(
      (results) => {
        res.status(200).json({ results });
      },
      (error) => {
        res.status(500).json({ statusCode: 500, message: error.message });
      }
    );
  } else {
    res.status(404).json({ statusCode: 404, message: "not found" });
  }
};

export default handler;
