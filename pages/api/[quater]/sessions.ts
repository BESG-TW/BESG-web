import { NextApiRequest, NextApiResponse } from 'next';

import { notionClient, RequestParameters } from '@/notion';
import cache from '@/cache/cache';
import { QUATER, DEFAULT_TEXT_HOLDER } from '@/constants';

export const mapQueryParamsToQuaterString = (query: QUATER) =>
  ({
    [QUATER.ONE]: process.env.NOTION_DB_ID_Q1,
    [QUATER.TWO]: process.env.NOTION_DB_ID_Q2,
    [QUATER.THREE]: process.env.NOTION_DB_ID_Q3,
  }[query]);

export default async function latestSession(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const quater = req.query.quater as QUATER;
  const notionDBId = mapQueryParamsToQuaterString(quater);

  if (!notionDBId) return res.json(null);

  const payload: RequestParameters = {
    path: `databases/${notionDBId}/query`,
    method: 'post',
  };

  const fetcher = async () => {
    try {
      const { results } = await notionClient.request(payload);

      const mappedResult = results.map((result: any) => {
        return {
          topic: result.properties.topic.rich_text[0].text.content,
          date: result.properties.date.date.start,
          sharer: result.properties.sharer.rich_text[0].text.content,
          slides: result.properties.slides?.url ?? DEFAULT_TEXT_HOLDER,
          code: result.properties.code?.url ?? DEFAULT_TEXT_HOLDER,
        };
      });

      return mappedResult;
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
