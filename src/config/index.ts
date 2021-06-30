const isDev = process.env.NODE_ENV !== 'production';

export const serverDomain = isDev
  ? 'http://localhost:3000'
  : 'https://besg-official.vercel.app/';
