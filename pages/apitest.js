import React from 'react';
import getConfig from 'next/config';

const Example = ({ gourmet }) => {
  return (
    <div>
      <h1>gourmet</h1>
      <div>{JSON.stringify(gourmet)}</div>
    </div>
  );
};

// export async function getStaticProps() {
export async function getServerSideProps() {
  // 取得テスト
  const { serverRuntimeConfig } = getConfig();
  const { HOTPEPPER_API_KEY } = serverRuntimeConfig;
  const gourmetUrl = `https://webservice.recruit.co.jp/hotpepper/gourmet/v1/?key=${HOTPEPPER_API_KEY}&large_area=Z011&format=json`;
  const res = await fetch(gourmetUrl);
  const data = await res.json();

  return {
    props: {
      gourmet: data,
    },
  };
}

export default Example;
