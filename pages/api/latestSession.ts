import { NextApiRequest, NextApiResponse } from 'next';

import { notionClient, RequestParameters } from '@/notion';

const NOTION_DB_ID = process.env.NOTION_DB_ID;

export default async function latestSession(
  _req: NextApiRequest,
  res: NextApiResponse
) {
  const payload: RequestParameters = {
    path: `databases/${NOTION_DB_ID}/query`,
    method: 'post',
  };
  const { results } = await notionClient.request(payload);

  res.status(200);
  return res.json({ latestSession: results[0].properties });
}
