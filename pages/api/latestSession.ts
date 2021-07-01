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
      const properties = results[0].properties;

      const filteredResult = {
        date: properties.date.date.start,
        topic: properties.topic.rich_text[0].text.content,
        sharer: properties.sharer.rich_text[0].text.content,
      };

      return filteredResult;
    } catch (err) {
      throw new Error(err);
    }
  };

  const cachedLatestSession = await cache.fetch(
    'latestSession-v2',
    fetcher,
    60 * 60 * 24
  );

  res.status(200);
  return res.json({ latestSession: cachedLatestSession });
}
