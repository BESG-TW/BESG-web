import { NextApiRequest, NextApiResponse } from 'next';

import { notionClient, RequestParameters } from '@/notion';
import cache from '@/cache/cache';

const NOTION_DB_MAP: Record<string, string> = {
  q1: process.env.NOTION_DB_ID_Q1,
  q2: process.env.NOTION_DB_ID_Q2,
  q3: process.env.NOTION_DB_ID_Q3,
};

export default async function latestSession(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const quater = req.query.quater as string;
  const notionDBId = NOTION_DB_MAP[quater];

  if (!notionDBId) throw new Error('Invalid quarter query parameters');

  const payload: RequestParameters = {
    path: `databases/${notionDBId}/query`,
    method: 'post',
  };

  const fetcher = async () => {
    try {
      const { results } = await notionClient.request(payload);
      return results;
    } catch (err) {
      throw new Error(err);
    }
  };

  const cachedQuaterSession = await cache.fetch(
    `quater-${quater}`,
    fetcher,
    60 * 60 * 24
  );

  res.status(200);
  return res.json({ results: cachedQuaterSession });
}
