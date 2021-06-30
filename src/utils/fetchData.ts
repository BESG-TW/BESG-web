import { serverDomain } from '@/config';

export const fetchLatestSession = async () => {
  const latestSesstion = await fetch(`${serverDomain}/api/latestSession`);
  const parsedData = await latestSesstion.json();
  return parsedData;
};
