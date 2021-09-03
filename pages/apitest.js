import React from 'react';
import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();
const { HOTPEPPER_API_KEY } = publicRuntimeConfig;
const gourmetUrl = `https://webservice.recruit.co.jp/hotpepper/gourmet/v1/?key=${HOTPEPPER_API_KEY}&large_area=Z011&format=json`;

const Example = ({ gourmet }) => {
  return <div>data: {JSON.stringify(gourmet)}</div>;
};

export async function getStaticProps() {
  // 取得テスト
  const res = await fetch(gourmetUrl);
  const data = await res.json();

  return {
    props: {
      gourmet: data,
    },
  };
}

export default Example;
