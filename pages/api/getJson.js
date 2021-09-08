import getConfig from 'next/config';
import { publicRuntimeConfig } from '/next.config';

const getJson = async (req, res) => {
  const {
    query: { area = '' },
  } = req;
  const { serverRuntimeConfig } = getConfig();
  const { HOTPEPPER_API_KEY } = serverRuntimeConfig;
  const gourmetUrl = `https://webservice.recruit.co.jp/hotpepper/gourmet/v1/?key=${HOTPEPPER_API_KEY}&count=100&small_area=${area}&format=json`;
  const result = await fetch(gourmetUrl);
  const data = await result.json();
  return res.json(data);
};

export default getJson;