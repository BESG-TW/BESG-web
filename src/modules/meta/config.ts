import * as T from './types';
import { NextRouter } from 'next/router';

export const origin = 'https://BESG-web.vercel.app';

export const siteMetaGenerator = (_ctx: unknown, router: NextRouter): T.IMeta => ({
  title: 'BESG Official',
  description: 'BESG - Web 技術線上分享會',
  ogType: T.MetaOgType.website,
  canonicalPath: router.asPath,
});
