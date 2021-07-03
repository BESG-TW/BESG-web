import { NextApiRequest, NextApiResponse } from 'next';

import { notionClient, RequestParameters } from '@/notion';
import cache from '@/cache/cache';
import { INotionResponse } from '@/interface/api';

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
      const { results } = await notionClient.request<INotionResponse>(payload);
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
    'latestSession',
    fetcher,
    60 * 60 * 24
  );

  res.setHeader('Cache-Control', 's-maxage=60, stale-while-revalidate');
  res.status(200);
  return res.json({ latestSession: cachedLatestSession });
}
