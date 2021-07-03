import { NextApiRequest, NextApiResponse } from 'next';

import { notionClient, RequestParameters } from '@/notion';
import cache from '@/cache/cache';
import { SEASON, DEFAULT_TEXT_HOLDER } from '@/constants';
import { INotionResponse } from '@/interface/api';

export const mapQueryParamsToQuaterString = (query: SEASON) =>
  ({
    [SEASON.ONE]: process.env.NOTION_DB_ID_S1,
    [SEASON.TWO]: process.env.NOTION_DB_ID_S2,
    [SEASON.THREE]: process.env.NOTION_DB_ID_S3,
  }[query]);

export default async function latestSession(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const season = req.query.season as SEASON;
  const notionDBId = mapQueryParamsToQuaterString(season);

  if (!notionDBId) return res.status(404).json({});

  const payload: RequestParameters = {
    path: `databases/${notionDBId}/query`,
    method: 'post',
  };

  const fetcher = async () => {
    try {
      const { results } = await notionClient.request<INotionResponse>(payload);

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

  const cachedSeasonSession = await cache.fetch(
    `season-${season}`,
    fetcher,
    60 * 60 * 24
  );

  res.setHeader('Cache-Control', 's-maxage=60, stale-while-revalidate');
  res.status(200);
  return res.json({ results: cachedSeasonSession });
}
