import getConfig from 'next/config';

export default async (_, res) => {
  const { serverRuntimeConfig } = getConfig();
  const { HOTPEPPER_API_KEY } = serverRuntimeConfig;
  const gourmetUrl = `https://webservice.recruit.co.jp/hotpepper/gourmet/v1/?key=${HOTPEPPER_API_KEY}&large_area=Z011&format=json`;
  const result = await fetch(gourmetUrl);
  const data = await result.json();
  return res.json(data);
}
