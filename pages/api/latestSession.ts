import { NextApiRequest, NextApiResponse } from 'next';

import { notionClient, RequestParameters } from '@/notion';
import cache from '@/cache/cache';

const NOTION_DB_ID_LATEST = process.env.NOTION_DB_ID_LATEST;

export default async function latestSession(
  _req: NextApiRequest,
  res: NextApiResponse
) {
  const payload: RequestParameters = {
    path: `databases/${NOTION_DB_ID_LATEST}/query`,
    method: 'post',
  };

  const fetcher = async () => {
    try {
      const { results } = await notionClient.request(payload);
      return results[0].properties;
    } catch (err) {
      throw new Error(err);
    }
  };

  const cachedLatestSession = await cache.fetch(
    'latestSession',
    fetcher,
    60 * 60
  );

  res.status(200);
  return res.json({ latestSession: cachedLatestSession });
}
