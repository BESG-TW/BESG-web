import { Client } from '@notionhq/client';

type QueryParams = string | Record<string, string | number | boolean>;

type Method = 'get' | 'post' | 'patch';

export interface RequestParameters {
  path: string;
  method: Method;
  query?: QueryParams;
  body?: Record<string, unknown>;
  auth?: string;
}
// Init Client
export const notionClient = new Client({
  auth: process.env.NOTION_TOKEN,
});
