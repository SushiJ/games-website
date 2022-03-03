import { NextApiRequest, NextApiResponse } from "next";

import getGames from "../../lib/getGames";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { page } = req.query as any;

  const data = await getGames(parseInt(page));

  console.log(data);
  res.json(data);
}
