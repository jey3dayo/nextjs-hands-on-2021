import React from 'react';
import getConfig from 'next/config';

const Example = ({ gourmet ,}) => {
  return (
    <div>
      <h1>gourmet</h1>
      <div>{JSON.stringify(gourmet)}</div>
    </div>
  );
};

const shop = ({ gourmet }) => {
  var shops;
  var yooso = gourmet.split(',');
  for (let i = 0; i < yooso.length; i++) {
    if (yooso.indexOf("name_kana") != 0) {
      shops.push(yooso[i - 1]);
    }
  }
}

// export async function getStaticProps() {
export async function getServerSideProps() {
  // 取得テスト
  const { serverRuntimeConfig } = getConfig();
  const { HOTPEPPER_API_KEY } = serverRuntimeConfig;
  const gourmetUrl = `https://webservice.recruit.co.jp/hotpepper/gourmet/v1/?key=${HOTPEPPER_API_KEY}&middle_area=Y964&format=json`;
  const res = await fetch(gourmetUrl);
  const data = await res.json();

  return {
    props: {
      gourmet: data,
    },
  };
}

export default Example;
