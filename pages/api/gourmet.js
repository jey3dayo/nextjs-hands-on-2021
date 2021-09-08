import getConfig from 'next/config';

const gourmet = async (req, res) => {
  const {
    query: { po = '' },
  } = req;

  const { serverRuntimeConfig } = getConfig();
  const { HOTPEPPER_API_KEY } = serverRuntimeConfig;
  const gourmetUrl = `https://webservice.recruit.co.jp/hotpepper/gourmet/v1/?key=${HOTPEPPER_API_KEY}&small_area=${po}&format=json`;
  const result = await fetch(gourmetUrl);
  const data = await result.json();
  return res.json(data);
};

export default gourmet;